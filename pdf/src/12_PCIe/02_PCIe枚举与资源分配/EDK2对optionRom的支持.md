### EDK2 PCIe OpRom 支持

[toc]

#### 1. OpRom 基本信息 { .unnumbered .unlisted }

##### 1.1 配置空间 { .unnumbered .unlisted }

配置空间0x30 处有个寄存器，Expansion ROM Base Address Register，存放option rom 的信息。并不是所有的设备都有，是个可选项。对于Bridge 来说，这个位置在0x38。

![image-20230908091633958](book/pdf/src/12_PCIe/02_PCIe枚举与资源分配/images/EDK2对optionRom的支持/image-20230908091633958.png)

寄存器格式

![image-20230908091708328](book/pdf/src/12_PCIe/02_PCIe枚举与资源分配/images/EDK2对optionRom的支持/image-20230908091708328.png)

高21bit 记录了地址信息，低8bit 记录了属性信息。

##### 1.2 OpRom 格式 { .unnumbered .unlisted }

最初由 Plug and Play BIOS Specification 规定具体格式

 > 
 > EFI takes advantage of both the **PCI Firmware Specification** and the PE/COFF Specification to store EFI images in a PCI Option ROM. There are several rules that must be followed when constructing a PCI Option ROM:
 > 
 > *From： UEFI Spec 14.4.21 PCI Option ROMs*

具体格式定义在*PCI Firmware Specification 3.0* 第五章

![](book/pdf/src/12_PCIe/02_PCIe枚举与资源分配/images/EDK2对optionRom的支持/image-20230908133645691.png)

#### 2. 执行OpRomImage { .unnumbered .unlisted }

##### 检查是否有OpRom { .unnumbered .unlisted }

函数`PciSearchDevice() --> GetOpRomInfo()` 来读取 OpRom 信息。全写1，读回来，取反加一得到长度RomSize，存储在这个设备的 PCI_IO_DEVICE 里。如果是全0或者高位全为1，返回NOT FOUND.

##### 读取OpRom 到内存 { .unnumbered .unlisted }

每个root bridge 所有BAR 的资源分配结束，并向BAR 写入地址信息，然后开始执行`ProcessOptionRom()` , 判断当前的root桥下面，是否有一个子节点。在确保有子节点且子节点不是指向自己本身，可以执行optionRom的加载。若是root下面的节点仍然有子成员，那么继续执行这个函数，一层套一层，否则执行函数 `LoadOpRomImage`。这里按照pci的拓扑结构进行划分，一层又一层。直到根节点。

在  `LoadOpRomImage` 中为Rom的头结构与PCIR结构申请空间，并且使能rom相关的寄存器。root bridge会扫描整个root bridge下所有的option rom size，取最大的那个作为基准，记录在root bridge的bar 0中，然后按照这个大小申请内存。将root bridge 的 BAR0的地址填入到OptionRom Addr 寄存器，所有option rom共用一块地址空间进行shadow。

**以前的做法是，先shadow oprom，后program bar，然后运行oprom，这样如果bar的空间太大，有可能覆盖到oprom空间，现在直接在root bridge上，借用bar0，开辟一块空间，专门用来shadow oprom，而且按照最大的申请内存，不会发生占用情况。**

OpRom 和其他bar 空间是共享地址解码的，所以一旦使能oprom，就不能对其他的bar空间进行操作。（这个问题就不存在了）。

从指定的rombar的偏移地址读取数据，若是读取的数据头不是0x55aa，将会向下面偏移接下来的512字节。若是找到了，那就停止向下偏移寻址。这里的RomSize就是根据3.1小节的内容读取出来的数据。

若是找到了optionRom，将FirstCheck标记设置为FALSE，若是Pcir寄存器的偏移是0，偏移不是4字节对齐，或者偏移过大，都会停止该流程。

读取PCIr寄存器的值，标记位不对，结束流程；image大小过大结束流程；代码类型若是legacy的，那就为LegacyImageLength赋值。

Legacy类型的代码，Rom的size是最大值的。若是读取的rom的大小是大于0的，将rom读取到内存中。

将读取到的rom大小与子内存中的位置，为PciDevice->PciIo赋值。将optionRom的大小与位置信息，赋值给内部的数据结构。

##### 执行OpRom Image { .unnumbered .unlisted }

在所有枚举流程结束后，会通过`StartPciDevices` 函数，最终将image运行起来。

![image-20230908135043724](book/pdf/src/12_PCIe/02_PCIe枚举与资源分配/images/EDK2对optionRom的支持/image-20230908135043724.png)

 > 
 > \edk2\MdeModulePkg\Bus\Pci\PciBusDxe\PciOptionRomSupport.c

**Resources**

 > 
 > PCIe 5.0 Spec Chapter 7.5.1.2.4
 > 
 > https://blog.csdn.net/robinsongsog/article/details/51785335
 > 
 > https://zhuanlan.zhihu.com/p/343464819
 > 
 > https://www.cnblogs.com/free-1122/p/16611254.html