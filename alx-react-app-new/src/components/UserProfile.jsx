import React from 'react';

function UserProfile(props) {
  return (
    <div style={{ border: '1px solid gray', padding: '20px', margin: '20px', borderRadius: '8px', boxShadow: '2px 2px 5px rgba(0,0,0,0.2)' }}>
      <h2 style={{ color: 'blue', fontSize: '1.5em', marginBottom: '10px' }}>{props.name}</h2>
      <p style={{ marginBottom: '5px' }}>Age: <span style={{ fontWeight: 'bold', color: 'green' }}>{props.age}</span></p>
      <p style={{ lineHeight: '1.6' }}>Bio: {props.bio}</p>
    </div>
  );
}

export default UserProfile;