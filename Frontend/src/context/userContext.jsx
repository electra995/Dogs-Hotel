import {createContext, useContext, useState, useEffect, useCallback} from "react";
import {useAuth} from "./authContext.jsx";
import {
    fetchUserProfile,
    fetchUserReservations,
    updateUserProfile
} from "../services/profileService/ProfileService.jsx";

const UserProfileContext = createContext(null);

export const UserProfileProvider = ({children}) => {
    const {user} = useAuth();

    const [profile, setProfile] = useState(null);
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const loadData = useCallback(async () => {
        if (!user) return;

        setLoading(true);
        setError(null);

        try {
            const profileData = await fetchUserProfile(user.id);
            setProfile({
                address: profileData.address || "",
                address_number: profileData.address_number || "",
                cap: profileData.cap || "",
                province: profileData.province || "",
                phone: profileData.phone || "",
                email: profileData.email || user.email,
                image_url: profileData.image_url || "/images/user-profile.png",
            });

            const bookingsData = await fetchUserReservations(user.id);
            setBookings(bookingsData || []);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    }, [user]);

    useEffect(() => {
        void loadData();
    }, [loadData, user]);

    const updateProfileData = async (newProfileData) => {
        if (!user) return;

        try {
            await updateUserProfile(user.id, newProfileData);
            await loadData();
        } catch (err) {
            throw err;
        }
    };

    return (
        <UserProfileContext.Provider
            value={{profile, bookings, loading, error, updateProfileData, reloadProfile: loadData}}
        >
            {children}
        </UserProfileContext.Provider>
    );
};

export const useUserProfile = () => {
    const context = useContext(UserProfileContext);
    if (!context) {
        throw new Error("useUserProfile must be used within UserProfileProvider");
    }
    return context;
};
