import "./App.css";
import Inicio from "./pages/Inicio";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import PreguntasFrecuentes from "./pages/PreguntasFrecuentes";
import "./scss.scss";
import ComoFunciona from "./pages/PreguntasFrecuentes/ComoFunciona";
import Calculo from "./pages/PreguntasFrecuentes/Calculo";


import { Route, Routes, Link, BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Resultado from "./pages/Resultado";
import logo from "./assets/mangos-logo.png";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="@apply bg-[linear-gradient(180deg,#4A3B99_0%,#4A3B99_5%,#694ED6_50%)] min-h-[900px]">
          <Navbar collapseOnSelect expand="lg" variant="dark">
            <Container>
              <Navbar.Brand as={Link} to="/">
                <img className="h-8" src={logo} />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link as={Link} to="/preguntas-frecuentes/como-funciona">
                    Como Funciona
                  </Nav.Link>
                  <Nav.Link as={Link} to="/preguntas-frecuentes">
                    Preguntas Frecuentes
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <Routes>
            <Route path="/" element={<Inicio />}></Route>
            <Route
              path="/preguntas-frecuentes"
              element={<PreguntasFrecuentes />}
            ></Route>
            <Route
              path="/preguntas-frecuentes/como-funciona"
              element={<ComoFunciona />}
            ></Route>
            <Route
              path="/preguntas-frecuentes/como-calculamos-que-conviene"
              element={<Calculo />}
            ></Route>
            <Route path="/resultado" element={<Resultado />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
