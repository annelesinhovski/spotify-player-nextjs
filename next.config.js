require("dotenv").config();
const path = require("path");

module.exports = {
  env: {
    CLIENT_ID: process.env.CLIENT_ID,
  },
  webpack: (config) => {
    config.resolve.alias["@components"] = path.join(
      __dirname,
      "src",
      "components"
    );
    config.resolve.alias["@services"] = path.join(__dirname, "src", "services");
    return config;
  },
};
