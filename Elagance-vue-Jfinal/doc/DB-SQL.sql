-- 数据库名称 alphamm

CREATE DATABASE elagance;

------------------------------------------------------------------
-- 表信息:用户表
-- 类型:普通表

DROP TABLE IF EXISTS users;
CREATE TABLE users (
  users_id SERIAL PRIMARY KEY COMMENT '用户ID',
  users_name VARCHAR(20) COMMENT '用户名称',
  email VARCHAR(20) NOT NULL COMMENT '注册邮箱',
  tel VARCHAR(20) COMMENT '注册电话',
  password_hash CHAR(64) NOT NULL COMMENT '密码',
  salt VARCHAR(10) NOT NULL COMMENT '密码干扰串'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT '用户账号表';


INSERT INTO users (users_id, users_name, email, tel, password_hash, salt)
VALUES (DEFAULT, 'admin', 'admin@mao.com', '13012345678', 'admin','admin')
------------------------------------------------------------------
-- 表信息:店铺表
-- 类型:普通表
--
-- DROP TABLE IF EXISTS `shops`;
-- CREATE TABLE `shops` (
--   `shops_id` SERIAL PRIMARY KEY COMMENT '店铺ID',
--   `shops_name` VARCHAR(20) COMMENT '店铺名称',
--   `logo` VARCHAR(255) COMMENT '店铺logo',
--   `description` VARCHAR(500) COMMENT '店铺简介',
--   `province` VARCHAR(30) COMMENT '省',
--   `city` VARCHAR(30) COMMENT '市',
--   `district` VARCHAR(30) COMMENT '区',
--   `address` VARCHAR(255) COMMENT '详细地址',
--   `start` DATE COMMENT '开店时间',
--   `shops_status` TINYINT(1) NOT NULL COMMENT '店铺状态'
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT '店铺表';
--
-- INSERT INTO shops (shops_id, shops_name, logo, description, province, city, district, address, start, shops_status)
-- VALUES (DEFAULT, '测试店铺', 'static/img/admin_users/blog_1.jpg', '这是一个测试店铺', '四川','成都', '武侯区', '高薪大道', '2015-11-15', 1)
-- ------------------------------------------------------------------
-- 表信息:商品表
-- 类型:普通表
--
-- DROP TABLE IF EXISTS `goods`;
-- CREATE TABLE `goods` (
--   `goods_id` SERIAL PRIMARY KEY COMMENT '商品ID',
--   `goods_name` VARCHAR(20) COMMENT '商品名称',
--   `showimg` VARCHAR(100) COMMENT '商品图片',
--   `goods_status` TINYINT(1) NOT NULL COMMENT '商品状态',
--   `oldprice` DECIMAL(10) COMMENT '原价',
--   `nowprice` DECIMAL(10) COMMENT '现价'
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT '商品表';
--
-- INSERT INTO goods (goods_id, goods_name, showimg, goods_status, oldprice, nowprice)
-- VALUES (DEFAULT, '测试商品', 'static/img/admin_users/blog_1.jpg', 1, 478.00, 896.00)
--
-- ------------------------------------------------------------------
-- 表信息: 广告表
-- 类型: 普通表
-- DROP TABLE IF EXISTS `advs`;
-- CREATE TABLE `advs` (
--   `advs_id` SERIAL PRIMARY KEY COMMENT '广告ID',
--   `advs_name` VARCHAR(20) COMMENT '广告名称',
--   `img_src` VARCHAR(100) COMMENT '广告图片',
--   `link` VARCHAR(200) COMMENT '广告链接',
--   `advs_status` TINYINT(1) NOT NULL COMMENT '广告状态',
--   `advs_type` TINYINT(2) COMMENT '广告类型'
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT '广告表';
--
-- ALTER table advs add `link` VARCHAR(200) COMMENT '广告链接'
--
-- alter table advs modify column advs_status TINYINT(2)
--
-- INSERT INTO advs (advs_id, advs_name, img_src, link, advs_status, advs_type)
-- VALUES (DEFAULT, '推广广告', 'static/img/admin_users/blog_1.jpg', 'https://www.baidu.com/',  1, 2)
--
-- 类型1: banner广告
-- 类型2: 推广广告
--
-- ------------------------------------------------------------------
-- DROP TABLE IF EXISTS `bugs`;
-- CREATE TABLE bugs (
--   bug_id SERIAL PRIMARY KEY,
--   data_reported DATE NOT NULL,
--   summary VARCHAR(80),
--   description VARCHAR(1000),
--   resolution VARCHAR(1000),
--   reported_by BIGINT UNSIGNED NOT NULL,
--   assigned_to BIGINT UNSIGNED,
--   verified_by BIGINT UNSIGNED,
--   status VARCHAR(20) NOT NULL DEFAULT 'NEW',
--   priority VARCHAR(20),
--   hours NUMERIC(9,2)
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
-- ------------------------------------------------------------------
-- DROP TABLE IF EXISTS `comments`;
-- CREATE TABLE comments (
--   comment_id SERIAL PRIMARY KEY,
--   bug_id BIGINT UNSIGNED NOT NULL,
--   author BIGINT UNSIGNED NOT NULL,
--   comment_date DATETIME NOT NULL,
--   comment TEXT NOT NULL
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
-- ------------------------------------------------------------------
-- DROP TABLE IF EXISTS `screensshots`;
-- CREATE TABLE screensshots (
--   bug_id BIGINT UNSIGNED NOT NULL,
--   image_id BIGINT UNSIGNED NOT NULL,
--   screensshot_image BLOB,
--   caption VARCHAR(100),
--   PRIMARY KEY (bug_id, image_id)
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
-- ------------------------------------------------------------------
-- DROP TABLE IF EXISTS `tags`;
-- CREATE TABLE tags (
--   bug_id BIGINT UNSIGNED NOT NULL,
--   tag VARCHAR(20) NOT NULL,
--   PRIMARY KEY (bug_id, tag)
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
-- ------------------------------------------------------------------
-- 表信息:产品表
-- 类型：普通表
-- DROP TABLE IF EXISTS `products`;
-- CREATE TABLE products (
--   product_id SERIAL PRIMARY KEY,
--   product_name VARCHAR(50)
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
--
-- ALTER TABLE products MODIFY account_id VARCHAR(100);
--
-- INSERT INTO products (product_id, product_name, account_id)
-- VALUES (DEFAULT, 'visual turbobuilder1', '12, 16')
--
-- SELECT * FROM products WHERE account_id REGEXP '[[:<:]]12[[:>:]]'
--
-- SELECT * FROM products as p JOIN accouonts as a ON p.account_id REGEXP '[[:<:]]' || a.account_id || '[[:>:]]' WHERE p.product_id = 123;
--
-- ------------------------------------------------------------------
-- DROP TABLE IF EXISTS `bugsproducts`;
-- CREATE TABLE bugsproducts (
--   bug_id BIGINT UNSIGNED NOT NULL,
--   product_id BIGINT UNSIGNED NOT NULL,
--   PRIMARY KEY (bug_id, product_id)
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
-- ------------------------------------------------------------------
-- 表信息: 产品-用户联系表
-- 类型：交叉表
-- DROP TABLE IF EXISTS `contacts`;
-- CREATE TABLE contacts (
--   product_id BIGINT UNSIGNED NOT NULL,
--   account_id BIGINT UNSIGNED NOT NULL
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
--
-- INSERT INTO contacts (product_id, account_id)
-- VALUES (121, 12);
