import {Route, Routes} from "react-router-dom";
import Home from "../home/Home";
import PageNotFound from "../PageNotFound";
import ArchitectCloud from "../architect/ArchitectCloud";
import References from "../architect/References";
import MiniGame from "../games/MiniGame";
import Dungeon from "../dungeon/Dungeon";
import {Auth} from "googleapis";
import Authentication from "../home/Auth/Authentication";


function Main() {

    return (
        <main className='App-main min-vh-100 bg-light mx-auto'>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/portfolio" element={<Home/>}/>
                <Route path="/portfolio/authentication" element={<Authentication />}/>
                <Route path="/architectCloud" element={<ArchitectCloud/>}/>
                <Route path="/architectCloud/references" element={<References/>}/>

                <Route path="/MiniGame" element={<MiniGame/>}/>

                <Route path="/Dungeon" element={<Dungeon/>}/>

                <Route path="*" element={<PageNotFound/>}/>
            </Routes>
        </main>
    )
}

export default Main;