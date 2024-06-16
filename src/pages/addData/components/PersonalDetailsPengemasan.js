import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import { Input, Select } from "@chakra-ui/react";

const PersonalDetailsPengemasan = ({ data, handleChange }) => {
  return (
    <div className="add-data__personal-details">
      <div className="section-title">
        <p>Informasi Data Hewan</p>
      </div>
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
        <Col lg="6">
          <p className="add-data-section__title">Jumlah kresek (pcs)</p>
          <Input
            placeholder="Jumlah kresek (pcs)"
            name="jumlahKresek"
            value={data.jumlahKresek}
            type="number"
            onChange={(event) => handleChange(event)}
            variant="filled"
            focusBorderColor="blue.500"
          />
        </Col>
      </Row>
    </div>
  );
};

export default PersonalDetailsPengemasan;
