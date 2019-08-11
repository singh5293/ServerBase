// keys.js - figure out what set of credentials to return
if (process.env.NODE_ENV === "production") {
  // we are in production - return the prod set of keys
  module.exports = require("./prod");
} else {
  // we are in development - return the dev keys!!!
  module.exports = require("./dev");
}

// atlas password - xRRpunzLazsUuDM6
//username -psingh5293
//connection string only
//mongodb+srv://psingh5293:<password>@tridentpool-wo2pk.mongodb.net/test?retryWrites=true&w=majority
