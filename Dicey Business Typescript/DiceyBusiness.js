var generateDieBtn = document.getElementById("generate-dice-btn"), rollDiceBtn = document.getElementById("roll-dice-btn"), diceContainer = document.getElementById("dice-container"), sumDiceBtn = document.getElementById("sum-dice-btn");
var diceArr = [];
generateDieBtn.addEventListener("click", function () { return new Die(); });
rollDiceBtn.addEventListener("click", function () { return diceArr.forEach(function (die) { return die.roll(); }); });
sumDiceBtn.addEventListener("click", function () {
    var sum = 0;
    diceArr.forEach(function (die) { return sum += die.value; });
    alert(sum);
});
var Die = /** @class */ (function () {
    function Die() {
        var _this = this;
        this.div = document.createElement("div");
        this.div.className = "die";
        this.div.innerHTML = this.value;
        this.div.addEventListener("click", function () { return _this.roll(); });
        this.div.addEventListener("dblclick", function () {
            _this.div.remove();
            var diceIndex = diceArr.indexOf(_this);
            diceArr.splice(diceIndex, 1);
        });
        this.roll();
        diceContainer.appendChild(this.div);
        diceArr.push(this);
    }
    Die.prototype.roll = function () {
        this.value = Math.floor(Math.random() * 6) + 1;
        this.div.innerHTML = this.value;
    };
    return Die;
}());
