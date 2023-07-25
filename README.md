![OpenPress-banner](https://github.com/Bialu-Software/openpress/assets/70224036/8d289c62-1e3f-4404-a5cc-7a2b1dca20ab)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Run with Docker

### Normal machine
Build the image
```
docker build . -t my-blog
```

Run the image with port
```
docker run -d -p <your-port>:80 my-blog
```

### Low spec machine
If you are running the blog on something like Raspberry pi then you will want to use pre-built. You will need to go to the [release page](https://github.com/Bialu-Software/developer-blog/releases). Find the lastest release and in it file named `build.zip`. Clone the repository and make these changes:

Rewrite the `Dockerfile` to this:
```Dockerfile
FROM nginx:alpine as production-stage
RUN mkdir /app
COPY ./dist /app
COPY nginx.conf /etc/nginx/nginx.conf
```

And in the `.dockerignore` remove the line `**/dist`

Now you will need to copy the link of the newset `built.zip` and paste it into the command below and run it
```
wget <link-to-the-build>
unzip build.zip
```

Now just run the build and run commands as usual

Build the image
```
docker build . -t my-blog
```

Run the image with port
```
docker run -d -p <your-port>:80 my-blog
```

## Screenshots

![image](https://github.com/Bialu-Software/developer-blog/assets/70224036/8b751887-660d-4a50-a0d6-34aa4b47d4b2)
![image](https://github.com/Bialu-Software/developer-blog/assets/70224036/e5e65b6b-5ea6-4829-932f-edfd47918e43)
![image](https://github.com/Bialu-Software/developer-blog/assets/70224036/69bde4a2-c0a7-4d12-9685-bd5196bb29f0)

