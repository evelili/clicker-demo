var coins = 0;
var clickers = 0;

function coinClick(number) {
    coins = coins + number;
    document.getElementById("coins").innerHTML = coins;
}

function buyClicker() {
    var clickerCost = Math.floor(10 * Math.pow(1.1, clickers));
    if (coins >= clickerCost) {
        clickers = clickers + 1;
        coins = coins - clickerCost;
        document.getElementById("clickers").innerHTML = clickers;
        document.getElementById("coins").innerHTML = coins;
    };
    var nextCost = Math.floor(10* Math.pow(1.1, clickers));
    document.getElementById("clickerCost").innerHTML = nextCost;
}

window.setInterval(function() {
    coinClick(clickers);
}, 1000);