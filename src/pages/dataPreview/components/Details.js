import React from 'react';

const Details = ({ data }) => {
  return (
    <div className="data-preview__section">
      <p className="data-preview__section-title">Details</p>
      <div className="data-preview__section-detail">
        <p className="data-preview__desc-title">Address</p>
        <p className="data-preview__description">{data.address}</p>
        <p className="data-preview__description">
          {data.city}, {data.postalCode}
        </p>
      </div>
      <div className="data-preview__section-detail">
        <p className="data-preview__desc-title">Phone</p>
        <p className="data-preview__description">{data.phone}</p>
      </div>
      <div className="data-preview__section-detail">
        <p className="data-preview__desc-title">Email</p>
        <p className="data-preview__description">{data.email}</p>
      </div>
      <div className="data-preview__section-detail">
        <p className="data-preview__desc-title">Data / Place of birth</p>
        <p className="data-preview__description">{data.birthDate}</p>
        <p className="data-preview__description">{data.birthPlace}</p>
      </div>
      <div className="data-preview__section-detail">
        <p className="data-preview__desc-title">Nationality</p>
        <p className="data-preview__description">{data.country}</p>
      </div>
    </div>
  );
};

export default Details;
