import LanguageSelector from "../../assets/utils/LanguageSelector";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChild} from "@fortawesome/free-solid-svg-icons";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";
import {Nav, Navbar} from "react-bootstrap";
import NavTab, {INavTab} from "../../assets/models/elements/NavTab";
import {useState} from "react";


function Header() {
    const {t} = useTranslation()
    const navigate = useNavigate();
    const navItems = [
        new NavTab('/portfolio#home', 'header.home'),
        new NavTab('/portfolio#intro', 'header.intro'),
        new NavTab('/portfolio#projet', 'header.project'),
        new NavTab('/portfolio#progres', 'header.progress'),
        new NavTab('/portfolio#contact', 'header.contact'),

        new NavTab('signIn', 'pages.home.signIn'),
        new NavTab('signUp', 'pages.home.signUp')
    ]

    return (
        <div className="sticky-top">
            <div className="bg-secondary">
                <Navbar
                    className="navbar-expand-md bg-dark text-uppercase fw-bold px-3 text-light navbar-dark sticky-top">
                    <Navbar.Brand href="/portfolio#home">
                        <FontAwesomeIcon icon={faChild} className="text-warning fa-2x"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="nav" className="bg-warning"/>
                    <Navbar.Collapse id="nav" className="justify-content-between">
                        <Nav className="navbar-nav">
                            {
                                navItems.map((navItem: INavTab, index: number) => (
                                    <Nav.Item key={index}>
                                        <Nav.Link className={`px-3`}
                                                  href={navItem.link}
                                                  onClick={() => navigate(navItem.link)}>
                                            {t(navItem.label)}
                                        </Nav.Link>
                                    </Nav.Item>
                                ))
                            }
                        </Nav>
                        {

                        }
                        <LanguageSelector/>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    );
}

export default Header;