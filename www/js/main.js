var MyGame = MyGame || {}

MyGame.game = new Phaser.Game(640, 360, Phaser.AUTO)

MyGame.game.state.add('Boot', MyGame.BootState)
MyGame.game.state.add('Load', MyGame.LoadState)
MyGame.game.state.add('Menu', MyGame.MenuState)
MyGame.game.state.add('Game', MyGame.GameState)

MyGame.game.state.start('Boot')
