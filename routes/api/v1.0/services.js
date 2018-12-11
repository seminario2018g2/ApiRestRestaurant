var mogoose =require('mongoose');
var express = require('express');
var multer = require('multer');
var fs = require('fs');

var connect =  require('../../../database/connect');
//servicio registro usuario
var Registro = require('../../../database/collections/usuario');
//servicio restaurante
var Restaurante = require('../../../database/collections/restaurante');
// servicios de menu
var Menu = require('../../../database/collections/menu');
//esta variables toma el valor de la IP
var HOST = require('../../../database/collections/HOST');
var router = express.Router();
//camara
var storage = multer.diskStorage({
  destination: "./public/restaurants",
  filename: function (req, file, cb) {
    console.log("-------------------------");
    console.log(file);
    cb(null, "IMG_" + Date.now() + ".jpg");
  }
});
var storage_menu = multer.diskStorage({
  destination: "./public/menu",
  filename: function (req, file, cb) {
    console.log("-------------------------");
    console.log(file);
    cb(null, "MENU_" + Date.now() + ".jpg");
  }
});
var upload = multer({
  storage: storage
}).single("img");
var upload_menu = multer({
  storage: storage_menu
}).single("img");
//CRUD restaurante
//post
router.post("/restaurante",(req, res) => {
var data = req.body;
  //Validacion
  //Ustedes se opupan de validar estos datos
  //OJO
  data["registerdate"] = new Date();
  var newrestaurant = new Restaurante(data);
  newrestaurant.save().then( (rr) => {
    //content-type
    res.status(200).json({
      "id" : rr._id,
      "msn" : "Restaurante Agregado con exito"
    });
  });
});
//get
router.get("/restaurante",(req, res) => {
  var skip = 0;
  var limit = 10;
  if (req.query.skip != null) {
    skip = req.query.skip;
  }

  if (req.query.limit != null) {
    limit = req.query.limit;
  }
  Restaurante.find({}).skip(skip).limit(limit).exec((err, docs) => {
    if (err) {
      res.status(500).json({
        "msn" : "Error en la db"
      });
      return;
    }
    res.status(200).json(docs);
  });
});
//subir imagen
router.post("/uploadrestaurante",(req, res) => {
  var params = req.query;
  var id = params.id;
  var SUPERES = res;
  Restaurante.findOne({_id: id}).exec((err, docs) => {
    if (err) {
      res.status(501).json({
        "msn" : "Problemas con la base de datos"
      });
      return;
    }
    if (docs != undefined) {
      upload(req, res, (err) => {
        if (err) {
          res.status(500).json({
            "msn" : "Error al subir la imagen"
          });
          return;
        }
        var url = req.file.path.replace(/public/g, "");

        Restaurante.update({_id: id}, {$set:{picture:url}}, (err, docs) => {
          if (err) {
            res.status(200).json({
              "msn" : err
            });
            return;
          }
          res.status(200).json(docs);
        });
      });
    }
  });
});
module.exports = router;

//////////////////////////////////////////////////////////
