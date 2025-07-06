// Pyrite + Centrifuge Fluid separation mod

if (enabledMods.includes("mods/chem.js")) {
  // Define molten_pyrite if it doesn't already exist
  if (!elements.molten_pyrite) {
    elements.molten_pyrite = {
      color: "#cc9900",
      behavior: behaviors.MOLTEN,
      reactions: [],
      temp: 1500,
      state: "liquid",
      category: "liquids",
      density: 7800,
      conduct: 0.5,
      tempHigh: 3000,
      stateHigh: "gas",
      viscosity: 100,
      hidden: false
    };
  }

  // Define centrifuge_fluid properly
  elements.centrifuge_fluid = {
    color: "#00ffff",
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    density: 1100,
    viscosity: 80,
    conduct: 0.05,
    desc: "A reactive liquid used to separate molten pyrite.",
    hidden: false
  };

  // Add reaction to molten_pyrite
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

  console.log("✅ Pyrite + Centrifuge Fluid reaction loaded successfully!");
} else {
  alert("⚠️ This mod requires chem.js! Please enable it in the Mods menu.");
}
