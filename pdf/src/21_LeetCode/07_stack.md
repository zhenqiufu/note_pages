## Stack

[toc]

### [20. 有效的括号](https://leetcode.cn/problems/valid-parentheses/) { .unnumbered .unlisted }

给定一个只包括 `'('`，`')'`，`'{'`，`'}'`，`'['`，`']'` 的字符串 `s` ，判断字符串是否有效。

要按照正确顺序闭合，这个是不符合要求的 `([{])}` 虽然能拼成对，但是不符合顺序。

左括号入栈，右括号检查，如何配对成功就弹出来，失败就返回。最后看栈是否为空就可以了。

````c++
class Solution {
public:
    bool isValid(string s) {
        int n = s.size();
        if (n % 2 == 1) {  // 如果字符串长度为奇数，直接返回 false
            return false;
        }

        // 定义括号匹配的映射关系
        unordered_map<char, char> pairs = {
            {')', '('},
            {']', '['},
            {'}', '{'}
        };
        
        stack<char> stk;  // 使用栈来辅助匹配

        // 遍历字符串中的每个字符
        for (char ch: s) {
            if (pairs.count(ch)) {  // 如果是右括号
                // 如果栈为空或者栈顶元素与当前字符不匹配，返回 false
                if (stk.empty() || stk.top() != pairs[ch]) {
                    return false;  
                }
                stk.pop();  // 匹配成功，弹出栈顶元素
            } else {
                stk.push(ch);  // 如果是左括号，压入栈中
            }
        }

        return stk.empty();  // 最后判断栈是否为空
    }
};

````

### [155. 最小栈](https://leetcode.cn/problems/min-stack/) { .unnumbered .unlisted }

设计一个支持 `push` ，`pop` ，`top` 操作，并能在常数时间内检索到最小元素的栈。

使用一个辅助的栈，每次压栈的时候，同时向着栈也压一个，压的是当前值和栈顶值。

返回时候，就可以直接从这个辅助栈的栈顶拿值。

````c++
class MinStack {
public:
    stack<int> x_stack;
    stack<int> min_stack;

    MinStack() {
        min_stack.push(INT_MAX);
    }
    
    void push(int val) {
        x_stack.push(val);
        min_stack.push(min(min_stack.top(), val));
    }
    
    void pop() {
        x_stack.pop();
        min_stack.pop();
    }
    
    int top() {
        return x_stack.top();
    }
    
    int getMin() {
        return min_stack.top();
    }
};

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack* obj = new MinStack();
 * obj->push(val);
 * obj->pop();
 * int param_3 = obj->top();
 * int param_4 = obj->getMin();
 */
````

### [394. 字符串解码](https://leetcode.cn/problems/decode-string/) { .unnumbered .unlisted }

````
输入：s = "3[a]2[bc]"
输出："aaabcbc"
````

````c++
string decodeString(string s) {
    string ans = "";  // 存储最终解码结果的字符串

    stack<int> num_stk;     // 存储重复次数的栈
    stack<string> str_stk;  // 存储字符串的栈

    int temp_num = 0;       // 临时存储多位数数字的变量
    int len_s = s.size();   // 输入字符串的长度

    for (int i = 0; i < len_s; i++) {
        if (isdigit(s[i])) {
            temp_num = temp_num * 10 + s[i] - '0';  // 处理多位数数字
        } else if (isalpha(s[i])) {
            ans = ans + s[i];  // 将字母直接添加到结果中
        } else if (s[i] == '[') {
            num_stk.push(temp_num);     // 将累积的数字压入栈
            temp_num = 0;               // 重置 temp_num
            str_stk.push(ans);          // 将当前的 ans 压入栈
            ans = "";                   // 重置 ans，准备处理括号内的子串
        } else if (s[i] == ']') {
            int times = num_stk.top();      // 获取重复次数
            num_stk.pop();                  // 弹出栈顶的重复次数
            string temp = str_stk.top();    // 获取之前保存的上下文
            str_stk.pop();                  // 弹出栈顶的上下文

            // 将 ans 重复 times 次并添加到 temp 中
            for (int j = 0; j < times; ++j) {
                temp += ans;
            }
            
            ans = temp;  // 更新 ans 为重复后的结果
        }
    }
    
    return ans;  // 返回解码后的最终结果
}

````

### [739. 每日温度](https://leetcode.cn/problems/daily-temperatures/) { .unnumbered .unlisted }

````
输入: temperatures = [73,74,75,71,69,72,76,73]
输出: [1,1,4,2,1,1,0,0]
````

维护一个递减栈，每来一个新元素，就和栈顶的比较，大于栈顶元素，就算差，然后弹出栈顶，小于就入栈。

````c++
vector<int> dailyTemperatures(vector<int>& temperatures) {
    int n = temperatures.size();  // 获取温度数组的长度
    
    vector<int> ans(n, 0);  // 初始化存放结果的数组，初始值为0
    stack<int> st;  // 定义一个栈来存放温度数组的下标
    
    for (int i = 0; i < temperatures.size(); i++) {
        // 当栈非空且当前温度大于栈顶温度时，说明找到了一个比栈顶温度高的温度
        while (!st.empty() && temperatures[i] > temperatures[st.top()]) {
            auto t = st.top();  // 获取栈顶温度的下标
            st.pop();  // 弹出栈顶温度的下标
            ans[t] = i - t;  // 计算栈顶温度到当前温度的距离，即结果数组中的值
        }
        st.push(i);  // 将当前温度的下标压入栈中
    }
    
    return ans;  // 返回存放结果的数组
}

````