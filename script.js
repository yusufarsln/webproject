
// VERİ
let cart = JSON.parse(localStorage.getItem('babyMallCart')) || [];
let wishlist = JSON.parse(localStorage.getItem('babyMallWishlist')) || [];

function updateCounts() {
    const cartCountEl = document.getElementById('cart-count');
    if (cartCountEl) {
        let totalItems = 0;
        cart.forEach(item => totalItems += item.quantity);
        cartCountEl.textContent = totalItems;
    }

    const wishListCount = document.getElementById('wishlist-count');
    if (wishListCount) {
        wishListCount.textContent = wishlist.length;
    }
}

// BİLDİRİM FONKSİYONU
function notification(message, type = 'success') {
    const container = document.getElementById('not-container');

    let activeContainer = container;
    if (!activeContainer) {
        activeContainer = document.createElement('div');
        activeContainer.id = 'not-container';
        document.body.appendChild(activeContainer);
    }

    const not = document.createElement('div');
    not.className = `not ${type}`;
    const icon = type === 'success' ? '<i class="fas fa-check-circle"></i>' : '<i class="fas fa-exclamation-circle"></i>';
    not.innerHTML = `${icon} <span>${message}</span>`;

    activeContainer.appendChild(not);

    setTimeout(() => {
        not.remove();
    }, 3500);
}

// FAVORİ İŞLEMLERİ
function toggleWishlist(id, event) {
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }

    const index = wishlist.indexOf(id);
    const buttons = document.querySelectorAll(`.btn-wishlist[data-id="${id}"], .detail-wishlist-btn[data-id="${id}"]`);

    if (index > -1) {
        wishlist.splice(index, 1);
        notification("Favorilerden çıkarıldı.", "error");

        buttons.forEach(btn => {
            btn.classList.remove('active');
            btn.innerHTML = '<i class="far fa-heart"></i>';
        });
    } else {
        wishlist.push(id);
        notification("Favorilere eklendi!", "success");

        buttons.forEach(btn => {
            btn.classList.add('active');
            btn.innerHTML = '<i class="fas fa-heart"></i>';
        });
    }

    localStorage.setItem('babyMallWishlist', JSON.stringify(wishlist));
    updateCounts();

    if (window.location.pathname.includes('favorites.html')) {
        showFavorites();
    }
}

// DİNAMİK MENÜ
function generateMenu() {
    const menuContainer = document.getElementById('dynamic-menu');
    if (!menuContainer) return;

    let menuHTML = `<li><a href="index.html">Ana Sayfa</a></li>`;
    const genders = [...new Set(products.map(p => p.gender))];

    genders.forEach(gender => {
        const genderProducts = products.filter(p => p.gender === gender);
        const categories = [...new Set(genderProducts.map(p => p.category))];

        menuHTML += `
            <li>
                <a href="products.html?gender=${gender}">${gender} <i class="fas fa-chevron-down" style="font-size:10px; margin-left:5px;"></i></a>
                <ul class="dropdown-menu">
                    <li><a href="products.html?gender=${gender}">Tüm ${gender} Ürünleri</a></li>
                    ${categories.map(category => `
                        <li><a href="products.html?gender=${gender}&category=${encodeURIComponent(category)}">${category}</a></li>
                    `).join('')}
                </ul>
            </li>
        `;
    });

    menuHTML += `
        <li><a href="products.html">Tüm Ürünler</a></li>
        <li><a href="about.html">Hakkımızda</a></li>
        <li><a href="contact.html">İletişim</a></li>
    `;

    menuContainer.innerHTML = menuHTML;
}

document.addEventListener('DOMContentLoaded', () => {
    updateCounts();
    generateMenu();
});

// FAVORİLER
const favoritesGrid = document.getElementById('favorites-grid');

function showFavorites() {
    if (!favoritesGrid) return;
    favoritesGrid.innerHTML = '';

    const favProducts = products.filter(p => wishlist.includes(p.id));

    if (favProducts.length === 0) {
        favoritesGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 50px;">Favori listeniz henüz boş.</p>';
        return;
    }

    favProducts.forEach(product => {
        const html = `
            <a href="product-detail.html?id=${product.id}" class="product-card">
                <button class="btn-wishlist active" data-id="${product.id}" onclick="toggleWishlist(${product.id}, event)">
                    <i class="fas fa-heart"></i>
                </button>
                <img src="${product.image}" class="product-image" alt="${product.name}">
                <div class="product-info">
                    <span style="font-size:12px; color:#888;">${product.gender} / ${product.category}</span>
                    <h3 class="product-title">${product.name}</h3>
                    <div class="product-price">${product.price} TL</div>
                </div>
            </a>
        `;
        favoritesGrid.innerHTML += html;
    });
}

if (favoritesGrid) {
    showFavorites();
}

// ÜRÜN LİSTELEME
const productGrid = document.getElementById('product-grid');

function renderProducts(list) {
    if (!productGrid) return;
    productGrid.innerHTML = '';

    if (list.length === 0) {
        productGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 50px;">Aradığınız kriterlere uygun ürün bulunamadı.</p>';
        return;
    }

    list.forEach(product => {
        const isFavorite = wishlist.includes(product.id);
        const activeClass = isFavorite ? 'active' : '';
        const heartIcon = isFavorite ? 'fas fa-heart' : 'far fa-heart';

        const html = `
            <a href="product-detail.html?id=${product.id}" class="product-card">
                <button class="btn-wishlist ${activeClass}" data-id="${product.id}" onclick="toggleWishlist(${product.id}, event)">
                    <i class="${heartIcon}"></i>
                </button>
                <img src="${product.image}" class="product-image" alt="${product.name}">
                <div class="product-info">
                    <span style="font-size:12px; color:#888;">${product.gender} / ${product.category}</span>
                    <h3 class="product-title">${product.name}</h3>
                    <div class="product-price">${product.price} TL</div>
                </div>
            </a>
        `;
        productGrid.innerHTML += html;
    });
}

if (productGrid) {
    const urlParams = new URLSearchParams(window.location.search);
    const paramGender = urlParams.get('gender');
    const paramCategory = urlParams.get('category');

    const genderSelect = document.getElementById('genderFilter');
    const categorySelect = document.getElementById('categoryFilter');

    if (paramGender && genderSelect) genderSelect.value = paramGender;
    if (paramCategory && categorySelect) categorySelect.value = paramCategory;

    function filterProducts() {
        if (!document.getElementById('genderFilter')) return;

        const gender = document.getElementById('genderFilter').value;
        const category = document.getElementById('categoryFilter').value;
        const color = document.getElementById('colorFilter').value;
        const sort = document.getElementById('sortFilter').value;

        let filtered = products.filter(p => {
            return (gender === 'all' || p.gender === gender) &&
                (category === 'all' || p.category === category) &&
                (color === 'all' || p.color === color);
        });

        if (sort === 'price-asc') filtered.sort((a, b) => a.price - b.price);
        if (sort === 'price-desc') filtered.sort((a, b) => b.price - a.price);

        renderProducts(filtered);
    }

    if (document.title.includes("Ana Sayfa")) {
        renderProducts(products.slice(0, 4));
    } else {
        filterProducts();
        const filters = ['genderFilter', 'categoryFilter', 'sortFilter', 'colorFilter'];
        filters.forEach(id => {
            const el = document.getElementById(id);
            if (el) el.addEventListener('change', filterProducts);
        });
    }
}

// ÜRÜN DETAY SAYFASI
const detailContainer = document.getElementById('product-detail-container');

if (detailContainer) {
    const urlParams = new URLSearchParams(window.location.search);
    const id = parseInt(urlParams.get('id'));
    const product = products.find(p => p.id === id);

    if (product) {
        let sizeHtml = "";
        if (product.sizes && product.sizes.length > 0) {
            product.sizes.forEach((size, index) => {
                const activeClass = index === 0 ? 'active' : '';
                sizeHtml += `<div class="size-box ${activeClass}" onclick="selectSize(this)">${size}</div>`;
            });
        } else {
            sizeHtml = `<div class="size-box active" onclick="selectSize(this)">Standart</div>`;
        }

        const isFavorite = wishlist.includes(product.id);
        const activeClass = isFavorite ? 'active' : '';
        const heartIcon = isFavorite ? 'fas fa-heart' : 'far fa-heart';

        detailContainer.innerHTML = `
            <div class="detail-wrapper">
                <div class="detail-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="detail-content">
                    <span class="detail-category">${product.category} / ${product.gender}</span>
                    <h1 class="detail-title">${product.name}</h1>
                    <span class="detail-price">${product.price} TL</span>
                    
                    <p class="detail-desc">
                        Bu ürün %100 pamuklu kumaştan üretilmiştir. Çocuğunuzun cildine zarar vermez.
                        Renk: <strong>${product.color}</strong>
                    </p>
                    
                    <div class="option-group">
                        <label>Beden Seçiniz:</label>
                        <div class="size-selector" id="sizeSelectorArea">
                            ${sizeHtml}
                        </div>
                    </div>

                    <div class="action-buttons">
                        <button class="btn-add-detail" onclick="addToCartDetail(${product.id})">Sepete Ekle</button>
                        <button class="detail-wishlist-btn ${activeClass}" data-id="${product.id}" onclick="toggleWishlist(${product.id}, event)">
                            <i class="${heartIcon}"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    } else {
        detailContainer.innerHTML = "<p style='text-align:center; padding:50px;'>Ürün bulunamadı veya hatalı link.</p>";
    }
}

function selectSize(element) {
    const siblings = element.parentElement.children;
    for (let box of siblings) {
        box.classList.remove('active');
    }
    element.classList.add('active');
}

function addToCartDetail(id) {
    const product = products.find(p => p.id === id);
    const activeSizeBox = document.querySelector('.size-box.active');

    if (!activeSizeBox) {
        notification("Lütfen bir beden seçiniz!", "error");
        return;
    }

    const size = activeSizeBox.textContent;
    const existingItem = cart.find(item => item.id === id && item.size === size);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            size: size,
            quantity: 1
        });
    }

    localStorage.setItem('babyMallCart', JSON.stringify(cart));
    updateCounts();
    notification("Ürün sepete eklendi!", "success");
}

// SEPET SAYFASI
const cartContainer = document.getElementById('cart-container');

function renderCart() {
    if (!cartContainer) return;

    if (cart.length === 0) {
        cartContainer.innerHTML = `
            <div style="text-align:center; padding: 60px 20px;">
                <i class="fas fa-shopping-basket" style="font-size: 60px; color: #ddd; margin-bottom: 20px;"></i>
                <h3 style="color: #555;">Sepetiniz şu an boş.</h3>
                <p style="color: #888; margin-bottom: 20px;">Hemen alışverişe başlayın, fırsatları kaçırmayın!</p>
                <a href="products.html" style="background: #ff6b6b; color: white; padding: 12px 30px; border-radius: 5px; text-decoration: none; font-weight: bold;">Alışverişe Başla</a>
            </div>
        `;
        return;
    }

    let totalPrice = 0;
    let itemsHtml = '<div class="cart-items-list">';
    cart.forEach((item, index) => {
        let itemTotal = item.price * item.quantity;
        totalPrice += itemTotal;

        itemsHtml += `
            <div class="cart-item">
                <img src="${item.image}" class="cart-item-img" alt="${item.name}">
                <div class="cart-item-details">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-variant">Beden: ${item.size}</div>
                    <div class="cart-item-price">${item.price} TL</div>
                    <div class="qty-control">
                        <button class="qty-btn" onclick="changeQuantity(${index}, -1)">-</button>
                        <span class="qty-val">${item.quantity}</span>
                        <button class="qty-btn" onclick="changeQuantity(${index}, 1)">+</button>
                    </div>
                </div>
                <div class="item-actions">
                    <div style="font-weight: bold; margin-bottom: 10px; text-align:right;">
                        ${itemTotal.toFixed(2)} TL
                    </div>
                    <button class="btn-remove-icon" onclick="removeItem(${index})">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </div>
            </div>
        `;
    });
    itemsHtml += '</div>';

    let summaryHtml = `
        <div class="cart-summary-box">
            <h3 class="summary-title">Sipariş Özeti</h3>
            <div class="summary-row">
                <span>Ürünlerin Toplamı</span>
                <span>${totalPrice.toFixed(2)} TL</span>
            </div>
            <div class="summary-row">
                <span>Kargo Toplam</span>
                <span style="color: #2ecc71;">Bedava</span>
            </div>
            <div class="summary-total">
                <span>Toplam</span>
                <span style="color: #ff6b6b;">${totalPrice.toFixed(2)} TL</span>
            </div>
            <button class="btn-checkout-full" onclick="checkout()">
                Sepeti Onayla <i class="fas fa-arrow-right" style="margin-left:10px;"></i>
            </button>
        </div>
    `;

    cartContainer.innerHTML = `
        <div class="cart-layout">
            ${itemsHtml}
            ${summaryHtml}
        </div>
    `;
}

if (cartContainer) {
    renderCart();
}

function checkout() {
    notification("Siparişiniz alındı! Teşekkür ederiz.", "success");
    setTimeout(() => {
        cart = [];
        localStorage.setItem('babyMallCart', JSON.stringify(cart));
        renderCart();
        updateCounts();
    }, 1500);
}

function changeQuantity(index, delta) {
    cart[index].quantity += delta;
    if (cart[index].quantity < 1) {
        cart[index].quantity = 1;
    }
    localStorage.setItem('babyMallCart', JSON.stringify(cart));
    renderCart();
    updateCounts();
}

function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem('babyMallCart', JSON.stringify(cart));
    renderCart();
    updateCounts();
    notification("Ürün sepetten silindi.", "error");
}

// SLIDER
const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

if (slides.length > 0) {
    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        if (index >= slides.length) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = slides.length - 1;
        } else {
            currentSlide = index;
        }
        slides[currentSlide].classList.add('active');
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    if (nextBtn && prevBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            resetInterval();
        });
        prevBtn.addEventListener('click', () => {
            prevSlide();
            resetInterval();
        });
    }

    function startInterval() {
        slideInterval = setInterval(nextSlide, 5000);
    }

    function resetInterval() {
        clearInterval(slideInterval);
        startInterval();
    }

    startInterval();
}

// İLETİŞİM
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        notification("Mesajınız başarıyla gönderildi!", "success");
        contactForm.reset();
    });
}