var MyGame = MyGame || {}

MyGame.MenuState = {
  init: function (fade) {
    this.fade = fade ? fade : false
    this.game.stage.backgroundColor = '#222'
  },

  create: function () {
    if (this.fade) this.camera.flash(0x000000)

    var style = { fill: '#fff' }
    var text = this.game.add.text(this.game.world.centerX, 20, 'MenuState', style)
    text.anchor.setTo(0.5)

    var startLabel = this.game.add.text(this.game.width / 2, this.game.height - 100, 'tab to start', {
      font: '20px Arial',
      fill: '#ffffff'
    })
    startLabel.anchor.setTo(0.5, 0.5)
    this.game.input.onDown.add(this.startGame, this)
  },

  startGame: function () {
    this.camera.fade(0x000000)
    this.camera.onFadeComplete.add(function () {
      this.game.state.start('Game')
    }, this)
  }
}
