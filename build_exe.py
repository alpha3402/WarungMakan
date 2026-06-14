"""
Build script - Kasir Warung Makan Installer
Hasil: Warung Makan/dist/KasirWarungMakan.exe

Cara pakai: python build_exe.py
"""

import os, sys, subprocess

BASE = os.path.dirname(os.path.abspath(__file__))

def build():
    script = os.path.join(BASE, 'kasir_app.py')
    icon = os.path.join(BASE, 'icons', 'icon.ico')
    dist = os.path.join(BASE, 'dist')
    
    if not os.path.exists(script):
        print(f"ERROR: {script} not found!")
        return False
    
    if not os.path.exists(icon):
        print(f"WARNING: {icon} not found, building without icon")
        icon = None
    
    print(f"Building KasirWarungMakan.exe...")
    
    cmd = [
        sys.executable, '-m', 'PyInstaller',
        '--onefile',
        '--windowed',
        '--name', 'KasirWarungMakan',
        '--distpath', dist,
        '--specpath', BASE,
        '--noconfirm',
        '--clean',
    ]
    
    if icon:
        cmd.extend(['--icon', icon])
    
    cmd.append(script)
    
    result = subprocess.run(cmd, capture_output=True, text=True, cwd=BASE)
    
    if result.returncode != 0:
        print("STDERR:", result.stderr[-1500:] if len(result.stderr) > 1500 else result.stderr)
        return False
    
    exe = os.path.join(dist, 'KasirWarungMakan.exe')
    if os.path.exists(exe):
        size = os.path.getsize(exe) / (1024*1024)
        print(f"SUCCESS: {exe} ({size:.1f} MB)")
        print(f"\nTo create installer, download NSIS from:")
        print(f"https://nsis.sourceforge.io/Download")
        print(f"Then compile installer.nsi with NSIS")
        return True
    else:
        print("ERROR: EXE not created")
        return False

if __name__ == '__main__':
    build()