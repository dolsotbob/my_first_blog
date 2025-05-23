export const TIL0523TableSchema = `
CREATE TABLE users (
  id INT PRIMARY KEY,  
  name VARCHAR(50),
  email VARCHAR(100) UNIQUE,
  age INT CHECK (age > 0)
);
`

export const TIL0523ForeignKey = `
CREATE TABLE orders (
  id INT PRIMARY KEY,
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES users(id)
);
`

export const TIL0523UniqueKey = `
CREATE TABLE employees (
  id INT PRIMARY KEY,
  email VARCHAR(100) UNIQUE
);
`

export const TIL0523NotNull = `
CREATE TABLE products (
  id INT PRIMARY KEY,
  name VARCHAR(50) NOT NULL
);
`
