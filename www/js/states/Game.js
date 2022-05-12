var MyGame = MyGame || {}

MyGame.GameState = {
  init: function () {
    this.game.stage.backgroundColor = '#fff'
  },

  create: function () {
    // camera flash
    this.camera.flash(0x000000)

    // state text
    var text = this.game.add.text(this.game.world.centerX, 20, 'GameState')
    text.anchor.setTo(0.5)

    // medal
    this.medal = this.game.add.sprite(this.game.world.centerX, 0, 'medal')
    this.game.physics.enable(this.medal, Phaser.Physics.ARCADE)
    this.medal.body.collideWorldBounds = true
    this.medal.body.bounce.set(0.6)
    this.medal.body.gravity.set(0, 180)
    this.game.time.events.loop(Phaser.Timer.SECOND * 8, this.resetMedal, this)

    // emitter (for the bird)
    this.emitter = this.game.add.emitter(0, 0, 80)
    this.emitter.makeParticles('pixel')
    this.emitter.setYSpeed(-150, 150)
    this.emitter.setXSpeed(-150, 150)
    this.emitter.gravity = 200

    // bird
    this.bird = this.game.add.sprite(-50, this.game.world.centerY, 'bird')
    this.bird.anchor.setTo(0.5)
    this.bird.animations.add('fly', [0, 1, 0, 2], 8, true)
    this.bird.animations.play('fly')
    this.game.physics.enable(this.bird, Phaser.Physics.ARCADE)
    this.bird.body.velocity.setTo(100, 0)
    this.bird.inputEnabled = true
    this.bird.events.onInputDown.add(function () {
      this.emitter.x = this.bird.x
      this.emitter.y = this.bird.y
      this.emitter.start(true, 2500, null, 80)
    }, this)

    // sound
    this.sound = this.game.add.audio('backgroundMusic', 0.3)
    this.sound.play()

    // back to menu text
    var menuLabel = this.game.add.text(this.game.world.width - 5, this.game.world.height - 5, 'MENU')
    menuLabel.anchor.setTo(1, 1)
    menuLabel.inputEnabled = true
    menuLabel.events.onInputDown.add(function () {
      this.sound.stop()
      this.camera.fade(0x000000)
      this.camera.onFadeComplete.add(function () {
        this.state.start('Menu', true, false, true)
      }, this)
    }, this)
  },

  update: function () {
    // reset bird position
    if (this.bird.position.x > this.game.world.width + 20) {
      this.bird.position.x = -50
      console.log('reset bird position')
    }
  },

  // reset medal position
  resetMedal: function () {
    this.medal.position.y = 0
    console.log('reset medal position')
  }
}
