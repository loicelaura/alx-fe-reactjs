import React from 'react';
import ProfilePage from './ProfilePage';
import UserContext from './UserContext'; // Import UserContext

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}> {/* Provide UserContext */}
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;