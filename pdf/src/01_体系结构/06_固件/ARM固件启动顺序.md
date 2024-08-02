### ARM固件启动顺序

#### 小core { .unnumbered .unlisted }

1. 硬件上电流程完成后，BMC释放系统内所有C2000 CHIP的POR_N，pervsoc开始做复位启动流程；

1. 在otprom valid且硬件逻辑做完SCP SRAM的BISR流程后，PVO(SCP)自动从ROM （otprom内容）开始取指执行；

1. 各SCP初始化各自的SRAM；

1. SCP ROM FW 对GPIO初始化，读取CHIP ID,根据CHIP ID确定自己是否是主CHIP;

1. 根据是主还是从，初始化I2C/FSI（具体用哪个待定）为对应模式；

1. 主CHIP的SCP还需要初始化QSPI;

1. 主CHIP的SCP发起与其他CHIP的握手信号，检测系统中哪些CHIP在位；

1. 主CHIP的SCP与在位的从CHIP SCP建立数据通路；

1. 主CHIP的SCP从QSPI校验并搬运SCP RAM FW至主CHIP的SRAM;

1. 主CHIP的SCP透过步骤8已打通的数据通路，将SCP RAM FW和签名数据包传递给从SCP,从SCP将其放至对应的SRAM:

1. 各CHIP的SCP跳至对应的SRAM,运行SCP RAM FW:

1. 主CHIP的SCP读取QSPI有关C2C的配置，并根据需要分发给对应的SCP；

1. 主CHIP的SCP与从CHIP的SCP配合，根据C2C配置，初始化C2C;

1. 各SCP根据 CHIP ID初始化CMN、OCM(SLC)和SAM;

1. 各CHIP的SCP校验、加载MCP RAM FW,启动MCP(待确认)；+

1. 各SCP初始化对应CHIP内大核的L2、NCU、SCOM/FIR;+

1. 主CHIP的SCP校验并搬运 Hostboot base 镜像至主CHIP的OCM(SLC);+

1. 主CHIP的SCP启动主CHIP内的第一个可用大核的第一个线程；

1. 主大核第一个线程开始从srest（0x100）取指执行。

#### 大core-hostboot { .unnumbered .unlisted }

1. 设置kernel other thread spinlock,此时只允许第一个thread往前走；

1. 设置hostboot kernel堆栈，从汇编跳转至C/C++入口main函数；+

1. 调用hostboot kernel模块内的静态构造函数；

1. 初始化MMU(SLB/TLB),此时DIMM未准备好，只能用OCM(SLC,一个芯片多有28 核* 2MB=56MB，多能启用3/4）；

1. 初始化时间管理的TB频率和CPU对象；

1. 写Scratch寄存器，通知FSP/BMC;

1. 为主CPU创建init main任务；

1. 设置 kernel other thread spinlock为1，允许其它 thread往前走；

1. hostboot 进入task 调度，所有task 运行在user 模式，而kernel 服务运行在 hypersior 模式；

1. init main任务初始化VFS;

1. VFS遍历base modules，设置对应的模块的代码段和数据段属性，并调用对应模块

的init函数；

12. 创建initservice任务；

12. initservice 按g_taskinfolist列表调用列表中的模块的初始化入口函数；

12. secureboot_base/ipmibase/pnor/vfs/extinitsvc等基本模块初始化；

12. 动态验证并从hostboot extended image中加载其他模块；

12. extinitsvc 模块按g_exttaskinfolist 列表加载并初始化其他模块；

12. 后一个模块是istepdisp，到此，必要的hostboot 模块完成初始化；

12. 按istep执行启动流程（详细流程参见后面hostboot章节）；

12. istep 21.03加载、验证、解压payload(skiboot,OPAL);+

12. 跳至payload(skiboot,OPAL)。

#### 大core-skiboot { .unnumbered .unlisted }

1. 从大端转换成小端（C2000计划skiboot用小端编译）：

1. 主thread 判断 skiboot 被加载的位置并根据需要做 relocate操作，其他thread则 等待；

1. 主thread 设置 boot flag=1,允许其他 thread 往前走；

1. 主 thread 跳至 main cpu entry,其他 thread 则跳至 secondary cpu entry;

1. 初始化uart(console);

1. 初始化skiboot启动阶段用的中断/异常向量表；

1. 调用skiboot相关库的构造函数；

1. 初始化opal call table;

1. 处理 hostboot 传过来的 device tree 或HDAT;

1. 根据DT初始化SCOM/eSPI(LPC):

1. 根据DT初始化内存可用和保留区域（C2000的DIMM初始化应在其前面）；

1. 根据DT初始化homer（C2000待确认是否需要）；

13.根据DT初始化所有可用CPU(thread);

14.将opal信息加到DT;

15.检测运行平台，并根据平台作配置：

16.根据平台配置，初始化BMC相关的ipmi/BT/UART;

17.初始化中断控制器（GIC）；

18.让所有可用CPU（thread）进入可用状态；

19.设置sreset，以实现CPU核的电源管理；

20.初始化TOD，同步TOD时钟；

21.初始化sensor 相关的OPAL接口；

22.调用平台初始化接口；

23.NV初始化；

24.安全启动（jiayu）初始化；

25.可信启动（TPM）初始化；

26.初始化opal console(UART)接口；

27. PCIE HB初始化和PCIE枚举； (RC初始化，CXL与PCIe枚举，device tree 资源汇报等)

28.PCIE SLOT初始化；

29.回收未使用内存；

30.更新保留内存区域；

31.加载、验证、解压zImage(boot loader内核和petitboot);

32.启动boot loader内核。

![image-20240704111929075](book/pdf/src/01_体系结构/06_固件/images/ARM固件启动顺序/image-20240704111929075.png)

![image-20240704111945789](book/pdf/src/01_体系结构/06_固件/images/ARM固件启动顺序/image-20240704111945789.png)

CMN OCM(on chip memory) 是L3 cache，在没有DDR 的时候就使用这个组件来运行代码。与Intel的cache as ram 类似。

当OCM 当做memory 时候的时候，CMN OCM(on chip memory) 不能使用28*2=56M 全部缓存，只能用一部分，一般不超过3/4，实际只使用了32M。

测试流程：

SCP ram 中进行DDR training，不需要使用OCM 功能，将flash 中的内容直接搬到DDR 开始运行。

如果不开启OCM 功能，地址不会路由到SNF 节点中去。

标准流程：

SCP 中开启OCM 功能，SCP RAM将hostboot 搬到OCM 中去运行，skiboot 早期同样在OCM 中运行，在skiboot 中进行ddr training，然后搬运代码到DDR，关闭OCM，刷新OCM，开启cache 功能。

hostboot会将skiboot 搬到0x800 0000 处。

32M 最大的地址是0x200 0000, 而skiboot 默认会将自己搬到0x3000 0000 来运行，所以开了OCM，即不能去那里运行，当前代码使用的是0x0，也就是搬到0x0处运行。