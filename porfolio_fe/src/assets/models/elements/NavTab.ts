export interface INavTab {
    link: string;
    label: string;
}

class NavTab implements INavTab {
    link: string;
    label: string;

    constructor(link: string, label: string) {
        this.link = link;
        this.label = label;
    }
}
export default NavTab;
