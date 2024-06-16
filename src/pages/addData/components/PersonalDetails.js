import React from "react";
import { Row, Col } from "reactstrap";
import { Input, Select } from "@chakra-ui/react";

const PersonalDetails = ({ data, handleChange }) => {
  return (
    <div className="add-data__personal-details">
      <div className="section-title">
        <p>Informasi Data Hewan</p>
      </div>
      <Row className="row">
        <Col lg="6">
          <p className="add-data-section__title">Kode Hewan</p>
          <Select
            placeholder="Pilih hewan"
            name="kodeHewan"
            value={data.kodeHewan}
            onChange={(event) => handleChange(event)}
            variant="filled"
            focusBorderColor="blue.500"
          >
            <option value="Sapi Baqarah">Sapi Baqarah</option>
            <option value="Domba Special">Domba Alkautsar (Special)</option>
            <option value="Domba Premium">Domba Alkautsar (Premium)</option>
            <option value="Domba Special Request">
              Domba Alkautsar (Special Request)
            </option>
            <option value="Membawa sendiri">Membawa sendiri</option>
          </Select>
        </Col>
        <Col lg="6">
          <p className="add-data-section__title">Nomor Kode Hewan</p>
          <Input
            placeholder="Nomor kode hewan"
            name="noKodeHewan"
            value={data.noKodeHewan}
            type="number"
            onChange={(event) => handleChange(event)}
            variant="filled"
            focusBorderColor="blue.500"
          ></Input>
        </Col>
      </Row>
      <Row className="row">
        <Col lg="6">
          <p className="add-data-section__title">Berat Daging (Kg)</p>
          <Input
            placeholder="Berat daging dalam kilogram"
            name="beratDaging"
            value={data.beratDaging}
            type="number"
            onChange={(event) => handleChange(event)}
            variant="filled"
            focusBorderColor="blue.500"
          />
        </Col>
        <Col lg="6">
          <p className="add-data-section__title">Berat Kulit (Kg)</p>
          <Input
            placeholder="Berat kulit dalam kilogram"
            name="beratKulit"
            value={data.beratKulit}
            type="number"
            onChange={(event) => handleChange(event)}
            variant="filled"
            focusBorderColor="blue.500"
          />
        </Col>
      </Row>
      <Row>
        <Col lg="6">
          <p className="add-data-section__title">
            Tanggal & waktu selesai pencatatan
          </p>
          <Input
            placeholder="Pilih tanggal dan waktu"
            name="tanggalWaktu"
            value={data.tanggalWaktu}
            type="datetime-local"
            onChange={handleChange}
            size="md"
            variant="filled"
          />
        </Col>
      </Row>
    </div>
  );
};

export default PersonalDetails;
