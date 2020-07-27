import React from 'react';

import './tableHead.scss';

export default ({ stats }) =>
  stats ? (
    <thead>
      <tr>
        <th>№</th>
        <th className='club-name'>Club</th>
        <th>Played</th>
        <th>Won</th>
        <th>Drawn</th>
        <th>Lost</th>
        <th>GF</th>
        <th>GA</th>
        <th>GD</th>
        <th>Points</th>
      </tr>
    </thead>
  ) : null;
