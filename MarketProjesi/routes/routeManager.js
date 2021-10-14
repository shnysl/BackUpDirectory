var routeHome = require('./indexRoutes');
var routeAdDetail = require('./adDetailRoutes');

module.exports = function(app){
    app.use('/', routeHome)
    app.use('/ilan_detay/', routeAdDetail)
}