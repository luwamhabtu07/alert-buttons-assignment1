import React from 'react';
import AlertButton from './AlertButton';

function Toolbar() {
  const buttons = [
    { message: 'Downloading!', children: 'Download File' },
    { message: 'Sharing!', children: 'Share Document' },
    { message: 'Uploading!', children: 'Upload File' },
    { message: 'Deleting!', children: 'Delete Item' },
    { message: 'Saving!', children: 'Save Progress' }
  ];

  return (
    <div>
      {buttons.map((btn, index) => (
        <AlertButton key={index} message={btn.message}>
          {btn.children}
        </AlertButton>
      ))}
    </div>
  );
}

export default Toolbar;
