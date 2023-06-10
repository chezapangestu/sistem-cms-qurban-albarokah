import React from 'react';
import { Row, Col } from 'reactstrap';
import { Textarea } from '@chakra-ui/react';

const ProfileSummary = ({ data, handleChange }) => {
  return (
    <div className="add-data__profile-summary">
      <div className="section-title">
        <p>Profile Summary</p>
      </div>
      <Row>
        <Col lg="12">
          <p className="add-data-section__title">Write 2-4 short & energetic sentences to interest the reader!</p>
          <Textarea height="200px" name="profileSummary" value={data.profileSummary} onChange={(event) => handleChange(event)} variant="filled" focusBorderColor="lime" />
        </Col>
      </Row>
    </div>
  );
};

export default ProfileSummary;
