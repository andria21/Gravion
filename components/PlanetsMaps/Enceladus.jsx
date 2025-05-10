'use client';

import React from 'react';

const EnceladusMap = () => {
  return (
    <div className="sketchfab-embed-wrapper">
      <iframe
        title="Venus"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; fullscreen; xr-spatial-tracking"
        src="https://sketchfab.com/models/65f5f87d930c4f35a4039656c266272a/embed"
        style={{
          width: '100%',
          height: '300px',
        }}
      />
      <p style={{ fontSize: 13, fontWeight: 'normal', margin: 5, color: '#4A4A4A' }}>
        <a
          href="https://sketchfab.com/3d-models/venus-f0d1db71d38b4d669a4d5e0d8c6f1992?utm_medium=embed&utm_campaign=share-popup&utm_content=f0d1db71d38b4d669a4d5e0d8c6f1992"
          target="_blank"
          rel="nofollow"
          style={{ fontWeight: 'bold', color: '#1CAAD9' }}
        >
          Venus
        </a>{' '}
        by{' '}
        <a
          href="https://sketchfab.com/januart1st0101?utm_medium=embed&utm_campaign=share-popup&utm_content=f0d1db71d38b4d669a4d5e0d8c6f1992"
          target="_blank"
          rel="nofollow"
          style={{ fontWeight: 'bold', color: '#1CAAD9' }}
        >
          JAN1 LAB
        </a>{' '}
        on{' '}
        <a
          href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=f0d1db71d38b4d669a4d5e0d8c6f1992"
          target="_blank"
          rel="nofollow"
          style={{ fontWeight: 'bold', color: '#1CAAD9' }}
        >
          Sketchfab
        </a>
      </p>
    </div>
  );
};

export default EnceladusMap;
