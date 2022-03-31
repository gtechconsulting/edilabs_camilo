CREATE DATABASE IF NOT EXISTS `edilabs`;
USE `edilabs`;

CREATE TABLE `users` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(65) NOT NULL,
  `email` varchar(65) NOT NULL,
  `job` int NOT NULL,
  `reports_to` int,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

insert  into `users`(`id`,`name`,`email`,`job`,`reports_to`) values
(1,'Adam Smith','asmith@llc.com',1,2),
(2,'Fiodor Dostoivisk','fdost@llc.com',1,2),
(3,'Sebastian Bach','sbach@llc.com',2,3),
(4,'Winston Churchill','wchurch@llc.com',3, null);

CREATE TABLE `jobs` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `description` varchar(65) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


insert  into `jobs`(`id`,`description`) values
(1,'Developer'),
(2,'Tech Lead'),
(3,'Scrum');