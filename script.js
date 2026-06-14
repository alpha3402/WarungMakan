// ================================================================
// WARUNG MAKAN - Aplikasi Kasir
// ================================================================

// ===== DEFAULTS =====
const DEFAULT_MENU = [
    {
        id: 1, name: 'Nasi Goreng Spesial', description: 'Nasi goreng dengan telur, ayam suwir, dan sayuran segar',
        price: 25000, category: 'makanan',
        image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
    },
    {
        id: 2, name: 'Ayam Bakar Taliwang', description: 'Ayam bakar khas Lombok dengan sambal pedas',
        price: 30000, category: 'makanan',
        image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
    },
    {
        id: 3, name: 'Soto Ayam', description: 'Soto ayam kuah kuning dengan bihun dan telur',
        price: 20000, category: 'makanan',
        image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
    },
    {
        id: 4, name: 'Mie Ayam Bakso', description: 'Mie ayam dengan bakso sapi dan pangsit goreng',
        price: 22000, category: 'makanan',
        image: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
    },
    {
        id: 5, name: 'Nasi Campur', description: 'Nasi dengan lauk komplit: ayam, telur, tahu, tempe',
        price: 28000, category: 'makanan',
        image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
    },
    {
        id: 6, name: 'Capcay Goreng', description: 'Capcay sayuran dengan udang dan bakso ikan',
        price: 23000, category: 'makanan',
        image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
    },
    {
        id: 7, name: 'Es Teh Manis', description: 'Teh manis segar dengan es batu',
        price: 5000, category: 'minuman',
        image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
    },
    {
        id: 8, name: 'Es Jeruk', description: 'Jeruk peras segar dengan es batu',
        price: 7000, category: 'minuman',
        image: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
    },
    {
        id: 9, name: 'Jus Alpukat', description: 'Jus alpukat kental dengan susu coklat',
        price: 12000, category: 'minuman',
        image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
    },
    {
        id: 10, name: 'Kopi Susu', description: 'Kopi susu kekinian dengan foam yang lembut',
        price: 10000, category: 'minuman',
        image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
    },
    {
        id: 11, name: 'Pisang Goreng', description: 'Pisang goreng crispy dengan taburan keju & coklat',
        price: 10000, category: 'camilan',
        image: 'https://images.unsplash.com/photo-1570448021153-80de97a61f79?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
    },
    {
        id: 12, name: 'Tahu Gejrot', description: 'Tahu goreng dengan sambal kecap pedas manis',
        price: 8000, category: 'camilan',
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
    },
    {
        id: 13, name: 'Batagor', description: 'Batagor bandung dengan bumbu kacang',
        price: 12000, category: 'camilan',
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
    },
    {
        id: 14, name: 'Cireng', description: 'Cireng isi ayam pedas, cocok untuk cemilan sore',
        price: 10000, category: 'camilan',
        image: 'https://images.unsplash.com/photo-1604909052743-94e838986d24?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
    }
];

const DEFAULT_CATEGORIES = ['makanan', 'minuman', 'camilan'];
const DEFAULT_SETTINGS = {
    storeName: 'Warung Makan',
    address: 'Jl. Merdeka No. 123, Jakarta Pusat',
    phone: '(021) 1234-5678',
    whatsapp: '6281234567890',
    hours: 'Senin - Sabtu: 07.00 - 21.00'
};

// ===== LOCAL STORAGE KEY =====
const LS = {
    MENU: 'wm_menu',
    TRANSACTIONS: 'wm_transactions',
    CATEGORIES: 'wm_categories',
    SETTINGS: 'wm_settings'
};

// ===== STATE =====
let menus = [];
let transactions = [];
let categories = [];
let settings = {};
let currentOrder = [];

// ===== DOM REFS =====
const $ = id => document.getElementById(id);

// ===== INIT =====
function init() {
    loadData();
    initNavigation();
    renderCashierCategories();
    renderCashierMenu();
    updateOrderUI();
    renderManageMenu();
    renderHistory();
    renderReports();
    renderSettings();
    applySettings();
    renderCategoryList();
    populateMenuCategorySelect();
}

function loadData() {
    // Menu
    const rawMenu = localStorage.getItem(LS.MENU);
    if (rawMenu) {
        menus = JSON.parse(rawMenu);
    } else {
        menus = JSON.parse(JSON.stringify(DEFAULT_MENU));
        saveMenuData();
    }

    // Categories
    const rawCat = localStorage.getItem(LS.CATEGORIES);
    if (rawCat) {
        categories = JSON.parse(rawCat);
    } else {
        categories = [...DEFAULT_CATEGORIES];
        saveCategoriesData();
    }

    // Transactions
    const rawTx = localStorage.getItem(LS.TRANSACTIONS);
    if (rawTx) {
        transactions = JSON.parse(rawTx);
    } else {
        transactions = [];
        saveTransactionsData();
    }

    // Settings
    const rawSet = localStorage.getItem(LS.SETTINGS);
    if (rawSet) {
        settings = JSON.parse(rawSet);
    } else {
        settings = JSON.parse(JSON.stringify(DEFAULT_SETTINGS));
        saveSettingsData();
    }
}

// ===== DATA PERSISTENCE =====
function saveMenuData() {
    localStorage.setItem(LS.MENU, JSON.stringify(menus));
}

function saveCategoriesData() {
    localStorage.setItem(LS.CATEGORIES, JSON.stringify(categories));
}

function saveTransactionsData() {
    localStorage.setItem(LS.TRANSACTIONS, JSON.stringify(transactions));
}

function saveSettingsData() {
    localStorage.setItem(LS.SETTINGS, JSON.stringify(settings));
}

// ===== FORMAT RUPIAH =====
function formatRupiah(price) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency', currency: 'IDR', minimumFractionDigits: 0, maximumFractionDigits: 0
    }).format(price);
}

function formatDate(d) {
    const date = new Date(d);
    return date.toLocaleDateString('id-ID', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
}

function formatDateShort(d) {
    const date = new Date(d);
    return date.toLocaleDateString('id-ID', { year: 'numeric', month: 'short', day: 'numeric' });
}

// ===== TOAST =====
let toastTimeout;

function showToast(msg, type) {
    const el = $('toast');
    el.textContent = msg;
    el.className = 'toast' + (type === 'error' ? ' error' : '') + ' show';
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => el.classList.remove('show'), 2500);
}

// ===== NAVIGATION =====
function initNavigation() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.dataset.page;
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            document.querySelectorAll('.page').forEach(p => p.classList.remove('active-page'));
            $(`page-${page}`).classList.add('active-page');
        });
    });
}

// ================================================================
// KASIR PAGE
// ================================================================

function renderCashierCategories() {
    const container = $('cashier-categories');
    container.innerHTML = `<button class="cat-btn active" data-cat="all" onclick="filterCashierMenu('all')">Semua</button>`;
    categories.forEach(cat => {
        container.innerHTML += `<button class="cat-btn" data-cat="${cat}" onclick="filterCashierMenu('${cat}')">${cat.charAt(0).toUpperCase() + cat.slice(1)}</button>`;
    });
}

function renderCashierMenu(filterCat, searchTerm) {
    const container = $('cashier-items');
    filterCat = filterCat || 'all';
    searchTerm = (searchTerm || '').toLowerCase();

    let filtered = menus.filter(m => {
        if (filterCat !== 'all' && m.category !== filterCat) return false;
        if (searchTerm && !m.name.toLowerCase().includes(searchTerm)) return false;
        return true;
    });

    if (filtered.length === 0) {
        container.innerHTML = '<p class="empty-cart">Tidak ada menu</p>';
        return;
    }

    container.innerHTML = filtered.map(m => `
        <div class="cashier-item" onclick="addToOrder(${m.id})">
            <img src="${m.image}" alt="${m.name}" 
                 onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22><rect fill=%22%23f0f0f0%22 width=%22100%22 height=%22100%22/><text fill=%22%23999%22 x=%2250%22 y=%2255%22 font-size=%2230%22 text-anchor=%22middle%22>${m.name.charAt(0)}</text></svg>'">
            <span class="item-cat">${m.category}</span>
            <div class="item-name">${m.name}</div>
            <div class="item-price">${formatRupiah(m.price)}</div>
        </div>
    `).join('');
}

function filterCashierMenu(cat) {
    if (!cat) cat = 'all';
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
    const btn = document.querySelector(`.cat-btn[data-cat="${cat}"]`);
    if (btn) btn.classList.add('active');
    const search = ($('cashier-search') || {}).value || '';
    renderCashierMenu(cat, search);
}

// Also filter on search input
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = $('cashier-search');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const activeCat = document.querySelector('.cat-btn.active');
            const cat = activeCat ? activeCat.dataset.cat : 'all';
            renderCashierMenu(cat, this.value);
        });
    }
});

// ===== ORDER MANAGEMENT =====

function addToOrder(menuId) {
    const menu = menus.find(m => m.id === menuId);
    if (!menu) return;

    const existing = currentOrder.find(o => o.menuId === menuId);
    if (existing) {
        existing.qty += 1;
    } else {
        currentOrder.push({ menuId: menu.id, name: menu.name, price: menu.price, qty: 1 });
    }
    updateOrderUI();
    showToast(`${menu.name} ditambahkan!`);
}

function changeOrderQty(menuId, delta) {
    const item = currentOrder.find(o => o.menuId === menuId);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) {
        currentOrder = currentOrder.filter(o => o.menuId !== menuId);
    }
    updateOrderUI();
}

function removeOrderItem(menuId) {
    currentOrder = currentOrder.filter(o => o.menuId !== menuId);
    updateOrderUI();
}

function clearOrder() {
    if (currentOrder.length === 0) return;
    if (!confirm('Kosongkan semua pesanan?')) return;
    currentOrder = [];
    updateOrderUI();
}

function updateOrderUI() {
    const container = $('cart-order-items');
    const countEl = $('order-count');
    const subtotalEl = $('order-subtotal');
    const totalEl = $('order-total');
    const payBtn = $('btn-pay');
    const payAmount = $('pay-amount');

    const totalQty = currentOrder.reduce((sum, o) => sum + o.qty, 0);
    const subtotal = currentOrder.reduce((sum, o) => sum + (o.price * o.qty), 0);

    countEl.textContent = `${totalQty} item`;

    if (currentOrder.length === 0) {
        container.innerHTML = '<p class="empty-cart">Belum ada pesanan</p>';
        subtotalEl.textContent = 'Rp 0';
        totalEl.textContent = 'Rp 0';
        payBtn.disabled = true;
        payAmount.textContent = 'Rp 0';
        return;
    }

    payBtn.disabled = false;
    payAmount.textContent = formatRupiah(subtotal);

    container.innerHTML = currentOrder.map(o => `
        <div class="cart-order-item">
            <div class="coi-info">
                <div class="coi-name">${o.name}</div>
                <div class="coi-price">${formatRupiah(o.price)} x ${o.qty}</div>
            </div>
            <div class="coi-actions">
                <button onclick="changeOrderQty(${o.menuId}, -1)">−</button>
                <span class="qty">${o.qty}</span>
                <button onclick="changeOrderQty(${o.menuId}, 1)">+</button>
            </div>
            <button class="coi-remove" onclick="removeOrderItem(${o.menuId})">&times;</button>
        </div>
    `).join('');

    subtotalEl.textContent = formatRupiah(subtotal);
    totalEl.textContent = formatRupiah(subtotal);
}

// ===== PAYMENT =====

function openPayment() {
    if (currentOrder.length === 0) return;
    const total = currentOrder.reduce((sum, o) => sum + (o.price * o.qty), 0);

    const detailEl = $('payment-detail');
    detailEl.innerHTML = currentOrder.map(o => `
        <div class="pd-row">
            <span>${o.name} x${o.qty}</span>
            <span>${formatRupiah(o.price * o.qty)}</span>
        </div>
    `).join('');
    detailEl.innerHTML += `<div class="pd-row pd-total"><span>Total</span><span>${formatRupiah(total)}</span></div>`;

    $('payment-amount').value = '';
    $('payment-change-amount').textContent = 'Rp 0';
    $('btn-confirm-payment').disabled = true;
    $('payment-modal').classList.add('show');
    $('overlay').classList.add('show');
}

function closePayment() {
    $('payment-modal').classList.remove('show');
    $('overlay').classList.remove('show');
}

function calculateChange() {
    const total = currentOrder.reduce((sum, o) => sum + (o.price * o.qty), 0);
    const paid = parseInt($('payment-amount').value) || 0;
    const change = paid - total;
    $('payment-change-amount').textContent = formatRupiah(Math.max(0, change));
    $('btn-confirm-payment').disabled = paid < total || paid <= 0;
}

function confirmPayment() {
    const total = currentOrder.reduce((sum, o) => sum + (o.price * o.qty), 0);
    const paid = parseInt($('payment-amount').value) || 0;
    const change = paid - total;

    if (paid < total) {
        showToast('Jumlah pembayaran kurang!', 'error');
        return;
    }

    // Create transaction record
    const tx = {
        id: Date.now(),
        date: new Date().toISOString(),
        items: currentOrder.map(o => ({ name: o.name, price: o.price, qty: o.qty, subtotal: o.price * o.qty })),
        total: total,
        paid: paid,
        change: change
    };

    transactions.push(tx);
    saveTransactionsData();

    currentOrder = [];
    updateOrderUI();
    closePayment();

    // Print invoice
    printTransactionInvoice(tx);

    showToast('Pembayaran berhasil! 💵');
    renderHistory();
    renderReports();
}

// ================================================================
// INVOICE PRINT
// ================================================================
let currentPrintTx = null;

function printTransactionInvoice(tx) {
    currentPrintTx = tx;
    const printEl = $('invoice-print');
    const storeName = settings.storeName || 'Warung Makan';

    printEl.innerHTML = `
    <div id="print-area">
        <div class="invoice-header">
            <h2>${storeName}</h2>
            <p>${settings.address || ''}</p>
            <p>Telp: ${settings.phone || ''}</p>
            <p>${formatDate(tx.date)}</p>
        </div>
        <table class="invoice-items">
            <tr><th>Item</th><th>Qty</th><th>Harga</th></tr>
            ${tx.items.map(i => `<tr><td>${i.name}</td><td>${i.qty}</td><td>${formatRupiah(i.subtotal)}</td></tr>`).join('')}
        </table>
        <div class="invoice-total">Total: ${formatRupiah(tx.total)}</div>
        <p>Dibayar: ${formatRupiah(tx.paid)}</p>
        <p>Kembali: ${formatRupiah(tx.change)}</p>
        <br>
        <p style="text-align:center;font-size:11px;">Atlas Tech Company. Make The World Better With Technology.</p>
        <p style="text-align:center;font-size:10px;color:#999;">Terima kasih telah berbelanja</p>
    </div>
    `;

    setTimeout(() => {
        const win = window.open('', '', 'width=400,height=600');
        win.document.write(`<html><head><title>Invoice</title><style>
            body { font-family: 'Courier New', monospace; font-size: 12px; padding: 20px; max-width: 300px; margin: 0 auto; }
            .invoice-header { text-align: center; margin-bottom: 12px; border-bottom: 2px dashed #333; padding-bottom: 12px; }
            .invoice-header h2 { font-size: 16px; margin-bottom: 4px; }
            .invoice-items { width: 100%; margin-bottom: 12px; border-collapse: collapse; }
            .invoice-items th, .invoice-items td { padding: 4px 0; text-align: left; }
            .invoice-items th { border-bottom: 1px solid #333; font-size: 11px; }
            .invoice-total { border-top: 2px solid #333; padding-top: 8px; text-align: right; font-size: 14px; font-weight: 700; }
            .inv-footer { text-align: center; font-size: 11px; margin-top: 16px; }
        </style></head><body>${printEl.innerHTML}</body></html>`);
        win.document.close();
        win.focus();
        win.print();
    }, 300);
}

function printInvoice() {
    if (currentPrintTx) {
        printTransactionInvoice(currentPrintTx);
    }
}

// ================================================================
// MANAGE MENU (CRUD)
// ================================================================

function renderManageMenu() {
    const search = ($('menu-search') || {}).value || '';
    const catFilter = ($('menu-cat-filter') || {}).value || 'all';
    const tbody = $('manage-menu-body');

    let filtered = menus.filter(m => {
        if (catFilter !== 'all' && m.category !== catFilter) return false;
        if (search && !m.name.toLowerCase().includes(search.toLowerCase())) return false;
        return true;
    });

    if (filtered.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" style="text-align:center;padding:30px;color:#b2bec3;">Belum ada menu</td></tr>';
        return;
    }

    tbody.innerHTML = filtered.map(m => `
        <tr>
            <td><img src="${m.image}" class="menu-thumb" 
                 onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2248%22 height=%2248%22><rect fill=%22%23f0f0f0%22 width=%2248%22 height=%2248%22/><text fill=%22%23999%22 x=%2224%22 y=%2230%22 font-size=%2220%22 text-anchor=%22middle%22>${m.name.charAt(0)}</text></svg>'"></td>
            <td><strong>${m.name}</strong><br><small style="color:#636e72;">${m.description || ''}</small></td>
            <td><span class="category-tag">${m.category}</span></td>
            <td><strong>${formatRupiah(m.price)}</strong></td>
            <td class="actions">
                <button class="btn btn-outline btn-sm" onclick="editMenu(${m.id})">✏ Edit</button>
                <button class="btn btn-danger btn-sm" onclick="deleteMenu(${m.id})">🗑</button>
            </td>
        </tr>
    `).join('');
}

function openMenuModal(editId) {
    $('menu-modal-title').textContent = editId ? 'Edit Menu' : 'Tambah Menu';
    $('menu-edit-id').value = editId || '';
    $('menu-name').value = '';
    $('menu-price').value = '';
    $('menu-desc').value = '';
    $('menu-photo-name').textContent = 'Belum ada file';
    $('menu-photo-preview').innerHTML = '';
    $('menu-photo').value = '';
    populateMenuCategorySelect();

    if (editId) {
        const menu = menus.find(m => m.id === editId);
        if (menu) {
            $('menu-name').value = menu.name;
            $('menu-category').value = menu.category;
            $('menu-price').value = menu.price;
            $('menu-desc').value = menu.description || '';
            if (menu.image && menu.image.startsWith('data:')) {
                $('menu-photo-preview').innerHTML = `<img src="${menu.image}">`;
                $('menu-photo-name').textContent = 'Foto tersimpan';
            }
        }
    }

    $('menu-modal').classList.add('show');
    $('overlay').classList.add('show');
}

function closeMenuModal() {
    $('menu-modal').classList.remove('show');
    $('overlay').classList.remove('show');
}

function populateMenuCategorySelect() {
    const select = $('menu-category');
    select.innerHTML = categories.map(c => `<option value="${c}">${c.charAt(0).toUpperCase() + c.slice(1)}</option>`).join('');
}

function saveMenu() {
    const id = parseInt($('menu-edit-id').value) || 0;
    const name = $('menu-name').value.trim();
    const category = $('menu-category').value;
    const price = parseInt($('menu-price').value);
    const desc = $('menu-desc').value.trim();
    const photoFile = $('menu-photo').files[0];

    if (!name) { showToast('Nama menu harus diisi', 'error'); return; }
    if (!price || price <= 0) { showToast('Harga harus diisi', 'error'); return; }

    const processSave = (imageUrl) => {
        if (id) {
            // Edit existing
            const idx = menus.findIndex(m => m.id === id);
            if (idx !== -1) {
                menus[idx] = { ...menus[idx], name, category, price, description: desc, image: imageUrl || menus[idx].image };
            }
        } else {
            // New
            const newId = menus.length > 0 ? Math.max(...menus.map(m => m.id)) + 1 : 1;
            menus.push({
                id: newId,
                name,
                category,
                price,
                description: desc,
                image: imageUrl || 'https://via.placeholder.com/300x180/f0f0f0/636e72?text=' + encodeURIComponent(name)
            });
        }
        saveMenuData();
        closeMenuModal();
        renderManageMenu();
        renderCashierMenu();
        showToast(id ? 'Menu berhasil diupdate!' : 'Menu berhasil ditambahkan!');
    };

    if (photoFile) {
        const reader = new FileReader();
        reader.onload = function(e) {
            processSave(e.target.result);
        };
        reader.readAsDataURL(photoFile);
    } else {
        processSave(null);
    }
}

function editMenu(id) {
    openMenuModal(id);
}

function deleteMenu(id) {
    if (!confirm('Anda Yakin?')) return;
    menus = menus.filter(m => m.id !== id);
    saveMenuData();
    renderManageMenu();
    renderCashierMenu();
    showToast('Menu berhasil dihapus');
}

// Photo preview
document.addEventListener('DOMContentLoaded', function() {
    const photoInput = $('menu-photo');
    if (photoInput) {
        photoInput.addEventListener('change', function() {
            const file = this.files[0];
            if (file) {
                $('menu-photo-name').textContent = file.name;
                const reader = new FileReader();
                reader.onload = function(e) {
                    $('menu-photo-preview').innerHTML = `<img src="${e.target.result}">`;
                };
                reader.readAsDataURL(file);
            }
        });
    }
});

// ================================================================
// HISTORY PAGE
// ================================================================

function renderHistory() {
    const filter = ($('history-filter') || {}).value || 'today';
    const dateVal = ($('history-date') || {}).value || '';
    const tbody = $('history-body');
    const summary = $('history-summary');

    let filtered = getFilteredTransactions(filter, dateVal);

    if (filtered.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" style="text-align:center;padding:30px;color:#b2bec3;">Belum ada transaksi</td></tr>';
        summary.innerHTML = '';
        return;
    }

    // Sort by date desc
    filtered.sort((a, b) => new Date(b.date) - new Date(a.date));

    tbody.innerHTML = filtered.map((tx, i) => `
        <tr>
            <td>${i + 1}</td>
            <td>${formatDate(tx.date)}</td>
            <td>${tx.items.map(it => `${it.name} x${it.qty}`).join(', ')}</td>
            <td><strong>${formatRupiah(tx.total)}</strong></td>
            <td><button class="btn btn-outline btn-sm" onclick="viewDetail(${tx.id})">📄</button></td>
        </tr>
    `).join('');

    const totalTrans = filtered.length;
    const totalRevenue = filtered.reduce((s, tx) => s + tx.total, 0);
    const totalItems = filtered.reduce((s, tx) => s + tx.items.reduce((s2, it) => s2 + it.qty, 0), 0);

    summary.innerHTML = `
        <div class="hs-item"><span class="hs-label">Transaksi</span><span class="hs-value">${totalTrans}</span></div>
        <div class="hs-item"><span class="hs-label">Total Pendapatan</span><span class="hs-value">${formatRupiah(totalRevenue)}</span></div>
        <div class="hs-item"><span class="hs-label">Total Item Terjual</span><span class="hs-value">${totalItems}</span></div>
    `;
}

function getFilteredTransactions(filter, dateVal) {
    const now = new Date();
    let start, end;

    switch (filter) {
        case 'today':
            start = new Date(now.getFullYear(), now.getMonth(), now.getDate());
            end = new Date(start.getTime() + 86400000);
            break;
        case 'weekly': {
            const day = now.getDay();
            const diff = now.getDate() - day + (day === 0 ? -6 : 1);
            start = new Date(now.getFullYear(), now.getMonth(), diff);
            end = new Date(start.getTime() + 7 * 86400000);
            break;
        }
        case 'monthly':
            start = new Date(now.getFullYear(), now.getMonth(), 1);
            end = new Date(now.getFullYear(), now.getMonth() + 1, 1);
            break;
        case 'all':
            start = null;
            end = null;
            break;
        default:
            start = null;
            end = null;
    }

    if (dateVal) {
        const d = new Date(dateVal);
        start = new Date(d.getFullYear(), d.getMonth(), d.getDate());
        end = new Date(start.getTime() + 86400000);
    }

    if (!start && !end) return [...transactions];

    return transactions.filter(tx => {
        const txDate = new Date(tx.date);
        return txDate >= start && txDate < end;
    });
}

// ===== HISTORY DETAIL MODAL =====
let viewingTxId = null;

function viewDetail(txId) {
    const tx = transactions.find(t => t.id === txId);
    if (!tx) return;
    viewingTxId = txId;
    currentPrintTx = tx;

    const body = $('detail-modal-body');
    body.innerHTML = `
        <div style="margin-bottom:12px;">
            <small style="color:#636e72;">${formatDate(tx.date)}</small>
        </div>
        <table class="report-table">
            <tr><th>Item</th><th>Qty</th><th>Subtotal</th></tr>
            ${tx.items.map(i => `<tr><td>${i.name}</td><td>${i.qty}</td><td>${formatRupiah(i.subtotal)}</td></tr>`).join('')}
        </table>
        <div style="margin-top:12px;border-top:2px solid #dfe6e9;padding-top:8px;">
            <div style="display:flex;justify-content:space-between;"><span>Total</span><strong>${formatRupiah(tx.total)}</strong></div>
            <div style="display:flex;justify-content:space-between;"><span>Dibayar</span><span>${formatRupiah(tx.paid)}</span></div>
            <div style="display:flex;justify-content:space-between;"><span>Kembalian</span><span style="color:#00b894;">${formatRupiah(tx.change)}</span></div>
        </div>
    `;

    $('detail-modal').classList.add('show');
    $('overlay').classList.add('show');
}

function closeDetailModal() {
    $('detail-modal').classList.remove('show');
    $('overlay').classList.remove('show');
}

// ===== HISTORY EXPORT CSV =====
function exportHistoryCSV() {
    const filter = ($('history-filter') || {}).value || 'today';
    const dateVal = ($('history-date') || {}).value || '';
    const filtered = getFilteredTransactions(filter, dateVal);

    if (filtered.length === 0) {
        showToast('Tidak ada data untuk diexport', 'error');
        return;
    }

    let csv = 'No,Waktu,Item,Qty,Harga,Subtotal,Total\n';
    filtered.forEach((tx, i) => {
        tx.items.forEach(it => {
            csv += `${i + 1},${tx.date},${it.name},${it.qty},${it.price},${it.subtotal},${tx.total}\n`;
        });
    });

    downloadCSV(csv, 'riwayat_transaksi.csv');
}

// ================================================================
// REPORTS PAGE
// ================================================================

function renderReports() {
    const period = ($('report-period') || {}).value || 'daily';
    const container = $('report-content');

    const data = generateReportData(period);

    if (data.length === 0) {
        container.innerHTML = '<div class="report-card"><p style="text-align:center;color:#b2bec3;">Belum ada data transaksi</p></div>';
        return;
    }

    const totalRevenue = data.reduce((s, r) => s + r.revenue, 0);
    const totalTransactions = data.reduce((s, r) => s + r.count, 0);
    const totalItems = data.reduce((s, r) => s + r.items, 0);

    let periodLabel;
    switch (period) {
        case 'daily': periodLabel = 'Harian'; break;
        case 'weekly': periodLabel = 'Mingguan'; break;
        case 'monthly': periodLabel = 'Bulanan'; break;
        case 'yearly': periodLabel = 'Tahunan'; break;
        default: periodLabel = 'Periode';
    }

    container.innerHTML = `
        <div class="report-card">
            <div class="rc-header">
                <span class="rc-title">Ringkasan ${periodLabel}</span>
                <span class="rc-subtitle">${data.length} periode</span>
            </div>
            <div class="report-stats">
                <div class="report-stat highlight"><span class="rs-value">${formatRupiah(totalRevenue)}</span><span class="rs-label">Total Pendapatan</span></div>
                <div class="report-stat"><span class="rs-value">${totalTransactions}</span><span class="rs-label">Transaksi</span></div>
                <div class="report-stat"><span class="rs-value">${totalItems}</span><span class="rs-label">Item Terjual</span></div>
                <div class="report-stat"><span class="rs-value">${data.length > 0 ? formatRupiah(Math.round(totalRevenue / data.length)) : 'Rp 0'}</span><span class="rs-label">Rata-rata/Periode</span></div>
            </div>
            <table class="report-table">
                <tr><th>Periode</th><th>Transaksi</th><th>Item</th><th>Pendapatan</th></tr>
                ${data.map(r => `
                    <tr>
                        <td>${r.label}</td>
                        <td>${r.count}</td>
                        <td>${r.items}</td>
                        <td><strong>${formatRupiah(r.revenue)}</strong></td>
                    </tr>
                `).join('')}
            </table>
        </div>
    `;
}

function generateReportData(period) {
    if (transactions.length === 0) return [];
    const now = new Date();

    // Group transactions by period
    const groups = {};

    transactions.forEach(tx => {
        const d = new Date(tx.date);
        let key, label;

        switch (period) {
            case 'daily': {
                key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
                label = formatDateShort(tx.date);
                break;
            }
            case 'weekly': {
                // Get Monday of the week
                const day = d.getDay();
                const diff = d.getDate() - day + (day === 0 ? -6 : 1);
                const monday = new Date(d.getFullYear(), d.getMonth(), diff);
                key = `${monday.getFullYear()}-${String(monday.getMonth() + 1).padStart(2, '0')}-${String(monday.getDate()).padStart(2, '0')}`;
                label = `Minggu ${formatDateShort(monday)}`;
                break;
            }
            case 'monthly': {
                key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
                label = d.toLocaleDateString('id-ID', { year: 'numeric', month: 'long' });
                break;
            }
            case 'yearly': {
                key = `${d.getFullYear()}`;
                label = `${d.getFullYear()}`;
                break;
            }
            default: {
                key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
                label = d.toLocaleDateString('id-ID', { year: 'numeric', month: 'long' });
            }
        }

        if (!groups[key]) groups[key] = { label, count: 0, revenue: 0, items: 0 };
        groups[key].count += 1;
        groups[key].revenue += tx.total;
        groups[key].items += tx.items.reduce((s, it) => s + it.qty, 0);
    });

    // Sort by key
    const sorted = Object.entries(groups).sort((a, b) => a[0].localeCompare(b[0]));
    return sorted.map(([_, v]) => v);
}

// ===== REPORTS EXPORT =====
function exportReportsCSV() {
    const period = ($('report-period') || {}).value || 'daily';
    const data = generateReportData(period);
    if (data.length === 0) {
        showToast('Tidak ada data untuk diexport', 'error');
        return;
    }

    let periodLabel;
    switch (period) {
        case 'daily': periodLabel = 'Harian'; break;
        case 'weekly': periodLabel = 'Mingguan'; break;
        case 'monthly': periodLabel = 'Bulanan'; break;
        case 'yearly': periodLabel = 'Tahunan'; break;
        default: periodLabel = 'Periode';
    }

    let csv = `Laporan ${periodLabel}\n`;
    csv += 'Periode,Transaksi,Item Terjual,Pendapatan\n';
    data.forEach(r => {
        csv += `${r.label},${r.count},${r.items},${r.revenue}\n`;
    });
    csv += `\nTotal,,${data.reduce((s, r) => s + r.items, 0)},${data.reduce((s, r) => s + r.revenue, 0)}\n`;

    downloadCSV(csv, `laporan_${period}_${new Date().toISOString().slice(0, 10)}.csv`);
    showToast('Laporan di-download!');
}

function printReports() {
    const period = ($('report-period') || {}).value || 'daily';
    const data = generateReportData(period);
    if (data.length === 0) {
        showToast('Tidak ada data untuk di-print', 'error');
        return;
    }

    const totalRevenue = data.reduce((s, r) => s + r.revenue, 0);
    const totalTransactions = data.reduce((s, r) => s + r.count, 0);
    const totalItems = data.reduce((s, r) => s + r.items, 0);

    let periodLabel;
    switch (period) {
        case 'daily': periodLabel = 'Harian'; break;
        case 'weekly': periodLabel = 'Mingguan'; break;
        case 'monthly': periodLabel = 'Bulanan'; break;
        case 'yearly': periodLabel = 'Tahunan'; break;
        default: periodLabel = 'Periode';
    }

    const tableRows = data.map(r => `
        <tr><td>${r.label}</td><td>${r.count}</td><td>${r.items}</td><td>Rp ${r.revenue.toLocaleString('id-ID')}</td></tr>
    `).join('');

    const html = `
    <html><head><title>Laporan ${periodLabel}</title><style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        h2 { text-align: center; margin-bottom: 4px; }
        .sub { text-align: center; color: #666; margin-bottom: 20px; }
        table { width: 100%; border-collapse: collapse; margin-bottom: 16px; }
        th, td { padding: 8px 12px; text-align: left; border-bottom: 1px solid #ddd; }
        th { background: #f5f5f5; }
        .total-row { font-weight: bold; border-top: 2px solid #333; }
        .stats { display: flex; justify-content: space-around; margin-bottom: 20px; }
        .stat { text-align: center; }
        .stat span { display: block; }
        .stat .val { font-size: 18px; font-weight: bold; color: #d63031; }
        .stat .lbl { font-size: 12px; color: #666; }
    </style></head><body>
        <h2>${settings.storeName || 'Warung Makan'}</h2>
        <p class="sub">Laporan ${periodLabel} - ${new Date().toLocaleDateString('id-ID')}</p>
        <div class="stats">
            <div class="stat"><span class="val">Rp ${totalRevenue.toLocaleString('id-ID')}</span><span class="lbl">Total Pendapatan</span></div>
            <div class="stat"><span class="val">${totalTransactions}</span><span class="lbl">Transaksi</span></div>
            <div class="stat"><span class="val">${totalItems}</span><span class="lbl">Item Terjual</span></div>
        </div>
        <table>
            <tr><th>Periode</th><th>Transaksi</th><th>Item</th><th>Pendapatan</th></tr>
            ${tableRows}
            <tr class="total-row"><td>Total</td><td>${totalTransactions}</td><td>${totalItems}</td><td>Rp ${totalRevenue.toLocaleString('id-ID')}</td></tr>
        </table>
        <p style="text-align:center;color:#999;font-size:11px;">Atlas Tech Company. Make The World Better With Technology.</p>
    </body></html>`;

    const win = window.open('', '', 'width=800,height=600');
    win.document.write(html);
    win.document.close();
    win.focus();
    win.print();
}

// ================================================================
// SETTINGS PAGE
// ================================================================

function renderSettings() {
    $('set-name').value = settings.storeName || '';
    $('set-address').value = settings.address || '';
    $('set-phone').value = settings.phone || '';
    $('set-wa').value = settings.whatsapp || '';
    $('set-hours').value = settings.hours || '';
}

function saveSettings() {
    settings.storeName = $('set-name').value.trim() || 'Warung Makan';
    settings.address = $('set-address').value.trim();
    settings.phone = $('set-phone').value.trim();
    settings.whatsapp = $('set-wa').value.trim();
    settings.hours = $('set-hours').value.trim();
    saveSettingsData();
    applySettings();
    showToast('Pengaturan berhasil disimpan!');
}

function applySettings() {
    const navEl = $('store-name-nav');
    if (navEl) navEl.textContent = settings.storeName || 'Warung Makan';
    document.title = `Kasir - ${settings.storeName || 'Warung Makan'}`;
}

// ===== CATEGORY MANAGEMENT =====
function renderCategoryList() {
    const container = $('category-list');
    container.innerHTML = categories.map(c => `
        <span class="category-tag">
            ${c}
            <span class="cat-remove" onclick="removeCategory('${c}')">&times;</span>
        </span>
    `).join('');
}

function addCategory() {
    const input = $('new-category');
    const name = input.value.trim().toLowerCase();
    if (!name) { showToast('Masukkan nama kategori', 'error'); return; }
    if (categories.includes(name)) { showToast('Kategori sudah ada', 'error'); return; }

    categories.push(name);
    saveCategoriesData();
    renderCategoryList();
    renderCashierCategories();
    populateMenuCategorySelect();
    renderManageMenu();
    input.value = '';
    showToast(`Kategori "${name}" ditambahkan!`);
}

function removeCategory(name) {
    if (name === 'makanan' || name === 'minuman' || name === 'camilan') {
        showToast('Kategori default tidak bisa dihapus', 'error');
        return;
    }
    if (!confirm(`Hapus kategori "${name}"? Menu dengan kategori ini akan berubah ke "lainnya".`)) return;

    categories = categories.filter(c => c !== name);
    // Change menu items with this category to 'lainnya'
    menus.forEach(m => {
        if (m.category === name) m.category = 'lainnya';
    });
    if (!categories.includes('lainnya')) categories.push('lainnya');

    saveCategoriesData();
    saveMenuData();
    renderCategoryList();
    renderCashierCategories();
    populateMenuCategorySelect();
    renderManageMenu();
    showToast(`Kategori "${name}" dihapus`);
}

// ===== DATA BACKUP =====
function exportData() {
    const data = {
        menus,
        categories,
        transactions,
        settings,
        exportedAt: new Date().toISOString()
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `warung_makan_backup_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('Data berhasil di-export!');
}

function importData(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const data = JSON.parse(e.target.result);
            if (data.menus) { menus = data.menus; saveMenuData(); }
            if (data.categories) { categories = data.categories; saveCategoriesData(); }
            if (data.transactions) { transactions = data.transactions; saveTransactionsData(); }
            if (data.settings) { settings = data.settings; saveSettingsData(); }

            applySettings();
            renderCashierCategories();
            renderCashierMenu();
            renderManageMenu();
            renderHistory();
            renderReports();
            renderSettings();
            renderCategoryList();
            populateMenuCategorySelect();
            showToast('Data berhasil di-import!');
        } catch (err) {
            showToast('File tidak valid!', 'error');
        }
    };
    reader.readAsText(file);
    event.target.value = '';
}

function resetAllData() {
    if (!confirm('⚠ PERINGATAN: Semua data akan dihapus! Lanjutkan?')) return;
    if (!confirm('Apakah Anda yakin? Data tidak bisa dikembalikan!')) return;

    localStorage.removeItem(LS.MENU);
    localStorage.removeItem(LS.TRANSACTIONS);
    localStorage.removeItem(LS.CATEGORIES);
    localStorage.removeItem(LS.SETTINGS);

    location.reload();
}

// ===== UTILITY =====
function downloadCSV(csv, filename) {
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
}

// ===== SERVICE WORKER REGISTRATION (PWA) =====
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then(reg => console.log('SW registered:', reg.scope))
            .catch(err => console.log('SW registration failed:', err));
    });
}

// ===== INIT ON DOM READY =====
document.addEventListener('DOMContentLoaded', function() {
    init();
    // Set today's date for history filter
    const histDate = $('history-date');
    if (histDate) histDate.value = new Date().toISOString().slice(0, 10);
});
