import {Nav} from "react-bootstrap";
import {useState} from "react";

export interface INavTab {
    name: string;
    label: string;
}

class NavTab implements INavTab {
    name: string;
    label: string;

    constructor(name: string, label: string) {
        this.name = name;
        this.label = label;
    }
}
export default NavTab;

// const navItems = [
//     new NavTab('home', 'header.home'),
//     new NavTab('intro', 'header.intro'),
//     new NavTab('projet', 'header.project'),
//     new NavTab('progres', 'header.progress'),
//     new NavTab('contact', 'header.contact')
// ]
// const [isHover, setIsHover] = useState(false);
//
// <Nav className="justify-content-between ">
//     {
//         navItems.map((navItem: INavTab, index: number) => (
//             <Nav.Item key={index}>
//             <Nav.Link className={`px-3 ${isHover?'active':''}`} href={`/portfolio#${navItem.name}`} onClick={() => navigate(`/portfolio#${navItem.name}`)}>
// {t(navItem.label)}
// </Nav.Link>
// </Nav.Item>
// ))
// }
// </Nav>