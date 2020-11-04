const generateDieBtn: HTMLElement = document.getElementById("generate-dice-btn"),
    rollDiceBtn: HTMLElement = document.getElementById("roll-dice-btn"),
    diceContainer: HTMLElement = document.getElementById("dice-container"),
    sumDiceBtn: HTMLElement = document.getElementById("sum-dice-btn");
let diceArr: any[] = [];

generateDieBtn.addEventListener("click", () => new Die());
rollDiceBtn.addEventListener("click", () => diceArr.forEach(die => die.roll()));
sumDiceBtn.addEventListener("click", () => {
    let sum: number = 0;
    diceArr.forEach(die => sum += die.value);
    alert(sum);
});

class Die {
    
    constructor() {
        this.div = document.createElement("div");
        this.div.className = "die";
        this.div.innerHTML = this.value;
        this.div.addEventListener("click", () => this.roll());
        this.div.addEventListener("dblclick", () => {
            this.div.remove();
            let diceIndex = diceArr.indexOf(this);
            diceArr.splice(diceIndex, 1);
        });
        this.roll();
        diceContainer.appendChild(this.div);
        diceArr.push(this);
    }

    roll(): any {
        this.value = Math.floor(Math.random() * 6) + 1;
        this.div.innerHTML = this.value;
    }
}
interface Die {
    div: HTMLElement
    value: any
}