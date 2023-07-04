controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    personaje,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . 5 1 . . 1 5 . . . . . 
        . . . 1 . 8 8 8 8 8 8 . 1 . . . 
        . . . . 1 8 9 9 9 9 8 1 . . . . 
        . . . . . 8 9 9 9 9 8 . . . . . 
        . . . . . 8 9 9 9 9 8 . . . . . 
        . . . . . 8 9 9 9 9 8 . . . . . 
        . . . . . 8 8 8 8 8 8 . . . . . 
        . . . . . 8 8 8 8 8 8 . . . . . 
        . . . . . 8 9 9 9 9 8 . . . . . 
        . . . . . 8 9 9 9 9 8 . . . . . 
        . . . 1 . 8 9 9 9 9 8 . 1 . . . 
        . . . . 1 8 9 9 9 9 8 1 . . . . 
        . . . . . 8 8 8 8 8 8 . . . . . 
        . . . . . 2 1 . . 1 2 . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . 5 1 . . 1 5 . . . . . 
        . . . . . 8 8 8 8 8 8 . . . . . 
        . . . 1 1 8 9 9 9 9 8 1 1 . . . 
        . . . . . 8 9 9 9 9 8 . . . . . 
        . . . . . 8 9 9 9 9 8 . . . . . 
        . . . . . 8 9 9 9 9 8 . . . . . 
        . . . . . 8 8 8 8 8 8 . . . . . 
        . . . . . 8 8 8 8 8 8 . . . . . 
        . . . . . 8 9 9 9 9 8 . . . . . 
        . . . . . 8 9 9 9 9 8 . . . . . 
        . . . . . 8 9 9 9 9 8 . . . . . 
        . . . 1 1 8 9 9 9 9 8 1 1 . . . 
        . . . . . 8 8 8 8 8 8 . . . . . 
        . . . . . 2 1 . . 1 2 . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    false
    )
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    personaje,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . 5 1 . . 1 5 . . . . . 
        . . . 1 . 8 8 8 8 8 8 . 1 . . . 
        . . . . 1 8 9 9 9 9 8 1 . . . . 
        . . . . . 8 9 9 9 9 8 . . . . . 
        . . . . . 8 9 9 9 9 8 . . . . . 
        . . . . . 8 9 9 9 9 8 . . . . . 
        . . . . . 8 8 8 8 8 8 . . . . . 
        . . . . . 8 8 8 8 8 8 . . . . . 
        . . . . . 8 9 9 9 9 8 . . . . . 
        . . . . . 8 9 9 9 9 8 . . . . . 
        . . . 1 . 8 9 9 9 9 8 . 1 . . . 
        . . . . 1 8 9 9 9 9 8 1 . . . . 
        . . . . . 8 8 8 8 8 8 . . . . . 
        . . . . . 2 1 . . 1 2 . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . 5 1 . . 1 5 . . . . . 
        . . . . . 8 8 8 8 8 8 . . . . . 
        . . . 1 1 8 9 9 9 9 8 1 1 . . . 
        . . . . . 8 9 9 9 9 8 . . . . . 
        . . . . . 8 9 9 9 9 8 . . . . . 
        . . . . . 8 9 9 9 9 8 . . . . . 
        . . . . . 8 8 8 8 8 8 . . . . . 
        . . . . . 8 8 8 8 8 8 . . . . . 
        . . . . . 8 9 9 9 9 8 . . . . . 
        . . . . . 8 9 9 9 9 8 . . . . . 
        . . . . . 8 9 9 9 9 8 . . . . . 
        . . . 1 1 8 9 9 9 9 8 1 1 . . . 
        . . . . . 8 8 8 8 8 8 . . . . . 
        . . . . . 2 1 . . 1 2 . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    false
    )
})
info.onCountdownEnd(function () {
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprites.destroy(personaje)
    info.changeLifeBy(-1)
    music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
})
info.onLifeZero(function () {
    game.gameOver(false)
})
let projectile: Sprite = null
let personaje: Sprite = null
personaje = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . 5 1 . . 1 5 . . . . . 
    . . . . . 8 8 8 8 8 8 . . . . . 
    . . . . . 8 9 9 9 9 8 . . . . . 
    . . . . . 8 9 9 9 9 8 . . . . . 
    . . . . . 8 9 9 9 9 8 . . . . . 
    . . . . . 8 9 9 9 9 8 . . . . . 
    . . . . . 8 8 8 8 8 8 . . . . . 
    . . . . . 8 8 8 8 8 8 . . . . . 
    . . . . . 8 9 9 9 9 8 . . . . . 
    . . . . . 8 9 9 9 9 8 . . . . . 
    . . . . . 8 9 9 9 9 8 . . . . . 
    . . . . . 8 9 9 9 9 8 . . . . . 
    . . . . . 8 8 8 8 8 8 . . . . . 
    . . . . . 2 1 . . 1 2 . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(personaje)
scene.setBackgroundImage(img`
    cccccccccccccccccccccc555555ffffffffffffffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffffffffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffffffffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffffffffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffffffffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffffffffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffffffffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffffffffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffffffffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffffffffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffffffffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffffffffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffffffffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffffffffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffffffffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffffffffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffffffffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffffffffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffffffffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffffffffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffffffffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffffffffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffffffffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffffffffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffffffffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffffffffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffffffffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffffffffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffffffffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffffffffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffffffffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffffffffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffffffffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffffffffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffffffffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffffffffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffff1fffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffffffffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffff1fffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffffffffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffff1fffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffffffffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffff1fffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffffffffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffff1fffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffffffffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffff1fffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffffffffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffff1fffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffffffffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffff1fffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffffffffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffff1fffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffffffffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffff1fffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffffffffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffff1fffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffffffffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffff1fffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffffffffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffff1fffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffffffffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffff1fffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffffffffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffff1fffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffffffffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffff1fffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffffffffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffff1fffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffffffffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffff1fffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffffffffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffff1fffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffffffffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffff1fff1fff1fffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffffffffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555fffffff1ff1ff1ffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffffffffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffff1f1f1fffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffffffffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555fffffffff111ffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffffffffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffff1fffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffffffffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffffffffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffffffffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffffffffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffffffffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffffffffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffffffffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffffffffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffffffffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffffffffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffffffffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffffffffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffffffffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffffffffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffffffffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffffffffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffffffffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffffffffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffffffffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffffffffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffffffffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffffffffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffffffffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffffffffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffffffffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffffffffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffffffffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffffffffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffffffffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffffffffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffffffffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffffffffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffffffffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffffffffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffffffffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffffffffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffffffffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffffffffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffffffffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffffffffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffffffffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffffffffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffffffffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffffffffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffffffffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffffffffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffffffffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffffffffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffff1fffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffffffffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111fffffffffffff111ffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffffffffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffff1f1f1fffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffffffffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111fffffffffff1ff1ff1ffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffffffffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffff1fffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffffffffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffff1fffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffffffffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffff1fffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffffffffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffff1fffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffffffffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffff1fffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffffffffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffff1fffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffffffffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffff1fffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffffffffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffff1fffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffffffffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffff1fffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffffffffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffff1fffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffffffffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffff1fffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffffffffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffff1fffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffffffffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffff1fffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffffffffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffff1fffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffffffffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffff1fffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffffffffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffff1fffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffffffffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffff1fffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffffffffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffffffffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffffffffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffffffffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffffffffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffffffffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffffffffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffffffffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffffffffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffffffffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffffffffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffffffffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffffffffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffffffffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffffffffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffffffffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffffffffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffffffffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffffffffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffffffffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffffffffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffffffffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffffffffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffffffffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffffffffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffffffffffff55555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffffffffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffffffffff5555555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffffffffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffffffffff5555555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffffffffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffffffffff5555555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffffffffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffffffffff5555555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffffffffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffffffffff5555555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffffffffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111fffffffffffffffffffff555555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffffffffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111fffffffffffffffffffff555555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffffffffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111fffffffffffffffffffff555555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffffffffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111fffffffffffffffffffff555555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffffffffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111fffffffffffffffffffff555555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffffffffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111fffffffffffffffffffff555555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffffffffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111fffffffffffffffffffff555555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffffffffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111fffffffffffffffffffff555555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffffffffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111fffffffffffffffffffff555555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffffffffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffffffffff5555555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffffffffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffffffffff5555555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc555555ffffffffffffffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffffffffff5555555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc5555555fffffffffffffffffff11111fffffffffffffffffffff55555ffffffffffffffffffff11111ffffffffffffffffffff5555555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc5555555ffffffffffffffffff111111fffffffffffffffffffff55555ffffffffffffffffffff111111fffffffffffffffffff5555555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc5555555ffffffffffffffffff111111fffffffffffffffffffff55555ffffffffffffffffffff111111ffffffffffffffffffff555555ccccccccccccccccccccccccccccc
    cccccccccccccccccccccc5555555ffffffffffffffffff111111fffffffffffffffffffff55555ffffffffffffffffffff111111ffffffffffffffffffff555555ccccccccccccccccccccccccccccc
    `)
let projectile2 = sprites.createProjectileFromSide(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 2 . . . . . . . . 
    . . . . . . 2 5 2 . . . . . . . 
    . . . . . 2 5 5 2 . . . . . . . 
    . . . . 2 5 4 4 5 2 . . . . . . 
    . . . . . 2 5 5 4 2 . . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, 50, 50)
personaje.setStayInScreen(true)
info.setLife(1)
info.startCountdown(15)
game.onUpdateInterval(500, function () {
    projectile = sprites.createProjectileFromSide(img`
        . . . 2 . . . 
        . . 2 1 2 . . 
        . 2 1 1 1 2 . 
        2 1 1 1 1 1 2 
        . . . . . . . 
        . . . . . . . 
        . . . . . . . 
        `, randint(50, -50), randint(-50, 50))
})
