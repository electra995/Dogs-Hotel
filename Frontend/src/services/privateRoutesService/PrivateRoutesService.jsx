import {Navigate} from "react-router-dom";
import {useAuth} from "../../context/authContext.jsx";

export const PrivateAdminRoute = ({children}) => {
    const {user} = useAuth();

    if (!user) {
        return <Navigate to="/login" replace/>;
    }

    if (user.role === !"employee") {
        return <Navigate to="/hotel-dashboard" replace/>;
    }

    return children;
};

export const PrivateGuestRoute = ({children}) => {
    const {user} = useAuth();

    if (!user) {
        return <Navigate to="/login" replace/>;
    }

    if (user.role === !"guest") {
        return <Navigate to="/user-dashboard" replace/>;
    }

    return children;
};
