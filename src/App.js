import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "./Components/Create";
import Detail from "./Components/Detail";
import Home from "./Components/Home";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/create" element={<Create />} />
                    <Route path="/detail/:id" element={<Detail />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
