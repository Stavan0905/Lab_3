import React from 'react';
import './ProfileCard.css';

function ProfileCard({ name, profilePic }) {
  return (
    <div className="profile-card">
      <img src={profilePic} alt="Profile" className="profile-pic" />
      <h2>{name}</h2>
    </div>
  );
}

export default ProfileCard;
