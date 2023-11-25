import React, { useState } from 'react';

const NavigationBar = () => {

  return (
    <nav className="flex border-2">
      <span>DVLoper</span>
      <div>

      </div>
      <ul className="flex gap-5">
        <li>
          <a href="/">Portfolio</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};
export default NavigationBar;
