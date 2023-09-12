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
- [Customization](#maintenance)
- [Maintenance](#maintenance)
- [Built Using](#built_using)

## 🧐 About <a name = "about"></a>

This project is open-source blog written using vuejs (frontend) and nodejs (backend). The blog has its own dashboard and sqlite3 database.

## 🏁 Getting Started <a name = "getting_started"></a>

In order to run the project we will first need to copy it onto your system. do that with the command `git clone https://github.com/Bialu-Software/openpress.git` (assuming that you have git installed).

### Prerequisites

To do anything with the project you will need to install Node.js from [this website](https://nodejs.org/en/download) or you can use some sort of node version manager. To check if you have installed Node.js, run this command:

```
node -v
```

Clone the repository

```
git clone https://github.com/Bialu-Software/openpress.git
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
npm run start
```

Now if you go to `http://localhost:8080/` in your browser, you should see something like this:

![screenshots of the web on diffrent devices](https://github.com/Bialu-Software/openpress/assets/70224036/edcb7231-dd11-4de5-9ac5-adcc0f3e40b2)


## 🎈 Usage <a name="usage"></a>

This project is not intended for commercial use but nothing is stopping you :)

## 🚀 Deployment <a name = "deployment"></a>

To fully deploy your blog we suggest using a linux system. And to build and minify the project use:

```
npm run build
```

## ✨ Customization <a name = "customization"></a>

You can customize your blog in a variety of ways. The easiest way is to change change the css in `./src/assets/styles/main.scss`. By changing the things in the file you will change the appearance of your blog.

### Other ways to customize the project

- Changing the `./backend/routes.js` and adding some new routes you may want. This is the basic template for a route:
```js
router.get('/path-to-your-route', async (req, res) => {

    if (true) {
        res.send("Route is working")
    } else {
        return res.status(404).send("Page not found");
    }

})
```
- Adding your own env variable. Just edit or create the `.env` file and add your secret key. (this change may cause logout of all users). See more parameters in `.env.example`
```
SECRET_KEY=your-secret-key
```

## ⚙ Maintenance <a name = "maintenance"></a>

If you want to update the database schema, you will afterwards need to run this command

```
npm run syncdb
```


## ⛏️ Built Using <a name = "built_using"></a>

- [SQLite](https://www.sqlite.org/index.html) - Database
- [VueJs](https://vuejs.org/) - Web Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment

<a href="https://github.com/Bialu-Software/" ><img width="223" hspace="10" alt="Powered by Bialu Software" src="https://media.discordapp.net/attachments/1055532722304585765/1069690405425254420/blue-icon.png?width=602&height=80"> </a>
