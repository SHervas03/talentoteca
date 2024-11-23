import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from '../pages/Index.jsx'
import MainLayout from '../layouts/MainLayout.jsx'
import Recipes from '../pages/Recipes.jsx';
import FAQ from '../pages/FAQ.jsx';

function RouteSystem() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="" element={<MainLayout />}>
                    <Route index element={<Index />} />
                    <Route path="Recetas" element={<Recipes />} />
                    <Route path="FAQ" element={<FAQ />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSystem