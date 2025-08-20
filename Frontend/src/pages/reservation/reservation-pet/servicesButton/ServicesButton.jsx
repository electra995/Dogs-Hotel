import {ToggleButton, ToggleContainer} from "./styles.ts";

import {useEffect, useState} from "react";

const SERVICES = [
    {id: 1, label: "Bagno", icon: "/images/pet-bath.svg"},
    {id: 2, label: "Tosatura", icon: "/images/pet-cut.svg"},
    {id: 3, label: "Passeggio", icon: "/images/pet-walk.svg"},
    {id: 4, label: "Check-up", icon: "/images/pet-check.svg"},
];

const ServicesButton = ({selectedIds = [], onChange}) => {
    const [selected, setSelected] = useState([]);

    useEffect(() => {
        setSelected(selectedIds);
    }, [selectedIds]);

    const toggleSelection = (id) => {
        const updated = selected.includes(id)
            ? selected.filter((item) => item !== id)
            : [...selected, id];
        setSelected(updated);
        onChange(updated);
    };

    return (
        <ToggleContainer>
            {SERVICES.map(({id, label, icon}) => (
                <ToggleButton
                    key={id}
                    onClick={() => toggleSelection(id)}
                    istoggled={selected.includes(id)}
                >
                    <img src={icon} alt={label} style={{width: "20px", height: "20px", marginRight: "8px"}}/>
                    {label}
                </ToggleButton>
            ))}
        </ToggleContainer>
    );
};

export default ServicesButton;
