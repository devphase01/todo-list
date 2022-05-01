import {BrowserRouter, Route, Routes} from "react-router-dom";
import Create from "./Components/Create";
import Home from "./Components/Home";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/create" element={<Create/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
