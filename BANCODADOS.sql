
CREATE DATABASE MercadoDB;


USE MercadoDB;


CREATE TABLE produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    preco DECIMAL(10, 2) NOT NULL
);

CREATE TABLE carrinho (
    id INT AUTO_INCREMENT PRIMARY KEY,
    produto_id INT NOT NULL,
    quantidade INT NOT NULL DEFAULT 1,
    FOREIGN KEY (produto_id) REFERENCES produtos(id)
);


INSERT INTO produtos (nome, preco) VALUES 
    ('café', 0.50),
    ('suco', 1.00),
    ('pão de queijo', 4.75),
    ('bolo pequeno', 7.90),
    ('pão francês', 3.50),
    ('bolo grande', 9.99),
    ('tapioca' , 2.50),
    ('misto' , 3.00),
    ('salgado' , 5.00);
    
