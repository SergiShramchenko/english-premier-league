import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

const style: any = {
  position: 'fixed',
  top: '50%',
  bottom: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

export default () => (
  <div style={style}>
    <ClipLoader size={70} color={'#277095'} />
  </div>
);
