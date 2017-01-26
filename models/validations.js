"use strict";
const validate = require("validate.js");

module.exports = {
  show: (data) => {
    const constraints = {
      title: {
        presence: true
      }
    };
    return validate(data, constraints);
  }
};
