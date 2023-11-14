import Header from "./header/Header";
import SideBar from "./side/SideBar";
import {useState} from "react";
import Character from "./personnage/Character";
import Store from "./Store";

function Dungeon() {
    const [tab, setTab] = useState<string>('character')

    return (
        <div id={"acceuil"} className={"bg-dark"}>
            <nav className="navbar navbar-expand-md navbar-light">
                <Header/>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <div className="container-fluid">
                        <div className="row">
                            <SideBar setTab={setTab} tab={tab}/>
                        </div>
                    </div>
                </div>
            </nav>

            <section className="container-fluid g-0">
                <div className="col-xl-9 col-lg-8 col-md-8 ms-auto g-0">
                    <div className="row my-md-2 my-4"></div>
                    {tab === 'character' && <Character />}
                    {tab === 'store' && <Store />}
                    {tab === 'compendium' && <h1>Compendium</h1>}
                    {tab === 'inventory' && <h1>Inventory</h1>}
                    {tab === 'map' && <h1>Map</h1>}
                    {tab === 'administration' && <h1>Administration</h1>}
                </div>

            </section>
            {/*    TODO: Bottom bar*/}
        </div>
    )
}

export default Dungeon;