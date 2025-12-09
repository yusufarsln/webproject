let cart = JSON.parse(localStorage.getItem('babyMallCart')) || [];

function updateCartCount() {
    const countElement = document.getElementById('cart-count');
    if (countElement) {
        let totalItems = 0;
        cart.forEach(item => totalItems += item.quantity);
        countElement.textContent = totalItems;
    }
}
document.addEventListener('DOMContentLoaded', updateCartCount);

// --- ÜRÜN LİSTELEME ---
const productGrid = document.getElementById('product-grid');

function renderProducts(list) {
    if (!productGrid) return;
    productGrid.innerHTML = '';

    if (list.length === 0) {
        productGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center;">Ürün bulunamadı.</p>';
        return;
    }

    list.forEach(product => {
        const html = `
            <a href="product-detail.html?id=${product.id}" class="product-card">
                <img src="${product.image}" class="product-image" alt="${product.name}">
                <div class="product-info">
                    <h3 class="product-title">${product.name}</h3>
                    <div class="product-price">${product.price} TL</div>
                </div>
            </a>
        `;
        productGrid.innerHTML += html;
    });
}

if (productGrid) {
    if (document.title.includes("Ana Sayfa")) {
        renderProducts(products.slice(0, 4));
    } else {
        renderProducts(products);

        function filterProducts() {
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

        const filters = ['genderFilter', 'categoryFilter', 'sortFilter', 'colorFilter'];
        filters.forEach(id => {
            const el = document.getElementById(id);
            if (el) el.addEventListener('change', filterProducts);
        });
    }
}

// --- ÜRÜN DETAY SAYFASI ---
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
                    </p>
                    
                    <div class="option-group">
                        <label>Beden Seçiniz:</label>
                        <div class="size-selector" id="sizeSelectorArea">
                            ${sizeHtml}
                        </div>
                    </div>

                    <button class="btn-add-detail" onclick="addToCartDetail(${product.id})">Sepete Ekle</button>
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
        alert("Lütfen bir beden seçiniz.");
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
    updateCartCount();
}

// --- SEPET SAYFASI ---
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
                        <button class="qty-btn" onclick="changeQty(${index}, -1)">-</button>
                        <span class="qty-val">${item.quantity}</span>
                        <button class="qty-btn" onclick="changeQty(${index}, 1)">+</button>
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
    alert("Siparişiniz alındı! Teşekkür ederiz.");

    setTimeout(() => {
        cart = [];
        localStorage.setItem('babyMallCart', JSON.stringify(cart));
        renderCart();
        updateCartCount();
    }, 1500);
}

function changeQty(index, delta) {
    cart[index].quantity += delta;
    if (cart[index].quantity < 1) {
        cart[index].quantity = 1;
    }
    localStorage.setItem('babyMallCart', JSON.stringify(cart));
    renderCart();
    updateCartCount();
}

function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem('babyMallCart', JSON.stringify(cart));
    renderCart();
    updateCartCount();
}

// --- SLIDER ---
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

// --- İLETİŞİM ---
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert("Mesajınız başarıyla gönderildi!");
        contactForm.reset();
    });
}