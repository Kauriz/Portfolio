

USE if0_39801560_site_axel;



CREATE TABLE IF NOT EXISTS Tag(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100),
    pathImg VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS Tache(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100),
    alias VARCHAR(3),
    date_debut DATE,
    duree INT, -- En minutes
    etat ENUM("a faire", "en cours", "fait") NOT NULL DEFAULT "a faire"
);

CREATE TABLE IF NOT EXISTS Tag_Tache(
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_tache INT NOT NULL,
    id_tag INT NOT NULL,
    FOREIGN KEY (id_tache) REFERENCES Tache(id),
    FOREIGN KEY (id_tag) REFERENCES Tag(id)
);