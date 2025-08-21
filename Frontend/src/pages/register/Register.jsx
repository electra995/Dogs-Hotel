import {
    StyledRegister,
    LogoMobile,
    RegisterImage,
    RightSection,
    RightContainer,
    Title,
    Subtitle,
    OptionContainer,
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
    LoginLink,
} from "./styles.ts";

import Button from "../../components/button/Button.jsx";

import {apiRegister} from '../../services/authService/AuthService.jsx';
import {useAuth} from "../../context/authContext.jsx";
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";

const Register = () => {
    const navigate = useNavigate();
    const {login} = useAuth();

    const [selectedRole, setSelectedRole] = useState(null);

    const [formData, setFormData] = useState({
        role: '',
        name: '',
        email: '',
        password: '',
        confpassword: '',
    });

    const [error, setError] = useState('');

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) => ({...prev, [name]: value}));
    };

    const validateForm = () => {
        {
            if (!formData.role) {
                setError('Seleziona un ruolo');
                return false;
            }

            if (/[^a-zA-Zà-ùÀ-Ù\s]/.test(formData.name) || formData.name.length < 2) {
                setError('Nome non valido');
                return false;
            }
            if (!/\S+@\S+\.\S+/.test(formData.email)) {
                setError('Email non valida');
                return false;
            }
            if (formData.password.length < 6) {
                setError('La password deve contenere almeno 6 caratteri');
                return false;
            }
            if (formData.confpassword !== formData.password) {
                setError('Le password non corrispondono');
                return false;
            }
        }

        setError('');
        return true;
    };

    const handleRoleSelect = (role) => {
        setSelectedRole(role);
        setFormData(prev => ({...prev, role}));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        try {
            let user;
            user = await apiRegister(selectedRole, formData.name, formData.email, formData.password);

            sessionStorage.setItem("user", JSON.stringify(user));
            login(user);
            navigate("/");
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <StyledRegister>
            <RegisterImage src="images/register-image.png"/>
            <RightSection>
                <RightContainer>
                    <LogoMobile src="./images/logo-navbar.svg"/>
                    <Title>Benvenuto al Dogs Hotel!</Title>
                    <Subtitle>Scegli un’opzione per registrarti</Subtitle>
                    <OptionContainer>
                        <Button
                            padding="12px 34px"
                            color={selectedRole === "guest" ? "#FFFFFF" : "#79c4b5"}
                            fontSize="18px"
                            fontWeight="600"
                            borderradius="8px"
                            border={selectedRole === "guest" ? "2px solid #0A846B" : "2px solid #79c4b5"}
                            backgroundcolor={selectedRole === "guest" ? "#0A846B" : "#ebf4f3"}
                            onClick={() => handleRoleSelect("guest")}
                            value={formData.role}
                        >
                            Ospite
                        </Button>
                        <Button
                            padding="12px 34px"
                            color={selectedRole === "employee" ? "#FFFFFF" : "#79c4b5"}
                            fontSize="18px"
                            fontWeight="600"
                            borderradius="8px"
                            border={selectedRole === "employee" ? "2px solid #0A846B" : "2px solid #79c4b5"}
                            backgroundcolor={selectedRole === "employee" ? "#0A846B" : "#ebf4f3"}
                            onClick={() => handleRoleSelect("employee")}
                            value={formData.role}
                        >
                            Dipendente
                        </Button>
                    </OptionContainer>
                    <Form onSubmit={handleSubmit}>
                        {error && <p style={{color: 'red'}}>{error}</p>}
                        <InputContainer>
                            <Label>Nome</Label>
                            <Input type="text" name="name" value={formData.name}
                                   onChange={handleChange} required/>
                        </InputContainer>
                        <InputContainer>
                            <Label>E-mail</Label>
                            <Input type="email" name="email" value={formData.email}
                                   onChange={handleChange} required/>
                        </InputContainer>
                        <InputContainer>
                            <Label>Password</Label>
                            <Input type="password" name="password"
                                   value={formData.password} onChange={handleChange} required
                                   placeholder="*************"/>
                        </InputContainer>
                        <InputContainer>
                            <Label>Conferma Password</Label>
                            <Input type="password" name="confpassword"
                                   value={formData.confpassword} onChange={handleChange} required
                                   placeholder="*************"/>
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
                                    Registrati
                                </Button>
                            </ButtonBox>
                        </SubmitContainer>
                    </Form>

                    <AccessLoginContainer>
                        {"Hai già un account?"}
                        <Link
                            to="/login"
                            style={{textDecoration: "none", color: "black"}}
                        >
                            <LoginLink>LOGIN</LoginLink>
                        </Link>
                    </AccessLoginContainer>
                </RightContainer>
            </RightSection>
        </StyledRegister>
    );
};

export default Register;
