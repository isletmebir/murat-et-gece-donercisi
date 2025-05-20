
import AnaSayfaScreen from "./Screens/AnaSayfaScreens"
import {  HashRouter, Route, Routes } from "react-router"
import FiyatListesiScreen from "./Screens/FiyatListesiScreen"

function App() {
  
  return (
    <HashRouter >
      <Routes>
        <Route path="/" element={< AnaSayfaScreen />} />
        <Route path="/fiyat-listesi" element={< FiyatListesiScreen />} />
      </Routes>
     
    </HashRouter>
  )
}

export default App
