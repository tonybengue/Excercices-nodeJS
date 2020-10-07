-- Adminer 4.7.3 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

DROP DATABASE IF EXISTS `nodejs`;
CREATE DATABASE `nodejs` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `nodejs`;

DROP TABLE IF EXISTS `profs`;
CREATE TABLE `profs` (
  `id` int(10) UNSIGNED NOT NULL,
  `nom` varchar(256) NOT NULL,
  `bureau` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


INSERT INTO `profs` (`id`, `nom`, `bureau`) VALUES
(1,	'Hervé Gaudin',	217),
(2,	'Benjamin Chervy',	218),
(3,	'William Ruchaud',	210),
(4,	'Renaud Dardilhac',	215);

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `testusers`;
CREATE TABLE `testusers` (
  `ID` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `user_login` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `user_pass` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `user_nicename` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `user_email` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `user_url` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `user_registered` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `user_activation_key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `user_status` int(11) NOT NULL DEFAULT '0',
  `display_name` varchar(250) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  PRIMARY KEY (`ID`),
  KEY `user_login_key` (`user_login`),
  KEY `user_nicename` (`user_nicename`),
  KEY `user_email` (`user_email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `testusers` (`ID`, `user_login`, `user_pass`, `user_nicename`, `user_email`, `user_url`, `user_registered`, `user_activation_key`, `user_status`, `display_name`) VALUES
(1,	'tonybengue',	'$P$B9sE4tGRVK/18gy6DmxgIT9XOfK/st0',	'tonybengue',	'tonybengue@hotmail.fr',	'',	'2019-09-21 08:01:31',	'',	0,	'tonybengue');

-- 2019-10-13 22:15:34
