import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Vision from "./pages/Vision";
import Videos from "./pages/Videos";
import History from "./pages/History";
import Curriculum from "./pages/Curriculum";
import Contacts from "./pages/Contacts";
import Students from "./pages/StudentCouncil";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Photos from "./pages/Photos";
import Admissions from "./pages/Admissions";
import PrincipalMsg from "./pages/PrincipalMsg";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index path="/" element={<Home />} />
            <Route path="about">
              <Route path="history" element={<History />} />
              <Route path="vision" element={<Vision />} />
              <Route path="student-council" element={<Students />} />
              <Route path="principal-message" element={<PrincipalMsg />} />
            </Route>
            <Route path="gallery">
              <Route path="images" element={<Photos />} />
              <Route path="videos" element={<Videos />} />
            </Route>
            <Route path="contacts" element={<Contacts />} />
            <Route path="admissions" element={<Admissions />} />
            <Route path="academics">
              <Route path="curriculum" element={<Curriculum />} />
              <Route path="admissions" element={<Admissions />} />
              <Route path="admissions" element={<Admissions />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
