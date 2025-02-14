player.onChat("run", function () {
	
})
player.onItemInteracted(TRIDENT, function () {
    blocks.fill(
    GLASS,
    pos(5, 0, 10),
    pos(12, 7, 10),
    FillOperation.Replace
    )
    blocks.fill(
    WATER,
    pos(6, 1, -9),
    pos(11, 6, 90),
    FillOperation.Replace
    )
    for (let index = 0; index < 4; index++) {
        mobs.spawn(DOLPHIN, randpos(
        pos(6, 1, -9),
        pos(11, 6, 9)
        ))
        mobs.spawn(PUFFERFISH, randpos(
        pos(6, 1, -9),
        pos(11, 6, 9)
        ))
        blocks.place(TUBE_CORAL, randpos(
        pos(6, 1, -9),
        pos(11, 6, 9)
        ))
        blocks.place(BRAIN_CORAL, randpos(
        pos(6, 1, -9),
        pos(11, 6, 9)
        ))
    }
})
