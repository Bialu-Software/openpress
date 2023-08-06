![OpenPress banner](https://github.com/Bialu-Software/openpress/assets/70224036/8d289c62-1e3f-4404-a5cc-7a2b1dca20ab)

<h3 align="center">OpenPress</h3>

---

<p align="center"> ✨Fully open-source and customizable blog written in vuejs and nodejs
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Deployment](#deployment)
- [Built Using](#built_using)
- [Maintenance](#aintenance)

## 🧐 About <a name = "about"></a>

This project is open-source blog written using vuejs (frontend) and nodejs (backend). The blog has its own dashboard and sqlite3 database.

## 🏁 Getting Started <a name = "getting_started"></a>

In order to run the project we will first need to copy it onto your system. do that with the command `git clone https://github.com/Bialu-Software/openpress.git` (assuming that you have git installed).

### Prerequisites

To do anything with the project you will need to install Node.js from [this website](https://nodejs.org/en/download) or you can use some sort of node version manager. To check if you have installed Node.js, run this command:

```
node -v
```

### Installing

Now you need to go to the project directory and run this command so you have all of the needed packages.

```
npm install
```

Before we can run the web application, we might want to init the database for the backend using:

```
npm run syncdb
```

After is everything installed we can run it:

```
npm run serve
```

Now if you go to `http://localhost:8080/` in your browser, you should see something like this:

![screenshot of the website](https://github.com/Bialu-Software/openpress/assets/70224036/48174d72-2636-48dd-9ace-e03ca51aff82)

## 🎈 Usage <a name="usage"></a>

This project is not intended for commercial use but nothing is stopping you :)

## 🚀 Deployment <a name = "deployment"></a>

To fully deploy your blog we suggest using a linux system. And to build and minify the project use:

```
npm run build
```

## ⚙ Maintenance <a name = "aintenance"></a>

If you want to update the database schema, you will afterwardsneed to run this command

```
npm run syncdb
```


## ⛏️ Built Using <a name = "built_using"></a>

- [SQLite](https://www.sqlite.org/index.html) - Database
- [VueJs](https://vuejs.org/) - Web Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment
