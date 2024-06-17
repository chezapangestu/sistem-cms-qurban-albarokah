import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import { Input, Select } from "@chakra-ui/react";

const PersonalDetails = ({ data, handleChange }) => {
  const [displayData, setDisplayData] = useState([]);

  const handleSelectChange = (event) => {
    handleChange(event); // tetap memanggil handleChange untuk memperbarui data parent
    const value = event.target.value;

    let dataToDisplay = [];
    switch (value) {
      case "Sapi Baqarah 1":
        dataToDisplay = [
          "Asep Kusmanurdin bin Edi Partah",
          "Raden Agung Derajat bin Raden Muhammad Yusuf",
          "Diana Damayanti binti Srihono",
          "Rudi Dermawan bin H. Kurnia Dermawan",
          "Humaira Nur Fitria Dewi binti Budi Aswoyo",
          "Ade Herlambang Bin Machdiansyah",
          "Andri Reza Rahmadi bin Gantira Natadisastra",
        ];
        break;
      case "Sapi Baqarah 2":
        dataToDisplay = [
          "Budi Yunanto bin H. Sunardi",
          "Faiz Nurkafi Hartono bin Achmad Prihartono",
          "Maathara Lamia Adrian",
          "Reo Yanuar Hadi bin Rajendra Soni Hadi",
          "Zalika Haviva Razi binti Fahrurazi",
          "Andy Mulia Hidayat bin Taufik Hidayat",
          "Yolla Adi Kisworo Putri binti Hadi Kiswanto",
        ];
        break;
      case "Sapi Baqarah 3":
        dataToDisplay = [
          "Alexandra Anastasya Chang Binti Edy Suhendi Hidayat",
          "Aussie Hayatulfajri Bin Hayat Sholihin",
          "Safniwati Dalier binti Sutan Dalier",
          "Retno Dewi Hartianti Andry Harijanto",
          "Aisyah Harumi Ishana Aiden binti Herdiben Aden Ramadhani",
          "Dina Nurliasari binti Aidani Bangsawan",
          "Adin Adli Irfani bin Agus Sobari",
        ];
        break;
      case "Sapi Baqarah 4":
        dataToDisplay = [
          "Kelik Hadi Suranto bin CokroSuwiryo",
          "Sophia binti Solihin",
          "Arizali Aufar Bin Agus Muliawan",
          "Yudi Budiana bin Budiman",
          "Ermina Widiyastuti binti Muhammad Sirad",
          "Ade Maulana bin Agus Somantri",
          "Irsanti Hasyim binti Andi Rachmatmuly",
        ];
        break;
      case "Domba Special 1":
        dataToDisplay = ["Chairunnisa Yulia Widyaratri binti Sumardiyanto"];
        break;
      case "Domba Special 2":
        dataToDisplay = ["Rosita Mekayanti Binti Sudjik"];
        break;
      case "Domba Special 3":
        dataToDisplay = ["alm. Sulton Judiono bin h. Umar hariyadi"];
        break;
      case "Domba Special 4":
        dataToDisplay = ["yuyun wahyuni binti boedi oetomo"];
        break;
      case "Domba Special 5":
        dataToDisplay = ["Wilopo Supriadi bin Soeparman Bonomo Cokroseputro"];
        break;
      case "Domba Special 6":
        dataToDisplay = ["gilang rizky pratama bin Mudrika"];
        break;
      case "Domba Special 7":
        dataToDisplay = ["wijiastuti wahyuni rahayu binti syarif budi setyo"];
        break;
      case "Domba Special 8":
        dataToDisplay = ["Ragas Wiku Nagoro bin Sukirdi"];
        break;
      case "Domba Special 9":
        dataToDisplay = ["Reisya Syafira Ramadhani binti Yugo Kristanto"];
        break;
      case "Domba Special 10":
        dataToDisplay = ["Syahrial Tresuri Febrian binti Tresna Jatnika"];
        break;
      case "Domba Special 11":
        dataToDisplay = ["Prima Galih Bin H. Johny Guryana"];
        break;
      case "Domba Special 12":
        dataToDisplay = ["Rita Ruslina Binti Yahya Miharja"];
        break;
      case "Domba Special 13":
        dataToDisplay = ["Darminto bin Gamiran"];
        break;
      case "Domba Premium 1":
        dataToDisplay = ["Andaru Tuhu Haribowo bin Teguh Tuhu Prasetyo"];
        break;
      case "Domba Premium 2":
        dataToDisplay = ["Rini binti Suwandi"];
        break;
      case "Domba Premium 3":
        dataToDisplay = ["Sarah Ayannarefa binti Reo Yanuar Hadi"];
        break;
      case "Domba Premium 4":
        dataToDisplay = [
          "Jauhari Khairul Kawistara bin Nanan Muhtasjier Asqar",
        ];
        break;
      case "Domba Premium 5":
        dataToDisplay = ["M Fuad Dimyati bin Dimyati Safari"];
        break;
      case "Domba Premium 6":
        dataToDisplay = ["Reza Irawan bin Muhamad Tamzil"];
        break;
      case "Domba Premium 7":
        dataToDisplay = ["Tiara Gizka Septi bin Nana kurniahadi"];
        break;
      case "Domba Premium 8":
        dataToDisplay = ["Ahmad Ruhiyat bin Djakaria Ahmad"];
        break;
      case "Domba Special Request 1":
        dataToDisplay = ["Arya Pradana Nugrahandito bin Sumardiyanto"];
        break;
      case "Domba Special Request 2":
        dataToDisplay = ["Muhammad Sapta Triaji bin Edi Rochyadi"];
        break;
      case "Domba Special Request 3":
        dataToDisplay = ["Muhammad Randi bin Yusril Iswandi"];
        break;
      case "Domba Special Request 4":
        dataToDisplay = ["Prima N. Sasmitapura bin Koswara Sasmitapura"];
        break;
      default:
        dataToDisplay = [];
    }
    setDisplayData(dataToDisplay);
  };

  return (
    <div className="add-data__personal-details">
      <div className="section-title">
        <p>Informasi Data Hewan</p>
      </div>
      <Row className="row">
        <Col lg="12">
          <p className="add-data-section__title">Kode Hewan</p>
          <Select
            placeholder="Pilih hewan"
            name="kodeHewan"
            value={data.kodeHewan}
            onChange={handleSelectChange}
            variant="filled"
            focusBorderColor="blue.500"
          >
            <option value="Sapi Baqarah 1">Sapi Baqarah 1</option>
            <option value="Sapi Baqarah 2">Sapi Baqarah 2</option>
            <option value="Sapi Baqarah 3">Sapi Baqarah 3</option>
            <option value="Sapi Baqarah 4">Sapi Baqarah 4</option>
            <option value="Domba Special 1">Domba Alkautsar (Special) 1</option>
            <option value="Domba Special 2">Domba Alkautsar (Special) 2</option>
            <option value="Domba Special 3">Domba Alkautsar (Special) 3</option>
            <option value="Domba Special 4">Domba Alkautsar (Special) 4</option>
            <option value="Domba Special 5">Domba Alkautsar (Special) 5</option>
            <option value="Domba Special 6">Domba Alkautsar (Special) 6</option>
            <option value="Domba Special 7">Domba Alkautsar (Special) 7</option>
            <option value="Domba Special 8">Domba Alkautsar (Special) 8</option>
            <option value="Domba Special 9">Domba Alkautsar (Special) 9</option>
            <option value="Domba Special 10">
              Domba Alkautsar (Special) 10
            </option>
            <option value="Domba Special 11">
              Domba Alkautsar (Special) 11
            </option>
            <option value="Domba Special 12">
              Domba Alkautsar (Special) 12
            </option>
            <option value="Domba Special 13">
              Domba Alkautsar (Special) 13
            </option>
            <option value="Domba Premium 1">Domba Alkautsar (Premium) 1</option>
            <option value="Domba Premium 2">Domba Alkautsar (Premium) 2</option>
            <option value="Domba Premium 3">Domba Alkautsar (Premium) 3</option>
            <option value="Domba Premium 4">Domba Alkautsar (Premium) 4</option>
            <option value="Domba Premium 5">Domba Alkautsar (Premium) 5</option>
            <option value="Domba Premium 6">Domba Alkautsar (Premium) 6</option>
            <option value="Domba Premium 7">Domba Alkautsar (Premium) 7</option>
            <option value="Domba Premium 8">Domba Alkautsar (Premium) 8</option>
            <option value="Domba Special Request 1">
              Domba Alkautsar (Special Request) 1
            </option>
            <option value="Domba Special Request 2">
              Domba Alkautsar (Special Request) 2
            </option>
            <option value="Domba Special Request 3">
              Domba Alkautsar (Special Request) 3
            </option>
            <option value="Domba Special Request 4">
              Domba Alkautsar (Special Request) 4
            </option>
            {/* <option value="Membawa sendiri">Membawa sendiri</option> */}
          </Select>
        </Col>
      </Row>
      <Row>
        {displayData.length > 0 && (
          <Row
            className="row"
            style={{
              padding: "0px",
              // backgroundColor: "#EDF2F7",
              width: "100%",
              marginLeft: "0px",
            }}
          >
            <Col lg="12">
              <p style={{ fontWeight: "700" }}>Nama Shahibul Qurban:</p>
              <ol style={{ marginLeft: "25px" }}>
                {displayData.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ol>
            </Col>
          </Row>
        )}
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
        {/* <Col lg="6" style={{ gap: "10px" }}> */}
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
      <Row className="row">
        {/* <Col lg="6">
          <p className="add-data-section__title">Status</p>
          <Select
            placeholder="Status"
            name="statusHewan"
            value={data.statusHewan}
            type="datetime-local"
            onChange={handleChange}
            size="md"
            variant="filled"
          >
            <option value="Sapi Baqarah">Belum dipotong</option>
            <option value="Domba Special">Sedang dipotong</option>
            <option value="Domba Premium">Sedang dikemas</option>
            <option value="Domba Premium">Selesai</option>
          </Select>
        </Col> */}
        <Col lg="12">
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
      <Row className="row">
        <Col lg="12">
          <p className="add-data-section__title">Status Hewan</p>
          <Select
            placeholder="Pilih status hewan"
            name="statusHewan"
            value={data.statusHewan}
            onChange={handleSelectChange}
            variant="filled"
            focusBorderColor="blue.500"
          >
            <option value="Belum dipotong">Belum dipotong</option>
            <option value="Pengulitan">Pengulitan</option>
            <option value="Pencacahan">Pencacahan</option>
            <option value="Onprogress">Onprogress</option>
            <option value="Selesai">Selesai</option>
            {/* <option value="Membawa sendiri">Membawa sendiri</option> */}
          </Select>
        </Col>
      </Row>
    </div>
  );
};

export default PersonalDetails;
