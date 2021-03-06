import React from 'react';

import './clubItem.scss';

export default ({ stats }) => (
  <tbody>
    {stats &&
      stats.map((data) =>
        data.table.map((el) => {
          return (
            <tr key={el.id}>
              <td>{el.position}</td>
              <td className='club-name'>{el.cleanName}</td>
              <td>{el.matchesPlayed}</td>
              <td>{el.seasonWins_overall}</td>
              <td>{el.seasonLosses_overall}</td>
              <td>{el.seasonDraws_overall}</td>
              <td>{el.seasonGoals}</td>
              <td>{el.seasonConceded}</td>
              <td>{el.seasonGoalDifference}</td>
              <td>{el.points}</td>
            </tr>
          );
        })
      )}
  </tbody>
);
