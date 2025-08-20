import {ScheduleSelect} from "./styles.ts";

const SelectButton = ({name, value, onChange}) => {
    const hours = Array.from({length: 24}, (_, i) => `${i}:00`);
    return (
        <ScheduleSelect name={name} value={value} onChange={onChange}>
            {hours.map((hour) => (
                <option key={hour} value={hour}>
                    {hour}
                </option>
            ))}
        </ScheduleSelect>
    );
};

export default SelectButton;
