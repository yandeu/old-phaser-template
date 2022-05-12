var MyGame = MyGame || {}

MyGame.LoadState = {
  preload: function () {
    this.prepareLoading()
  },

  init: function () {},

  create: function () {
    this.game.time.events.add(
      Phaser.Timer.SECOND * 3,
      function () {
        this.state.start('Menu')
      },
      this
    )
  },

  loadFiles: function () {
    // place here all the files you want to load
    this.game.load.audio('backgroundMusic', ['assets/audio/backgroundMusic.mp3', 'assets/audio/backgroundMusic.ogg'])
    this.game.load.image('medal', 'assets/images/medal.png')
    this.game.load.image('pixel', 'assets/images/pixel.png')
    this.game.load.spritesheet('bird', 'assets/images/bird.png', 50, 40, 4)
  },

  loadStart: function () {
    this.text.setText('Loading ...')
  },

  fileComplete: function (progress, cacheKey, success, totalLoaded, totalFiles) {
    this.text.setText('progress: ' + progress + '% - ' + totalLoaded + ' out of ' + totalFiles)
  },

  loadComplete: function () {
    this.text.setText('loading completed')
  },

  prepareLoading: function () {
    var style = { fill: '#fff' }
    var text = this.game.add.text(this.game.world.centerX, 20, 'LoadState', style)
    text.anchor.setTo(0.5)

    var colors = ['#3498db', '#55bf7e', '#EF4C46', '#000000']
    this.game.stage.backgroundColor = colors[this.game.rnd.integerInRange(0, colors.length - 1)]

    this.text = this.game.add.text(this.game.width / 2, this.game.height / 2 + 50, 'Loading ...', {
      font: '20px Arial',
      fill: '#ffffff'
    })
    this.text.anchor.setTo(0.5)

    this.game.load.onLoadStart.add(this.loadStart, this)
    this.game.load.onFileComplete.add(this.fileComplete, this)
    this.game.load.onLoadComplete.add(this.loadComplete, this)

    var loadingScreen = this.game.add.text(this.game.width / 2, this.game.height / 2 - 70, 'Presented by\n...', {
      font: '30px Arial',
      fill: '#ffffff',
      align: 'center'
    })
    loadingScreen.anchor.setTo(0.5, 0.5)

    this.loadFiles()
  }
}
