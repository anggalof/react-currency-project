import React from 'react';
import AppContent from './containers/App';
import './App.css';

function App(props) {
  return (
    <div>
      <html lang="en">
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
        <script src="https://unpkg.com/axios/dist/axios.min.js" />
        <title>React App</title>
      </html>
      <AppContent />
    </div>
  );
}

export default App;
