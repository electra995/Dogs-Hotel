import {Link, useNavigate} from "react-router-dom";

import {
    StyledLogin,
    LoginImage,
    RightSection,
    RightContainer,
    LogoMobile,
    Title,
    Form,
    InputContainer,
    Label,
    Input,
    SubmitContainer,
    SubmitCheckContainer,
    ButtonBox,
    InputCheck,
    InputCheckSpan,
    AccessLoginContainer,
    RegisterLink,
} from "./styles.ts";

import Button from "../../components/button/Button.jsx";
import {apiLogin} from '../../services/authService/AuthService.jsx';
import {useState} from "react";
import {useAuth} from "../../context/authContext.jsx";

const Login = () => {
    const navigate = useNavigate();
    const {login} = useAuth();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [error, setError] = useState('');

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) => ({...prev, [name]: value}));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            let user;
            user = await apiLogin(formData.email, formData.password);

            sessionStorage.setItem("user", JSON.stringify(user));
            login(user);
            navigate("/");
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <StyledLogin>
            <LoginImage src="images/login-image.png"/>
            <RightSection>
                <RightContainer>
                    <LogoMobile src="./images/logo-navbar.svg"/>
                    <Title>Bentornato al Dogs Hotel!</Title>
                    <Form onSubmit={handleSubmit}>
                        {error && <p style={{color: 'red'}}>{error}</p>}
                        <InputContainer>
                            <Label>E-mail</Label>
                            <Input type="text" name="email" value={formData.email}
                                   onChange={handleChange} required/>
                        </InputContainer>
                        <InputContainer>
                            <Label>Password</Label>
                            <Input type="password" name="password"
                                   value={formData.password} onChange={handleChange} placeholder="*************"
                                   required/>
                        </InputContainer>
                        <SubmitContainer>
                            <SubmitCheckContainer>
                                <InputCheck type="checkbox"/>
                                <InputCheckSpan>Accetto i termini e le condizioni</InputCheckSpan>
                            </SubmitCheckContainer>

                            <ButtonBox>
                                <Button
                                    padding="12px 40px"
                                    borderradius="8px"
                                    backgroundcolor="#0A846B"
                                    border="#0A846B"
                                    color="#FFFFFF"
                                    fontSize="18px"
                                    fontWeight="600"
                                    type="submit"
                                >
                                    Login
                                </Button>
                            </ButtonBox>
                        </SubmitContainer>
                    </Form>

                    <AccessLoginContainer>
                        {"Non sei ancora registrato?"}
                        <Link
                            to="/register"
                            style={{textDecoration: "none", color: "black"}}
                        >
                            <RegisterLink>Registrati</RegisterLink>
                        </Link>
                    </AccessLoginContainer>
                </RightContainer>
            </RightSection>
        </StyledLogin>
    );
};

export default Login;
