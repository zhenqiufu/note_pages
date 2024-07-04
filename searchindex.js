Object.assign(window.search, {"doc_urls":["index.html#mynote","01_体系结构/index.html#体系结构","02_AMBA/index.html#amba","02_AMBA/AXI.html#axi","02_AMBA/CHI.html#chi","03_PCIe/index.html#pcie","03_PCIe/index.html#pcie","03_PCIe/00_PCIe协议/physical_layer.html#物理层","03_PCIe/00_PCIe协议/数据链路层.html#数据链路层","03_PCIe/00_PCIe协议/TransactionLayer.html#transaction-layer","03_PCIe/01_PCIe子系统简介/index.html#arm-n2-pcie子系统简介","03_PCIe/02_PCIe枚举与资源分配/index.html#pcie-枚举与资源分配","03_PCIe/03_PCIe高级特性/index.html#pcie-高级特性","03_PCIe/03_PCIe高级特性/PCIe_AER.html#pcie-aer","03_PCIe/03_PCIe高级特性/PCIe_Interrupt.html#pcie-interrupt","03_PCIe/03_PCIe高级特性/PCIe_Hot_Plug.html#pcie-hot-plug","03_PCIe/03_PCIe高级特性/PCIe_Power_management.html#pcie-power-management","04_Silicon_IP/index.html#silicon-ip","05_LeetCode/LeetCode.html#leetcode","05_LeetCode/LeetCode.html#二分法"],"index":{"documentStore":{"docInfo":{"0":{"body":0,"breadcrumbs":2,"title":1},"1":{"body":0,"breadcrumbs":0,"title":0},"10":{"body":0,"breadcrumbs":7,"title":3},"11":{"body":0,"breadcrumbs":3,"title":1},"12":{"body":0,"breadcrumbs":3,"title":1},"13":{"body":0,"breadcrumbs":6,"title":2},"14":{"body":0,"breadcrumbs":6,"title":2},"15":{"body":0,"breadcrumbs":8,"title":3},"16":{"body":0,"breadcrumbs":8,"title":3},"17":{"body":0,"breadcrumbs":4,"title":2},"18":{"body":5,"breadcrumbs":2,"title":1},"19":{"body":235,"breadcrumbs":1,"title":0},"2":{"body":0,"breadcrumbs":2,"title":1},"3":{"body":0,"breadcrumbs":3,"title":1},"4":{"body":0,"breadcrumbs":3,"title":1},"5":{"body":0,"breadcrumbs":2,"title":1},"6":{"body":0,"breadcrumbs":2,"title":1},"7":{"body":2,"breadcrumbs":1,"title":0},"8":{"body":0,"breadcrumbs":4,"title":0},"9":{"body":0,"breadcrumbs":5,"title":2}},"docs":{"0":{"body":"","breadcrumbs":"MyNote » MyNote","id":"0","title":"MyNote"},"1":{"body":"","breadcrumbs":"体系结构 » 体系结构","id":"1","title":"体系结构"},"10":{"body":"","breadcrumbs":"PCIe » ARM N2 PCIe子系统简介 » ARM N2 PCIe子系统简介","id":"10","title":"ARM N2 PCIe子系统简介"},"11":{"body":"","breadcrumbs":"PCIe » PCIe 枚举与资源分配 » PCIe 枚举与资源分配","id":"11","title":"PCIe 枚举与资源分配"},"12":{"body":"","breadcrumbs":"PCIe » PCIe 高级特性 » PCIe 高级特性","id":"12","title":"PCIe 高级特性"},"13":{"body":"","breadcrumbs":"PCIe » PCIe 高级特性 » PCIe AER » PCIe AER","id":"13","title":"PCIe AER"},"14":{"body":"","breadcrumbs":"PCIe » PCIe 高级特性 » PCIe Interrupt » PCIe Interrupt","id":"14","title":"PCIe Interrupt"},"15":{"body":"","breadcrumbs":"PCIe » PCIe 高级特性 » PCIe Hot-Plug » PCIe Hot-Plug","id":"15","title":"PCIe Hot-Plug"},"16":{"body":"","breadcrumbs":"PCIe » PCIe 高级特性 » PCIe Power Management » PCIe Power Management","id":"16","title":"PCIe Power Management"},"17":{"body":"","breadcrumbs":"Silicon IP » Silicon IP","id":"17","title":"Silicon IP"},"18":{"body":"[toc] 二分法 35. 搜索插入位置 74. 搜索二维矩阵 34. 在排序数组中查找元素的第一个和最后一个位置 33. 搜索旋转排序数组 记录自己做过的一些题，方便复习。","breadcrumbs":"LeetCode » LeetCode","id":"18","title":"LeetCode"},"19":{"body":"35. 搜索插入位置 while 循环，有四中情况，在左、在右、找到了，没找到。 注意mid的特殊计算方法。 注意区间折半时候加一减一。 class Solution {\npublic: int searchInsert(vector<int>& nums, int target) { int left = 0; int right = nums.size() - 1; while(left<=right) { // 防止整数溢出，left + right 可能超过int max // 使用这种算法想到与，左边加上二者一半的差值 int mid = left + ((right -left) >> 1); if (nums[mid] > target) { // 在左边 right = mid - 1; } else if (nums[mid] < target) { // 在右边 left = mid + 1; } else if (nums[mid] = target) { return mid; } else { // return left + 1; } } //没找到 return left; }\n}; 74. 搜索二维矩阵 方式一：直接两层for循环，注意先行后列； 方法二：二分查找， 注意将mid换算成二维位置 ； class Solution {\npublic: bool searchMatrix(vector<vector<int>>& matrix, int target) { int left = 0; int right = matrix.size() * matrix[0].size() - 1; while (left <= right) { int mid = left + ((right - left) >> 1); int mid_value = matrix[mid/matrix[0].size()][mid%matrix[0].size()]; // printf(\"%d \\n\", mid_value); if (target == mid_value) { return true; } else if (target > mid_value) { //right left = mid + 1; } else { right = mid - 1; } } // for (int x = 0; x < matrix.size(); x++) { // for (int y = 0; y < matrix[0].size(); y++) { // // printf(\"x-y: %d - %d ： %d\\n\", x, y, matrix[x][y]); // if (target == matrix[x][y]) { // return true; // } // } // } return false; }\n}; 34. 在排序数组中查找元素的第一个和最后一个位置 数组有序，用二分； 找两个位置，用两次二分，注意如果中间的就是目标值，需要继续往左或者右寻找，因为这个不一定是最靠边的； class Solution {\npublic: vector<int> ans; vector<int> searchRange(vector<int>& nums, int target) { int left = 0; int right = nums.size() - 1; int first = -1; int last = -1; // 这段不用也行 if (nums.size() == 0) { ans.push_back(-1); ans.push_back(-1); return ans; } while (left<=right) { /* code */ int mid = left + ((right - left) >> 1); if (nums[mid] == target){ first = mid; right = mid -1; } else if (nums[mid] > target) { // right = mid -1; } else { left = mid + 1; } } left = 0; right = nums.size() - 1; while (left<=right) { /* code */ int mid = left + ((right - left) >> 1); if (nums[mid] == target){ last = mid; left = mid +1; } else if (nums[mid] > target) { // right = mid -1; } else { left = mid + 1; } } ans.push_back(first); ans.push_back(last); return ans; }\n}; 33. 搜索旋转排序数组 部分有序，也可以用二分法； 先判断哪部分有序，在么一部分内部继续二分查找； 注意要包括左右两边的数字； class Solution {\npublic: int search(vector<int>& nums, int target) { int left=0,right=nums.size()-1; while(left<=right){ int mid=left+(right-left)/2; if(target==nums[mid]) return mid; // 左边是有序的 if(nums[left]<=nums[mid]){ // 在左半部分，继续应用二分查找 if(target>=nums[left]&&target<nums[mid]){ right=mid-1; }else{ // 在右半部分 left=mid+1; } }else{ // 右边是有序的 if(target>nums[mid]&&target<=nums[right]){ left=mid+1; }else{ right=mid-1; } } } return -1; }\n};","breadcrumbs":"LeetCode » 二分法","id":"19","title":"二分法"},"2":{"body":"","breadcrumbs":"AMBA » AMBA","id":"2","title":"AMBA"},"3":{"body":"","breadcrumbs":"AMBA » AXI » AXI","id":"3","title":"AXI"},"4":{"body":"","breadcrumbs":"AMBA » CHI » CHI","id":"4","title":"CHI"},"5":{"body":"","breadcrumbs":"PCIe » PCIe","id":"5","title":"PCIe"},"6":{"body":"","breadcrumbs":"PCIe » 协议学习 » PCIe","id":"6","title":"PCIe"},"7":{"body":"image-20240704095625749","breadcrumbs":"PCIe » 协议学习 » 物理层 » 物理层","id":"7","title":"物理层"},"8":{"body":"","breadcrumbs":"PCIe » 协议学习 » Data Link Layer » 数据链路层","id":"8","title":"数据链路层"},"9":{"body":"","breadcrumbs":"PCIe » 协议学习 » Transaction Layer » Transaction Layer","id":"9","title":"Transaction Layer"}},"length":20,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"0":{"df":1,"docs":{"19":{"tf":2.6457513110645907}}},"1":{"df":1,"docs":{"19":{"tf":5.196152422706632}}},"2":{"0":{"2":{"4":{"0":{"7":{"0":{"4":{"0":{"9":{"5":{"6":{"2":{"5":{"7":{"4":{"9":{"df":1,"docs":{"7":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"3":{"3":{"df":2,"docs":{"18":{"tf":1.0},"19":{"tf":1.0}}},"4":{"df":2,"docs":{"18":{"tf":1.0},"19":{"tf":1.0}}},"5":{"df":2,"docs":{"18":{"tf":1.0},"19":{"tf":1.0}}},"df":0,"docs":{}},"7":{"4":{"df":2,"docs":{"18":{"tf":1.0},"19":{"tf":1.0}}},"df":0,"docs":{}},"a":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"13":{"tf":1.0}}}},"m":{"b":{"a":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"n":{"df":1,"docs":{"19":{"tf":1.7320508075688772}},"s":{".":{"df":0,"docs":{},"p":{"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"_":{"b":{"a":{"c":{"df":0,"docs":{},"k":{"(":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"19":{"tf":1.0}}}}}}},"l":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"19":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":1,"docs":{"19":{"tf":1.4142135623730951}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"m":{"df":1,"docs":{"10":{"tf":1.0}}}},"x":{"df":0,"docs":{},"i":{"df":1,"docs":{"3":{"tf":1.0}}}}},"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":1,"docs":{"19":{"tf":1.0}}}}}},"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.0}}}},"l":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"19":{"tf":2.0}}}}},"df":0,"docs":{}},"o":{"d":{"df":0,"docs":{},"e":{"df":1,"docs":{"19":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"d":{"\\":{"df":0,"docs":{},"n":{"df":1,"docs":{"19":{"tf":1.0}}}},"df":1,"docs":{"19":{"tf":1.4142135623730951}}},"df":0,"docs":{},"f":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"s":{"df":1,"docs":{"19":{"tf":1.0}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"19":{"tf":1.4142135623730951}}}}}}},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":1,"docs":{"15":{"tf":1.0}}}}},"i":{"df":0,"docs":{},"f":{"(":{"df":0,"docs":{},"n":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":0,"docs":{},"s":{"[":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"t":{"]":{"<":{"=":{"df":0,"docs":{},"n":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":0,"docs":{},"s":{"[":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"19":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}},"t":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"=":{"=":{"df":0,"docs":{},"n":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":0,"docs":{},"s":{"[":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"19":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}},">":{"=":{"df":0,"docs":{},"n":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":0,"docs":{},"s":{"[":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"t":{"]":{"&":{"&":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"<":{"df":0,"docs":{},"n":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":0,"docs":{},"s":{"[":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"19":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{},"n":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":0,"docs":{},"s":{"[":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"d":{"]":{"&":{"&":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"<":{"=":{"df":0,"docs":{},"n":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":0,"docs":{},"s":{"[":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":0,"docs":{},"t":{"df":1,"docs":{"19":{"tf":1.0}}}}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"m":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"7":{"tf":1.0}}}},"df":0,"docs":{}},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"19":{"tf":4.898979485566356}},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"u":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":1,"docs":{"14":{"tf":1.0}}}}}}}}}},"p":{"df":1,"docs":{"17":{"tf":1.0}}}},"l":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"19":{"tf":1.4142135623730951}}}},"y":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"9":{"tf":1.0}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"c":{"df":0,"docs":{},"o":{"d":{"df":1,"docs":{"18":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"f":{"df":0,"docs":{},"t":{")":{"/":{"2":{"df":1,"docs":{"19":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"<":{"=":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":0,"docs":{},"t":{"df":1,"docs":{"19":{"tf":1.4142135623730951}}}}}}}},"df":0,"docs":{}},"=":{"0":{",":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":0,"docs":{},"t":{"=":{"df":0,"docs":{},"n":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":0,"docs":{},"s":{".":{"df":0,"docs":{},"s":{"df":1,"docs":{"19":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}},"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"d":{"+":{"1":{"df":1,"docs":{"19":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":1,"docs":{"19":{"tf":4.58257569495584}}}}}},"m":{"a":{"df":0,"docs":{},"n":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"16":{"tf":1.0}}}},"df":0,"docs":{}},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"x":{".":{"df":0,"docs":{},"s":{"df":1,"docs":{"19":{"tf":1.4142135623730951}}}},"[":{"0":{"]":{".":{"df":0,"docs":{},"s":{"df":1,"docs":{"19":{"tf":1.4142135623730951}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"d":{"/":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"x":{"[":{"0":{"]":{".":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"z":{"df":0,"docs":{},"e":{"(":{")":{"]":{"[":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"d":{"%":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"x":{"[":{"0":{"]":{".":{"df":0,"docs":{},"s":{"df":1,"docs":{"19":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}},"x":{"]":{"[":{"df":0,"docs":{},"i":{"df":1,"docs":{"19":{"tf":1.4142135623730951}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":1,"docs":{"19":{"tf":1.0}}}}}},"x":{"df":1,"docs":{"19":{"tf":1.0}}}},"df":0,"docs":{},"i":{"d":{"=":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"t":{"+":{"(":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":0,"docs":{},"t":{"df":1,"docs":{"19":{"tf":1.0}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"_":{"df":0,"docs":{},"v":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"df":1,"docs":{"19":{"tf":2.0}}}}},"df":0,"docs":{}}},"df":1,"docs":{"19":{"tf":4.47213595499958}}},"df":0,"docs":{}},"y":{"df":0,"docs":{},"n":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"n":{"2":{"df":1,"docs":{"10":{"tf":1.0}}},"df":1,"docs":{"19":{"tf":1.0}},"u":{"df":0,"docs":{},"m":{"df":1,"docs":{"19":{"tf":1.7320508075688772}},"s":{".":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"z":{"df":1,"docs":{"19":{"tf":2.0}}}}}},"[":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"19":{"tf":2.6457513110645907}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}},"p":{"c":{"df":0,"docs":{},"i":{"df":0,"docs":{},"e":{"df":9,"docs":{"10":{"tf":1.0},"11":{"tf":1.0},"12":{"tf":1.0},"13":{"tf":1.0},"14":{"tf":1.0},"15":{"tf":1.0},"16":{"tf":1.0},"5":{"tf":1.0},"6":{"tf":1.0}}}}},"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"df":0,"docs":{},"g":{"df":1,"docs":{"15":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"w":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"16":{"tf":1.0}}}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"f":{"(":{"\"":{"%":{"d":{"df":1,"docs":{"19":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{},"x":{"df":1,"docs":{"19":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"u":{"b":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"19":{"tf":2.0}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":1,"docs":{"19":{"tf":3.1622776601683795}}}}}}},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":0,"docs":{},"t":{"=":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"19":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}},"df":1,"docs":{"19":{"tf":4.0}}}}}}},"s":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"r":{"c":{"df":0,"docs":{},"h":{"(":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"<":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"19":{"tf":1.0}}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"(":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"<":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"19":{"tf":1.0}}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}}}},"m":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"x":{"(":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"<":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"<":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"19":{"tf":1.0}}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}},"r":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"(":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"<":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"19":{"tf":1.0}}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"17":{"tf":1.0}}}}},"df":0,"docs":{}}}},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"19":{"tf":2.0}}}}}}},"t":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"19":{"tf":3.7416573867739413}}}}}}},"df":0,"docs":{},"o":{"c":{"df":1,"docs":{"18":{"tf":1.0}}},"df":0,"docs":{}},"r":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"a":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"9":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"df":1,"docs":{"19":{"tf":1.4142135623730951}}}}}},"v":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"<":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"19":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}},"w":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"(":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"t":{"<":{"=":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":0,"docs":{},"t":{"df":1,"docs":{"19":{"tf":1.4142135623730951}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}}},"x":{"df":1,"docs":{"19":{"tf":2.0}}},"y":{"df":1,"docs":{"19":{"tf":2.23606797749979}}}}},"breadcrumbs":{"root":{"0":{"df":1,"docs":{"19":{"tf":2.6457513110645907}}},"1":{"df":1,"docs":{"19":{"tf":5.196152422706632}}},"2":{"0":{"2":{"4":{"0":{"7":{"0":{"4":{"0":{"9":{"5":{"6":{"2":{"5":{"7":{"4":{"9":{"df":1,"docs":{"7":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"3":{"3":{"df":2,"docs":{"18":{"tf":1.0},"19":{"tf":1.0}}},"4":{"df":2,"docs":{"18":{"tf":1.0},"19":{"tf":1.0}}},"5":{"df":2,"docs":{"18":{"tf":1.0},"19":{"tf":1.0}}},"df":0,"docs":{}},"7":{"4":{"df":2,"docs":{"18":{"tf":1.0},"19":{"tf":1.0}}},"df":0,"docs":{}},"a":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"13":{"tf":1.7320508075688772}}}},"m":{"b":{"a":{"df":3,"docs":{"2":{"tf":1.7320508075688772},"3":{"tf":1.0},"4":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"n":{"df":1,"docs":{"19":{"tf":1.7320508075688772}},"s":{".":{"df":0,"docs":{},"p":{"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"_":{"b":{"a":{"c":{"df":0,"docs":{},"k":{"(":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"19":{"tf":1.0}}}}}}},"l":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"19":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":1,"docs":{"19":{"tf":1.4142135623730951}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"m":{"df":1,"docs":{"10":{"tf":1.7320508075688772}}}},"x":{"df":0,"docs":{},"i":{"df":1,"docs":{"3":{"tf":1.7320508075688772}}}}},"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":1,"docs":{"19":{"tf":1.0}}}}}},"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.7320508075688772}}}},"l":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"19":{"tf":2.0}}}}},"df":0,"docs":{}},"o":{"d":{"df":0,"docs":{},"e":{"df":1,"docs":{"19":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"d":{"\\":{"df":0,"docs":{},"n":{"df":1,"docs":{"19":{"tf":1.0}}}},"a":{"df":0,"docs":{},"t":{"a":{"df":1,"docs":{"8":{"tf":1.0}}},"df":0,"docs":{}}},"df":1,"docs":{"19":{"tf":1.4142135623730951}}},"df":0,"docs":{},"f":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"s":{"df":1,"docs":{"19":{"tf":1.0}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"19":{"tf":1.4142135623730951}}}}}}},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":1,"docs":{"15":{"tf":1.7320508075688772}}}}},"i":{"df":0,"docs":{},"f":{"(":{"df":0,"docs":{},"n":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":0,"docs":{},"s":{"[":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"t":{"]":{"<":{"=":{"df":0,"docs":{},"n":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":0,"docs":{},"s":{"[":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"19":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}},"t":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"=":{"=":{"df":0,"docs":{},"n":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":0,"docs":{},"s":{"[":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"19":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}},">":{"=":{"df":0,"docs":{},"n":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":0,"docs":{},"s":{"[":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"t":{"]":{"&":{"&":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"<":{"df":0,"docs":{},"n":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":0,"docs":{},"s":{"[":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"19":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{},"n":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":0,"docs":{},"s":{"[":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"d":{"]":{"&":{"&":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"<":{"=":{"df":0,"docs":{},"n":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":0,"docs":{},"s":{"[":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":0,"docs":{},"t":{"df":1,"docs":{"19":{"tf":1.0}}}}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"m":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"7":{"tf":1.0}}}},"df":0,"docs":{}},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"19":{"tf":4.898979485566356}},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"u":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":1,"docs":{"14":{"tf":1.7320508075688772}}}}}}}}}},"p":{"df":1,"docs":{"17":{"tf":1.7320508075688772}}}},"l":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"19":{"tf":1.4142135623730951}}}},"y":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":2,"docs":{"8":{"tf":1.0},"9":{"tf":1.7320508075688772}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"c":{"df":0,"docs":{},"o":{"d":{"df":2,"docs":{"18":{"tf":1.7320508075688772},"19":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"f":{"df":0,"docs":{},"t":{")":{"/":{"2":{"df":1,"docs":{"19":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"<":{"=":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":0,"docs":{},"t":{"df":1,"docs":{"19":{"tf":1.4142135623730951}}}}}}}},"df":0,"docs":{}},"=":{"0":{",":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":0,"docs":{},"t":{"=":{"df":0,"docs":{},"n":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":0,"docs":{},"s":{".":{"df":0,"docs":{},"s":{"df":1,"docs":{"19":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}},"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"d":{"+":{"1":{"df":1,"docs":{"19":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":1,"docs":{"19":{"tf":4.58257569495584}}}}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"k":{"df":1,"docs":{"8":{"tf":1.0}}}}}},"m":{"a":{"df":0,"docs":{},"n":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"16":{"tf":1.7320508075688772}}}},"df":0,"docs":{}},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"x":{".":{"df":0,"docs":{},"s":{"df":1,"docs":{"19":{"tf":1.4142135623730951}}}},"[":{"0":{"]":{".":{"df":0,"docs":{},"s":{"df":1,"docs":{"19":{"tf":1.4142135623730951}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"d":{"/":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"x":{"[":{"0":{"]":{".":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"z":{"df":0,"docs":{},"e":{"(":{")":{"]":{"[":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"d":{"%":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"x":{"[":{"0":{"]":{".":{"df":0,"docs":{},"s":{"df":1,"docs":{"19":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}},"x":{"]":{"[":{"df":0,"docs":{},"i":{"df":1,"docs":{"19":{"tf":1.4142135623730951}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":1,"docs":{"19":{"tf":1.0}}}}}},"x":{"df":1,"docs":{"19":{"tf":1.0}}}},"df":0,"docs":{},"i":{"d":{"=":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"t":{"+":{"(":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":0,"docs":{},"t":{"df":1,"docs":{"19":{"tf":1.0}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"_":{"df":0,"docs":{},"v":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"df":1,"docs":{"19":{"tf":2.0}}}}},"df":0,"docs":{}}},"df":1,"docs":{"19":{"tf":4.47213595499958}}},"df":0,"docs":{}},"y":{"df":0,"docs":{},"n":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.7320508075688772}}}}}}},"n":{"2":{"df":1,"docs":{"10":{"tf":1.7320508075688772}}},"df":1,"docs":{"19":{"tf":1.0}},"u":{"df":0,"docs":{},"m":{"df":1,"docs":{"19":{"tf":1.7320508075688772}},"s":{".":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"z":{"df":1,"docs":{"19":{"tf":2.0}}}}}},"[":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"19":{"tf":2.6457513110645907}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}},"p":{"c":{"df":0,"docs":{},"i":{"df":0,"docs":{},"e":{"df":12,"docs":{"10":{"tf":2.0},"11":{"tf":2.0},"12":{"tf":2.0},"13":{"tf":2.23606797749979},"14":{"tf":2.23606797749979},"15":{"tf":2.23606797749979},"16":{"tf":2.23606797749979},"5":{"tf":1.7320508075688772},"6":{"tf":1.7320508075688772},"7":{"tf":1.0},"8":{"tf":1.0},"9":{"tf":1.0}}}}},"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"df":0,"docs":{},"g":{"df":1,"docs":{"15":{"tf":1.7320508075688772}}}}},"o":{"df":0,"docs":{},"w":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"16":{"tf":1.7320508075688772}}}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"f":{"(":{"\"":{"%":{"d":{"df":1,"docs":{"19":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{},"x":{"df":1,"docs":{"19":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"u":{"b":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"19":{"tf":2.0}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":1,"docs":{"19":{"tf":3.1622776601683795}}}}}}},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":0,"docs":{},"t":{"=":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"19":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}},"df":1,"docs":{"19":{"tf":4.0}}}}}}},"s":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"r":{"c":{"df":0,"docs":{},"h":{"(":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"<":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"19":{"tf":1.0}}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"(":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"<":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"19":{"tf":1.0}}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}}}},"m":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"x":{"(":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"<":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"<":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"19":{"tf":1.0}}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}},"r":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"(":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"<":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"19":{"tf":1.0}}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"17":{"tf":1.7320508075688772}}}}},"df":0,"docs":{}}}},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"19":{"tf":2.0}}}}}}},"t":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"19":{"tf":3.7416573867739413}}}}}}},"df":0,"docs":{},"o":{"c":{"df":1,"docs":{"18":{"tf":1.0}}},"df":0,"docs":{}},"r":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"a":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"9":{"tf":1.7320508075688772}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"df":1,"docs":{"19":{"tf":1.4142135623730951}}}}}},"v":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"<":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"19":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}},"w":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"(":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"t":{"<":{"=":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":0,"docs":{},"t":{"df":1,"docs":{"19":{"tf":1.4142135623730951}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}}},"x":{"df":1,"docs":{"19":{"tf":2.0}}},"y":{"df":1,"docs":{"19":{"tf":2.23606797749979}}}}},"title":{"root":{"a":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"13":{"tf":1.0}}}},"m":{"b":{"a":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"r":{"df":0,"docs":{},"m":{"df":1,"docs":{"10":{"tf":1.0}}}},"x":{"df":0,"docs":{},"i":{"df":1,"docs":{"3":{"tf":1.0}}}}},"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":1,"docs":{"15":{"tf":1.0}}}}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"u":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":1,"docs":{"14":{"tf":1.0}}}}}}}}}},"p":{"df":1,"docs":{"17":{"tf":1.0}}}},"l":{"a":{"df":0,"docs":{},"y":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"9":{"tf":1.0}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"c":{"df":0,"docs":{},"o":{"d":{"df":1,"docs":{"18":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"m":{"a":{"df":0,"docs":{},"n":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"16":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{},"y":{"df":0,"docs":{},"n":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"n":{"2":{"df":1,"docs":{"10":{"tf":1.0}}},"df":0,"docs":{}},"p":{"c":{"df":0,"docs":{},"i":{"df":0,"docs":{},"e":{"df":9,"docs":{"10":{"tf":1.0},"11":{"tf":1.0},"12":{"tf":1.0},"13":{"tf":1.0},"14":{"tf":1.0},"15":{"tf":1.0},"16":{"tf":1.0},"5":{"tf":1.0},"6":{"tf":1.0}}}}},"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"df":0,"docs":{},"g":{"df":1,"docs":{"15":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"w":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"16":{"tf":1.0}}}}}}},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"17":{"tf":1.0}}}}},"df":0,"docs":{}}}}},"t":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"a":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"9":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}}},"lang":"English","pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}});