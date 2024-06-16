import React from "react";
import { Row, Col } from "reactstrap";
import { Textarea } from "@chakra-ui/react";

const ProfileSummary = ({ data, handleChange }) => {
  return (
    <div className="add-data__profile-summary">
      <div className="section-title">
        <p>Note</p>
      </div>
      <Row>
        <Col lg="12">
          <p className="add-data-section__title">
            Informasi tambahan sebagai detail
          </p>
          <Textarea
            height="200px"
            name="profileSummary"
            value={data.profileSummary}
            onChange={(event) => handleChange(event)}
            variant="filled"
            focusBorderColor="blue.500"
          />
        </Col>
      </Row>
    </div>
  );
};

export default ProfileSummary;
