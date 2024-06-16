import React, { useState } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";
import { useEffect } from "react";
import {
  Flex,
  Text,
  Button,
  useToast,
  Checkbox,
  CheckboxGroup,
  Skeleton,
} from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import "./tabel.css";
import Pagination from "./Pagination";
import queryString from "query-string";
import { isEmpty } from "lodash";
import RightSection from "../dataPreview/components/RightSection";
import Details from "../dataPreview/components/Details";
import LeftSection from "../dataPreview/components/LeftSection";
import ProfileSummary from "../dataPreview/components/ProfileSummary";
import { Row, Col } from "reactstrap";
import "../dataPreview/dataPreview.css";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { intersection } from "lodash";

const TabelPerhitungan = () => {
  const { search } = useLocation();
  const [data, setData] = useState([]);
  const [fullData, setFullData] = useState([]);
  const [printData, setPrintData] = useState([]);
  const [totalPage, setTotalPage] = useState();
  const [selectedData, setSelectedData] = useState({});
  const [isCheckedAll, setIsCheckedAll] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const currentQuery = queryString.parse(search);
  const [page, setPage] = useState(
    isEmpty(currentQuery._page) ? 0 : parseInt(currentQuery._page) - 1
  );
  const navigate = useNavigate();
  const toast = useToast();
  const fetchData = async () => {
    try {
      const currentQuery = queryString.parse(search);
      currentQuery._page = parseInt(currentQuery._page) || 1;
      const queries = queryString.stringify({ ...currentQuery, _limit: 7 });
      const { data } = await axios.get(
        `${process.env.REACT_APP_FAKE_API}/personalDetails?${queries}`
      );
      // const { data } = await axios.get(
      //   `http://localhost:3004/personalDetails?${queries}`
      // );
      setData(data);
      setTimeout(() => {
        setIsLoading(false);
      }, "1000");
    } catch (err) {
      console.log(err);
    }
  };
  const fetchTotalPage = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_FAKE_API}/personalDetails`
      );
      // const { data } = await axios.get(`http://localhost:3004/personalDetails`);
      setFullData(data);
      setTotalPage(Math.ceil(data.length / 7));
    } catch (err) {
      console.log(err);
    }
  };
  const handlePageClick = (event) => {
    setPage(event.selected);
    const currentQuery = queryString.parse(search);
    const queries = queryString.stringify({
      ...currentQuery,
      _page: event.selected + 1,
    });
    navigate(`?${queries}`);
  };
  const handleDelete = async (id) => {
    try {
      console.log(id);
      await axios.delete(
        `${process.env.REACT_APP_FAKE_API}/personalDetails/${id}`
      );
      // await axios.delete(`http://localhost:3004/personalDetails/${id}`);
      fetchData();
      toast({
        title: "Hapus data berhasil",
        description: `Data telah dihapus`,
        position: "top",
        status: "success",
        duration: 2000,
        isClosable: false,
      });
    } catch (err) {
      console.log(err);
    }
  };
  const handleCheck = (value) => {
    let obj = { ...selectedData };
    let temp = obj[page] || [];
    if (temp.length < value.length) {
      temp.push(value[value.length - 1]);
    } else {
      temp = intersection([...temp], [...value]);
    }
    obj[page] = temp;
    setSelectedData(obj);
    setIsCheckedAll(temp.length === data.length);
  };
  const handleCheckAll = (e) => {
    let obj = { ...selectedData };
    if (e.target.checked) {
      obj[page] = data.map((each) => each.id.toString());
      setIsCheckedAll(true);
    } else {
      obj[page] = [];
      setIsCheckedAll(false);
    }
    setSelectedData(obj);
  };
  const objToArr = () => {
    let resArr = [];
    const values = Object.values(selectedData);
    for (let i = 0; i < values.length; i++) {
      resArr.push(...values[i]);
    }
    return resArr;
  };
  const compareData = () => {
    const resArr = objToArr();
    let printArr = [];
    for (let i = 0; i < resArr.length; i++) {
      const findData = fullData.find(({ id }) => id.toString() === resArr[i]);
      printArr.push(findData);
    }
    setPrintData(printArr);
    return printArr;
  };
  const bulkActionHandler = async (datas) => {
    if (!isEmpty(datas)) {
      let pdf = new jsPDF("portrait", "px", "A4", "false");
      for (let i = 0; i < datas.length; i++) {
        let canvas = await html2canvas(
          document.querySelector(`#dataPrint-${i}`)
        );
        let imgData = canvas.toDataURL("image/png");
        if (i !== 0) {
          pdf.addPage("portrait", "px", "A4", "false");
        }
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      }
      pdf.save("download-cv.pdf");
    } else {
      toast({
        title: "Warning",
        description: "Mohon check salah satu data",
        status: "warning",
        position: "top",
        duration: 1500,
        isClosable: false,
      });
    }
  };
  useEffect(() => {
    fetchTotalPage();
  }, []);
  useEffect(() => {
    fetchData();
  }, [search]);
  useEffect(() => {
    if (selectedData[page]) {
      setIsCheckedAll(selectedData[page].length === data.length);
    } else {
      setIsCheckedAll(false);
    }
  }, [page]);
  useEffect(() => {
    compareData();
  }, [selectedData]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     fetchData();
  //   }, 300000); // Panggil setiap 1 menit (60000 milidetik)

  //   // Membersihkan interval saat komponen dilepas
  //   return () => clearInterval(interval);
  // }, []);

  const columns = [
    // {
    //   name: (
    //     <Checkbox
    //       isChecked={isCheckedAll}
    //       onChange={(event) => handleCheckAll(event)}
    //     />
    //   ),
    //   cell: (row, index) => <Checkbox value={row.id.toString()} />,
    //   width: "50px",
    // },
    // { name: "Hewan", selector: (row) => row.hewan, sortable: true },
    { name: "Kode Hewan", selector: (row) => row.kodeHewan, sortable: true },
    {
      name: "Berat Daging (Kg)",
      selector: (row) => row.beratDaging,
      sortable: true,
    },
    {
      name: "Berat Kulit (Kg)",
      selector: (row) => row.beratKulit,
      sortable: true,
    },
    {
      name: "Tanggal & waktu",
      selector: (row) => row.tanggalWaktu,
      sortable: true,
    },
    // { name: "First Name", selector: (row) => row.firstName, sortable: true },
    // { name: "Last Name", selector: (row) => row.lastName, sortable: true },
    // { name: "Blok Rumah", selector: (row) => row.blokRumah, sortable: true },
    // { name: "No Handphone", selector: (row) => row.phone, sortable: true },
    {
      name: "Action",
      id: "view",
      accessor: (str) => "view",
      cell: (row, index) => (
        <Flex justify="space-evenly" w="200px">
          <Text
            className="tabel-action"
            // w={10}
            onClick={() => navigate(`/data-preview/${data[index].id}`)}
          >
            View
          </Text>
          <Text
            className="tabel-action"
            // w={10}
            onClick={() => navigate(`/edit-data/${data[index].id}`)}
          >
            Edit
          </Text>
          <Text
            className="tabel-action"
            // w={10}
            onClick={() => handleDelete(data[index].id)}
          >
            Delete
          </Text>
        </Flex>
      ),
      sortable: false,
      style: { justifyContent: "center" },
      center: true,
    },
  ];
  return (
    <div className="home-page__container">
      <div className="tabel__container">
        {isLoading ? (
          <>
            <div className="skeleton-header">
              <Skeleton height="60px" width="125px"></Skeleton>
              <Skeleton height="40px" width="100px"></Skeleton>
            </div>
            <div className="skeleton-content">
              <Skeleton
                className="skeleton-content__text"
                height="20px"
                maxWidth="100%"
              ></Skeleton>
              <Skeleton
                className="skeleton-content__text"
                height="20px"
                maxWidth="100%"
              ></Skeleton>
              <Skeleton
                className="skeleton-content__text"
                height="20px"
                maxWidth="100%"
              ></Skeleton>
              <Skeleton
                className="skeleton-content__text"
                height="20px"
                maxWidth="100%"
              ></Skeleton>
              <Skeleton
                className="skeleton-content__text"
                height="20px"
                maxWidth="100%"
              ></Skeleton>
              <Skeleton
                className="skeleton-content__text"
                height="20px"
                maxWidth="100%"
              ></Skeleton>
              <Skeleton
                className="skeleton-content__text"
                height="20px"
                maxWidth="100%"
              ></Skeleton>
              <Skeleton
                className="skeleton-content__text"
                height="20px"
                maxWidth="100%"
              ></Skeleton>
            </div>
            <div className="skeleton-footer">
              <Skeleton height="40px" width="159px"></Skeleton>
              <Skeleton height="22px" width="210px"></Skeleton>
            </div>
          </>
        ) : (
          <>
            <div className="tabel__title">
              <p>Perhitungan Daging Hewan Qurban</p>
              <div className="tabel__button">
                <Button
                  colorScheme="blue"
                  onClick={() => navigate(`/add-data`)}
                >
                  + Add Data
                </Button>
                <Button colorScheme="teal" onClick={fetchData}>
                  ⟳
                </Button>
              </div>
            </div>
            <div className="tabel__content">
              {/* <CheckboxGroup
                colorScheme="blue"
                defaultValue={selectedData[page] ? selectedData[page] : []}
                value={selectedData[page] ? selectedData[page] : []}
                onChange={handleCheck}
              >
              </CheckboxGroup> */}
              <DataTable columns={columns} data={data} />
            </div>
            <div className="table-footer">
              {/* <Button
                colorScheme="blue"
                onClick={() => bulkActionHandler(printData)}
              >
                Download as PDF
              </Button> */}
              <Pagination
                page={page}
                totalPage={totalPage}
                handlePageClick={handlePageClick}
              />
            </div>
          </>
        )}
      </div>
      {/* <div className="print-layout">
        {printData &&
          printData.map((value, index) => {
            return (
              <>
                <div
                  className="data-preview__container"
                  id={`dataPrint-${index}`}
                  key={index}
                >
                  <div className="data-preview__header">
                    <p className="data-preview__name">
                      {value.firstName} {value.lastName}
                    </p>
                    <p className="data-preview__job-title">{value.jobTitle}</p>
                  </div>
                  <div className="data-preview__content">
                    <Row>
                      <Col lg="3">
                        {value.address && <Details data={value} />}
                        {value.skills && value.skills.length > 0 && (
                          <LeftSection data={value} title={"Skills"} />
                        )}
                        {value.languages && value.languages.length > 0 && (
                          <LeftSection data={value} title={"Languages"} />
                        )}
                      </Col>
                      <Col lg="9">
                        {value.profileSummary && (
                          <ProfileSummary data={value} />
                        )}
                        {value.education && value.education.length > 0 && (
                          <RightSection data={value} title={"Education"} />
                        )}
                        {value.workExperience &&
                          value.workExperience.length > 0 && (
                            <RightSection
                              data={value}
                              title={"Working Experience"}
                            />
                          )}
                        {value.organizationExperience &&
                          value.organizationExperience.length > 0 && (
                            <RightSection
                              data={value}
                              title={"Organization Experience"}
                            />
                          )}
                      </Col>
                    </Row>
                  </div>
                </div>
              </>
            );
          })}
      </div> */}
    </div>
  );
};

export default TabelPerhitungan;
