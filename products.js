const products = [
    {
        id: 1,
        name: "Erkek Çocuk Alt Üst Takım Kedi Baskılı",
        price: 399.99,
        image: "images/image1.jpeg",
        gender: "Erkek",
        category: "Alt Üst Takım",
        color: "Gri",
        sizes: ["2 Yaş", "3 Yaş", "4 Yaş", "5 Yaş", "6 Yaş"]
    },
    {
        id: 2,
        name: "Kız Çocuk Alt Üst Takım Girl Baskılı",
        price: 399.99,
        image: "images/image2.jpeg",
        gender: "Kız",
        category: "Alt Üst Takım",
        color: "Pembe",
        sizes: ["2 Yaş", "3 Yaş", "4 Yaş", "5 Yaş", "6 Yaş"]
    },
    {
        id: 3,
        name: "Kız Bebek Alt Üst Takım Etek/Bluz",
        price: 349.99,
        image: "images/image3.jpeg",
        gender: "Kız",
        category: "Alt Üst Takım",
        color: "Kırmızı",
        sizes: ["3-6 Ay", "6-9 Ay", "9-12 Ay", "12-18 Ay"]
    },
    {
        id: 4,
        name: "Kız Çocuk İki İplik Alt Üst Takım",
        price: 374.99,
        image: "images/image4.jpeg",
        gender: "Kız",
        category: "Alt Üst Takım",
        color: "Mor",
        sizes: ["2 Yaş", "3 Yaş", "4 Yaş", "5 Yaş", "6 Yaş"]
    },
    {
        id: 5,
        name: "Kız Çocuk Düşük Kol Alt Üst Takım",
        price: 439.99,
        image: "images/image5.jpeg",
        gender: "Kız",
        category: "Alt Üst Takım",
        color: "Pembe",
        sizes: ["4 Yaş", "5 Yaş", "6 Yaş"]
    },
    {
        id: 6,
        name: "Kız Çocuk Takım Minnie Mouse Baskılı",
        price: 399.99,
        image: "images/image6.jpeg",
        gender: "Kız",
        category: "Alt Üst Takım",
        color: "Fuşya",
        sizes: ["4 Yaş", "5 Yaş", "6 Yaş"]
    },
    {
        id: 7,
        name: "Unisex Bebek Hastane Çıkış Seti Ayı Winnie",
        price: 349.99,
        image: "images/image7.jpeg",
        gender: "Unisex",
        category: "Hastane Çıkış Seti",
        color: "Beyaz",
        sizes: ["0-3 Ay"]
    },
    {
        id: 8,
        name: "Kız Çocuk Alt Üst Takım Lila",
        price: 430.00,
        image: "images/image8.jpeg",
        gender: "Kız",
        category: "Alt Üst Takım",
        color: "Lila",
        sizes: ["2 Yaş", "3 Yaş", "4 Yaş", "5 Yaş", "6 Yaş"]
    },
    {
        id: 9,
        name: "Kız Çocuk Takım Happy Day",
        price: 459.99,
        image: "images/image9.jpeg",
        gender: "Kız",
        category: "Alt Üst Takım",
        color: "Fuşya",
        sizes: ["2 Yaş", "3 Yaş", "4 Yaş", "5 Yaş", "6 Yaş"]
    },
    {
        id: 10,
        name: "Erkek Çocuk Bej Takım Traktör",
        price: 349.00,
        image: "images/image10.jpeg",
        gender: "Erkek",
        category: "Alt Üst Takım",
        color: "Bej",
        sizes: ["3 Yaş", "4 Yaş", "5 Yaş", "6 Yaş"]
    },
    {
        id: 11,
        name: "Kız Çocuk Alt Üst Takım",
        price: 359.99,
        image: "images/image11.jpeg",
        gender: "Kız",
        category: "Alt Üst Takım",
        color: "Bej",
        sizes: ["3 Yaş", "4 Yaş", "5 Yaş"]
    },
    {
        id: 12,
        name: "Kız Bebek Fitilli Takım Kedicik",
        price: 294.99,
        image: "images/image12.jpeg",
        gender: "Kız",
        category: "Alt Üst Takım",
        color: "Pembe",
        sizes: ["3-6 Ay", "6-9 Ay", "9-12 Ay", "12-18 Ay"]
    },
    {
        id: 13,
        name: "Hastane Çıkış Seti Uçan Ayı Beyaz",
        price: 299.99,
        image: "images/image13.jpeg",
        gender: "Unisex",
        category: "Hastane Çıkış Seti",
        color: "Beyaz",
        sizes: ["0-3 Ay"]
    },
    {
        id: 14,
        name: "Kız Çocuk Fitilli İspanyol Takım",
        price: 280.00,
        image: "images/image14.jpeg",
        gender: "Kız",
        category: "Alt Üst Takım",
        color: "Pembe",
        sizes: ["3-6 Ay", "6-9 Ay", "9-12 Ay", "12-18 Ay", "18-24 Ay", "2-4 Yaş"]
    },
    {
        id: 15,
        name: "Kız Çocuk Fitilli Takım Lila",
        price: 269.99,
        image: "images/image15.jpeg",
        gender: "Kız",
        category: "Alt Üst Takım",
        color: "Lila",
        sizes: ["3-6 Ay", "6-9 Ay", "9-12 Ay", "12-18 Ay", "18-24 Ay", "2-4 Yaş"]
    },
    {
        id: 16,
        name: "Kız Çocuk Fitilli Kurdeleli Takım",
        price: 299.99,
        image: "images/image16.jpeg",
        gender: "Kız",
        category: "Alt Üst Takım",
        color: "Yeşil",
        sizes: ["3-6 Ay", "6-9 Ay", "9-12 Ay"]
    },
    {
        id: 17,
        name: "Hastane Çıkış Seti Tavşan Beyaz",
        price: 299.99,
        image: "images/image17.jpeg",
        gender: "Unisex",
        category: "Hastane Çıkış Seti",
        color: "Beyaz",
        sizes: ["0-3 Ay"]
    },
    {
        id: 18,
        name: "Erkek Çocuk Alt Üst Takım Gri",
        price: 349.99,
        image: "images/image18.jpeg",
        gender: "Erkek",
        category: "Alt Üst Takım",
        color: "Gri",
        sizes: ["2 Yaş", "3 Yaş", "4 Yaş", "5 Yaş", "6 Yaş"]
    },
    {
        id: 19,
        name: "Erkek Çocuk Alt Üst Takım Bej",
        price: 349.99,
        image: "images/image19.jpeg",
        gender: "Erkek",
        category: "Alt Üst Takım",
        color: "Bej",
        sizes: ["2 Yaş", "3 Yaş", "4 Yaş", "5 Yaş", "6 Yaş"]
    },
    {
        id: 20,
        name: "Erkek Çocuk Alt Üst Takım Sloganlı",
        price: 349.99,
        image: "images/image20.jpeg",
        gender: "Erkek",
        category: "Alt Üst Takım",
        color: "Bej",
        sizes: ["2 Yaş", "3 Yaş", "4 Yaş", "5 Yaş"]
    },
    {
        id: 21,
        name: "Erkek Çocuk Alt Üst Takım Scooby Doo",
        price: 379.99,
        image: "images/image21.jpeg",
        gender: "Erkek",
        category: "Alt Üst Takım",
        color: "Beyaz",
        sizes: ["2 Yaş", "3 Yaş", "4 Yaş", "5 Yaş", "6 Yaş"]
    },
    {
        id: 22,
        name: "Bebek Hastane Çıkış Seti Friends",
        price: 249.99,
        image: "images/image22.jpeg",
        gender: "Unisex",
        category: "Hastane Çıkış Seti",
        color: "Beyaz",
        sizes: ["0-3 Ay"]
    },
    {
        id: 23,
        name: "Erkek Çocuk Takım Kedi",
        price: 349.99,
        image: "images/image23.jpeg",
        gender: "Erkek",
        category: "Alt Üst Takım",
        color: "Bej",
        sizes: ["2 Yaş", "3 Yaş", "4 Yaş", "5 Yaş", "6 Yaş"]
    },
    {
        id: 24,
        name: "Kız Çocuk Takım Baskılı",
        price: 349.99,
        image: "images/image24.jpeg",
        gender: "Kız",
        category: "Alt Üst Takım",
        color: "Mor",
        sizes: ["3 Yaş", "4 Yaş", "5 Yaş"]
    },
    {
        id: 25,
        name: "Erkek Çocuk Takım Paw Patrol",
        price: 379.99,
        image: "images/image25.jpeg",
        gender: "Erkek",
        category: "Alt Üst Takım",
        color: "Bej",
        sizes: ["2 Yaş", "3 Yaş", "4 Yaş", "5 Yaş", "6 Yaş"]
    },
    {
        id: 26,
        name: "Erkek Bebek Patik Ayakkabı Mavi",
        price: 199.99,
        image: "images/image26.jpeg",
        gender: "Erkek",
        category: "Patik Ayakkabı",
        color: "Mavi",
        sizes: ["0-3 Ay", "3-6 Ay", "6-9 Ay"]
    },
    {
        id: 27,
        name: "Kız Bebek Patik Ayakkabı Sarı",
        price: 199.99,
        image: "images/image27.jpeg",
        gender: "Kız",
        category: "Patik Ayakkabı",
        color: "Sarı",
        sizes: ["0-3 Ay", "3-6 Ay", "6-9 Ay"]
    },
    {
        id: 28,
        name: "Hastane Çıkış Seti Annesinin Balı",
        price: 234.99,
        image: "images/image28.jpeg",
        gender: "Unisex",
        category: "Hastane Çıkış Seti",
        color: "Kırmızı",
        sizes: ["0-3 Ay"]
    },
    {
        id: 29,
        name: "Bebek Tulum Sarı-gri Aslan",
        price: 249.99,
        image: "images/image29.jpeg",
        gender: "Erkek",
        category: "Tulum",
        color: "Sarı",
        sizes: ["0-3 Ay", "3-6 Ay", "6-9 Ay", "9-12 Ay"]
    },
    {
        id: 30,
        name: "Bebek Hastane Çıkış Seti Zürafa",
        price: 299.99,
        image: "images/image30.jpeg",
        gender: "Unisex",
        category: "Hastane Çıkış Seti",
        color: "Beyaz",
        sizes: ["0-3 Ay"]
    },
    {
        id: 31,
        name: "Kız Bebek Set Menekşe Desenli",
        price: 299.99,
        image: "images/image31.jpeg",
        gender: "Kız",
        category: "Hastane Çıkış Seti",
        color: "Beyaz",
        sizes: ["0-3 Ay"]
    },
    {
        id: 32,
        name: "Erkek Bebek Seti Cepli Çizgili",
        price: 249.99,
        image: "images/image32.jpeg",
        gender: "Erkek",
        category: "Hastane Çıkış Seti",
        color: "Gri",
        sizes: ["0-3 Ay"]
    },
    {
        id: 33,
        name: "Erkek Bebek Seti Aslan Safari",
        price: 299.99,
        image: "images/image33.jpeg",
        gender: "Erkek",
        category: "Hastane Çıkış Seti",
        color: "Bej",
        sizes: ["0-3 Ay"]
    },
    {
        id: 34,
        name: "Bebek Tulum Sarı-Gri Winnie",
        price: 229.99,
        image: "images/image34.jpeg",
        gender: "Unisex",
        category: "Tulum",
        color: "Sarı",
        sizes: ["0-3 Ay", "3-6 Ay", "6-9 Ay", "9-12 Ay"]
    },
    {
        id: 35,
        name: "Bebek Düğmeli Alt Üst Takım",
        price: 249.99,
        image: "images/image35.jpeg",
        gender: "Unisex",
        category: "Alt Üst Takım",
        color: "Yeşil",
        sizes: ["6-9 Ay", "9-12 Ay", "12-18 Ay"]
    },
    {
        id: 36,
        name: "Erkek Çocuk Takım Winnie",
        price: 379.99,
        image: "images/image36.jpeg",
        gender: "Erkek",
        category: "Alt Üst Takım",
        color: "Bej",
        sizes: ["2 Yaş", "3 Yaş", "4 Yaş", "5 Yaş"]
    },
    {
        id: 37,
        name: "Bebek Tulum Sarı-Gri Babasının Aslanı",
        price: 249.90,
        image: "images/image37.jpeg",
        gender: "Erkek",
        category: "Tulum",
        color: "Sarı",
        sizes: ["0-3 Ay", "3-6 Ay", "6-9 Ay", "9-12 Ay"]
    },
    {
        id: 38,
        name: "Erkek Bebek Mont Takım Kırmızı",
        price: 399.99,
        image: "images/image38.jpeg",
        gender: "Erkek",
        category: "Mont",
        color: "Kırmızı",
        sizes: ["6 Ay", "12 Ay", "18 Ay"]
    },
    {
        id: 39,
        name: "Kız Çocuk Takım Çilek Baskılı",
        price: 429.99,
        image: "images/image39.jpeg",
        gender: "Kız",
        category: "Alt Üst Takım",
        color: "Lila",
        sizes: ["4 Yaş", "5 Yaş", "6 Yaş"]
    },
    {
        id: 40,
        name: "Kız Çocuk Takım Baby Baskılı",
        price: 399.99,
        image: "images/image40.jpeg",
        gender: "Kız",
        category: "Alt Üst Takım",
        color: "Lila",
        sizes: ["4 Yaş", "5 Yaş", "6 Yaş"]
    },
    {
        id: 41,
        name: "Kız Çocuk Fitilli Alt Üst Kurdeleli Takım",
        price: 299.99,
        image: "images/image41.jpeg",
        gender: "Kız",
        category: "Alt Üst Takım",
        color: "Pembe",
        sizes: ["3-6 Ay", "6-9 Ay", "9-12 Ay"]
    },
    {
        id: 42,
        name: "Kız Çocuk Ribana Fitilli Alt Üst Takım Dar Kalıp",
        price: 299.99,
        image: "images/image42.jpeg",
        gender: "Kız",
        category: "Alt Üst Takım",
        color: "Pembe",
        sizes: ["1 Yaş", "2 Yaş", "3 Yaş", "4 Yaş"]
    },
    {
        id: 43,
        name: "Kız Çocuk Alt Üst Takım İspanyol Paça",
        price: 349.99,
        image: "images/image43.jpeg",
        gender: "Kız",
        category: "Alt Üst Takım",
        color: "Siyah",
        sizes: ["4 Yaş", "5 Yaş", "6 Yaş"]
    },
    {
        id: 44,
        name: "Kız Çocuk Alt Üst Takım Minnie Mouse Baskılı",
        price: 599.99,
        image: "images/image44.jpeg",
        gender: "Kız",
        category: "Alt Üst Takım",
        color: "Mor",
        sizes: ["4 Yaş", "5 Yaş", "6 Yaş"]
    },
    {
        id: 45,
        name: "Erkek Çocuk Alt Üst Takım Kaplan",
        price: 379.99,
        image: "images/image45.jpeg",
        gender: "Erkek",
        category: "Alt Üst Takım",
        color: "Gri",
        sizes: ["2 Yaş", "3 Yaş", "4 Yaş", "5 Yaş", "6 Yaş"]
    },
    {
        id: 46,
        name: "Kız Çocuk Alt Üst Takım Karakter Baskılı ",
        price: 409.99,
        image: "images/image46.jpeg",
        gender: "Kız",
        category: "Alt Üst Takım",
        color: "Mor",
        sizes: ["4 Yaş", "5 Yaş", "6 Yaş"]
    },
    {
        id: 47,
        name: "Kız Çocuk Alt Üst Takım Fuşya Flamingo",
        price: 599.99,
        image: "images/image47.jpeg",
        gender: "Kız",
        category: "Alt Üst Takım",
        color: "Fuşya",
        sizes: ["2 Yaş", "3 Yaş", "4 Yaş", "5 Yaş", "6 Yaş"]
    },
    {
        id: 48,
        name: " Erkek Çocuk Alt Üst Takım Sevimli Mickey Mouse",
        price: 379.99,
        image: "images/image48.jpeg",
        gender: "Erkek",
        category: "Alt Üst Takım",
        color: "Gri",
        sizes: ["2 Yaş", "3 Yaş", "4 Yaş", "5 Yaş", "6 Yaş"]
    },
    {
        id: 49,
        name: "Erkek Çocuk Alt Üst Takım Atatürk",
        price: 379.99,
        image: "images/image49.jpeg",
        gender: "Erkek",
        category: "Alt Üst Takım",
        color: "Gri",
        sizes: ["2 Yaş", "3 Yaş", "4 Yaş", "5 Yaş", "6 Yaş"]
    },
    {
        id: 50,
        name: "Kız Çocuk Alt Üst Takım Fuşya Flower",
        price: 599.99,
        image: "images/image50.jpeg",
        gender: "Kız",
        category: "Alt Üst Takım",
        color: "Fuşya",
        sizes: ["2 Yaş", "3 Yaş", "4 Yaş", "5 Yaş", "6 Yaş"]
    },
    {
        id: 51,
        name: "Erkek Çocuk Alt Üst Takım Örümcek",
        price: 379.99,
        image: "images/image51.jpeg",
        gender: "Erkek",
        category: "Alt Üst Takım",
        color: "Gri",
        sizes: ["2 Yaş", "3 Yaş", "4 Yaş", "5 Yaş", "6 Yaş"]
    },
    {
        id: 52,
        name: "Erkek Çocuk Gömlekli Şortlu Takım Müslin Yazlık",
        price: 349.99,
        image: "images/image52.jpeg",
        gender: "Erkek",
        category: "Alt Üst Takım",
        color: "Yeşil",
        sizes: ["2 Yaş", "3 Yaş", "4 Yaş", "5 Yaş"]
    },
    {
        id: 53,
        name: "Kız Çocuk Ispanyol Takım Baskılı",
        price: 339.99,
        image: "images/image53.jpeg",
        gender: "Kız",
        category: "Alt Üst Takım",
        color: "Turuncu",
        sizes: ["3 Yaş", "4 Yaş", "5 Yaş", "6 Yaş"]
    },
    {
        id: 54,
        name: "Kız Çocuk Fırfırlı Etekli Takım Baskılı",
        price: 399.99,
        image: "images/image54.jpeg",
        gender: "Kız",
        category: "Alt Üst Takım",
        color: "Mor",
        sizes: ["4 Yaş", "5 Yaş", "6 Yaş"]
    },
    {
        id: 55,
        name: "Erkek Çocuk Polo Yaka Tshirt Şort Takım",
        price: 299.99,
        image: "images/image55.jpeg",
        gender: "Erkek",
        category: "Alt Üst Takım",
        color: "Lacivert",
        sizes: ["4 Yaş", "5 Yaş", "6 Yaş"]
    },
    {
        id: 56,
        name: "Kız Çocuk İspanyol Paça Yazlık Takım Kuromi Baskılı",
        price: 379.99,
        image: "images/image56.jpeg",
        gender: "Kız",
        category: "Alt Üst Takım",
        color: "Mor",
        sizes: ["4 Yaş", "5 Yaş", "6 Yaş"]
    },
    {
        id: 57,
        name: "Erkek Çocuk Tshirt-Şort Takım Gri Wild",
        price: 399.99,
        image: "images/image57.jpeg",
        gender: "Erkek",
        category: "Alt Üst Takım",
        color: "Gri",
        sizes: ["4 Yaş", "5 Yaş", "6 Yaş"]
    },
    {
        id: 58,
        name: "Erkek Çocuk Yelekli Alt Üst Takım",
        price: 399.99,
        image: "images/image58.jpeg",
        gender: "Erkek",
        category: "Alt Üst Takım",
        color: "Yeşil",
        sizes: ["3 Yaş", "4 Yaş", "5 Yaş", "6 Yaş"]
    },
    {
        id: 59,
        name: "Kız Çocuk Yazlık  Alt Üst Takım Düşük Kol Fitilli ",
        price: 289.99,
        image: "images/image59.jpeg",
        gender: "Kız",
        category: "Alt Üst Takım",
        color: "Pembe",
        sizes: ["2 Yaş", "3 Yaş", "4 Yaş"]
    },
    {
        id: 60,
        name: "Kız Çocuk Çantalı Kot Takım Etekli",
        price: 449.99,
        image: "images/image60.jpeg",
        gender: "Kız",
        category: "Alt Üst Takım",
        color: "Kırmızı",
        sizes: ["3 Yaş", "4 Yaş", "5 Yaş", "6 Yaş"]
    },
    {
        id: 61,
        name: "Hastane Çıkış Seti Çizgili Fil",
        price: 999.99,
        image: "images/image61.jpeg",
        gender: "Unisex",
        category: "Hastane Çıkış Seti",
        color: "Beyaz",
        sizes: ["0-3 Ay"]
    },
    {
        id: 62,
        name: "Hastane Çıkış Seti Tavşan Pembe",
        price: 229.99,
        image: "images/image62.jpeg",
        gender: "Kız",
        category: "Hastane Çıkış Seti",
        color: "Pembe",
        sizes: ["0-3 Ay"]
    },
    {
        id: 63,
        name: "Kız Bebek Hastane Çıkış Seti Çilek ve Gökkuşağı Desenli",
        price: 299.99,
        image: "images/image63.jpeg",
        gender: "Kız",
        category: "Hastane Çıkış Seti",
        color: "Beyaz",
        sizes: ["0-3 Ay"]
    },
    {
        id: 64,
        name: "Erkek Bebek Hastane Çıkış Seti Kaplan",
        price: 299.99,
        image: "images/image64.jpeg",
        gender: "Erkek",
        category: "Hastane Çıkış Seti",
        color: "Bej",
        sizes: ["0-3 Ay"]
    },

    {
        id: 65,
        name: "Unisex Bebek Hastane Çıkış Seti Mickey Mouse",
        price: 299.99,
        image: "images/image65.jpeg",
        gender: "Unisex",
        category: "Hastane Çıkış Seti",
        color: "Beyaz",
        sizes: ["0-3 Ay"]
    },
    {
        id: 66,
        name: "Kız Bebek Yenidoğan Hastane Çıkış Seti Leopar Desenli Fırfırlı Somon",
        price: 299.99,
        image: "images/image66.jpeg",
        gender: "Kız",
        category: "Hastane Çıkış Seti",
        color: "Pembe",
        sizes: ["0-3 Ay"]
    },
    {
        id: 67,
        name: "Kız Bebek Organik Hastane Çıkış Seti Dantelli 4 Parça",
        price: 349.99,
        image: "images/image67.jpeg",
        gender: "Kız",
        category: "Hastane Çıkış Seti",
        color: "Beyaz",
        sizes: ["0-3 Ay"]
    },
    {
        id: 68,
        name: "Bebek Organik Fitilli Pamuk Sıfır Kol Tulum",
        price: 279.99,
        image: "images/image68.jpeg",
        gender: "Kız",
        category: "Tulum",
        color: "Mor",
        sizes: ["6-9 Ay"]
    },
    {
        id: 69,
        name: "Bebek Organik Fitilli Pamuk Sıfır Kol Tulum",
        price: 279.99,
        image: "images/image69.jpeg",
        gender: "Kız",
        category: "Tulum",
        color: "Pembe",
        sizes: ["6-9 Ay"]
    },
    {
        id: 70,
        name: "Kız Bebek Yazlık Tulum Omuz Detaylı Kayık Yaka",
        price: 289.99,
        image: "images/image70.jpeg",
        gender: "Kız",
        category: "Tulum",
        color: "Mor",
        sizes: ["3-6 Ay", "6-9 Ay", "9-12 Ay", "12-18 Ay"]
    },
    {
        id: 71,
        name: "Kız Bebek Tulum Kalp Desenli  Pamuk Tulum",
        price: 249.99,
        image: "images/image71.jpeg",
        gender: "Kız",
        category: "Tulum",
        color: "Kırmızı",
        sizes: ["0-3 Ay", "3-6 Ay", "6-9 Ay"]
    },
    {
        id: 72,
        name: "Kız Bebek Yazlık Tulum Sırt Detaylı",
        price: 349.99,
        image: "images/image72.jpeg",
        gender: "Kız",
        category: "Tulum",
        color: "Pembe",
        sizes: ["3-6 Ay", "6-9 Ay", "9-12 Ay"]
    }
];