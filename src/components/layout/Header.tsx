import LanguageSelector from "../../assets/utils/LanguageSelector";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChild} from "@fortawesome/free-solid-svg-icons";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";
import {Nav, Navbar} from "react-bootstrap";
import NavTab, {INavTab} from "../../assets/models/elements/NavTab";


function Header() {
    const {t} = useTranslation()
    const navigate = useNavigate();
    const navItems = [
        new NavTab('home', 'header.home'),
        new NavTab('intro', 'header.intro'),
        new NavTab('projet', 'header.project'),
        new NavTab('progres', 'header.progress'),
        new NavTab('contact', 'header.contact')
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
                                                  href={`/portfolio#${navItem.name}`}
                                                  onClick={() => navigate(`/portfolio#${navItem.name}`)}>
                                            {t(navItem.label)}
                                        </Nav.Link>
                                    </Nav.Item>
                                ))
                            }
                            {/*    /!* TODO: mettre que la personne est connecté *!/*/}
                            {/*    <ul className="navbar-nav">*/}
                            {/*        <li className="nav-item">*/}
                            {/*            <a className="nav-link active" href="/login">*/}
                            {/*                EDIT: Login*/}
                            {/*            </a>*/}
                            {/*        </li>*/}
                            {/*    </ul>*/}
                        </Nav>
                        <LanguageSelector/>
                    </Navbar.Collapse>
                </Navbar>

            </div>
        </div>
    );
}

export default Header;