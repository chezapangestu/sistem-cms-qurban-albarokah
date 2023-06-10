import React, { useEffect, useState } from 'react';

const RightSectionDua = ({ data, title }) => {
  const [value, setValue] = useState([]);
  useEffect(() => {
    if (title === 'Working Experience') {
      if (data.workExperience && data.workExperience.length > 0) {
        const result = data.workExperience.map((each) => {
          return { ...each, title: `${each.jobTitle}, ${each.employer}` };
        });
        setValue(result);
      }
    } else if (title === 'Education') {
      if (data.education && data.education.length > 0) {
        const result = data.education.map((each) => {
          return { ...each, title: `${each.school}, ${each.degree}` };
        });
        setValue(result);
      }
    } else if (title === 'Organization Experience') {
      if (data.organizationExperience && data.organizationExperience.length > 0) {
        const result = data.organizationExperience.map((each) => {
          return { ...each, title: `${each.jobTitle} of ${each.department} ${each.organizationName}` };
        });
        setValue(result);
      }
    }
  }, [title, data]);
  return (
    <div className="data-preview__section">
      <p className="data-preview__section-title">{title}</p>
      {value.length > 0 &&
        value.map((each) => {
          return (
            <div className="data-preview__section-content">
              <p className="data-preview__right-section-title">{each.title}</p>
              <p className="data-preview__start-end-date">
                {each.startDate} - {each.endDate}
              </p>
              <p className="data-preview__description">{each.description}</p>
            </div>
          );
        })}
    </div>
  );
};

export default RightSectionDua;
