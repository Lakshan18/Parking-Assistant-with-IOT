-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               8.0.37 - MySQL Community Server - GPL
-- Server OS:                    Win64
-- HeidiSQL Version:             12.7.0.6850
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for apex_parking_assistant
CREATE DATABASE IF NOT EXISTS `apex_parking_assistant` /*!40100 DEFAULT CHARACTER SET utf8mb3 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `apex_parking_assistant`;

-- Dumping structure for table apex_parking_assistant.customer
CREATE TABLE IF NOT EXISTS `customer` (
  `id` int NOT NULL AUTO_INCREMENT,
  `full_name` varchar(100) NOT NULL,
  `mobile` varchar(10) NOT NULL,
  `nic_no` varchar(20) NOT NULL,
  `username` varchar(15) NOT NULL,
  `password` varchar(15) NOT NULL,
  `reg_no` varchar(5) NOT NULL,
  `status_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `status_id` (`status_id`),
  CONSTRAINT `FK1_Status_idx` FOREIGN KEY (`status_id`) REFERENCES `status` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- Dumping data for table apex_parking_assistant.customer: ~0 rows (approximately)

-- Dumping structure for table apex_parking_assistant.parking_slots
CREATE TABLE IF NOT EXISTS `parking_slots` (
  `id` int NOT NULL,
  `slots_id` int NOT NULL,
  `customer_id` int NOT NULL,
  `parking_status` varchar(10) NOT NULL,
  `reserve_date` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_parking_slots_slots_idx` (`slots_id`),
  KEY `fk_parking_slots_customer1_idx` (`customer_id`),
  CONSTRAINT `fk_parking_slots_customer1` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`id`),
  CONSTRAINT `fk_parking_slots_slots` FOREIGN KEY (`slots_id`) REFERENCES `slots` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- Dumping data for table apex_parking_assistant.parking_slots: ~0 rows (approximately)

-- Dumping structure for table apex_parking_assistant.slots
CREATE TABLE IF NOT EXISTS `slots` (
  `id` int NOT NULL AUTO_INCREMENT,
  `slot_no` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb3;

-- Dumping data for table apex_parking_assistant.slots: ~6 rows (approximately)
INSERT INTO `slots` (`id`, `slot_no`) VALUES
	(1, 'Slot-01'),
	(2, 'Slot-02'),
	(3, 'Slot-03'),
	(4, 'Slot-04'),
	(6, 'Slot-05'),
	(7, 'Slot-07');

-- Dumping structure for table apex_parking_assistant.status
CREATE TABLE IF NOT EXISTS `status` (
  `id` int NOT NULL,
  `name` varchar(10) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- Dumping data for table apex_parking_assistant.status: ~2 rows (approximately)
INSERT INTO `status` (`id`, `name`) VALUES
	(1, 'Active'),
	(2, 'Deactive');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
