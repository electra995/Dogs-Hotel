import {StyledButton} from "./styles.ts";

const Button = ({
                    children,
                    backgroundcolor,
                    color,
                    border,
                    borderradius,
                    fontWeight,
                    padding,
                    fontSize,
                    width,
                    margin,
                    onClick,
                    type = "button",
                }) => {
    return (
        <StyledButton
            backgroundcolor={backgroundcolor}
            color={color}
            border={border}
            borderradius={borderradius}
            fontWeight={fontWeight}
            padding={padding}
            fontSize={fontSize}
            width={width}
            margin={margin}
            onClick={onClick}
            type={type}
        >
            {children}
        </StyledButton>
    );
};

export default Button;
