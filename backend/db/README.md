# Sequelize Schema

This directory contains all definitions for the Sequelize schema.\
This readme will walk you through using it in code elsewhere on the backend.

## Usage

### Importing

```js
// Note that you must provide a proper relative path to this directory.
const { models } = require("./db/");
```

Now you can access the models using `models.*`, for example, `models.user`.

In the following examples, we will use the user model, but the concept is the
same for any model.

### Inserting rows

```js
await models.user.create({ username: "admin", password: "My password" });
// Note: pfp url can be null
```

### Deleting rows

```js
// Change { id: 1 } with whatever filter you need
await models.user.destroy({ where: { id: 1 } });
```

### Updating rows

```js
await models.user.update(
  // These are the new values for the row
  { id: 1, password: "New password" },
  {
    // You can replace the content of this where clause with your own filter
    where: {
      id: 1,
    },
  }
);
//! It's important you check whether the IDs match when updating, otherwise you might update the wrong row
```

### Querrying rows

#### By primary key

```js
await models.user.findByPk(id);
```

#### By any field value

```js
// Note that not providing anything as arguments for findAll() will return EVERY ROW.
await models.user.findAll({
  where: {
    username: "some_username",
  },
});
```
