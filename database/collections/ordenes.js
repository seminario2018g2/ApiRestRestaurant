const mongoose = require("../connect");
var mon = require('mongoose');
var Schema = mon.Schema;
var ordenesSchema = new Schema({
  Idmenu : String,
  Idcliente : String,
  Street: String,
  Lat : String,
  Log: String,
  PagoTotal: Number,
  RegisterDate: Date
});
var orden = mongoose.model("ordenes", ordenesSchema);
module.exports = orden;
