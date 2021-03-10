const root_uri = '/system';
const status = 'started';

const getNowUtc = () => new Date(new Date().toUTCString());
const app_start_utc_time = getNowUtc();

const getFeedBack = () => ({
  app_start_utc_time,
  now_utc_time: getNowUtc(),
  status
});

module.exports = (app) => {
  app.get(`${root_uri}/ping`, (_, res) => {
    res.send(getFeedBack());
  });
};
