# Summary

[NoteBook](./readme.md)


# 计算机体系结构

- [体系结构](./01_体系结构/readme.md)
    - [内存管理](./01_体系结构/01_SMMU/readme.md) 
        -  [内存管理基础](./01_体系结构/01_SMMU/内存管理基础.md) 
        -  [SMMU](./01_体系结构/01_SMMU/SMMU.md) 
        -  [异构内存管理SVA](./01_体系结构/01_SMMU/SVA.md) 
    -  [NoC片上互连](./01_体系结构/04_NoC片内互连总线/readme.md) 
        -  [CHI协议](./01_体系结构/04_NoC片内互连总线/CHI.md)
        -  [NoC](./01_体系结构/04_NoC片内互连总线/NoC_introduction.md)
        -  [CMN700](./01_体系结构/04_NoC片内互连总线/CMN700.md)
        -  [NI-700](./01_体系结构/04_NoC片内互连总线/NI_700.md)
    - [异常与中断](./01_体系结构/02_中断控制器/readme.md) 
        -  [异常与中断](./01_体系结构/02_中断控制器/中断.md) 
        -  [ARM GIC](./01_体系结构/02_中断控制器/GIC.md) 
        -  [X86 APIC](./01_体系结构/02_中断控制器/X86_APIC.md) 
        -  [RISCV AIA](./01_体系结构/02_中断控制器/RISCV_AIA.md) 
    -  [SoC](./01_体系结构/05_CortexM3/readme.md) 
        -  [Cortex M3 MCU](./01_体系结构/05_CortexM3/概述.md) 
        -  [ARM N2 参考设计](./12_PCIe/01_PCIe子系统简介/readme.md)
    - [固件](./01_体系结构/06_固件/readme.md)
        - [ARM固件启动顺序](./01_体系结构/06_固件/ARM固件启动顺序.md) 
        - [RISC-V固件启动顺序](./01_体系结构/06_固件/RISCV_firmware.md) 
        - [Cache as RAM & On chip memory](./01_体系结构/06_固件/Cache_as_ram.md) 
        - [EDK2 System Table](./01_体系结构/06_固件/EDK2_SYS_TABLE.md) 
        - [EDK2 Event](./01_体系结构/06_固件/EDK2_EVENT.md) 
        - [EDK2 Memory Map](./01_体系结构/06_固件/EDK2_memmap.md) 
    - [存储](./01_体系结构/07_存储/readme.md)
        - [文件系统](./01_体系结构/07_存储/file_system.md) 
        - [RAID](./01_体系结构/07_存储/RAID.md) 
        - [SSD](./01_体系结构/07_存储/ssd.md) 
        - [分布式存储系统](./01_体系结构/07_存储/分布式存储.md) 
    - [虚拟化与分布式](./01_体系结构/08_虚拟化与分布式/readme.md)
        - [Hypervisor](./01_体系结构/08_虚拟化与分布式/hypervisor.md)
        - [MIT6824](./01_体系结构/08_虚拟化与分布式/MIT6824.md)
    - [Memory consistency and cache coherence](./01_体系结构/09_Memory_Consistency/readme.md)
        - [Memory consistency](./01_体系结构/09_Memory_Consistency/memory_consistency.md)
    
- [固件](./02_固件/readme.md)
    - [ARM固件启动顺序](./02_固件/ARM固件启动顺序.md) 
    - [RISC-V固件启动顺序](./02_固件/RISCV_firmware.md) 
    - [Cache as RAM & On chip memory](./02_固件/Cache_as_ram.md) 
    - [EDK2 System Table](./02_固件/EDK2_SYS_TABLE.md) 
    - [EDK2 Event](./02_固件/EDK2_EVENT.md) 
    - [EDK2 Memory Map](./02_固件/EDK2_memmap.md) 

- [OS](./03_OS/readme.md)
    - [FreeRTOS](./03_OS/FreeRTOS.md)


# 计算机工业标准

- [ACPI](./10_ACPI/readme.md)
    - [ACPI Overview](./10_ACPI/ACPI_overview.md)
    - [CEDT](./10_ACPI/CEDT.md)

- [AMBA](./11_PCIe/readme.md)

- [PCIe](./12_PCIe/readme.md)
    - [协议学习](./12_PCIe/readme.md)
        -   [Physical Layer](./12_PCIe/00_PCIe协议/physical_layer.md)
        -   [Data Link Layer](./12_PCIe/00_PCIe协议/data_link_layer.md)
        -   [Transaction Layer](./12_PCIe/00_PCIe协议/TransactionLayer.md)
        -   [PCIe 均衡技术](./12_PCIe/00_PCIe协议/03_pcie_eq.md)
        
    - [ARM N2 参考设计](./12_PCIe/01_PCIe子系统简介/readme.md)
      - [01_PCIe子系统.md](./12_PCIe/01_PCIe子系统简介/01_PCIe子系统.md) 
      
    - [PCIe 枚举与资源分配](./12_PCIe/02_PCIe枚举与资源分配/readme.md)
    
        - [枚举过程中的资源降级](./12_PCIe/02_PCIe枚举与资源分配/枚举过程中的资源降级.md) 
    
        - [EDK2对optionRom的支持](./12_PCIe/02_PCIe枚举与资源分配/EDK2对optionRom的支持.md) 
    
    -   [PCIe 高级特性](./12_PCIe/03_PCIe高级特性/readme.md)
        -   [PCIe AER](./12_PCIe/03_PCIe高级特性/PCIe_AER.md)
        -   [PCIe Interrupt](./12_PCIe/03_PCIe高级特性/PCIe_Interrupt.md)
        -   [PCIe Hot-Plug](./12_PCIe/03_PCIe高级特性/PCIe_Hot_Plug.md)
        -   [PCIe Power Management](./12_PCIe/03_PCIe高级特性/PCIe_Power_management.md)
        -   [PCIe_DPC.md](./12_PCIe/03_PCIe高级特性/PCIe_DPC.md) 


- [CXL](./13_CXL/readme.md)
    - [CXL Overview](./13_CXL/01_cxl.md)
    - [CXL 寄存器](./13_CXL/cxl_reg.md)
    - [CXL_in_CMN](./13_CXL/CXL_in_CMN.md)
    - [CXL_in_SCP](./13_CXL/CXL_in_SCP.md)
    - [CXL 枚举](./13_CXL/cxl枚举.md)

- [DDR](./14_DDR/readme.md)
    - [DDR Introduction](./14_DDR/01_Introduction.md)




# 代码实现与工具

-   [LeetCode](./21_LeetCode/LeetCode.md)
    -   [C语言基础](./21_LeetCode/c_basic.md)
    -   [Bit Map](./21_LeetCode/04_bitmap.md)
    -   [二分法](./21_LeetCode/01_二分法.md)
    -   [链表](./21_LeetCode/02_链表.md)
    -   [字符串](./21_LeetCode/03_字符串.md)
    -   [哈希表](./21_LeetCode/05_hashmap.md)
    -   [双指针](./21_LeetCode/06_double_ptr.md)
    -   [栈](./21_LeetCode/07_stack.md)
-   [System Design](./22_System_design/readme.md)
    - [System Design Overview](./22_System_design/System_Design_Overview.md)

- [Tool](./20_tool/readme.md)
    - [Git](./20_tool/git.md)
# 读书


-   [工作中的好习惯](./30_reading/工作中的好习惯.md)
-   [2024 Reading](./30_reading/2024_reading.md)