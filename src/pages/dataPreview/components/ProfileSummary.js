import React from 'react';

const ProfileSummary = ({ data }) => {
  return (
    <div className="data-preview__section">
      <p className="data-preview__section-title">Profile</p>
      <p className="data-preview__description">{data.profileSummary}</p>
    </div>
  );
};

export default ProfileSummary;
