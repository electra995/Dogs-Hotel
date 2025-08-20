import {
    Popup,
    VisualizeIcon,
} from "./styles.ts";

import Button from "../button/Button.jsx";

import {useState, useRef, useEffect} from "react";

const PopupEditDelete = ({onEdit, onDelete}) => {
    const [open, setOpen] = useState(false);
    const [pos, setPos] = useState({top: 0, left: 0});
    const iconRef = useRef(null);
    const popupRef = useRef(null);

    const togglePopup = () => {
        if (!open && iconRef.current) {
            const rect = iconRef.current.getBoundingClientRect();
            setPos({
                top: rect.bottom + window.scrollY + 5,
                left: rect.left + window.scrollX,
            });
        }
        setOpen(!open);
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                iconRef.current && !iconRef.current.contains(e.target) &&
                popupRef.current && !popupRef.current.contains(e.target)
            ) {
                setOpen(false);
            }
        };

        if (open) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [open]);

    return (
        <>
            <VisualizeIcon ref={iconRef} onClick={togglePopup} style={{cursor: "pointer"}}>
                <img src="/images/visualize.svg" alt="Visualizza"/>
            </VisualizeIcon>
            {open && (
                <Popup ref={popupRef} style={{top: pos.top, left: pos.left}}>
                    <Button padding="10px 22px"
                            fontSize="18px"
                            color="white"
                            borderradius="50px"
                            backgroundcolor="#0a846b"
                            onClick={() => {
                                onEdit();
                                setOpen(false);
                            }}>
                        Modifica
                    </Button>
                    <Button
                        padding="10px 22px"
                        fontSize="18px"
                        color="white"
                        backgroundcolor="#f26938"
                        borderradius="50px"
                        onClick={() => {
                            onDelete();
                            setOpen(false);
                        }}>
                        Elimina
                    </Button>
                </Popup>
            )}
        </>
    );
};

export default PopupEditDelete;
