// requisitions
var express = require('express');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// the actual schema

var articleSchema = new Schema({
    title: String,
    description: String,
    tag1: String,
    tag2: String,
    tag3: String,
    tag4: String,
    tag5: String,
    author: String,
    content: String,
    likes: Number
}, { timestamps: true });

// exporting the schema

var Article = mongoose.model('Article', articleSchema);

// the actual export

module.exports = Article;