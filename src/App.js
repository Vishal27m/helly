import React from 'react';
import './App.css'; // Import the updated CSS file

function App() {
 

  return (
    <div className="role-selection-container">
      <div className="header">
        <h2 className="app-name">COMMUNITY HUB</h2>
      </div>
      <div className="role-selection-box">
        <h1>Select Your Role</h1>
        <div>
          <button>People</button>
          <button>Admin</button>
          <button>Main Admin</button>
        </div>
      </div>
    </div>
  );
}

export default App;
