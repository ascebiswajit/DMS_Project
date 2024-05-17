import React from 'react';

const ProfilePage = () => {
  const profileContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    textAlign: 'center',
  };

  const headingStyle = {
    fontWeight: 'bold',
    color: 'cyan',
  };

  return (
    <div style={profileContainerStyle}>
      <h2 style={headingStyle}>Profile Page</h2>
      <p style={headingStyle}>Your profile information goes here.</p>
    </div>
  );
};

export default ProfilePage;
