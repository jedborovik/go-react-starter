const app = require('express')();
const config = require('./webpack.config.dev');
const compiler = require('webpack')(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
}));
app.use(require('webpack-hot-middleware')(compiler));
app.use(require('proxy-middleware')(`http://localhost:3333`));

app.listen(3334, err => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(`Listening at http://localhost:3334`);
});
