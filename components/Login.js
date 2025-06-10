
import React, { useState } from 'react';

export default function Login() {
  const [officerId, setOfficerId] = useState('');

  return (
    <div>
      <h2>Officer Login</h2>
      <input
        placeholder="Officer ID"
        value={officerId}
        onChange={(e) => setOfficerId(e.target.value)}
        style={{ padding: '0.5rem', marginRight: '0.5rem' }}
      />
      <button onClick={() => alert('Logged in as Officer ID: ' + officerId)}>Log In</button>
    </div>
  );
}
