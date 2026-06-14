"""
Warung Makan - Aplikasi Kasir Desktop
Dibuat dengan pywebview (Python GUI + WebView)
Untuk menjalankan: python kasir_app.py
"""

import webview
import os
import threading
import sys

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

class JSApi:
    """API yang bisa dipanggil dari JavaScript via pywebview."""
    
    def get_app_path(self):
        return BASE_DIR
    
    def get_data_path(self):
        data_dir = os.path.join(BASE_DIR, 'data')
        os.makedirs(data_dir, exist_ok=True)
        return data_dir


def main():
    html_file = os.path.join(BASE_DIR, 'index.html')
    
    if not os.path.exists(html_file):
        print(f"ERROR: File '{html_file}' tidak ditemukan!")
        sys.exit(1)

    api = JSApi()
    
    window = webview.create_window(
        title='Kasir - Warung Makan',
        url=html_file,
        js_api=api,
        width=1280,
        height=800,
        min_size=(900, 600),
        resizable=True,
        fullscreen=False,
        confirm_close=True,
    )
    
    # Start with default GUI (mshtml on Windows - uses IE/Edge WebView, no extra deps)
    webview.start(http_server=True, debug=False)


if __name__ == '__main__':
    threading.current_thread().name = 'MainThread'
    main()