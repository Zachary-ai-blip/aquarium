def on_on_chat():
    pass
player.on_chat("run", on_on_chat)

def on_item_interacted_trident():
    blocks.fill(GLASS, pos(5, 0, 10), pos(12, 7, 10), FillOperation.REPLACE)
    blocks.fill(WATER, pos(6, 1, -9), pos(11, 6, 90), FillOperation.REPLACE)
    for index in range(4):
        mobs.spawn(DOLPHIN, randpos(pos(6, 1, -9), pos(11, 6, 9)))
        mobs.spawn(PUFFERFISH, randpos(pos(6, 1, -9), pos(11, 6, 9)))
        blocks.place(TUBE_CORAL, randpos(pos(6, 1, -9), pos(11, 6, 9)))
        blocks.place(BRAIN_CORAL, randpos(pos(6, 1, -9), pos(11, 6, 9)))
player.on_item_interacted(TRIDENT, on_item_interacted_trident)
