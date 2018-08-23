# Webpack ES6 Template

A vanilla Javascript template that uses Webpack. The project will convert ES6 and SASS then minifies the code for production builds. The [Airbnb Javascript Style Guide](https://github.com/airbnb/javascript) is used for code linting.

The development build runs on port `8080` and uses hot module reloading to watch for changes and update the browser automatically.

The entry point is `/src/index.js` and the html template is `index.html`.

### Local Development
```
npm install
npm start
```

Open [http://localhost:8080](http://localhost:8080)

### Production Build

```
npm install
npm run build
```

Build will create a `/dist` directory with the unminified and minified version of the project.

### Other Commands

``` 
npm run lint  // checks linting
npm test      // runs unit tests
```

### License

MIT
