//to let the the heroku rout more tan one router

var percTable = require('./percTable.json');
var avgTable = require('./avgTable.json');
var listings = require('./listings.json');
var contacts = require('./contacts.json');

module.exports = function (){
    return {
        percTable : percTable,
        avgTable : avgTable,
        listings : listings,
        contacts : contacts,
    }
}
