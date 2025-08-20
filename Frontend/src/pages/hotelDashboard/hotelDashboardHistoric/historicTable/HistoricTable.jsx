import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import {
    UserIcon,
    NameColumn,
    StatusColumn,
    StatusBox,
} from "./styles.ts";

import {useReservations} from "../../../../context/hotelContext.jsx";

const CartTable = () => {

    const {reservations, loading, error} = useReservations();

    const petTypeLabels = {
        1: "Cane (taglia piccola)",
        2: "Cane (taglia media)",
        3: "Cane (taglia grande)",
        4: "Gatto",
    };

    const getPaymentStatus = (card) => {
        return card && card.trim() !== "" ? "Pagato" : "Non pagato";
    };

    if (loading) return <p>Caricamento...</p>;
    if (error) return <p>Non ci sono ancora prenotazioni</p>;

    return (
        <TableContainer sx={{borderRadius: "10px"}} component={Paper}>
            <Table sx={{minWidth: 500}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell sx={{fontSize: "12px", color: "#0A846B"}} align="center">NOME</TableCell>
                        <TableCell sx={{fontSize: "12px", color: "#0A846B"}} align="center">ANIMALE</TableCell>
                        <TableCell sx={{fontSize: "12px", color: "#0A846B"}} align="center">STATUS</TableCell>
                        <TableCell sx={{fontSize: "12px", color: "#0A846B"}} align="center">CHECK-IN</TableCell>
                        <TableCell sx={{fontSize: "12px", color: "#0A846B"}} align="center">CHECK-OUT</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {reservations.map((item) => (
                        <TableRow key={item.id} sx={{"&:last-child td, &:last-child th": {border: 0}}}>
                            <TableCell sx={{padding: "6px 16px"}} align="center">
                                <UserIcon src={item.user?.image_url || "/images/default-hotel.jpg"} alt=""/>
                            </TableCell>
                            <TableCell align="center">{item.user?.name}</TableCell>
                            <TableCell align="center">
                                <NameColumn>
                                    <span>{item.pet_name}</span> {petTypeLabels[item.pet_type] || "Tipo sconosciuto"}
                                </NameColumn>
                            </TableCell>
                            <TableCell align="center">
                                <StatusColumn>
                                    <StatusBox>· {getPaymentStatus(item.card)}</StatusBox>{" "}
                                    <span>
                                        {new Date(item.created_at).toLocaleString("it-IT", {
                                            day: "2-digit",
                                            month: "2-digit",
                                            year: "numeric",
                                            hour: "2-digit",
                                            minute: "2-digit",
                                        })}
                                    </span>
                                </StatusColumn>
                            </TableCell>
                            <TableCell align="center">
                                {item.checkin_date
                                    ? new Date(item.checkin_date).toLocaleDateString("it-IT", {
                                        day: "2-digit",
                                        month: "2-digit",
                                        year: "numeric",
                                    })
                                    : "-"}
                            </TableCell>
                            <TableCell align="center">
                                {item.checkout_date
                                    ? new Date(item.checkout_date).toLocaleDateString("it-IT", {
                                        day: "2-digit",
                                        month: "2-digit",
                                        year: "numeric",
                                    })
                                    : "-"}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default CartTable;
