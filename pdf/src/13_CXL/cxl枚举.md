## CXL 枚举

[toc]

### CXL 协议判断 { .unnumbered .unlisted }

判断当前链路上跑的是CXL还是PCIe，需要读取寄存器。

![image-20240709112604509](book/pdf/src/13_CXL/images/cxl枚举/image-20240709112604509.png)

![image-20240709112653161](book/pdf/src/13_CXL/images/cxl枚举/image-20240709112653161.png)

PCIe DVSEC for CXL Devices ，又称 CXL PCIe DVSEC，所有 RCD、LD、SLD、FMLD 等 CXL Device 的 D0F0 必须实现该 DVSEC，软件根据 Device 配置空间中是否实现了该 DVSEC 来判断 Device 为 PCIe Device 还是 CXL Device 。

### CXL2.0 { .unnumbered .unlisted }

与PCIe 一致。

### CXL1.1 { .unnumbered .unlisted }

RCiEP

### HDM Decoder { .unnumbered .unlisted }