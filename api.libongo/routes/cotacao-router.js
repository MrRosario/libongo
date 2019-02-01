'use strict'
const express = require('express');
const router  = express.Router();

//Web scraping
const rp      = require('request-promise');
const cheerio = require('cheerio');
const _url    = 'http://www.kinguilahoje.com/#services';

const options = {
    uri: _url,
    transform: function (body) {
      return cheerio.load(body);
    }
};

var dolar;
var euro;
var dataModif;

rp(options).then( ($) => {
    //console.log($('.quotation', $));
    //console.log($('#services #homeHeading').text());
    //console.log($('#services p.black-text').html());
    //console.log($('#services .quotation').text());
  
    let cambioOficial = $('#services .quotation').text();
    let resultado = cambioOficial.substring(10,20);
  
    let data = $('#services p.black-text').html();
    dataModif = data.substring(16);
    
    dolar = resultado.substring(2,5);
    euro = resultado.substring(7,10);

    console.log(dataModif);
    console.log("Dolar " + dolar);
    console.log("Euro " + euro);
  
}).catch((err) => {
    console.log(err);
});

router.get('/',(req, res)=>{
    let moedas = {
        dolar: dolar,
        euro: euro,
        data: dataModif
    }

    res.send(moedas)
});

module.exports = router;