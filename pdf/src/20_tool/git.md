## Git

### 解决git bash 中git status不能显示中文 { .unnumbered .unlisted }

将git 配置文件 `core.quotepath`项设置为false。
quotepath表示引用路径
加上`--global`表示全局配置

git bash 终端输入命令：

````csharp
git config --global core.quotepath false
````