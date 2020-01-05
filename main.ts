namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `
}
scene.onHitWall(SpriteKind.Player, function (sprite) {
    if (mySprite.isHittingTile(CollisionDirection.Right) || mySprite.isHittingTile(CollisionDirection.Left)) {
        vx = vx * -1
        mySprite.vx = vx
        scene.cameraShake(4, 500)
        mySprite.startEffect(effects.fire, 500)
    } else if (mySprite.isHittingTile(CollisionDirection.Bottom) || mySprite.isHittingTile(CollisionDirection.Top)) {
        vy = vy * -1
        mySprite.vy = vy
        scene.cameraShake(4, 500)
        mySprite.startEffect(effects.fire, 500)
    }
})
let vy = 0
let vx = 0
let mySprite: Sprite = null
scene.setBackgroundColor(7)
tiles.setTilemap(tiles.createTilemap(
            hex`1000100005050505050505050505050505050505050104040404040404040404040605050502050505050505050505050507050505020505050505050505050505070505050205050505050505050505050705050502050505050505050505050507050505020505050505050505050505070505050205050505050505050505050705050502050505050505050505050507050505020505050505050505050505070505050205050505050505050505050705050502050505050505050505050507050505020505050505050505050505070505050205050505050505050505050705050503090909090909090909090908050505050505050505050505050505050505`,
            img`
                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
                2 . . . . . . . . . . . . . 2 .
                2 . . . . . . . . . . . . . 2 .
                2 . . . . . . . . . . . . . 2 .
                2 . . . . . . . . . . . . . 2 .
                2 . . . . . . . . . . . . . 2 .
                2 . . . . . . . . . . . . . 2 .
                2 . . . . . . . . . . . . . 2 .
                2 . . . . . . . . . . . . . 2 .
                2 . . . . . . . . . . . . . 2 .
                2 . . . . . . . . . . . . . 2 .
                2 . . . . . . . . . . . . . 2 .
                2 . . . . . . . . . . . . . 2 .
                2 . . . . . . . . . . . . . 2 .
                2 . . . . . . . . . . . . . 2 .
                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
            `,
            [myTiles.tile0,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundCenter,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundNorthWest1],
            TileScale.Sixteen
        ))
let spriteImage1 = img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . 6 6 8 8 6 6 . . . . .
    . . 8 . 6 6 8 8 8 8 6 6 . 8 . .
    . . 8 8 6 . 8 1 1 8 . 6 8 8 . .
    . . . 8 8 . . d d . . 8 8 . . .
    . . . . 8 8 . . . . 8 8 . . . .
    . . . . . 8 8 8 8 8 8 . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`
mySprite = sprites.create(spriteImage1, SpriteKind.Player)
mySprite.setPosition(50, 50)
vx = 35
vy = 35
mySprite.setVelocity(vx, vy)
scene.cameraFollowSprite(mySprite)
