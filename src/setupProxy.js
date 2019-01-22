const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('https://api.chucknorris.io/jokes', { target: 'https://api.chucknorris.io/jokes' }));
};