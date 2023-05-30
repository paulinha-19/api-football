import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';
import ProtectedLayout from '../components/ProtectedLayout';
import NotFound from '../pages/NotFound/index.';
import Dados from '../pages/Dados';

const Rotas = () => {
    return (
        <Routes>
            <Route
                path="home"
                element={
                    <ProtectedLayout>
                        <Home />
                    </ProtectedLayout>
                }
            />
            <Route
                path="dados"
                element={
                    <ProtectedLayout>
                        <Dados />
                    </ProtectedLayout>
                }
            />
            <Route index path='/' element={<Login />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
};
export default Rotas;



