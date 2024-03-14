import Navbar from "./components/Navbar";
import { ItemDetailContainer } from "./components/itemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App(){
    return(
        <div>
            <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/item/:id" element={<ItemDetailContainer />}/>
            </Routes>
            </BrowserRouter>

        </div>
    );
}
export default App;