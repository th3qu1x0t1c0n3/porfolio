import NavTab from "../../../../assets/models/elements/NavTab";
import {Image, Nav, Navbar} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import Dice from "./Dice";
import {ICharactere} from "../../../../assets/models/dungeon/character";

interface ISideBarComponent {
    setTab: (tab: string) => void,
    tab: string,
    character: ICharactere
}

function SideBar({setTab, tab, character}: ISideBarComponent) {
    const {t} = useTranslation();
    const navItems = [
        new NavTab('character', 'pages.dungeon.character'),
        new NavTab('store', 'pages.dungeon.store'),
        new NavTab('compendium', 'pages.dungeon.compendium'),
        new NavTab('inventory', 'pages.dungeon.inventory'),
        new NavTab('map', 'pages.dungeon.map'),
        new NavTab('administration', 'pages.dungeon.administration'),
    ]
    return (
        <Nav className="navbar navbar-expand-md navbar-light">
            <Navbar className="collapse navbar-collapse" id="navbarTogglerDemo03">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-4 bg-dark mt-5 fixed-top not-fixed-sm">
                            <div className="row align-items-start flex-column vh-100 not-fixed-sm">
                                <div className="row mt-md-0 mt-5">
                                </div>
                                <div className="col-12 my-1 d-lg-inline d-none text-center">
                                    <Image src={character.image} roundedCircle fluid width="200px"
                                           className={"m-3 img-responsive"}/>
                                </div>
                                <Nav defaultActiveKey="/home" className="flex-column me-auto mb-2 mb-lg-0 ">
                                    {navItems.map((tabItem, index) => (
                                        <Nav.Item key={index}
                                                  className={`rounded rounded-4  ${tab === tabItem.link ? 'bg-primary' : ''}`}>
                                            <Nav.Link className="nav-link text-white text-center text-capitalize"
                                                      onClick={() => setTab(tabItem.link)}>
                                                {t(tabItem.label)}
                                            </Nav.Link>
                                        </Nav.Item>
                                    ))}
                                </Nav>
                                <div className="col-12 my-1 d-md-inline d-none d-overflow-auto"
                                     style={{maxHeight: '30%', overflow: 'auto'}}>
                                    <Dice/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Navbar>
        </Nav>
    );
}

export default SideBar;