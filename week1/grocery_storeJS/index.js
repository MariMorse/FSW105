var shopper = {
    name: "Mari",
    wallet: 75,
    hasMoney: true,
    nameMoney: function() {
        return this.name + " " + this.wallet;
    },
    shoppingCart: ["wine", "monster", "ramen noodles", "case of water"]
}
console.log(shopper.nameMoney());
shopper.nameMoney.call(); //Will return Mari 75