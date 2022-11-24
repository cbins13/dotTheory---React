import { Route, Routes } from "react-router-dom";
import Home from "./components/V16";
import Header from "./components/Header";
import Footer from "./components/Footer";
import V17 from "./components/V17";
import V18 from "./components/V18";
import Portal from "./components/Portal";
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/v17" element={<V17 />} />
          <Route path="/v18" element={<V18/>} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
      <Portal>
          <span>This is a portal that is rendered in the HTML!</span>
      </Portal>
    </div>
  );
}

export default App;
