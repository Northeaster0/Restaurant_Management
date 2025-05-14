Database MySQL Codes

-- Veritabanı oluşturuluyor
CREATE DATABASE IF NOT EXISTS restaurant_ordering;
USE restaurant_ordering;

-- 1. tables tablosu
CREATE TABLE tables (
    id INT PRIMARY KEY,
    type VARCHAR(50),
    name VARCHAR(50),
    description TEXT,
    username VARCHAR(50),
    password VARCHAR(50)
);

INSERT INTO tables (id, type, name, description, username, password) VALUES
(1, 'İçerisi', 'Masa 1', 'Pencere kenarında 2 kişilik masa', 'Masa 1', '123'),
(2, 'İçerisi', 'Masa 2', 'Mutfağa yakın 4 kişilik masa', 'Masa 2', '123'),
(3, 'Balkon', 'Masa 3', 'Açık alanda sigara içilebilir masa', 'Masa 3', '123'),
(4, 'Bahçe', 'Masa 4', 'Gölgelik altında geniş masa', 'Masa 4', '123'),
(5, 'VIP', 'Masa 5', 'Özel oda içinde, sunucu çağırma düğmesi var', 'Masa 5', '123'),
(7, 'Balkon', 'Masa 6', 'Yukarıdaki masa', 'Masa 6', '123');

-- 2. menu_items tablosu
CREATE TABLE menu_items (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    description TEXT,
    price DECIMAL(10,2),
    image_url TEXT
);

INSERT INTO menu_items (id, name, description, price, image_url) VALUES
(1, 'Margherita Pizza', 'Klasik domates soslu, mozzarella ve fesleğenli pizza', 125.00, 'https://uk.ooni.com/cdn/shop/articles/20220211142645-margherita-9920_e41233d5-dece-461c-b07e-03245f031dfe.jpg?v=1737105431&width=1080'),
(2, 'Tavuk Burger', 'Özel soslu çıtır tavuk burger', 75.00, 'https://www.arbys.com.tr/cmsfiles/products/tavukburger-sandvic.png?v=166'),
(3, 'Patates Kızartması', 'Krokan çıtır patates', 35.00, 'https://cdn.ye-mek.net/App_UI/Img/out/650/2024/02/unlu-patates-kizartmasi-resimli-yemek-tarifi(11).jpg'),
(4, 'Ayran', 'Soğuk ayran 300 ml', 15.00, 'https://static.ticimax.cloud/9247/uploads/urunresimleri/buyuk/ayran-032b56e5-6.jpg'),
(6, 'Tost', 'Karışık tost', 50.00, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdcCNuubjMfQmWhmDZu7vcNck-uyBvKmR7IgGs');

-- 3. orders tablosu
CREATE TABLE orders (
    id INT PRIMARY KEY,
    status VARCHAR(50),
    created_at DATETIME,
    table_id INT,
    FOREIGN KEY (table_id) REFERENCES tables(id)
);

INSERT INTO orders (id, status, created_at, table_id) VALUES
(2, 'Ready', '2025-05-13 15:08:44', 2),
(3, 'Ready', '2025-05-13 16:59:19', 3),
(4, 'Ready', '2025-05-13 17:00:28', 4),
(5, 'Preparing', '2025-05-13 17:11:37', 5),
(8, 'Preparing', '2025-05-13 17:17:00', 2),
(9, 'Preparing', '2025-05-13 17:30:26', 3),
(14, 'Preparing', '2025-05-14 02:04:35', 2),
(15, 'Ready', '2025-05-14 02:20:13', 1),
(18, 'Preparing', '2025-05-14 14:56:19', 7),
(19, 'Preparing', '2025-05-14 15:51:41', 1),
(20, 'Preparing', '2025-05-14 16:05:03', 4);

-- 4. order_items tablosu
CREATE TABLE order_items (
    id INT PRIMARY KEY,
    order_id INT,
    menu_item_id INT,
    quantity INT,
    FOREIGN KEY (order_id) REFERENCES orders(id),
    FOREIGN KEY (menu_item_id) REFERENCES menu_items(id)
);

INSERT INTO order_items (id, order_id, menu_item_id, quantity) VALUES
(3, 2, 2, 1),
(4, 2, 3, 1),
(5, 3, 1, 1),
(6, 4, 1, 1),
(7, 4, 2, 1),
(8, 5, 2, 1),
(9, 5, 3, 1),
(13, 8, 2, 1),
(14, 8, 3, 1),
(34, 9, 3, 2),
(35, 9, 2, 1),
(36, 14, 1, 1),
(37, 14, 2, 1),
(38, 15, 1, 1),
(39, 15, 2, 1),
(45, 18, 1, 1),
(46, 18, 2, 4),
(47, 18, 3, 1),
(48, 18, 4, 1),
(49, 19, 3, 1),
(50, 20, 2, 1);

-- 5. staff tablosu
CREATE TABLE staff (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    hire_date DATE,
    work_hours VARCHAR(50)
);

INSERT INTO staff (id, name, hire_date, work_hours) VALUES
(1, 'Ali Kaya', '2024-03-28', '09:00–17:00'),
(2, 'Zeynep Yılmaz', '2024-05-11', '19:30–00:00'),
(3, 'Mehmet Demir', '2023-11-29', '11:00–19:00'),
(4, 'Ayşe Koç', '2022-08-19', '12:00–22:00'),
(6, 'Ali Osman Tas', '2025-05-13', '09:00–17:00');
