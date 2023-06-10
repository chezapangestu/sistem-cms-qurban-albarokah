import React from "react";
import { Row, Col } from "reactstrap";
import { Input } from "@chakra-ui/react";

const PersonalDetails = ({ data, handleChange }) => {
  return (
    <div className="add-data__personal-details">
      <div className="section-title">
        <p>Personal Details</p>
      </div>
      <Row className="row">
        <Col lg="6">
          <p className="add-data-section__title">Wanted Job Title</p>
          <Input
            name="jobTitle"
            value={data.jobTitle}
            onChange={(event) => handleChange(event)}
            variant="filled"
            focusBorderColor="blue.500"
          />
        </Col>
      </Row>
      <Row className="row">
        <Col lg="6">
          <p className="add-data-section__title">First Name</p>
          <Input
            name="firstName"
            value={data.firstName}
            onChange={(event) => handleChange(event)}
            variant="filled"
            focusBorderColor="blue.500"
          />
        </Col>
        <Col lg="6">
          <p className="add-data-section__title">Last Name</p>
          <Input
            name="lastName"
            value={data.lastName}
            onChange={(event) => handleChange(event)}
            variant="filled"
            focusBorderColor="blue.500"
          />
        </Col>
      </Row>
      <Row className="row">
        <Col lg="6">
          <p className="add-data-section__title">Email</p>
          <Input
            name="email"
            type="email"
            value={data.email}
            onChange={(event) => handleChange(event)}
            variant="filled"
            focusBorderColor="blue.500"
          />
        </Col>
        <Col lg="6">
          <p className="add-data-section__title">Phone</p>
          <Input
            name="phone"
            type="number"
            value={data.phone}
            onChange={(event) => handleChange(event)}
            variant="filled"
            focusBorderColor="blue.500"
          />
        </Col>
      </Row>
      <Row className="row">
        <Col lg="6">
          <p className="add-data-section__title">Country</p>
          <Input
            name="country"
            value={data.country}
            onChange={(event) => handleChange(event)}
            variant="filled"
            focusBorderColor="blue.500"
          />
        </Col>
        <Col lg="6">
          <p className="add-data-section__title">City</p>
          <Input
            name="city"
            value={data.city}
            onChange={(event) => handleChange(event)}
            variant="filled"
            focusBorderColor="blue.500"
          />
        </Col>
      </Row>
      <Row className="row">
        <Col lg="6">
          <p className="add-data-section__title">Address</p>
          <Input
            name="address"
            value={data.address}
            onChange={(event) => handleChange(event)}
            variant="filled"
            focusBorderColor="blue.500"
          />
        </Col>
        <Col lg="6">
          <p className="add-data-section__title">Postal Code</p>
          <Input
            name="postalCode"
            value={data.postalCode}
            onChange={(event) => handleChange(event)}
            variant="filled"
            focusBorderColor="blue.500"
          />
        </Col>
      </Row>
      <Row className="row">
        <Col lg="6">
          <p className="add-data-section__title">Place of Birth</p>
          <Input
            name="birthPlace"
            value={data.birthPlace}
            onChange={(event) => handleChange(event)}
            variant="filled"
            focusBorderColor="blue.500"
          />
        </Col>
        <Col lg="6">
          <p className="add-data-section__title">Date of Birth</p>
          <Input
            name="birthDate"
            value={data.birthDate}
            onChange={(event) => handleChange(event)}
            variant="filled"
            focusBorderColor="blue.500"
          />
        </Col>
      </Row>
    </div>
  );
};

export default PersonalDetails;
