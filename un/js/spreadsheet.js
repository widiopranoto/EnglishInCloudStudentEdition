var GoogleSpreadsheet = require('google-spreadsheet');
var creds = require('./client_secret_1.json');

// Create a document object using the ID of the spreadsheet - obtained from its URL.
var doc = new GoogleSpreadsheet('1Sr4lcgcQ2kd04CxgsHqKRPLXw48w1OPx-k7MqPwFOu4');

// Authenticate with the Google Spreadsheets API.
doc.useServiceAccountAuth(creds, function (err) {

  // Get all of the rows from the spreadsheet.
  doc.getRows(1, function (err, rows) {
    console.log(rows);
  });
});