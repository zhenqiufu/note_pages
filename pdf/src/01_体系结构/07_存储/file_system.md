### 常见文件系统

[toc]

常见的文件系统格式主要包括以下几种：

##### Windows 文件系统 { .unnumbered .unlisted }

1. **FAT32（File Allocation Table 32）**：
   * **特点**：支持较大的分区（最高可支持 2TB），但单个文件最大为 4GB。兼容性高，支持多种操作系统。
   * **应用场景**：常用于小型存储设备，如 USB 闪存驱动器和 SD 卡。
1. **NTFS（New Technology File System）**：
   * **特点**：支持大文件和大分区，提供文件权限、加密、压缩和快照等功能。更适合大容量存储和系统分区。
   * **应用场景**：主要用于 Windows 系统的硬盘和 SSD。

##### macOS 文件系统 { .unnumbered .unlisted }

1. **HFS+（Hierarchical File System Plus）**：
   * **特点**：支持大文件和大分区，具有文件权限、加密和快照等功能。支持硬链接、符号链接等。
   * **应用场景**：早期的 macOS 系统使用，现逐渐被 APFS 取代。
1. **APFS（Apple File System）**：
   * **特点**：优化了 SSD 性能，支持加密、快照、克隆和空间共享等功能。提高了数据完整性和文件系统的效率。
   * **应用场景**：macOS 10.13 及之后版本的默认文件系统，适用于 Mac 电脑、iOS 设备等。

##### Linux 文件系统 { .unnumbered .unlisted }

1. **ext4（Fourth Extended File System）**：
   * **特点**：支持大文件和大分区，提供日志功能，增强了文件系统的稳定性和性能。
   * **应用场景**：多数 Linux 发行版默认文件系统，广泛应用于服务器和桌面系统。
1. **XFS**：
   * **特点**：支持大文件和大分区，具有高性能和高扩展性，适用于大规模数据存储。
   * **应用场景**：用于高性能存储需求的服务器和数据中心。
1. **Btrfs（B-tree File System）**：
   * **特点**：提供快照、克隆、数据校验和多设备支持，致力于数据完整性和可扩展性。
   * **应用场景**：用于需要高级数据管理和可靠性的场景，如服务器和个人电脑。

##### 通用文件系统 { .unnumbered .unlisted }

1. exFAT（Extended File Allocation Table）
   
   ：
   
   * **特点**：弥补 FAT32 和 NTFS 之间的差距，支持大文件和大分区，无文件大小限制，兼容性高。
   * **应用场景**：常用于跨平台的存储设备，如 USB 闪存驱动器和外部硬盘，特别是在 Windows 和 macOS 系统之间共享文件。

##### 高性能文件系统 { .unnumbered .unlisted }

1. ZFS（Zettabyte File System）
   
   ：
   
   * **特点**：支持大容量存储、快照、数据完整性校验、压缩和 RAID-Z 等高级功能。
   * **应用场景**：广泛应用于服务器和数据中心，尤其是需要高可靠性和数据完整性的场景。