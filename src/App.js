import { Container, Row, Col } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ComponentMainSection from "./components/ComponentMainSection.jsx";
import ComponentSideBar from "./components/ComponentSideBar.jsx";
import SectionList from "./components/SectionList.jsx";
import Player from "./components/Player.jsx";
import { SearchPage } from "./components/SearchPage.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Container fluid>
          <Row>
            <Col xs={0} md={4} lg={3} className="p-0 ">
              <ComponentSideBar />
            </Col>

            <Col xs={12} md={8} lg={9}>
              <Routes>
                <Route path="/search-page/" element={<SearchPage />} />
                <Route path="/search-page/:artistName" element={<SearchPage />} />
              </Routes>
              <SectionList />
              <h2>Rock Classics</h2>
              <ComponentMainSection artist={"queen"} />
              <h2>Pop Culture</h2>
              <ComponentMainSection artist={"katyperry"} />
              <h2>#HipHop</h2>
              <ComponentMainSection artist={"eminem"} />
            </Col>
          </Row>
        </Container>
        <footer>
          <Player />
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
