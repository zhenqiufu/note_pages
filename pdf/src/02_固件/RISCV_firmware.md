## RISC-V Firmware

### 概述 { .unnumbered .unlisted }

Firmware 启动的一般流程

![image-20240711102511545](book/pdf/src/02_固件/images/RISCV_firmware/image-20240711102511545.png)

### ARM64 vs RISC-V { .unnumbered .unlisted }

![image-20240711103010418](book/pdf/src/02_固件/images/RISCV_firmware/image-20240711103010418.png)

uboot处可以替换为EDK2，可以从PEI开始，也可以从DXE直接开始。

![image-20240711103301123](book/pdf/src/02_固件/images/RISCV_firmware/image-20240711103301123.png)

对应起来就是：

ZSBL: SCP ROM

FSBL: SCP RAM

![image-20240711105826248](book/pdf/src/02_固件/images/RISCV_firmware/image-20240711105826248.png)