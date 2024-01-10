-- MySQL dump 10.13  Distrib 8.0.32, for Linux (x86_64)
--
-- Host: localhost    Database: db_test
-- ------------------------------------------------------
-- Server version	8.0.35-0ubuntu0.22.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `gender` enum('Male','Female') NOT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `registrationDate` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
INSERT INTO `Users` VALUES (9,'John','Doe','john.doe@example.com','$2a$10$u.yD0jzIHZn22YfKtftjzeGcrAL0gFj9aOGKJiHgDlz1SFlHUGIne','Male',NULL,NULL,'2024-01-10 03:45:28','2024-01-10 03:45:28'),(10,'Jane','Smith','jane.smith@example.com','$2a$10$u.yD0jzIHZn22YfKtftjzeGcrAL0gFj9aOGKJiHgDlz1SFlHUGIne','Female',NULL,NULL,'2024-01-10 03:45:28','2024-01-10 03:45:28'),(11,'Mike','Johnson','mike.johnson@example.com','$2a$10$u.yD0jzIHZn22YfKtftjzeGcrAL0gFj9aOGKJiHgDlz1SFlHUGIne','Male',NULL,NULL,'2024-01-10 03:45:28','2024-01-10 03:45:28'),(12,'Emily','Williams','emily.williams@example.com','$2a$10$u.yD0jzIHZn22YfKtftjzeGcrAL0gFj9aOGKJiHgDlz1SFlHUGIne','Female',NULL,NULL,'2024-01-10 03:45:28','2024-01-10 03:45:28'),(13,'Daniel','Brown','daniel.brown@example.com','$2a$10$u.yD0jzIHZn22YfKtftjzeGcrAL0gFj9aOGKJiHgDlz1SFlHUGIne','Male',NULL,NULL,'2024-01-10 03:45:28','2024-01-10 03:45:28'),(14,'Isabella','Jones','isabella.jones@example.com','$2a$10$u.yD0jzIHZn22YfKtftjzeGcrAL0gFj9aOGKJiHgDlz1SFlHUGIne','Female',NULL,NULL,'2024-01-10 03:45:28','2024-01-10 03:45:28'),(15,'Ethan','Davis','ethan.davis@example.com','$2a$10$u.yD0jzIHZn22YfKtftjzeGcrAL0gFj9aOGKJiHgDlz1SFlHUGIne','Male',NULL,NULL,'2024-01-10 03:45:28','2024-01-10 03:45:28'),(16,'Ava','Garcia','ava.garcia@example.com','$2a$10$u.yD0jzIHZn22YfKtftjzeGcrAL0gFj9aOGKJiHgDlz1SFlHUGIne','Female',NULL,NULL,'2024-01-10 03:45:28','2024-01-10 03:45:28'),(17,'Noah','Martinez','noah.martinez@example.com','$2a$10$u.yD0jzIHZn22YfKtftjzeGcrAL0gFj9aOGKJiHgDlz1SFlHUGIne','Male',NULL,NULL,'2024-01-10 03:45:28','2024-01-10 03:45:28'),(18,'Olivia','Anderson','olivia.anderson@example.com','$2a$10$u.yD0jzIHZn22YfKtftjzeGcrAL0gFj9aOGKJiHgDlz1SFlHUGIne','Female',NULL,NULL,'2024-01-10 03:45:28','2024-01-10 03:45:28'),(19,'Liam','Thomas','liam.thomas@example.com','$2a$10$u.yD0jzIHZn22YfKtftjzeGcrAL0gFj9aOGKJiHgDlz1SFlHUGIne','Male',NULL,NULL,'2024-01-10 03:45:28','2024-01-10 03:45:28'),(20,'Emma','Hernandez','emma.hernandez@example.com','$2a$10$u.yD0jzIHZn22YfKtftjzeGcrAL0gFj9aOGKJiHgDlz1SFlHUGIne','Female',NULL,NULL,'2024-01-10 03:45:28','2024-01-10 03:45:28'),(21,'Mia','Smith','mia.smith@example.com','$2a$10$u.yD0jzIHZn22YfKtftjzeGcrAL0gFj9aOGKJiHgDlz1SFlHUGIne','Female',NULL,NULL,'2024-01-10 03:45:28','2024-01-10 03:45:28'),(22,'Lucas','Taylor','lucas.taylor@example.com','$2a$10$u.yD0jzIHZn22YfKtftjzeGcrAL0gFj9aOGKJiHgDlz1SFlHUGIne','Male',NULL,NULL,'2024-01-10 03:45:28','2024-01-10 03:45:28'),(23,'Sophia','Moore','sophia.moore@example.com','$2a$10$u.yD0jzIHZn22YfKtftjzeGcrAL0gFj9aOGKJiHgDlz1SFlHUGIne','Female',NULL,NULL,'2024-01-10 03:45:28','2024-01-10 03:45:28'),(24,'Moderator','Smith','admin@admin.com','$2b$10$Zy8iLNFGqLHlQnxT14dpKen0BCuN.71FJN9Yfc6hquJBureLrmanC','Female','1704847684017-1.jpg','2024-01-10 00:48:04','2024-01-10 00:48:04','2024-01-10 00:48:04');
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-01-10  4:08:43
