// pyrite_centrifuge_mod.js

elements.centrifuge_fluid = {
    color: "#00ffff",
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    density: 1200,
    viscosity: 75,
    conduct: 0.05,
    desc: "A reactive fluid that can extract iron and sulfur from molten pyrite.",
    hidden: false
};

elements.molten_pyrite = {
    color: "#cc9900",
    behavior: behaviors.MOLTEN,
    temp: 1600,
    state: "liquid",
    category: "liquids",
    density: 7800,
    viscosity: 150,
    conduct: 0.4,
    tempHigh: 3000,
    stateHigh: "gas",
    desc: "Molten form of pyrite (FeS₂). Can be separated in a centrifuge.",
    reactions: {
        "centrifuge_fluid": {
            elem1: null, // molten_pyrite disappears
            func: function(px, py, thisElem, otherElem) {
                deletePixel(px, py);
                tryCreatePixel("molten_iron", px + 1, py);
                tryCreatePixel("sulfur", px - 1, py);
            }
        }
    }
};


