const mongoose = require("../connect");
var mon = require('mongoose');
var Schema = mon.Schema;
var restSchema = new Schema({
  Name : String,
  Nit : String,
  Property : String,
  Street : String,
  Phone : String,
  Log: String,
  Lat: String,
  logo: String,
  RegisterDate: Date,
  Picture: String
});
var restaurante = mongoose.model("restaurante", restSchema);
module.exports = restaurante;
