import React, { useEffect, useState } from 'react';
import { CircleIcon } from './icon';

const LeftSection = ({ data, title }) => {
  console.log(data);
  const [value, setValue] = useState([]);
  useEffect(() => {
    if (title === 'Skills') {
      const result = data.skills.map((each) => {
        return { ...each, name: `${each.skill}` };
      });
      setValue(result);
    } else if (title === 'Languages') {
      const result = data.languages.map((each) => {
        return { ...each, name: `${each.language}` };
      });
      setValue(result);
    }
  }, [title, data]);
  return (
    <div className="data-preview__section">
      <p className="data-preview__section-title">{title}</p>
      {value.length > 0 &&
        value.map((each) => {
          return (
            <>
              <p className="data-preview__desc-title">{each.name}</p>
              <div className="data-preview__level">
                {each.level === 'Novice' && (
                  <>
                    <CircleIcon color="black" />
                    <CircleIcon color="#DCDCDC" />
                    <CircleIcon color="#DCDCDC" />
                    <CircleIcon color="#DCDCDC" />
                    <CircleIcon color="#DCDCDC" />
                  </>
                )}
                {each.level === 'Beginner' && (
                  <>
                    <CircleIcon color="black" />
                    <CircleIcon color="#black" />
                    <CircleIcon color="#DCDCDC" />
                    <CircleIcon color="#DCDCDC" />
                    <CircleIcon color="#DCDCDC" />
                  </>
                )}
                {(each.level === 'Skillful' || each.level === 'Very Good Command') && (
                  <>
                    <CircleIcon color="black" />
                    <CircleIcon color="black" />
                    <CircleIcon color="black" />
                    <CircleIcon color="#DCDCDC" />
                    <CircleIcon color="#DCDCDC" />
                  </>
                )}
                {(each.level === 'Experienced' || each.level === 'Highly Proficient') && (
                  <>
                    <CircleIcon color="black" />
                    <CircleIcon color="black" />
                    <CircleIcon color="black" />
                    <CircleIcon color="black" />
                    <CircleIcon color="#DCDCDC" />
                  </>
                )}
                {(each.level === 'Expert' || each.level === 'Native Speaker') && (
                  <>
                    <CircleIcon color="black" />
                    <CircleIcon color="black" />
                    <CircleIcon color="black" />
                    <CircleIcon color="black" />
                    <CircleIcon color="black" />
                  </>
                )}
              </div>
            </>
          );
        })}
    </div>
  );
};

export default LeftSection;
