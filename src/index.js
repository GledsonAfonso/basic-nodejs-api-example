const app = require('./middlewares/express.js');
const environment = require('./configuration/environment');

try {
  app.listen(environment.port, () => {
    console.log(`Listening to ${environment.port}`);
    console.log('ヽ(；▽；)ノ weeeeeeeee (ﾉ･ｪ･)ﾉ')
  });
} catch (error) {
  console.log(error);
}