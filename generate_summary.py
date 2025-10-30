import os
import re

def generate_summary(root_dir='.', ignore_dirs={'images'}, main_title="前言"):
    """
    移除标题中数字+下划线前缀（如07__），只保留核心文本作为标题
    """
    summary_path = os.path.join(root_dir, 'SUMMARY.md')
    
    # 清空并创建 SUMMARY.md
    with open(summary_path, 'w', encoding='utf-8') as f:
        f.write("# Summary\n\n")
        
        # 主标题链接
        main_readme_path = os.path.join(root_dir, 'readme.md')
        if os.path.exists(main_readme_path):
            f.write(f"- [{main_title}](readme.md)\n\n")
        else:
            f.write(f"- {main_title}\n\n")
    
    # 记录已处理的文件路径，避免重复
    processed_files = set()
    
    # 正则表达式：匹配以数字+下划线开头的前缀（如01__、02_等）
    # 匹配规则：1个或多个数字 + 1个或多个下划线，从字符串开头开始匹配
    prefix_pattern = re.compile(r'^\d+_+')
    
    # 递归扫描目录
    def scan(current_dir, indent_level, file_handle):
        indent = '  ' * indent_level
        
        # 1. 处理当前目录下的 .md 文件
        current_md_files = []
        for item in os.listdir(current_dir):
            item_path = os.path.join(current_dir, item)
            if (os.path.isfile(item_path) 
                and item.endswith('.md') 
                and item != 'SUMMARY.md' 
                and item.lower() != 'readme.md'
                and item_path not in processed_files):
                current_md_files.append(item)
                processed_files.add(item_path)
        
        # 写入当前目录文件（移除标题前缀）
        for md_file in sorted(current_md_files):
            # 移除文件名中的数字+下划线前缀
            title_raw = os.path.splitext(md_file)[0]
            title_clean = prefix_pattern.sub('', title_raw)  # 核心：替换前缀为空
            title_with_space = title_clean.replace('_', ' ')  # 下划线换空格
            rel_path = os.path.relpath(os.path.join(current_dir, md_file), root_dir).replace(os.sep, '/')
            file_handle.write(f"{indent}- [{title_with_space}]({rel_path})\n")
        
        # 2. 处理子文件夹
        subdirs = [
            item for item in os.listdir(current_dir)
            if os.path.isdir(os.path.join(current_dir, item)) 
            and item not in ignore_dirs
        ]
        
        for subdir in sorted(subdirs):
            subdir_path = os.path.join(current_dir, subdir)
            readme_path = os.path.join(subdir_path, 'readme.md')
            
            # 文件夹标题：移除数字+下划线前缀
            subdir_clean = prefix_pattern.sub('', subdir)  # 核心：替换前缀为空
            subdir_title = subdir_clean.replace('_', ' ')  # 下划线换空格
            
            # 写入文件夹标题链接
            if os.path.exists(readme_path):
                rel_readme = os.path.relpath(readme_path, root_dir).replace(os.sep, '/')
                file_handle.write(f"{indent}- [{subdir_title}]({rel_readme})\n")
            else:
                file_handle.write(f"{indent}- {subdir_title}\n")
            
            # 3. 处理子文件夹内的 .md 文件
            sub_md_files = []
            for item in os.listdir(subdir_path):
                item_path = os.path.join(subdir_path, item)
                if (os.path.isfile(item_path) 
                    and item.endswith('.md') 
                    and item != 'SUMMARY.md' 
                    and item.lower() != 'readme.md'
                    and item_path not in processed_files):
                    sub_md_files.append(item)
                    processed_files.add(item_path)
            
            # 写入子文件夹内的文件（移除标题前缀）
            for md_file in sorted(sub_md_files):
                title_raw = os.path.splitext(md_file)[0]
                title_clean = prefix_pattern.sub('', title_raw)  # 移除前缀
                title_with_space = title_clean.replace('_', ' ')  # 下划线换空格
                rel_path = os.path.relpath(os.path.join(subdir_path, md_file), root_dir).replace(os.sep, '/')
                file_handle.write(f"{indent}  - [{title_with_space}]({rel_path})\n")
            
            # 递归处理子文件夹的子目录
            scan(subdir_path, indent_level + 1, file_handle)
    
    # 开始扫描
    with open(summary_path, 'a', encoding='utf-8') as f:
        scan(root_dir, 0, f)
    
    print(f"✅ SUMMARY.md 已生成（移除数字前缀）：{os.path.abspath(summary_path)}")


if __name__ == '__main__':
    generate_summary()  # 可指定目录，如 generate_summary('src')