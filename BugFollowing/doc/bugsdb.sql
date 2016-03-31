/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50625
Source Host           : localhost:3306
Source Database       : bugsdb

Target Server Type    : MYSQL
Target Server Version : 50625
File Encoding         : 65001

Date: 2016-03-31 17:33:46
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for accounts
-- ----------------------------
DROP TABLE IF EXISTS `accounts`;
CREATE TABLE `accounts` (
  `account_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `account_name` varchar(20) DEFAULT NULL,
  `email` varchar(20) DEFAULT NULL,
  `tel` varchar(11) DEFAULT NULL,
  `password_hash` char(64) DEFAULT NULL,
  `portrait_image` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`account_id`),
  UNIQUE KEY `account_id` (`account_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of accounts
-- ----------------------------
INSERT INTO `accounts` VALUES ('1', 'admin1', '155@mao.com', '13112345679', '232', 'static/img/accounts/blog_1.jpg');
INSERT INTO `accounts` VALUES ('2', 'admin2', '155@mao.com', '13112345679', '232', 'static/img/accounts/blog_1.jpg');
INSERT INTO `accounts` VALUES ('3', 'admin3', '155@mao.com', '13112345678', '232', 'static/img/accounts/blog_1.jpg');
INSERT INTO `accounts` VALUES ('4', 'admin4', '155@mao.com', '13112345678', '232', 'static/img/accounts/blog_1.jpg');
INSERT INTO `accounts` VALUES ('5', 'admin5', '155@mao.com', '13112345678', '232', 'static/img/accounts/blog_1.jpg');
INSERT INTO `accounts` VALUES ('6', 'admin6', '155@mao.com', '13112345678', '232', 'static/img/accounts/blog_1.jpg');
INSERT INTO `accounts` VALUES ('7', 'admin7', '155@mao.com', '13112345678', '232', 'static/img/accounts/blog_1.jpg');
INSERT INTO `accounts` VALUES ('8', 'admin8', '155@mao.com', '13112345678', '232', 'static/img/accounts/blog_1.jpg');
INSERT INTO `accounts` VALUES ('9', 'admin9', '155@mao.com', '13112345678', '232', 'static/img/accounts/blog_1.jpg');
INSERT INTO `accounts` VALUES ('10', 'admin10', '155@mao.com', '13112345678', '232', 'static/img/accounts/blog_1.jpg');

-- ----------------------------
-- Table structure for bugs
-- ----------------------------
DROP TABLE IF EXISTS `bugs`;
CREATE TABLE `bugs` (
  `bug_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `data_reported` date NOT NULL,
  `summary` varchar(80) DEFAULT NULL,
  `description` varchar(1000) DEFAULT NULL,
  `resolution` varchar(1000) DEFAULT NULL,
  `reported_by` bigint(20) unsigned NOT NULL,
  `assigned_to` bigint(20) unsigned DEFAULT NULL,
  `verified_by` bigint(20) unsigned DEFAULT NULL,
  `status` varchar(20) NOT NULL DEFAULT 'NEW',
  `priority` varchar(20) DEFAULT NULL,
  `hours` decimal(9,2) DEFAULT NULL,
  PRIMARY KEY (`bug_id`),
  UNIQUE KEY `bug_id` (`bug_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of bugs
-- ----------------------------

-- ----------------------------
-- Table structure for bugsproducts
-- ----------------------------
DROP TABLE IF EXISTS `bugsproducts`;
CREATE TABLE `bugsproducts` (
  `bug_id` bigint(20) unsigned NOT NULL,
  `product_id` bigint(20) unsigned NOT NULL,
  PRIMARY KEY (`bug_id`,`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of bugsproducts
-- ----------------------------

-- ----------------------------
-- Table structure for bugstatus
-- ----------------------------
DROP TABLE IF EXISTS `bugstatus`;
CREATE TABLE `bugstatus` (
  `status` varchar(20) NOT NULL,
  PRIMARY KEY (`status`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of bugstatus
-- ----------------------------

-- ----------------------------
-- Table structure for comments
-- ----------------------------
DROP TABLE IF EXISTS `comments`;
CREATE TABLE `comments` (
  `comment_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `bug_id` bigint(20) unsigned NOT NULL,
  `author` bigint(20) unsigned NOT NULL,
  `comment_date` datetime NOT NULL,
  `comment` text NOT NULL,
  PRIMARY KEY (`comment_id`),
  UNIQUE KEY `comment_id` (`comment_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of comments
-- ----------------------------

-- ----------------------------
-- Table structure for contacts
-- ----------------------------
DROP TABLE IF EXISTS `contacts`;
CREATE TABLE `contacts` (
  `product_id` bigint(20) unsigned NOT NULL,
  `account_id` bigint(20) unsigned NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of contacts
-- ----------------------------

-- ----------------------------
-- Table structure for products
-- ----------------------------
DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
  `product_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `product_name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`product_id`),
  UNIQUE KEY `product_id` (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of products
-- ----------------------------

-- ----------------------------
-- Table structure for screensshots
-- ----------------------------
DROP TABLE IF EXISTS `screensshots`;
CREATE TABLE `screensshots` (
  `bug_id` bigint(20) unsigned NOT NULL,
  `image_id` bigint(20) unsigned NOT NULL,
  `screensshot_image` blob,
  `caption` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`bug_id`,`image_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of screensshots
-- ----------------------------

-- ----------------------------
-- Table structure for tags
-- ----------------------------
DROP TABLE IF EXISTS `tags`;
CREATE TABLE `tags` (
  `bug_id` bigint(20) unsigned NOT NULL,
  `tag` varchar(20) NOT NULL,
  PRIMARY KEY (`bug_id`,`tag`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tags
-- ----------------------------
