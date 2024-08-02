### PCIe 子系统介绍

![image-20240704105750294](book/pdf/src/12_PCIe/01_PCIe子系统简介/images/01_PCIe子系统/image-20240704105750294.png)

![image-20240704110348168](book/pdf/src/12_PCIe/01_PCIe子系统简介/images/01_PCIe子系统/image-20240704110348168.png)

主要有4个S家的控制器，实际是CXL控制器，因为CXL控制器兼容PCIe。一个比较高端支持x16，另外三个是x4的，主要控制这4个controller的开关，实现不同的bifircation。

主要路是CMN RNI、HNP和CCG节点，连接到NI-700。NI-700完成访问请求的路由，最终路由到某一个controller上去。其中只有X16的控制器连接了CCG节点，以支持CXL和CCIX互联。

SMMU-700 负责将虚拟地址翻译为物理地址，类似于系统的MMU。主要有TBU、TCU和DTIIC构成。

MSI-IC 是个MSI的switch，将多个controller的MSI汇总为一个MSI出口。

ITS 负责将PCIe的MSI中断转发给GIC，其实ITS 也是GIC的组成部分之一。

int process 是负责将中断汇总。

NIC-450 和NI-700都是路由模块，NIC-450负责链接小core的cfg模块，用来配置controller和自研寄存器，NI-700负责的是PCIe数据通路，走的是AMBA总线的ACE协议。