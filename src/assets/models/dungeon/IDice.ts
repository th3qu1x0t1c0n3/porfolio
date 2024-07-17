
export interface IDice {
    val: number,
    diceSize: number
}

export class DnDDice implements IDice {
    val: number;
    diceSize: number;

    constructor(diceSize: number) {
        this.diceSize = diceSize;
        this.val = Math.floor(Math.random() * this.diceSize) + 1;
    }
}