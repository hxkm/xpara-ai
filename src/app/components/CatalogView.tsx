'use client';

import React from 'react';

const CatalogView = () => {
  return (
    <div style={{ 
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      overflow: 'hidden',
      margin: 0,
      padding: 0
    }}>
      <iframe
        src="https://archive.4plebs.org/pol/"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          margin: 0,
          padding: 0,
          display: 'block'
        }}
        title="4plebs /pol/"
      />
    </div>
  );
};

export default CatalogView; 