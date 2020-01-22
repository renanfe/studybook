import './main.css';
import React from 'react';
import DevItem from '../dev-item/dev.item';

export default function Main({ devs }) {
  return (
    <main>
      <ul>
        {devs.map(dev =>
          <DevItem key={dev._id} dev={dev} />
        )}
      </ul>
    </main>
  );
}