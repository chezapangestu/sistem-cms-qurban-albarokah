import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddData from "./pages/addData/AddData";
import DataPreview from "./pages/dataPreview/DataPreview";
import DisplayQueue from "./pages/displayQueue/DisplayQueue";
import TabelPerhitungan from "./pages/tabelPerhitungan/TabelPerhitungan";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DisplayQueue />} />
          <Route path="/add-data" element={<AddData />} />
          <Route path="/tabel-perhitungan" element={<TabelPerhitungan />} />
          {/* <Route path="/pengemasan" element={< />} /> */}
          <Route path="/data-preview/:hewan" element={<DataPreview />} />
          <Route path="/edit-data/:hewan" element={<AddData isEdit />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
