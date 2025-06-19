import React from 'react';

const Loading = () => {
  return (
    <div className="loading-spinner" style={{ display: 'inline-block', marginLeft: '10px' }}>
      <img
        src="/image/Biruhminds_logo.png"
        alt="Loading..."
        style={{
          width: '32px',
          height: '32px',
          animation: 'spin 1.5s linear infinite',
        }}
      />
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default Loading;
