// pyrite_centrifuge_mod.js

elements.methanol = {
    color: "#c9c5b1",
    behavior: behaviors.LIQUID,
    reactions: {
        "virus": { "elem2":null },
        "plague": { "elem2":null },
        "head": { "elem2":"rotten_meat", "chance": 0.8 },
        "body": { "elem2":"rotten_meat", "chance": 0.8 },
    },
    viscosity: 0.56,
    //tempHigh: 64.7,
    burn: 100,
    burnTime: 2,
    fireColor: "#b2c5d1",
    category: "liquids",
    state: "liquid",
    density: 792,
    stain: -0.25,
}


