(function (window) {
    GreenCoin = function () {
        this.initialize();
    }
    GreenCoin._SpriteSheet = new createjs.SpriteSheet({ framerate: 12, images:["coins.png"], frames:[
        [0, 0, 80, 78, 0, 38.4, 38.5],
        [82, 0, 80, 78, 0, 38.4, 38.5],
        [156, 0, 80, 78, 0, 38.4, 38.5],
        [234, 0, 80, 78, 0, 38.4, 38.5],
        [312, 0, 80, 78, 0, 38.4, 38.5],
        [390, 0, 80, 78, 0, 38.4, 38.5],
        [468, 0, 80, 78, 0, 38.4, 38.5],
        [546, 0, 80, 78, 0, 38.4, 38.5]
    ]});
    var GreenCoin_p = GreenCoin.prototype = new createjs.Sprite();
    GreenCoin_p.Sprite_initialize = GreenCoin_p.initialize;
    GreenCoin_p.initialize = function () {
        this.Sprite_initialize(GreenCoin._SpriteSheet);
        this.paused = false;
    }
    window.GreenCoin = GreenCoin;

}(window));

