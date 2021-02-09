namespace SpriteKind {
    export const Meteor = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Meteor, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy(effects.disintegrate, 500)
    scene.cameraShake(4, 500)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . 9 9 9 9 . . . 
        . . . . . 9 9 9 9 9 5 9 9 . . . 
        . 9 9 9 9 9 9 9 5 5 9 9 9 . . . 
        . . . . . . 9 9 9 9 9 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, Arfbot, 50, 0)
})
sprites.onOverlap(SpriteKind.Meteor, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeScoreBy(5)
    sprite.destroy()
    info.startCountdown(15)
})
info.onCountdownEnd(function () {
    game.over(true)
})
let mySprite: Sprite = null
let projectile: Sprite = null
let Arfbot: Sprite = null
effects.starField.startScreenEffect()
Arfbot = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . 9 9 d . d d d d . d 9 9 . . 
    . . 9 9 d d d d d d d d 9 9 . . 
    . . 9 9 8 8 8 8 8 8 8 8 9 9 . . 
    . . d 8 8 8 8 8 8 8 8 8 8 d . . 
    . . d 8 8 9 8 8 8 8 9 8 8 d . . 
    . . d 8 8 9 9 8 8 9 9 8 8 d . . 
    . . d 8 8 8 8 8 8 8 8 8 8 d . . 
    . . d 8 8 9 8 8 8 8 9 8 8 d . . 
    . . d 8 8 8 9 9 9 9 8 8 8 d . . 
    . . d d 8 8 8 8 8 8 8 8 d d . . 
    . . d d d 8 8 8 8 8 8 d d d . . 
    . . . d d d d d d d d d d . . . 
    . . . b d d d d d d d d b . . . 
    . . b b b b b b b b b b b b . . 
    . . . . b b b b b b b b . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Arfbot)
Arfbot.setStayInScreen(true)
info.setLife(5)
game.onUpdateInterval(1000, function () {
    mySprite = sprites.create(img`
        . . . . . . . . . b b b b . . . 
        . . . . . . b b b d d d d b . . 
        . . . . . . b d d d . d d b . . 
        . . . . b b d d d d d b b d . . 
        . . . . b d . . d d d b b d b . 
        . . . . c d d d d d b b . b c . 
        . . . b c c b b b b d d b c c . 
        . . b b c c c b d d b c c c c . 
        . b b d d d . b b b b b . c c c 
        . c d d d d . d b d b c . c b c 
        . c b d d d b b d b c c c b b c 
        c b . . c c b d d b b b b b c c 
        c c b b b d d b c c b b b . c c 
        c c c c c . c c c b b b b c c . 
        . . c c c . b b b b . b c c . . 
        . . . . c c c c c c c c . . . . 
        `, SpriteKind.Meteor)
    mySprite.x = scene.screenWidth()
    mySprite.vx = -20
    mySprite.y = randint(10, scene.screenHeight() - 10)
})
