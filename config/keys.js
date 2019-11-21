if (process.env.NODE_ENV === "production") {
  module.exports = require("./propd");
} else {
  module.exports = require("./dev");
}
