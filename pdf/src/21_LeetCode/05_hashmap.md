## 哈希表

[toc]

### [1. 两数之和](https://leetcode.cn/problems/two-sum/) { .unnumbered .unlisted }

````
输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
````

一边查找，一边插入哈希表

````c++
class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map<int ,int> table;
        for (int i = 0; i < nums.size(); i++) {
            auto it = table.find(target - nums[i]);
            if (it != table.end()) {
                return {it->second, i};
            }

            table[nums[i]] = i;

        }

        return {};
        
    }
};
````

### [49. 字母异位词分组](https://leetcode.cn/problems/group-anagrams/) { .unnumbered .unlisted }

````
输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
输出: [["bat"],["nat","tan"],["ate","eat","tea"]]
````

````c++
class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {

        // 创建一个哈希表，key是排序后的字符串，value是不同顺序的字符串
        unordered_map<string, vector<string>> map;
        
        // 将所有字符串按顺序塞进哈希表
        for (auto str:strs){
            string key = str;
            sort(key.begin(), key.end());
            map[key].push_back(str);
        }

        // 从哈希表中将字符串倒腾出来，放进ans中
        vector<vector<string>> ans;
        for (auto it = map.begin(); it != map.end(); it++) {
            ans.push_back(it->second);
        }
        return ans;

    }
};
````

### [128. 最长连续序列](https://leetcode.cn/problems/longest-consecutive-sequence/) { .unnumbered .unlisted }

````
输入：nums = [100,4,200,1,3,2]
输出：4
解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。
````

````c++
class Solution {
public:
    int longestConsecutive(vector<int>& nums) {
        // 全都放进哈希表, 可以去除重复元素
        unordered_set<int> num_set;
        for (const int& num : nums) {
            num_set.insert(num);
        }

        int longestStreak = 0;

        for (const int& num : num_set) {
            // 如果 num - 1 不在 num_set 中，说明 num 是一个连续序列的起点。
            if (!num_set.count(num - 1)) {
                int currentNum = num;
                int currentStreak = 1;

                // 从 num 开始向后逐个查找连续的数字，直到找不到下一个数字为止，
                // 统计当前连续序列的长度 currentStreak。
                while (num_set.count(currentNum + 1)) {
                    currentNum += 1;
                    currentStreak += 1;
                }

                // 使用 max 函数更新 longestStreak，
                // 确保记录下最长的连续序列长度。
                longestStreak = max(longestStreak, currentStreak);
            }
        }

        return longestStreak;           
    }
};

````