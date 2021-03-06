let express = require('express');
let dict = require('express').Router();
let Dictionary = require('../services/dictService');

dict.get('/', function(req, res, err) {
    let word = req.query.word;
    Dictionary.getWord(word,function(messageObj){
        res.json(messageObj);
    });
});

dict.get('/byid', function(req, res, err) {
    let word = req.query.word;
    Dictionary.getWordById(word,function(messageObj){
        res.json(messageObj);
    });
});


dict.get('/isEmpty', function(req, res, err) {
    let word = req.query.word;
    let meaning = Dictionary.getMeaning(word,function(messageObj){
        res.json(messageObj);
    });
});

module.exports = dict;
