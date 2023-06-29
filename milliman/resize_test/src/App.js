import React from 'react';
import styled from '@emotion/styled';
import { Resizable } from 're-resizable';
import { style } from './style';

const App = () => {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        overflow: 'hidden',
      }}
    >
      <Resizable
        style={style}
        defaultSize={{
          width: '50%',
          height: 200,
        }}
        maxWidth="100%"
        minWidth="1"
      >
        001
      </Resizable>
      <div style={{ ...style, width: '100%', minWidth: '1px' }}>002</div>
    </div>
    
  );
};

export default App;