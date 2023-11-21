// src/App.js
import React from 'react';
import './App.css';
import profileData from './profileData.json';

const App = () => {
  const { backgroundImg, profileImg, userName, followers, following, coFounder, ceo, instagramLink, blogs } = profileData;

  return (
    <div className="app">
      <div className="header">
        <img src={'/backgroundImg.jpg'} alt="Background" className="background-img" />
        <img src={'/profileImg.jpg'} alt="Profile" className="profile-img" />
        <h1 className="user-name">{userName}</h1>
        <div className="followers-info">
          <span className="followers">Followers: {followers}</span>
          <span className="following">Following: {following}</span>
        </div>
        <div className="ceo-info">
          <p>Co-Founder and CEO at Terribly Tiny Tales</p>
        </div>
        <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="instagram-link">
          Instagram
        </a>
        <div className="reactions">
          <span role="img" aria-label="star">
            ⭐
          </span>
          <span role="img" aria-label="like">
            👍
          </span>
          <span role="img" aria-label="heart">
            ❤️
          </span>
        </div>
      </div>
      <div className="blogs">
        {blogs.map((blog, index) => (
          <div key={index} className="blog">
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
