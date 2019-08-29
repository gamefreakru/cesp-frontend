# cesp-frontend

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

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Build Docker image
```
docker build . -t cr.yandex/crpi40k5e5q63h0a89q1/cesp
```

## Push Docker image
```
docker push cesp:latest
```

## Run Docker container
```
docker run -it -p 8080:80 --rm --name cesp cesp:latest 
```
