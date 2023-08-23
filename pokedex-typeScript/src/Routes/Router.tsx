import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Pokedex from '../pages/Pokedex/Pokedex'
import Pokelist from '../pages/Pokelist/Pokelist'

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Pokelist />} />
                <Route path="/pokedex" element={<Pokedex />} />

            </Routes>
        </BrowserRouter>
    )
}

export default Router