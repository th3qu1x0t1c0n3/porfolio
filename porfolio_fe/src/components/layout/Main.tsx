import {Route, Routes} from "react-router-dom";
import Portfolio from "../home/Portfolio";
import PageNotFound from "../PageNotFound";
import ArchitectCloud from "../architect/ArchitectCloud";
import References from "../architect/References";
import MiniGame from "../games/MiniGame";
import Dungeon from "../dungeon/Dungeon";
import {useState} from "react";
import {IUser} from "../../assets/models/user";

function Main() {
    const [user, setUser] = useState<IUser | null>(null);

    return (
        <main className='App-main min-vh-100 bg-light mx-auto'>
            <Routes>
                <Route path="/" element={<Portfolio/>}/>
                <Route path="/portfolio" element={<Portfolio/>}/>
                <Route path="/architectCloud" element={<ArchitectCloud/>}/>
                <Route path="/architectCloud/references" element={<References/>}/>

                <Route path="/MiniGame" element={<MiniGame/>}/>

                <Route path="/dungeon" element={<Dungeon/>}/>

                <Route path="*" element={<PageNotFound/>}/>
            </Routes>
        </main>
    )
}

export default Main;
