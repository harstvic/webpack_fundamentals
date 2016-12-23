import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './Navigation';

export const ContactPage = () => {
  return (
    <div className="contact-page">
      <Navigation />
      <h1 className="contact-page__header">Contact page</h1>
    </div>
  );
};

ReactDOM.render(
  <ContactPage />,
  document.querySelector('#contact-page')
);
