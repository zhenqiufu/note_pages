## 双指针

[toc]

### [283. 移动零](https://leetcode.cn/problems/move-zeroes/) { .unnumbered .unlisted }

给定一个数组 `nums`，编写一个函数将所有 `0` 移动到数组的末尾，同时保持非零元素的相对顺序。

````
输入: nums = [0,1,0,3,12]
输出: [1,3,12,0,0]
````

如果数组没有0，那么快慢指针始终指向同一个位置，每个位置自己和自己交换；如果数组有0，快指针先走一步，此时慢指针对应的就是0，所以要交换。

````c++
class Solution {
public:
    void moveZeroes(vector<int>& nums) {
        int n = nums.size(), left = 0, right = 0;
        while (right < n) {
            if (nums[right]) {
                swap(nums[left], nums[right]);
                left++;
            }
            right++;
        }
    }
};

````

### [11. 盛最多水的容器](https://leetcode.cn/problems/container-with-most-water/) { .unnumbered .unlisted }

````c++
class Solution {
public:
    // 使用双指针法求解能够形成的最大面积的容器问题
    int maxArea(vector<int>& height) {
        int left = 0, right = height.size() - 1;  // 初始化左右指针
        int maxArea = 0;  // 初始化最大面积为0

        // 循环直到左右指针相遇
        while (left < right) {
            // 计算当前左右指针形成的容器的面积
            int currentArea = (right - left) * min(height[left], height[right]);
            // 更新最大面积
            maxArea = max(maxArea, currentArea);

            // 移动指针：移动高度较小的指针，以寻找可能的更大面积
            if (height[left] < height[right]) {
                left++;
            } else {
                right--;
            }
        }

        return maxArea;  // 返回最大面积
    }
};

````

### [15. 三数之和](https://leetcode.cn/problems/3sum/) { .unnumbered .unlisted }