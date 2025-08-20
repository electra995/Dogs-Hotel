import {BrowserRouter, Routes, Route} from "react-router-dom";
import {AuthProvider} from "./context/AuthContext";
import {LodgingsProvider} from "./context/lodgingContext.jsx";

// Route protection
import {PrivateGuestRoute} from "./services/privateRoutesService/privateRoutesService.jsx";
import {PrivateAdminRoute} from "./services/privateRoutesService/privateRoutesService.jsx";

// Public pages
import Home from "./pages/home/Home.jsx";
import Register from "./pages/register/Register.jsx";
import Login from "./pages/login/Login.jsx";
import Hotel from "./pages/hotel/Hotel.jsx";
import PetOwner from "./pages/reservation/reservation-owner/PetOwner.jsx";
import PetRegister from "./pages/reservation/reservation-pet/PetRegister.jsx";
import ReservationPayment from "./pages/reservation/reservation-payment/ReservationPayment.jsx";
import ReservationRevision from "./pages/reservation/reservation-revision/ReservationRevision.jsx";
import Lodgings from "./pages/lodgings/Lodgings.jsx";

// Admin (hotel) dashboard
import HotelDashboard from "./pages/hotelDashboard/HotelDashboard.jsx";
import HotelDashboardPanel from "./pages/hotelDashboard/hotelDashboardPanel/HotelDashboardPanel.jsx";
import HotelDashboardHistoric from "./pages/hotelDashboard/hotelDashboardHistoric/HotelDashboardHistoric.jsx";
import HotelDashboardProfile from "./pages/hotelDashboard/hotelDashboardProfile/HotelDashboardProfile.jsx";

// Guest dashboard
import UserDashboard from "./pages/userDashboard/UserDashboard.jsx";
import UserDashboardReservations from "./pages/userDashboard/userDashboardReservations/UserDashboardReservations.jsx";
import UserDashboardProfile from "./pages/userDashboard/userDashboardProfile/UserDashboardProfile.jsx";
import UserDashboardEditReservation
    from "./pages/userDashboard/userDashboardEditReservation/UserDashboardEditReservation.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <LodgingsProvider>
                    <Routes>
                        {/* Public routes */}
                        <Route index element={<Home/>}/>
                        <Route path="/register" element={<Register/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/hotels/:id" element={<Hotel/>}/>
                        <Route path="/pet-owner" element={<PetOwner/>}/>
                        <Route path="/pet-register" element={<PetRegister/>}/>
                        <Route path="/reservation-payment" element={<ReservationPayment/>}/>
                        <Route path="/reservation-revision" element={<ReservationRevision/>}/>
                        <Route path="/lodgings" element={<Lodgings/>}/>

                        {/* Protected routes - Admin */}
                        <Route
                            path="/hotel-dashboard"
                            element={
                                <PrivateAdminRoute>
                                    <HotelDashboard/>
                                </PrivateAdminRoute>
                            }
                        >
                            <Route path="panel" element={<HotelDashboardPanel/>}/>
                            <Route path="historic" element={<HotelDashboardHistoric/>}/>
                            <Route path="profile" element={<HotelDashboardProfile/>}/>
                        </Route>

                        {/* Protected routes - Guest */}
                        <Route
                            path="/user-dashboard"
                            element={
                                <PrivateGuestRoute>
                                    <UserDashboard/>
                                </PrivateGuestRoute>
                            }
                        >
                            <Route path="reservations" element={<UserDashboardReservations/>}/>
                            <Route path="profile" element={<UserDashboardProfile/>}/>
                            <Route path="reservations/edit/:reservationId" element={<UserDashboardEditReservation/>}/>
                        </Route>
                    </Routes>
                </LodgingsProvider>
            </AuthProvider>
        </BrowserRouter>
    );
};

export default App;
