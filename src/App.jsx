import "./App.css";
import Inicio from "./pages/Inicio";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import PreguntasFrecuentes from "./pages/PreguntasFrecuentes";

import {
  Route,
  Routes,
  Link,
  BrowserRouter,
} from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      <div className="@apply bg-[linear-gradient(180deg,#4A3B99_0%,#4A3B99_5%,#694ED6_50%)] min-h-[900px]">
        <Navbar collapseOnSelect expand="lg" variant="dark" >
          <Container>
            <Navbar.Brand as={Link} to="/">
              Mangos
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">
                  Inicio
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
      </Routes>
      </div>
     

      </BrowserRouter>
   </>
  );
}

export default App;
