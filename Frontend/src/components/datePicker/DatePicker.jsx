import styled from "styled-components";
import format from "date-fns/format";

import {DateRange} from "react-date-range";
import {it} from "date-fns/locale";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "./styles.css";

const InputsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 6px;
    border: 1px solid #cccccc;
    width: 90%;
    padding: 6px;
    margin: 0 auto;
    gap: 12px;
`;

const InputSubcontainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const InputTitle = styled.span`
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
`;

const Input = styled.input`
    font-size: 16px;
    color: #abaaaa;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 80px;
    border: none;
`;

const DateRangePicker = ({range, onChange}) => {
    const hasValidRange = Array.isArray(range) && range.length > 0;

    const startDateFormatted = hasValidRange
        ? format(range[0].startDate, "dd/MM/yyyy")
        : "";
    const endDateFormatted = hasValidRange
        ? format(range[0].endDate, "dd/MM/yyyy")
        : "";

    return (
        <div className="calendarWrap">
            <DateRange
                locale={it}
                onChange={(item) => onChange([item.selection])}
                editableDateInputs={true}
                moveRangeOnFirstSelection={false}
                ranges={hasValidRange ? range : []}
                months={1}
                direction="horizontal"
                className="calendarElement"
                rangeColors={["#F26938"]}
            />

            <InputsContainer>
                <InputSubcontainer>
                    <InputTitle>Check-in</InputTitle>
                    <Input value={startDateFormatted} readOnly/>
                </InputSubcontainer>
                <InputSubcontainer>
                    <InputTitle>Check-out</InputTitle>
                    <Input value={endDateFormatted} readOnly/>
                </InputSubcontainer>
            </InputsContainer>
        </div>
    );
};

export default DateRangePicker;
