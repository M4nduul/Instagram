import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import Header from './components/header';
import Post from './components/post'
import Story from './components/story'
import StoryList from './components/storyList'

const Instagram = () => {
  const [isStory, setIsStory] = useState(true);
  
  return (
    <div>
      {
        isStory 
        ? <Story /> 
        : <div>
            <Header />
            <StoryList setIsStory={ setIsStory }/>
            <Post />
          </div>
      }
    </div>
            
  )
}


ReactDOM.render(
  <React.StrictMode>
    <Instagram/>
  </React.StrictMode>,
  document.getElementById('root')
);

