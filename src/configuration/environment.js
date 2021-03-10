const dotenv = require('dotenv');

const CLUSTER = process.env.CLUSTER || 'local';
const result = dotenv.config();

const isDotEnvNotPresent = () => CLUSTER === 'local' && result.error;

if (isDotEnvNotPresent()) {
  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

module.exports = {
  routes: 'src/routes',
  port: process.env.PORT
};
