CREATE TABLE users (
    id UUID PRIMARY KEY,
    name STRING
);

CREATE TABLE caches (
    id INTEGER PRIMARY KEY, 
    location STRING, 
    message STRING
);