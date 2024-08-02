## C basic

[toc]

C语言关键字

static 作用

extern 作用

结构体联合体区别

C语言压栈过程

C语言内存布局

#### C语言定义全局变量冲突 { .unnumbered .unlisted }

如果你在头文件中定义一个全局变量，并在多个源文件中包含该头文件，那么每个源文件都会创建该变量的一个副本。这将导致编译错误，因为 C 语言不允许多个定义同名的全局变量。

![image-20240729163935134](book/pdf/src/21_LeetCode/images/c_basic/image-20240729163935134.png)

#### C语言区分大小端 { .unnumbered .unlisted }

````c
#include <stdio.h>

int check_endianness() {
    union {
        unsigned int i;
        unsigned char c[4];
    } test_union;

    test_union.i = 0x01020304;

    if (test_union.c[0] == 1) {
        return 1; // 大端
    } else {
        return 0; // 小端
    }
}

int main() {
    if (check_endianness()) {
        printf("大端 (Big-endian)\n");
    } else {
        printf("小端 (Little-endian)\n");
    }
    return 0;
}

````

test_union.i 被赋值为 0x01020304。这是一个32位的整数，包含4个字节。

如果系统是大端序（Big-endian），那么内存中存储的顺序为：01 02 03 04。

如果系统是小端序（Little-endian），那么内存中存储的顺序为：04 03 02 01。

#### 统计64无符号整形中0、1的个数 { .unnumbered .unlisted }

Brian Kernighan算法可以用于清除二进制数中最右侧的1。

Brian Kernighan算法的做法是先将当前数减一，然后在与当前数进行按位与运算。

````
x=x&(x-1)
````

![image-20240729164839182](book/pdf/src/21_LeetCode/images/c_basic/image-20240729164839182.png)

````c
#include <stdio.h>
#include <stdint.h>

void count_bits(uint64_t number, int *count_zeros, int *count_ones) {
    *count_ones = 0;
    while (number) {
        number &= (number - 1);
        (*count_ones)++;
    }
    *count_zeros = 64 - *count_ones;
}

int main() {
    uint64_t number = 0b11010101;  // 示例数
    int count_zeros, count_ones;
    count_bits(number, &count_zeros, &count_ones);
    printf("Number of 0s: %d, Number of 1s: %d\n", count_zeros, count_ones);
    return 0;
}
````

#### MSB LSB { .unnumbered .unlisted }

统计64位无符号整数中最高有效位（Highest Significant Bit, MSB）和最低有效位（Least Significant Bit, LSB）的位位置

````c
#include <stdio.h>
#include <stdint.h>

// 找到最低有效位（LSB）的位置
int find_lsb(uint64_t number) {
    if (number == 0) return -1;  // 如果数是0，没有有效位
    int position = 0;
    while ((number & 1) == 0) {
        number >>= 1;
        position++;
    }
    return position;
}

// 找到最高有效位（MSB）的位置
int find_msb(uint64_t number) {
    if (number == 0) return -1;  // 如果数是0，没有有效位
    int position = 63;
    while ((number & (1ULL << position)) == 0) {
        position--;
    }
    return position;
}

int main() {
    uint64_t number = 0b11010101;  // 示例数
    int lsb_position = find_lsb(number);
    int msb_position = find_msb(number);

    if (lsb_position != -1) {
        printf("LSB position: %d\n", lsb_position);
    } else {
        printf("The number has no LSB (number is 0).\n");
    }

    if (msb_position != -1) {
        printf("MSB position: %d\n", msb_position);
    } else {
        printf("The number has no MSB (number is 0).\n");
    }

    return 0;
}

````

#### memory copy { .unnumbered .unlisted }

````c

561 void *memcpy(void *dest, const void *src, size_t count)
562 {
563         char *tmp = dest;
564         const char *s = src;
565 
566         while (count--)
567                 *tmp++ = *s++;
568         return dest;
569 }
````