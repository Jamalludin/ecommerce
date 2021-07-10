import { Container } from "react-bootstrap";
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
        <Header></Header>

        <main>
            <Container>
                <h1>Welcomer To Warung Shop</h1>
            </Container>
        </main>

        <Footer></Footer>
    </>
  );
}

export default App;
