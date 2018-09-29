import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './clock.jsx';
import Tabs from './tabs.jsx';
import Weather from './weather.jsx';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <div>
      <Clock />
      
      <Weather />
    </div>,
    document.getElementById('root'));
});
