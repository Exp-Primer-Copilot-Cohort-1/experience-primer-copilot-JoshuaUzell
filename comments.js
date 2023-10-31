//Create a web server
const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const port = 3000;

//Create a route for the path / (root)
app.get('/', (req, res) => {
  res.send('Hello World!');
});

//Create a route for the path /about
app.get('/about', (req, res) => {
  res.send('This is the about page');
});

//Create a route for the path /contact
app.get('/contact', (req, res) => {
  res.send('This is the contact page');
});

//Create a route for the path /projects
app.get('/projects', (req, res) => {
  res.send('This is the projects page');
});

//Create a route for the path /services
app.get('/services', (req, res) => {
  res.send('This is the services page');
});

//Create a route for the path /services
app.get('/comment', (req, res) => {
  res.send('This is the comment page');
});

//Create a route for the path /services
app.get('/comment/:id', (req, res) => {
  res.send('This is the comment page with id: ' + req.params.id);
});

//Create a route for the path /services
app.get('/comment/:id/:title', (req, res) => {
  res.send('This is the comment page with id: ' + req.params.id + ' and title: ' + req.params.title);
});

//Create a route for the path /services
app.get('/comment/:id/:title/:content', (req, res) => {
  res.send('This is the comment page with id: ' + req.params.id + ' and title: ' + req.params.title + ' and content: ' + req.params.content);
});

//Create a route for the path /services
app.get('/comment/:id/:title/:content/:author', (req, res) => {
  res.send('This is the comment page with id: ' + req.params.id + ' and title: ' + req.params.title + ' and content: ' + req.params.content + ' and author: ' + req.params.author);
});

//Create a route for the path /services
app.get('/comment/:id/:title/:content/:author/:date', (req, res) => {
  res.send('This is the comment page with id: ' + req.params.id + ' and title: ' + req.params.title + ' and content: ' + req.params.content + ' and author: ' + req.params.author + ' and date: ' + req.params.date);
});
