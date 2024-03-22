import Navbar from "./components/Navbar";
import { ItemDetailContainer } from "./components/itemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nosotros from "./components/Nosotros";
import Contacto from "./components/Contacto";

function App(){
    return(
        <div>
            <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/item/:id" element={<ItemDetailContainer />}/>
                <Route path="/productos" element={<ItemListContainer/>}/>
                <Route path="/productos/:categoria" element={<ItemListContainer/>} />
                <Route path="/nosotros" element={<Nosotros/>}/>
                <Route path="/contacto" element={<Contacto/>}/>
            </Routes>
            </BrowserRouter>

        </div>
    );
}
export default App;