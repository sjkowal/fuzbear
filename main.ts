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
    //% blockIdentity=images._tile
    export const tile1 = img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f 1 f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f 1 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f 1 f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`
}
scene.onHitWall(SpriteKind.Player, function (sprite) {
    if (mySprite.isHittingTile(CollisionDirection.Right) || mySprite.isHittingTile(CollisionDirection.Left)) {
        vx = vx * -1
        mySprite.vx = vx
        scene.cameraShake(4, 500)
        mySprite.startEffect(effects.fire, 500)
        music.pewPew.play()
    } else if (mySprite.isHittingTile(CollisionDirection.Bottom) || mySprite.isHittingTile(CollisionDirection.Top)) {
        vy = vy * -1
        mySprite.vy = vy
        scene.cameraShake(4, 500)
        mySprite.startEffect(effects.fire, 500)
        music.pewPew.play()
    }
})
let vy = 0
let vx = 0
let mySprite: Sprite = null
scene.setBackgroundColor(7)
tiles.setTilemap(tiles.createTilemap(
            hex`100010000b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b`,
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
            [myTiles.tile0,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundCenter,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundNorthWest1,myTiles.tile1],
            TileScale.Sixteen
        ))
mySprite = sprites.create(img`
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
`, SpriteKind.Player)
mySprite.setPosition(50, 50)
vx = 35
vy = 35
mySprite.setVelocity(vx, vy)
scene.cameraFollowSprite(mySprite)
animation.runImageAnimation(
mySprite,
[img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 8 . . . . . . . . . 
. . . . . . . 8 . . . . . . . . 
. . . . . . . 8 8 . . . . . . . 
. . . . . . 8 9 8 8 . . . . . . 
. . . . . . 8 8 9 8 . . . . . . 
. . . . . . . 8 8 . . . . . . . 
. . . . . . . . 8 . . . . . . . 
. . . . . . . . . 8 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 8 . . . . . . . . . . . 
. . . . 8 . . 8 8 . . . . . . . 
. . . . . 8 8 8 9 8 . . . . . . 
. . . . . . 8 9 8 8 8 . . . . . 
. . . . . . . 8 8 . . 8 . . . . 
. . . . . . . . . . . 8 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 8 8 . . 8 . . . . 
. . . . . . 8 9 8 8 8 . . . . . 
. . . . . 8 8 8 9 8 . . . . . . 
. . . . 8 . . 8 8 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . 8 8 . . . . . 
. . . . . . . . 8 . . . . . . . 
. . . . . . . 8 8 . . . . . . . 
. . . . . . 8 8 9 8 . . . . . . 
. . . . . . 8 9 8 8 . . . . . . 
. . . . . . . 8 8 . . . . . . . 
. . . . . . . 8 . . . . . . . . 
. . . . . 8 8 . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`],
100,
true
)
