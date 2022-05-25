import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import NavBar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import {LinkContainer} from "react-router-bootstrap";
import Badge from "react-bootstrap/esm/Badge";
import { useContext } from "react";
import { Store } from "./Store";
function App() {
  const {state}=useContext(Store);
  const {cart}=state;
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header>
        <NavBar bg="dark" variant="dark">
          <Container>
            <LinkContainer to="/">
              <NavBar.Brand>Inno</NavBar.Brand>
            </LinkContainer>
          
           <Nav className="me-auto">
           <Link to="/"className="nav-link">
                  Cart
           {cart.cartItems.length > 0 &&(
                  
                  <Badge pill bg="danger">
                    {cart.cartItems.length}

                  </Badge>
                  )}
              </Link>
            </Nav>
          </Container>

        </NavBar>
        </header>
        <main>
          <Container className="mt-3">
          <Routes>
            <Route path="/product/:slug" element={<ProductScreen />} />
            <Route path="/" element={<HomeScreen />} />
          </Routes>
          </Container>
        </main>
        <footer className="text-center">
          <div>Todos os direitos reservador a Inno</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
