-- Active: 1674164268204@@35.226.146.116@3306@jbl-4416383-kayo-santos
CREATE TABLE IF NOT EXISTS Competition(
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    status ENUM("OPEN", "CLOSED") NOT NULL DEFAULT "OPEN"
);


CREATE TABLE IF NOT EXISTS Competition_results(
    id VARCHAR(255) PRIMARY KEY,
    competicao VARCHAR(255) NOT NULL,
    atleta VARCHAR(255) NOT NULL,
    value FLOAT NOT NULL,
    unidade VARCHAR(1) NOT NULL,
    competition_id VARCHAR(255),
    FOREIGN KEY (competition_id) REFERENCES Competition (id)
);


