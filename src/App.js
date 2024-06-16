import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddData from "./pages/addData/AddData";
import DataPreview from "./pages/dataPreview/DataPreview";
import DisplayQueue from "./pages/displayQueue/DisplayQueue";
import TabelPerhitungan from "./pages/tabelPerhitungan/TabelPerhitungan";
import TabelPengemasan from "./pages/tabelPengemasan/TabelPengemasan";
import AddDataPengemasan from "./pages/addData/AddDataPengemasan";
import DataPreviewPengemasan from "./pages/dataPreview/DataPreviewPengemasan";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DisplayQueue />} />
          <Route path="/add-data" element={<AddData />} />
          <Route path="/add-data-pengemasan" element={<AddDataPengemasan />} />
          <Route path="/tabel-perhitungan" element={<TabelPerhitungan />} />
          <Route path="/tabel-pengemasan" element={<TabelPengemasan />} />
          <Route path="/data-preview/:hewan" element={<DataPreview />} />
          <Route
            path="/data-preview-pengemasan/:hewan"
            element={<DataPreviewPengemasan />}
          />
          <Route path="/edit-data/:hewan" element={<AddData isEdit />} />
          <Route
            path="/edit-data-pengemasan/:hewan"
            element={<AddDataPengemasan isEdit />}
          />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
