import React, { useState, useEffect } from "react";
import axios from "axios";
import "./dataPreview.css";
import { useParams, useNavigate } from "react-router-dom";
import { Col, Row } from "reactstrap";
import RightSection from "./components/RightSection";
import ProfileSummary from "./components/ProfileSummary";
import Details from "./components/Details";
import LeftSection from "./components/LeftSection";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Button } from "@chakra-ui/react";

const DataPreview = () => {
  const [data, setData] = useState();
  const { hewan } = useParams();
  const navigate = useNavigate();
  const getData = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_FAKE_API}/personalDetails/${hewan}`
      );
      // const { data } = await axios.get(
      //   `http://localhost:3004/personalDetails/${hewan}`
      // );
      setData(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, [hewan]);
  const printDocument = async () => {
    const input = document.getElementById("dataPrint");
    const canvas = await html2canvas(input);
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF();
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    pdf.addImage(imgData, 0, 0, pdfWidth, pdfHeight);
    pdf.save("cv.pdf");
  };

  const formatDateTime = (dateTimeString) => {
    const date = new Date(dateTimeString);
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <>
      {data && (
        <>
          <div className="data-preview__container" id="dataPrint">
            <div className="data-preview__title">
              <p>Data Hewan Qurban</p>
            </div>
            <div className="data-preview__header">
              {/* <div className="data-preview__item">
                <label className="data-preview__label">
                  Nama Shohibul Qurban:
                </label>
                <p className="data-preview__name">
                  {data.firstName} {data.lastName}
                </p>
              </div> */}
              {/* <div className="data-preview__item">
                <label className="data-preview__label">Blok Rumah:</label>
                <p className="data-preview__name">{data.blokRumah}</p>
              </div>
              <div className="data-preview__item">
                <label className="data-preview__label">No HP:</label>
                <p className="data-preview__name">{data.phone}</p>
              </div>
              <div className="data-preview__item">
                <label className="data-preview__label">
                  Hewan yang diqurbankan:
                </label>
                <p className="data-preview__name">{data.hewan}</p>
              </div> */}
              <div className="data-preview__item">
                <label className="data-preview__label">Kode Hewan</label>
                <p className="data-preview__name">{data.kodeHewan}</p>
              </div>
              <div className="data-preview__item">
                <label className="data-preview__label">Berat Daging (Kg)</label>
                <p className="data-preview__name">{data.beratDaging}</p>
              </div>
              <div className="data-preview__item">
                <label className="data-preview__label">Berat Kulit (Kg)</label>
                <p className="data-preview__name">{data.beratKulit}</p>
              </div>
              <div className="data-preview__item">
                <label className="data-preview__label">Tanggal & waktu</label>
                <p className="data-preview__name">
                  {formatDateTime(data.tanggalWaktu)}
                </p>
              </div>
              <div className="data-preview__item">
                <label className="data-preview__label">Status Hewan</label>
                <p className="data-preview__name">{data.statusHewan}</p>
              </div>
              <div className="data-preview__item">
                <label className="data-preview__label">Note:</label>
                <p className="data-preview__name">{data.profileSummary}</p>
              </div>
            </div>
            {/* <div className="data-preview__content">
              <Row>
                <Col lg="3">
                  {data.address && <Details data={data} />}
                  {data.skills && data.skills.length > 0 && (
                    <LeftSection data={data} title={'Skills'} />
                  )}
                  {data.languages && data.languages.length > 0 && (
                    <LeftSection data={data} title={'Languages'} />
                  )}
                </Col>
                <Col lg="9">
                  {data.profileSummary && <ProfileSummary data={data} />}
                  {data.education && data.education.length > 0 && (
                    <RightSection data={data} title={'Education'} />
                  )}
                  {data.workExperience && data.workExperience.length > 0 && (
                    <RightSection data={data} title={'Working Experience'} />
                  )}
                  {data.organizationExperience &&
                    data.organizationExperience.length > 0 && (
                      <RightSection
                        data={data}
                        title={'Organization Experience'}
                      />
                    )}
                </Col>
              </Row>
            </div> */}
          </div>
          <div className="cancel-button">
            <Button
              onClick={() => navigate(`/tabel-perhitungan`)}
              colorScheme="yellow"
              className="cancel-button"
            >
              Kembali
            </Button>
          </div>
          {/* <div className="download-button">
            <Button onClick={printDocument} colorScheme="blue">
              Download as PDF
            </Button>
          </div> */}
        </>
      )}
    </>
  );
};
export default DataPreview;
