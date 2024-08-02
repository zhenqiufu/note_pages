### SSD

[toc]

#### 简介 { .unnumbered .unlisted }

SSD作为数据存储设备，是一种典型的SOC系统。

![image-20240715134556835](book/pdf/src/01_体系结构/07_存储/images/ssd/image-20240715134556835.png)

SSD controller主要分为前端协议层，中端FTL层和后端nand控制器三大部分。

前端通过PCIE/SATA接口解析host发来的命令，放入命令队列里等待中端FTL层去处理；

FTL（flash translation layer）层通过前端发来的LBA映射到闪存的物理空间，是SSD算法软件层；

后端，即flash controller，跟闪存打交道并完成数据编解码和ECC。