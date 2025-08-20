import {ToggleButton, ToggleContainer} from "./styles.ts";

import {useEffect, useState} from "react";

const ANIMALS = [
    {id: 1, label: "Cane di taglia piccola"},
    {id: 2, label: "Cane di taglia media"},
    {id: 3, label: "Cane di taglia grande"},
    {id: 4, label: "Gatto"},
];

const AnimalButton = ({selectedIds = [], onChange}) => {
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
            {ANIMALS.map(({id, label}) => (
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

export default AnimalButton;
