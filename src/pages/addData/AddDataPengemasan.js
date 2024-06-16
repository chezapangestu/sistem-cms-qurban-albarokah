import React, { useEffect, useState } from "react";
import "./addData.css";
import { Button, useToast } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Skills from "./components/Skills";
import Education from "./components/Education";
import WorkingExperience from "./components/WorkingExperience";
import OrganizationExperience from "./components/OrganizationExperience";
import Languages from "./components/Languages";
import ProfileSummary from "./components/ProfileSummary";
import PersonalDetailsPengemasan from "./components/PersonalDetailsPengemasan";

const AddDataPengemasan = ({ isEdit }) => {
  const [data, setData] = useState({
    tanggalWaktu: "",
    jumlahKresek: "",
    // noKodeHewan: "",
    // beratDaging: "",
    // beratKulit: "",
    // profileSummary: "",
    // statusHewan: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { hewan } = useParams();

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_FAKE_API}/personalDetailsPengemasan/${hewan}`
      );
      // const { data } = await axios.get(
      //   `http://localhost:3004/personalDetailsPengemasan/${hewan}`
      // );
      setData(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (hewan) {
      fetchData();
    }
  }, [hewan]);
  const handleChange = (e) => {
    let temp = { ...data };
    temp[e.target.name] = e.target.value;
    setData(temp);
  };
  const toast = useToast();
  const handleSubmit = async () => {
    let validate = submitValidation();
    if (validate === true) {
      setIsSubmitting(true);
      try {
        let postData = data;
        let unikId = new Date().getTime();
        postData.id = unikId;
        if (hewan) {
          let putData = data;
          await axios.put(
            `${process.env.REACT_APP_FAKE_API}/personalDetailsPengemasan/${hewan}`,
            putData
          );
          // await axios.put(
          //   `http://localhost:3004/personalDetailsPengemasan/${hewan}`,
          //   putData
          // );
        } else {
          await axios.post(
            `${process.env.REACT_APP_FAKE_API}/personalDetailsPengemasan`,
            postData
          );
          // await axios.post(`http://localhost:3004/personalDetailsPengemasan`, postData);
        }
        toast({
          title: "Tambah data berhasil",
          description: `Data telah berhasil ${
            hewan ? "diedit!" : "ditambahkan!"
          }`,
          position: "top",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
        setTimeout(() => {
          navigate(`/tabel-pengemasan`);
        }, 500);
      } catch (err) {
        console.log(err);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      toast({
        title: "Submit data failed!",
        description: "You need to complete the blank input",
        position: "top",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };
  const submitValidation = () => {
    let isValid = true;
    Object.keys(data).forEach((key) => {
      if (
        key !== "workExperience" &&
        key !== "organizationExperience" &&
        key !== "country"
      ) {
        if (data[key] === "" || data[key].length === 0) {
          isValid = false;
        }
      }
    });
    return isValid;
  };
  const handleGlobalAdd = (type) => {
    let temp = { ...data };
    let tempObj;
    if (type === "education") {
      tempObj = {
        school: "",
        degree: "",
        startDate: "",
        endDate: "",
        city: "",
        description: "",
      };
    } else if (type === "skills") {
      tempObj = {
        skill: "",
        level: "",
      };
    } else if (type === "workExperience") {
      tempObj = {
        jobTitle: "",
        employer: "",
        startDate: "",
        endDate: "",
        city: "",
        description: "",
      };
    } else if (type === "organizationExperience") {
      tempObj = {
        jobTitle: "",
        department: "",
        startDate: "",
        endDate: "",
        organizationName: "",
        description: "",
      };
    } else if (type === "languages") {
      tempObj = {
        language: "",
        level: "",
      };
    }
    temp[type].push(tempObj);
    setData(temp);
  };
  const handleGlobalDelete = (i, type) => {
    let temp = { ...data };
    let arr = [];
    temp[type].forEach((data, index) => {
      if (i !== index) {
        arr.push(data);
      }
    });
    temp[type] = arr;
    setData(temp);
  };
  const handleGlobalChange = (e, i, type) => {
    let temp = { ...data };
    temp[type][i][e.target.name] = e.target.value;
    setData(temp);
  };

  return (
    <>
      <div className="add-data__container">
        <div className="add-data__title">
          <p>{isEdit ? "Edit" : "Tambahkan"} Data Hewan Qurban</p>
        </div>
        <PersonalDetailsPengemasan data={data} handleChange={handleChange} />
        <ProfileSummary data={data} handleChange={handleChange} />
        <div className="add-data__button">
          <Button
            onClick={() => navigate(`/tabel-pengemasan`)}
            colorScheme="yellow"
            className=""
          >
            Kembali
          </Button>
          <Button
            onClick={handleSubmit}
            colorScheme="blue"
            className="submit-button"
            isLoading={isSubmitting}
            disabled={isSubmitting}
          >
            Submit
          </Button>
        </div>
      </div>
    </>
  );
};

export default AddDataPengemasan;
