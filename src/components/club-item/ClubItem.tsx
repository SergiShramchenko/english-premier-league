import React from 'react';

import './clubItem.scss';

export default ({ stats }) =>
  stats &&
  stats.map((data) =>
    data.table.map((el) => <div className='club-info'>{el.cleanName}</div>)
  );
