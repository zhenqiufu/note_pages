Object.assign(window.search, {"doc_urls":["index.html#mynote","01_体系结构/index.html#体系结构","01_体系结构\\ARM固件启动顺序.html#arm固件启动顺序md","02_AMBA/index.html#amba","02_AMBA/AXI.html#axi","02_AMBA/CHI.html#chi","03_PCIe/index.html#pcie","03_PCIe/index.html#pcie","03_PCIe/00_PCIe协议/physical_layer.html#物理层","03_PCIe/00_PCIe协议/数据链路层.html#数据链路层","03_PCIe/00_PCIe协议/TransactionLayer.html#transaction-layer","03_PCIe/01_PCIe子系统简介/index.html#arm-n2-pcie子系统简介","03_PCIe/02_PCIe枚举与资源分配/index.html#pcie-枚举与资源分配","03_PCIe/03_PCIe高级特性/index.html#pcie-高级特性","03_PCIe/03_PCIe高级特性/PCIe_AER.html#pcie-aer","03_PCIe/03_PCIe高级特性/PCIe_Interrupt.html#pcie-interrupt","03_PCIe/03_PCIe高级特性/PCIe_Hot_Plug.html#pcie-hot-plug","03_PCIe/03_PCIe高级特性/PCIe_Power_management.html#pcie-power-management","04_Silicon_IP/index.html#silicon-ip","05_LeetCode/LeetCode.html#leetcode","05_LeetCode/二分法.html#二分法"],"index":{"documentStore":{"docInfo":{"0":{"body":0,"breadcrumbs":2,"title":1},"1":{"body":0,"breadcrumbs":0,"title":0},"10":{"body":0,"breadcrumbs":5,"title":2},"11":{"body":91,"breadcrumbs":7,"title":3},"12":{"body":0,"breadcrumbs":3,"title":1},"13":{"body":0,"breadcrumbs":3,"title":1},"14":{"body":0,"breadcrumbs":6,"title":2},"15":{"body":0,"breadcrumbs":6,"title":2},"16":{"body":0,"breadcrumbs":8,"title":3},"17":{"body":0,"breadcrumbs":8,"title":3},"18":{"body":0,"breadcrumbs":4,"title":2},"19":{"body":0,"breadcrumbs":2,"title":1},"2":{"body":0,"breadcrumbs":2,"title":1},"20":{"body":0,"breadcrumbs":1,"title":0},"3":{"body":0,"breadcrumbs":2,"title":1},"4":{"body":0,"breadcrumbs":3,"title":1},"5":{"body":0,"breadcrumbs":3,"title":1},"6":{"body":0,"breadcrumbs":2,"title":1},"7":{"body":0,"breadcrumbs":2,"title":1},"8":{"body":2,"breadcrumbs":1,"title":0},"9":{"body":0,"breadcrumbs":4,"title":0}},"docs":{"0":{"body":"","breadcrumbs":"MyNote » MyNote","id":"0","title":"MyNote"},"1":{"body":"","breadcrumbs":"体系结构 » 体系结构","id":"1","title":"体系结构"},"10":{"body":"","breadcrumbs":"PCIe » 协议学习 » Transaction Layer » Transaction Layer","id":"10","title":"Transaction Layer"},"11":{"body":"ARM N2 参考设计（ARM Neoverse N2 reference design）是一种基于ARM架构的处理器设计，专注于高性能和高效能计算。Neoverse N2 是 ARM 公司推出的一款针对数据中心、云计算和边缘计算等领域的高性能 CPU 架构。以下是一些关键特性： 高性能计算 ：N2 架构旨在提供高性能计算能力，适用于数据中心和云计算环境中的各种高负载应用，如人工智能、大数据分析和高性能计算（HPC）等。 多核设计 ：Neoverse N2 支持多核设计，能够实现更高的并行计算能力，从而提高整体计算效率。 能效优化 ：ARM N2 在提高性能的同时，注重能效优化，旨在提供更低的功耗和更高的性能比，适合在需要高效能计算的场景中使用。 扩展性 ：N2 架构具有良好的扩展性，支持大规模部署，可以适应不同规模和需求的数据中心和边缘计算环境。 兼容性 ：Neoverse N2 保持了对 ARM 生态系统的兼容性，支持现有的 ARM 软件和工具链，方便开发者进行迁移和优化。 通过这些特性，ARM N2 参考设计为构建高效能和高性能计算平台提供了一个可靠的基础，适用于多种现代计算需求和应用场景。 ARM Neoverse N2 参考设计中使用了多种 ARM 的知识产权（IP）模块，以实现其高性能和高效能的目标。以下是其中一些关键的 IP 组件： ARM Neoverse N2 CPU 核心 ：这是 N2 设计的核心，提供了高性能的计算能力。N2 核心基于 ARMv9 架构，支持高频率和多核配置，适合处理大规模并行工作负载。 System Level Cache (SLC) ：ARM N2 参考设计中集成了系统级缓存（SLC），用于在多个核心和其他系统组件之间共享数据，从而提高整体系统的性能和效率。 CCIX 和 CXL 支持 ：N2 设计支持 CCIX（Cache Coherent Interconnect for Accelerators）和 CXL（Compute Express Link）接口，这些接口用于连接加速器和其他外部设备，提供高带宽、低延迟的数据传输能力。 AMBA (Advanced Microcontroller Bus Architecture) 总线架构 ：AMBA 是一种用于片上系统（SoC）设计的总线标准，用于连接各种 IP 模块和外设。N2 参考设计中使用了 AMBA 架构来实现高效的数据传输和通信。 TrustZone 安全技术 ：ARM TrustZone 技术提供了硬件隔离机制，增强了系统的安全性，适用于保护敏感数据和执行安全操作。 Mali GPU（可选） ：虽然 N2 主要专注于 CPU 性能，但在某些应用场景中，可能会集成 ARM 的 Mali GPU，以提供图形处理和加速计算能力。 SMMU (System Memory Management Unit) ：用于实现高级的内存管理功能，支持虚拟化和内存保护，提升系统的灵活性和安全性。 通过集成这些关键 IP 组件，ARM Neoverse N2 参考设计能够提供高性能、高效能和高扩展性的计算解决方案，满足数据中心、云计算和边缘计算等多种应用场景的需求。 本文通过从一些High Level 角度，简单介绍该处理器架构及其基本功能。 主要参考的是这份文档 Arm Neoverse N2 reference design Technical Overview image-20240704104921533 上图是整体架构，包括片内互连总线CMN-700，与PICe子系统相连的SMMU和NI-700，挂在RNI节点上的SCP，分布在不同位置的GIC与挂在SNF上的memory controller，及最关键的大core。","breadcrumbs":"PCIe » ARM N2 PCIe子系统简介 » ARM N2 PCIe子系统简介","id":"11","title":"ARM N2 PCIe子系统简介"},"12":{"body":"","breadcrumbs":"PCIe » PCIe 枚举与资源分配 » PCIe 枚举与资源分配","id":"12","title":"PCIe 枚举与资源分配"},"13":{"body":"","breadcrumbs":"PCIe » PCIe 高级特性 » PCIe 高级特性","id":"13","title":"PCIe 高级特性"},"14":{"body":"","breadcrumbs":"PCIe » PCIe 高级特性 » PCIe AER » PCIe AER","id":"14","title":"PCIe AER"},"15":{"body":"","breadcrumbs":"PCIe » PCIe 高级特性 » PCIe Interrupt » PCIe Interrupt","id":"15","title":"PCIe Interrupt"},"16":{"body":"","breadcrumbs":"PCIe » PCIe 高级特性 » PCIe Hot-Plug » PCIe Hot-Plug","id":"16","title":"PCIe Hot-Plug"},"17":{"body":"","breadcrumbs":"PCIe » PCIe 高级特性 » PCIe Power Management » PCIe Power Management","id":"17","title":"PCIe Power Management"},"18":{"body":"","breadcrumbs":"Silicon IP » Silicon IP","id":"18","title":"Silicon IP"},"19":{"body":"记录自己做过的一些题，方便复习。","breadcrumbs":"LeetCode » LeetCode","id":"19","title":"LeetCode"},"2":{"body":"","breadcrumbs":"体系结构 » ARM固件启动顺序.md » ARM固件启动顺序.md","id":"2","title":"ARM固件启动顺序.md"},"20":{"body":"","breadcrumbs":"LeetCode » 二分法 » 二分法","id":"20","title":"二分法"},"3":{"body":"","breadcrumbs":"AMBA » AMBA","id":"3","title":"AMBA"},"4":{"body":"","breadcrumbs":"AMBA » AXI » AXI","id":"4","title":"AXI"},"5":{"body":"","breadcrumbs":"AMBA » CHI » CHI","id":"5","title":"CHI"},"6":{"body":"","breadcrumbs":"PCIe » PCIe","id":"6","title":"PCIe"},"7":{"body":"","breadcrumbs":"PCIe » 协议学习 » PCIe","id":"7","title":"PCIe"},"8":{"body":"image-20240704095625749","breadcrumbs":"PCIe » 协议学习 » 物理层 » 物理层","id":"8","title":"物理层"},"9":{"body":"","breadcrumbs":"PCIe » 协议学习 » Data Link Layer » 数据链路层","id":"9","title":"数据链路层"}},"length":21,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"2":{"0":{"2":{"4":{"0":{"7":{"0":{"4":{"0":{"9":{"5":{"6":{"2":{"5":{"7":{"4":{"9":{"df":1,"docs":{"8":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"1":{"0":{"4":{"9":{"2":{"1":{"5":{"3":{"3":{"df":1,"docs":{"11":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"7":{"0":{"0":{"df":0,"docs":{},"，":{"df":0,"docs":{},"与":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"子":{"df":0,"docs":{},"系":{"df":0,"docs":{},"统":{"df":0,"docs":{},"相":{"df":0,"docs":{},"连":{"df":0,"docs":{},"的":{"df":0,"docs":{},"s":{"df":0,"docs":{},"m":{"df":0,"docs":{},"m":{"df":0,"docs":{},"u":{"df":0,"docs":{},"和":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":1,"docs":{"11":{"tf":1.0}}}}}}}}}}}}}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"a":{"c":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"11":{"tf":1.0}}}}}}},"df":0,"docs":{}},"d":{"df":0,"docs":{},"v":{"a":{"df":0,"docs":{},"n":{"c":{"df":1,"docs":{"11":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"14":{"tf":1.0}}}},"m":{"b":{"a":{"df":2,"docs":{"11":{"tf":1.7320508075688772},"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"r":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"11":{"tf":1.0}}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{},"m":{"df":1,"docs":{"11":{"tf":4.0}},"v":{"9":{"df":1,"docs":{"11":{"tf":1.0}}},"df":0,"docs":{}},"固":{"df":0,"docs":{},"件":{"df":0,"docs":{},"启":{"df":0,"docs":{},"动":{"df":0,"docs":{},"顺":{"df":0,"docs":{},"序":{".":{"df":0,"docs":{},"m":{"d":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}}}}},"x":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.0}}}}},"b":{"df":0,"docs":{},"u":{"df":1,"docs":{"11":{"tf":1.0}}}},"c":{"a":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"11":{"tf":1.0}}}},"df":0,"docs":{}},"c":{"df":0,"docs":{},"i":{"df":0,"docs":{},"x":{"df":1,"docs":{"11":{"tf":1.0}},"（":{"c":{"a":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"11":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":1,"docs":{"5":{"tf":1.0}}}},"m":{"df":0,"docs":{},"n":{"df":1,"docs":{"11":{"tf":1.0}}}},"o":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"11":{"tf":1.0}}}}},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"，":{"df":0,"docs":{},"及":{"df":0,"docs":{},"最":{"df":0,"docs":{},"关":{"df":0,"docs":{},"键":{"df":0,"docs":{},"的":{"df":0,"docs":{},"大":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"11":{"tf":1.0}}}}},"df":0,"docs":{}}}}}}}}}}}}}}}}},"p":{"df":0,"docs":{},"u":{"df":1,"docs":{"11":{"tf":1.7320508075688772}}}},"x":{"df":0,"docs":{},"l":{"df":1,"docs":{"11":{"tf":1.0}},"（":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"11":{"tf":1.0}}}}}}}},"df":0,"docs":{}}}}},"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"n":{"df":1,"docs":{"11":{"tf":1.0}}}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":0,"docs":{},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"11":{"tf":1.0}}}}}}}}},"g":{"df":0,"docs":{},"p":{"df":0,"docs":{},"u":{"df":1,"docs":{"11":{"tf":1.4142135623730951}}}}},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":1,"docs":{"11":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"t":{"df":1,"docs":{"16":{"tf":1.0}}}}},"i":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"g":{"df":2,"docs":{"11":{"tf":1.0},"8":{"tf":1.0}}}},"df":0,"docs":{}},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"11":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"u":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":1,"docs":{"15":{"tf":1.0}}}}}}}}}},"p":{"df":2,"docs":{"11":{"tf":1.7320508075688772},"18":{"tf":1.0}}}},"l":{"a":{"df":0,"docs":{},"y":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"10":{"tf":1.0}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"c":{"df":0,"docs":{},"o":{"d":{"df":1,"docs":{"19":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":1,"docs":{"11":{"tf":1.4142135623730951}}}}}}},"m":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"11":{"tf":1.4142135623730951}}}},"n":{"a":{"df":0,"docs":{},"g":{"df":2,"docs":{"11":{"tf":1.0},"17":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"11":{"tf":1.0}}}}}}},"i":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":1,"docs":{"11":{"tf":1.0}}}}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"y":{"df":0,"docs":{},"n":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"n":{"2":{"df":1,"docs":{"11":{"tf":4.47213595499958}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"o":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":1,"docs":{"11":{"tf":2.6457513110645907}}}}}}}}},"o":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"df":0,"docs":{},"e":{"df":0,"docs":{},"w":{"df":1,"docs":{"11":{"tf":1.0}}}}}}}}}},"p":{"c":{"df":0,"docs":{},"i":{"df":0,"docs":{},"e":{"df":9,"docs":{"11":{"tf":1.0},"12":{"tf":1.0},"13":{"tf":1.0},"14":{"tf":1.0},"15":{"tf":1.0},"16":{"tf":1.0},"17":{"tf":1.0},"6":{"tf":1.0},"7":{"tf":1.0}}}}},"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"df":0,"docs":{},"g":{"df":1,"docs":{"16":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"w":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"17":{"tf":1.0}}}}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"11":{"tf":1.4142135623730951}}}}}}},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"18":{"tf":1.0}}}}},"df":0,"docs":{}}}},"l":{"c":{"df":1,"docs":{"11":{"tf":1.0}}},"df":0,"docs":{}},"m":{"df":0,"docs":{},"m":{"df":0,"docs":{},"u":{"df":1,"docs":{"11":{"tf":1.0}}}}},"o":{"c":{"df":1,"docs":{"11":{"tf":1.0}}},"df":0,"docs":{}},"y":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":1,"docs":{"11":{"tf":1.4142135623730951}}}}}}}},"t":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"11":{"tf":1.0}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"r":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"a":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"10":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"z":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"11":{"tf":1.4142135623730951}}}}}}}}}},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"11":{"tf":1.0}}}}}}}},"breadcrumbs":{"root":{"2":{"0":{"2":{"4":{"0":{"7":{"0":{"4":{"0":{"9":{"5":{"6":{"2":{"5":{"7":{"4":{"9":{"df":1,"docs":{"8":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"1":{"0":{"4":{"9":{"2":{"1":{"5":{"3":{"3":{"df":1,"docs":{"11":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"7":{"0":{"0":{"df":0,"docs":{},"，":{"df":0,"docs":{},"与":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"子":{"df":0,"docs":{},"系":{"df":0,"docs":{},"统":{"df":0,"docs":{},"相":{"df":0,"docs":{},"连":{"df":0,"docs":{},"的":{"df":0,"docs":{},"s":{"df":0,"docs":{},"m":{"df":0,"docs":{},"m":{"df":0,"docs":{},"u":{"df":0,"docs":{},"和":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":1,"docs":{"11":{"tf":1.0}}}}}}}}}}}}}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"a":{"c":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"11":{"tf":1.0}}}}}}},"df":0,"docs":{}},"d":{"df":0,"docs":{},"v":{"a":{"df":0,"docs":{},"n":{"c":{"df":1,"docs":{"11":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"14":{"tf":1.7320508075688772}}}},"m":{"b":{"a":{"df":4,"docs":{"11":{"tf":1.7320508075688772},"3":{"tf":1.7320508075688772},"4":{"tf":1.0},"5":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"r":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"11":{"tf":1.0}}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{},"m":{"df":1,"docs":{"11":{"tf":4.242640687119285}},"v":{"9":{"df":1,"docs":{"11":{"tf":1.0}}},"df":0,"docs":{}},"固":{"df":0,"docs":{},"件":{"df":0,"docs":{},"启":{"df":0,"docs":{},"动":{"df":0,"docs":{},"顺":{"df":0,"docs":{},"序":{".":{"df":0,"docs":{},"m":{"d":{"df":1,"docs":{"2":{"tf":1.7320508075688772}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}}}}},"x":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.7320508075688772}}}}},"b":{"df":0,"docs":{},"u":{"df":1,"docs":{"11":{"tf":1.0}}}},"c":{"a":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"11":{"tf":1.0}}}},"df":0,"docs":{}},"c":{"df":0,"docs":{},"i":{"df":0,"docs":{},"x":{"df":1,"docs":{"11":{"tf":1.0}},"（":{"c":{"a":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"11":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":1,"docs":{"5":{"tf":1.7320508075688772}}}},"m":{"df":0,"docs":{},"n":{"df":1,"docs":{"11":{"tf":1.0}}}},"o":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"11":{"tf":1.0}}}}},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"，":{"df":0,"docs":{},"及":{"df":0,"docs":{},"最":{"df":0,"docs":{},"关":{"df":0,"docs":{},"键":{"df":0,"docs":{},"的":{"df":0,"docs":{},"大":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"11":{"tf":1.0}}}}},"df":0,"docs":{}}}}}}}}}}}}}}}}},"p":{"df":0,"docs":{},"u":{"df":1,"docs":{"11":{"tf":1.7320508075688772}}}},"x":{"df":0,"docs":{},"l":{"df":1,"docs":{"11":{"tf":1.0}},"（":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"11":{"tf":1.0}}}}}}}},"df":0,"docs":{}}}}},"d":{"a":{"df":0,"docs":{},"t":{"a":{"df":1,"docs":{"9":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"n":{"df":1,"docs":{"11":{"tf":1.0}}}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":0,"docs":{},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"11":{"tf":1.0}}}}}}}}},"g":{"df":0,"docs":{},"p":{"df":0,"docs":{},"u":{"df":1,"docs":{"11":{"tf":1.4142135623730951}}}}},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":1,"docs":{"11":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"t":{"df":1,"docs":{"16":{"tf":1.7320508075688772}}}}},"i":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"g":{"df":2,"docs":{"11":{"tf":1.0},"8":{"tf":1.0}}}},"df":0,"docs":{}},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"11":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"u":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":1,"docs":{"15":{"tf":1.7320508075688772}}}}}}}}}},"p":{"df":2,"docs":{"11":{"tf":1.7320508075688772},"18":{"tf":1.7320508075688772}}}},"l":{"a":{"df":0,"docs":{},"y":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":2,"docs":{"10":{"tf":1.7320508075688772},"9":{"tf":1.0}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"c":{"df":0,"docs":{},"o":{"d":{"df":2,"docs":{"19":{"tf":1.7320508075688772},"20":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":1,"docs":{"11":{"tf":1.4142135623730951}}}}}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"k":{"df":1,"docs":{"9":{"tf":1.0}}}}}},"m":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"11":{"tf":1.4142135623730951}}}},"n":{"a":{"df":0,"docs":{},"g":{"df":2,"docs":{"11":{"tf":1.0},"17":{"tf":1.7320508075688772}}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"11":{"tf":1.0}}}}}}},"i":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":1,"docs":{"11":{"tf":1.0}}}}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"y":{"df":0,"docs":{},"n":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.7320508075688772}}}}}}},"n":{"2":{"df":1,"docs":{"11":{"tf":4.69041575982343}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"o":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":1,"docs":{"11":{"tf":2.6457513110645907}}}}}}}}},"o":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"df":0,"docs":{},"e":{"df":0,"docs":{},"w":{"df":1,"docs":{"11":{"tf":1.0}}}}}}}}}},"p":{"c":{"df":0,"docs":{},"i":{"df":0,"docs":{},"e":{"df":12,"docs":{"10":{"tf":1.0},"11":{"tf":2.0},"12":{"tf":2.0},"13":{"tf":2.0},"14":{"tf":2.23606797749979},"15":{"tf":2.23606797749979},"16":{"tf":2.23606797749979},"17":{"tf":2.23606797749979},"6":{"tf":1.7320508075688772},"7":{"tf":1.7320508075688772},"8":{"tf":1.0},"9":{"tf":1.0}}}}},"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"df":0,"docs":{},"g":{"df":1,"docs":{"16":{"tf":1.7320508075688772}}}}},"o":{"df":0,"docs":{},"w":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"17":{"tf":1.7320508075688772}}}}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"11":{"tf":1.4142135623730951}}}}}}},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"18":{"tf":1.7320508075688772}}}}},"df":0,"docs":{}}}},"l":{"c":{"df":1,"docs":{"11":{"tf":1.0}}},"df":0,"docs":{}},"m":{"df":0,"docs":{},"m":{"df":0,"docs":{},"u":{"df":1,"docs":{"11":{"tf":1.0}}}}},"o":{"c":{"df":1,"docs":{"11":{"tf":1.0}}},"df":0,"docs":{}},"y":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":1,"docs":{"11":{"tf":1.4142135623730951}}}}}}}},"t":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"11":{"tf":1.0}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"r":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"a":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"10":{"tf":1.7320508075688772}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"z":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"11":{"tf":1.4142135623730951}}}}}}}}}},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"11":{"tf":1.0}}}}}}}},"title":{"root":{"a":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"14":{"tf":1.0}}}},"m":{"b":{"a":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"r":{"df":0,"docs":{},"m":{"df":1,"docs":{"11":{"tf":1.0}},"固":{"df":0,"docs":{},"件":{"df":0,"docs":{},"启":{"df":0,"docs":{},"动":{"df":0,"docs":{},"顺":{"df":0,"docs":{},"序":{".":{"df":0,"docs":{},"m":{"d":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}}}}},"x":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.0}}}}},"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":1,"docs":{"5":{"tf":1.0}}}}},"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":1,"docs":{"16":{"tf":1.0}}}}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"u":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":1,"docs":{"15":{"tf":1.0}}}}}}}}}},"p":{"df":1,"docs":{"18":{"tf":1.0}}}},"l":{"a":{"df":0,"docs":{},"y":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"10":{"tf":1.0}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"c":{"df":0,"docs":{},"o":{"d":{"df":1,"docs":{"19":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"m":{"a":{"df":0,"docs":{},"n":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"17":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{},"y":{"df":0,"docs":{},"n":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"n":{"2":{"df":1,"docs":{"11":{"tf":1.0}}},"df":0,"docs":{}},"p":{"c":{"df":0,"docs":{},"i":{"df":0,"docs":{},"e":{"df":9,"docs":{"11":{"tf":1.0},"12":{"tf":1.0},"13":{"tf":1.0},"14":{"tf":1.0},"15":{"tf":1.0},"16":{"tf":1.0},"17":{"tf":1.0},"6":{"tf":1.0},"7":{"tf":1.0}}}}},"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"df":0,"docs":{},"g":{"df":1,"docs":{"16":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"w":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"17":{"tf":1.0}}}}}}},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"18":{"tf":1.0}}}}},"df":0,"docs":{}}}}},"t":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"a":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"10":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}}},"lang":"English","pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}});