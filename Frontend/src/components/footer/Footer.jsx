import {StyledFooter, FooterContainer, Icon, FooterRow, LeftList} from "./styles.ts";

import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <StyledFooter>
            <FooterContainer>
                <LeftList>
                    <Link to="/">
                        <Icon src="/images/logo-navbar1.png" alt=""/>
                    </Link>
                </LeftList>
                <FooterRow fontWeight="300">
                    Traccia del PW n. 1.4: Sviluppo di una pagina web per un servizio di prenotazione online di
                    un’impresa del settore terziario.{" "}
                </FooterRow>
                <FooterRow paddingpop="20px">
                    <Icon src="images/facebook-white.svg" alt=""/>
                    <Icon src="images/twitter-white.svg" alt=""/>
                    <Icon src="images/linkedin-white.svg" alt=""/>
                    <Icon src="images/instagram-white.svg" alt=""/>
                </FooterRow>
            </FooterContainer>
        </StyledFooter>
    );
};

export default Footer;
