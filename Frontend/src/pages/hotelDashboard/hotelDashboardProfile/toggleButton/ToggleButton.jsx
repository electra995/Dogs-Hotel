import {ToggleButton, ToggleContainer} from "./styles.ts";

import {useEffect, useState} from "react";

const TYPES = [
    {id: 1, label: "Asilo diurno"},
    {id: 2, label: "Pensione lunga durata"},
    {id: 3, label: "Hotel pet friendly"},
];

const ToggleButtons = ({selectedIds = [], onChange}) => {
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
            {TYPES.map(({id, label}) => (
                <ToggleButton
                    key={id}
                    onClick={() => toggleSelection(id)}
                    istoggled={selected.includes(id)}
                >
                    {label}
                </ToggleButton>
            ))}
        </ToggleContainer>
    );
};

export default ToggleButtons;
