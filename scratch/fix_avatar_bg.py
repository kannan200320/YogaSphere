import os

files_to_update = [
    r"c:\Users\KANNAN\Desktop\YogaSphere\dashboard-home.html",
    r"c:\Users\KANNAN\Desktop\YogaSphere\dashboard-book.html",
    r"c:\Users\KANNAN\Desktop\YogaSphere\dashboard-history.html",
    r"c:\Users\KANNAN\Desktop\YogaSphere\dashboard-membership.html",
    r"c:\Users\KANNAN\Desktop\YogaSphere\dashboard-profile.html",
    r"c:\Users\KANNAN\Desktop\YogaSphere\admin\dashboard.html"
]

target_member = 'bg-violet-600 text-white flex items-center justify-center font-bold text-sm font-serif shadow-inner" id="userAvatarText"'
replacement_member = 'bg-blue-600 text-white flex items-center justify-center font-bold text-sm font-serif shadow-inner" id="userAvatarText"'

target_admin = 'bg-violet-600 text-white flex items-center justify-center font-bold text-sm font-serif shadow-inner">'
replacement_admin = 'bg-blue-600 text-white flex items-center justify-center font-bold text-sm font-serif shadow-inner">'

for filepath in files_to_update:
    if os.path.exists(filepath):
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        updated = False
        if target_member in content:
            content = content.replace(target_member, replacement_member)
            updated = True
        
        if target_admin in content:
            content = content.replace(target_admin, replacement_admin)
            updated = True
            
        if updated:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Updated avatar background in {os.path.basename(filepath)}")
        else:
            print(f"Avatar tags not found in {os.path.basename(filepath)}")
