import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './Navigation';

export const HomePage = () => {
  return (
    <div className="home-page">
      <Navigation />
      <h1 className="home-page__header">Home page</h1>
    </div>
  );
};

ReactDOM.render(
  <HomePage />,
  document.querySelector('#home-page')
);
