// Pyrite + Centrifuge Fluid separation mod

if (enabledMods.includes("mods/chem.js")) {
  // Create molten_pyrite if it doesn't already exist
  if (!elements.molten_pyrite) {
    elements.molten_pyrite = {
      color: "#cc9900",
      behavior: behaviors.MOLTEN,
      reactions: [],
      temp: 1500,
      state: "liquid",
      category: "liquids",
      density: 7800,
      hidden: false,
      conduct: 0.5,
      tempHigh: 3000,
      stateHigh: "gas",
    };
  }

  // Create the new centrifuge_fluid element
  elements.centrifuge_fluid = {
    color: "#00ffff",
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    temp: 25,
    density: 1100,
    conduct: 0.1,
    viscosity: 100,
    desc: "Special fluid used to separate molten pyrite into molten iron and sulfur.",
  };

  // Add reaction: molten_pyrite + centrifuge_fluid → molten_iron + sulfur
  elements.molten_pyrite.reactions.push({
    elem1: "molten_pyrite",
    elem2: "centrifuge_fluid",
    chance: 1.0,
    func: function(px, py, thisElem, otherElem) {
      deletePixel(px, py);
      tryCreatePixel("molten_iron", px + 1, py);
      tryCreatePixel("sulfur", px - 1, py);
    }
  });

  console.log("✅ Pyrite + Centrifuge Fluid separation mod loaded!");
} else {
  alert("⚠️ This mod requires chem.js! Please enable it under Mods.");
}

