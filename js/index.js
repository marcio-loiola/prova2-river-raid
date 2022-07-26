let redGamePiece, blueGamePiece, yellowGamePiece;
let playerPiece;

function startGame() {
  redGamePiece = new component(75, 75, "red", 50, 10);
  yellowGamePiece = new component(75, 75, "yellow", 250, 60);
  blueGamePiece = new component(75, 75, "blue", 450, 110);
  playerPiece = new spriteComponent(75, 75, "green", 50, 10);
}

const mySpritePlayer = {
  img: document.createElement("img"),
  start: function () {
    this.img.src = "_assets/playerPiece.png";
    this.img.height = 75;
    this.img.width = 75;
    document.body.insertBefore(this.img, document.body.childNodes[0]);
    this.interval = setInterval(updateGameArea, 20);
  },
  clear: function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
};

function component(width, height, color, x, y) {
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  this.update = function () {
    ctx = myGameArea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  };
}

function spriteComponent(width, height, x, y) {
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  // this create element with img tag
  this.img = document.createElement("img");
  this.img.src = "_assets/playerPiece.png";
  this.img.height = 75;
  this.img.width = 75;
  document.body.insertBefore(this.img, document.body.childNodes[0]);
  // this update the player piece
  this.update = function () {
    ctx = myGameArea.context;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  };
}

function updateGameArea() {
  myGameArea.clear();
  redGamePiece.update();
  yellowGamePiece.update();
  blueGamePiece.update();
  playerPiece.update();
}
