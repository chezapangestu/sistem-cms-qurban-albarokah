import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './dataPreview.css';
import { useParams } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import RightSection from './components/RightSection';
import ProfileSummary from './components/ProfileSummary';
import Details from './components/Details';
import LeftSection from './components/LeftSection';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Button } from '@chakra-ui/react';

const DataPreview = () => {
  const [data, setData] = useState();
  const { anak } = useParams();
  const getData = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_FAKE_API}/personalDetails/${anak}`
      );
      // const { data } = await axios.get(
      //   `http://localhost:3004/personalDetails/${anak}`
      // );
      setData(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, [anak]);
  const printDocument = async () => {
    const input = document.getElementById('dataPrint');
    const canvas = await html2canvas(input);
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF();
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    pdf.addImage(imgData, 0, 0, pdfWidth, pdfHeight);
    pdf.save('cv.pdf');
  };
  return (
    <>
      {data && (
        <>
          <div className="data-preview__container" id="dataPrint">
            <div className="data-preview__header">
              <p className="data-preview__name">
                {data.firstName} {data.lastName}
              </p>
              <p className="data-preview__job-title">{data.jobTitle}</p>
            </div>
            <div className="data-preview__content">
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
            </div>
          </div>
          <div className="download-button">
            <Button onClick={printDocument} colorScheme="blue">
              Download as PDF
            </Button>
          </div>
        </>
      )}
    </>
  );
};
export default DataPreview;
