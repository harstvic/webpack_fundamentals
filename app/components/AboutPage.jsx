import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './Navigation';

export const AboutPage = () => {
  return (
    <div className="about-page">
      <Navigation />
      <h1 className="about-page__header">About page</h1>
    </div>
  );
};

ReactDOM.render(
  <AboutPage />,
  document.querySelector('#about-page')
);
