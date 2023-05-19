import { useAuth } from '../../context/Auth/useAuth';
import Login from '../../pages/Login';

const ProtectedLayout = ({ children }: { children: JSX.Element }) => {
    const auth = useAuth();
    if (!auth.user) {
        return <Login />
    }
    return children;
}

export default ProtectedLayout