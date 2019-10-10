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
docker build . -t cr.yandex/crpi40k5e5q63h0a89q1/cesp-frontend
```

## Push Docker image
```
docker push cr.yandex/crpi40k5e5q63h0a89q1/cesp-frontend
```

## Pull Docker image on remote machine
```
docker pull cr.yandex/crpi40k5e5q63h0a89q1/cesp-frontend
```

## Run Docker container
```
docker run -d -p 80:80 --restart always --name cesp-frontend cr.yandex/crpi40k5e5q63h0a89q1/cesp-frontend:latest 
```
