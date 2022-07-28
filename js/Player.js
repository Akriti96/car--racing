class Player {
  constructor() {
    this.name = null
    this.positionX = 0
    this.positionY = 0
    this.index = 0
  }

  addPlayers() {
    var node = "players/player" + this.index
    if (this.index === 1) {
      this.positionX = width / 2 - 100
    }
    else {
      this.positionX = width / 2 + 100
    }

    database.ref(node).set({
      name: this.name,
      positionX: this.positionX,
      positionY: this.positionY,
      index: this.index
    })
  }


  getCount() {
    var countref = database.ref("playerCount")
    countref.on("value", (data) => {
      myplayerCount = data.val()
    })
  }

  updateCount(count) {
    database.ref("/").update({
      playerCount: count
    })
  }

  updatePlayerInfo(){
    var node="players/player" + this.index
    database.ref(node).update({
      name: this.name,
      positionX: this.positionX,
      positionY: this.positionY,
      index: this.index
    })
  }

  
  static getPlayerInfo() {
    var node = database.ref("players")
    node.on("value", (data) => {
      allPlayers = data.val()
    })

  }

  getDistance() {
    var playerDistanceR= database.ref("players/player" + this.index);
    playerDistanceR.on("value", data => {
      var distance = data.val();
      this.positionX = distance.positionX;
      this.positionY = distance.positionY;
    });
  }

}
