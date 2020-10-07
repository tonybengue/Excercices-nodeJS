-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le :  jeu. 13 juin 2019 à 15:19
-- Version du serveur :  10.1.35-MariaDB
-- Version de PHP :  7.2.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `nodejs`
--

-- --------------------------------------------------------

--
-- Structure de la table `parcs`
--

CREATE TABLE `parcs` (
  `id` int(11) NOT NULL,
  `ip` text NOT NULL,
  `nom` text NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `parcs`
--

INSERT INTO `parcs` (`id`, `ip`, `nom`, `description`) VALUES
(1, '192.168.0.1', 'Première IP', 'Ceci est la première IP du parc informatique'),
(2, '192.168.0.15', 'Autre IP', 'Voila la description'),
(3, '192.168.0.15', 'Autre IP', 'Voila la description'),
(4, '192.168.0.15', 'Autre IP', 'Voila la description'),
(5, '192.168.0.15', 'Autre IP', 'Voila la description');

-- --------------------------------------------------------

--
-- Structure de la table `profs`
--

CREATE TABLE `profs` (
  `id` int(10) UNSIGNED NOT NULL,
  `nom` varchar(256) NOT NULL,
  `bureau` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `profs`
--

INSERT INTO `profs` (`id`, `nom`, `bureau`) VALUES
(1, 'Hervé Gaudin', 217),
(2, 'Benjamin Chervy', 218),
(3, 'William Ruchaud', 210);

-- --------------------------------------------------------

--
-- Structure de la table `salles`
--

CREATE TABLE `salles` (
  `id` int(11) NOT NULL,
  `niveau` int(11) NOT NULL,
  `capacite` int(11) NOT NULL,
  `equipement` text NOT NULL,
  `etage` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `salles`
--

INSERT INTO `salles` (`id`, `niveau`, `capacite`, `equipement`, `etage`) VALUES
(1, 1256, 56, 'chat', 0),
(3, 3, 2, 'pc', 4),
(4, 25, 22, 'PC', 4);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `parcs`
--
ALTER TABLE `parcs`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `profs`
--
ALTER TABLE `profs`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `salles`
--
ALTER TABLE `salles`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `parcs`
--
ALTER TABLE `parcs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `profs`
--
ALTER TABLE `profs`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `salles`
--
ALTER TABLE `salles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
