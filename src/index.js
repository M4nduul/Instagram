import React from 'react';
import ReactDOM from 'react-dom';
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import Header from './components/header';
import Post from './components/post'

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Post />
  </React.StrictMode>,
  document.getElementById('root')
);

