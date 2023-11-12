import {useTranslation} from "react-i18next";
import NavTab, {INavTab} from "../../../assets/models/elements/NavTab";
import {Button, Nav, Navbar} from "react-bootstrap";
import {useState} from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";


function Authentication(){
    const {t} = useTranslation();
    const [tab, setTab] = useState('signIn');

    const tabs = [
        new NavTab('signIn', 'pages.home.signIn'),
        new NavTab('signUp', 'pages.home.signUp')
    ]

    return (
        <div className={"container"}>
            <div className={"mt-3"}>
                <Navbar className="mx-auto btn-group btn-group-lg bg-dark">
                        <Nav className="navbar-nav row">
                            {
                                tabs.map((tab: INavTab, index: number) => (
                                    <Nav.Item className={"col-6"} key={index}>
                                        <Button className={`mx-2 mt-3`}
                                                  onClick={() => setTab(tab.link)}>
                                            {t(tab.label)}
                                        </Button>
                                    </Nav.Item>
                                ))
                            }
                        </Nav>
                </Navbar>

                {tab === 'signIn' && <SignIn />}
                {tab === 'signUp' && <SignUp />}

            </div>
        </div>
    )
}

export default Authentication;