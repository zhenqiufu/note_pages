## Bit 运算

[toc]

[338. 比特位计数](https://leetcode.cn/problems/counting-bits/)

````c
vector<int> ans;
    int countOnes(int nums) {
        int numOnes = 0;
        while(nums){
            nums &= (nums - 1);
            numOnes++;
        }
        return numOnes;
    }
    vector<int> countBits(int n) {
        for (int index = 0; index <= n; index++) {
            ans.push_back(countOnes(index));
        }
        return ans;

    }
````

Brian Kernighan算法可以用于清除二进制数中最右侧的1。

Brian Kernighan算法的做法是先将当前数减一，然后在与当前数进行按位与运算。

````
x=x&(x-1)
````