# Bagel Rise

Discover and share your favorite bagels.

## Feature List

### MVP

- User Log In / Log Out / Signup / Authentication
- Bagel Shops CRUD
- Review feed

### Bonus

- User Profile

## Schema

### Diagram

![Schema](https://i.ibb.co/sQ3NMP7/bagel-rising-schema-v6.png)

### Tables

#### Users

| ColumnName     | DataType      | Details                   |
| -------------- | ------------- | ------------------------- |
| id             | integer       | not null, primary key     |
| Username       | string        | not null                  |
| Email          | string        | unique, not null, indexed |
| Bio            | text          |                           |
| HashedPassword | string.binary | not null                  |
| Avatar         | text          |                           |
| createdAt      | timestamp     | not null                  |
| updatedAt      | timestamp     | not null                  |

#### Checkins

| ColumnName | DataType  | Details               |
| ---------- | --------- | --------------------- |
| id         | integer   | not null, primary key |
| userId     | integer   | foreign key           |
| listId     | integer   | foreign key           |
| review     | text      | not null              |
| rating     | integer   | not null              |
| image      | text      | not null              |
| createdAt  | timestamp |                       |
| updatedAt  | timestamp |                       |

#### BagelLists

| ColumnName | DataType  | Details               |
| ---------- | --------- | --------------------- |
| id         | integer   | not null, primary key |
| shopId     | integer   | foreign key           |
| bagelId    | integer   | foreign key           |
| createdAt  | timestamp |                       |
| updatedAt  | timestamp |                       |

#### BagelShops 

| ColumnName  | DataType  | Details               |
| ----------- | --------- | --------------------- |
| id          | integer   | not null, primary key |
| name        | string    | not null              |
| address     | string    |                       |
| city        | string    | not null              |
| state       | string    | not null              |
| zipcode     | string    |                       |
| phone       | string    |                       |
| information | text      |                       |
| createdAt   | timestamp |                       |
| updatedAt   | timestamp |                       |

#### Bagels

| ColumnName  | DataType  | Details               |
| ----------- | --------- | --------------------- |
| id          | integer   | not null, primary key |
| bagelType   | string    | not null              |
| createdAt   | timestamp |                       |
| createdAt   | timestamp |                       |
