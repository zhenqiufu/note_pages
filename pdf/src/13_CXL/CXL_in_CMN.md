## CXL in CMN

[toc]

### CXS 控制器 { .unnumbered .unlisted }

ARM RD_N2 参考设计中，chip to chip互连的通信协议是CCIX2.0，CMN-700 TRM中使用的描述是ARM 私有协议CML_SMP。

S家的CXL控制器内部集成了一个CXS控制器，支持CCIX2.0，其实CML_SMP就是CCIX2.0的改良版，增加了一些新的不影响功能的信息。

CMN 上CCG节点负责连接外部的chip或者CXL设备。

Coherent Multichip Link (CML) device  = CCG

A given multi-chip link can be used for:
• SMP (CML_SMP) connection
• CXL device attachment

A CML device (CCG) can be configured to be used for **CML_SMP** connection or **CXL device attachment**.

For SMP systems, CCG block is required to enable multi-chip SMP communications over a **CXS issue B interface**.

那么CXL就应该使用**CXS issue A interface**

### CCG 结构 { .unnumbered .unlisted }

![image-20240708132240058](book/pdf/src/13_CXL/images/CXL_in_CMN/image-20240708132240058.png)

![image-20240708132453025](book/pdf/src/13_CXL/images/CXL_in_CMN/image-20240708132453025.png)

### CCG 工作模式 { .unnumbered .unlisted }

The **CML RA** node type has the following MPAM modes:

* SMP mode
  The CML RA passes the MPAM field on the USER field of the request. When snooped, the CML RA receives the MPAM field and passes it through the CHI SNP MPAM field.

* Non-SMP mode
  The CML RA drops the MPAM field that is received on the CHI request. The CML RA also
  does not receive MPAM field on CML snoops in this mode.

* CXSA mode
  The CML RA passes the MPAM field on the USER field of the request, even though CXSA is in non-SMP mode. You can use a configuration bit to enable passing of MPAM attributes when in CXSA mode.

The **CML HA** node type has the following MPAM modes:

* SMP mode
  The CML HA receives MPAM fields through the USER field of the request and passes them through the CHI MPAM field. On incoming CHI transactions, the CML HA passes CHI MPAM values through on the USER field.

* Non-SMP mode
  The CML HA drops the MPAM values that it receives on CHI snoop. The CML HA does not receive the MPAM attributes on CML requests.

当连接CXL 时候，就需要enable **CXSA** mode in RA。

LA 中也有相关寄存器，也需要enable CXL。

### CCG SAM { .unnumbered .unlisted }

CMN CCG节点是负责连接CXL的，目前CMN700支持type3类型的设备，因此，需要为CXL type3  设备的memory 预留一段内存。具体使用就是在配置CMN SAM时候配置，将一段内存映射到CCG 节点。