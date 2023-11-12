
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