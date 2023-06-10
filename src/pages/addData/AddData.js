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
import PersonalDetails from "./components/PersonalDetails";

const AddData = ({ isEdit }) => {
  const [data, setData] = useState({
    // jobTitle: "",
    firstName: "",
    lastName: "",
    blokRumah: "",
    phone: "",
    hewan: "",
    // country: "",
    // city: "",
    // address: "",
    // postalCode: "",
    // birthPlace: "",
    // birthDate: "",
    profileSummary: "",
    // education: [],
    // skills: [],
    // workExperience: [],
    // organizationExperience: [],
    // languages: [],
  });
  const navigate = useNavigate();
  const { anak } = useParams();
  const fetchData = async () => {
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
    if (anak) {
      fetchData();
    }
  }, [anak]);
  const handleChange = (e) => {
    let temp = { ...data };
    temp[e.target.name] = e.target.value;
    setData(temp);
  };
  const toast = useToast();
  const handleSubmit = async () => {
    let validate = submitValidation();
    if (validate === true) {
      try {
        let postData = data;
        let unikId = new Date().getTime();
        postData.id = unikId;
        if (anak) {
          let putData = data;
          await axios.put(
            `${process.env.REACT_APP_FAKE_API}/personalDetails/${anak}`,
            putData
          );
          // await axios.put(
          //   `http://localhost:3004/personalDetails/${anak}`,
          //   putData
          // );
        } else {
          await axios.post(
            `${process.env.REACT_APP_FAKE_API}/personalDetails`,
            postData
          );
          // await axios.post(`http://localhost:3004/personalDetails`, postData);
        }
        toast({
          title: "Tambah data berhasil",
          description: `Data telah berhasil ${
            anak ? "diedit!" : "ditambahkan!"
          }`,
          position: "top",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
        setTimeout(() => {
          navigate(`/`);
        }, 2000);
      } catch (err) {
        console.log(err);
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
          <p>{isEdit ? "Edit" : "Tambahkan"} Data Shohibul Qurban</p>
        </div>
        <PersonalDetails data={data} handleChange={handleChange} />
        <ProfileSummary data={data} handleChange={handleChange} />
        {/* <Education
          data={data}
          handleGlobalAdd={handleGlobalAdd}
          handleGlobalChange={handleGlobalChange}
          handleGlobalDelete={handleGlobalDelete}
        />
        <Skills
          data={data}
          handleGlobalAdd={handleGlobalAdd}
          handleGlobalChange={handleGlobalChange}
          handleGlobalDelete={handleGlobalDelete}
        />
        <WorkingExperience
          data={data}
          handleGlobalAdd={handleGlobalAdd}
          handleGlobalChange={handleGlobalChange}
          handleGlobalDelete={handleGlobalDelete}
        />
        <OrganizationExperience
          data={data}
          handleGlobalAdd={handleGlobalAdd}
          handleGlobalChange={handleGlobalChange}
          handleGlobalDelete={handleGlobalDelete}
        />
        <Languages
          data={data}
          handleGlobalAdd={handleGlobalAdd}
          handleGlobalChange={handleGlobalChange}
          handleGlobalDelete={handleGlobalDelete}
        /> */}
        <div className="add-data__button">
          <Button
            onClick={handleSubmit}
            colorScheme="blue"
            className="submit-button"
          >
            Tambahkan
          </Button>
          <Button
            onClick={() => navigate(`/`)}
            colorScheme="yellow"
            className=""
          >
            Kembali
          </Button>
        </div>
      </div>
    </>
  );
};

export default AddData;
