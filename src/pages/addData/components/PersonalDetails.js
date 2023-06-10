import React from "react";
import { Row, Col } from "reactstrap";
import { Input, Select } from "@chakra-ui/react";

const PersonalDetails = ({ data, handleChange }) => {
  return (
    <div className="add-data__personal-details">
      <div className="section-title">
        <p>Informasi Data Diri</p>
      </div>
      {/* <Row className="row">
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
      </Row> */}
      <Row className="row">
        <Col lg="6">
          <p className="add-data-section__title">Nama depan</p>
          <Input
            name="firstName"
            value={data.firstName}
            onChange={(event) => handleChange(event)}
            variant="filled"
            focusBorderColor="blue.500"
          />
        </Col>
        <Col lg="6">
          <p className="add-data-section__title">Nama Belakang</p>
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
          <p className="add-data-section__title">Blok Rumah</p>
          <Input
            name="blokRumah"
            type="blokRumah"
            value={data.blokRumah}
            onChange={(event) => handleChange(event)}
            variant="filled"
            focusBorderColor="blue.500"
          />
        </Col>
        <Col lg="6">
          <p className="add-data-section__title">No Handphone</p>
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
          <p className="add-data-section__title">Hewan</p>
          <Select
            placeholder="Pilih hewan"
            name="hewan"
            value={data.hewan}
            onChange={(event) => handleChange(event)}
            variant="filled"
            focusBorderColor="blue.500"
          >
            <option value="Sapi">Sapi</option>
            <option value="Domba">Domba</option>
          </Select>
        </Col>
      </Row>
      {/* <Row className="row">
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
      </Row> */}
    </div>
  );
};

export default PersonalDetails;
