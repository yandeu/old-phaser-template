var MyGame = MyGame || {}

MyGame.BootState = {
  init: function () {
    this.game.stage.backgroundColor = '#fff'

    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL

    this.scale.pageAlignHorizontally = true
    this.scale.pageAlignVertically = true

    this.game.renderer.renderSession.roundPixels = true
  },
  preload: function () {},
  create: function () {
    this.state.start('Load')
  }
}
