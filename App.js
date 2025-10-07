import React from 'react';
import ProfileCard from './components/ProfileCard';
import ActivityList from './components/ActivityList';
import './App.css';

function App() {
  const user = {
    name: 'FSD_LAB 3',
    profilePic: '/Profile.png',
    activities: [
      'Posted a new blog on React hooks',
      'Commented on a UI/UX design thread',
      'Started a Raspberry Pi GPIO project',
      'Updated portfolio with cinematic carousel'
    ]
  };

  return (
    <div className="dashboard">
      <ProfileCard name={user.name} profilePic={user.profilePic} />
      <ActivityList activities={user.activities} />
    </div>
  );
}

export default App;
