// Pyrite centrifuge separation mod

if (enabledMods.includes("mods/chem.js")) {
  // Ensure molten_pyrite exists
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

  // Add the centrifuge_machine if it doesn't exist
  if (!elements.centrifuge_machine) {
    elements.centrifuge_machine = {
      color: ["#888888", "#777777", "#999999"],
      behavior: behaviors.SOLID,
      category: "machines",
      state: "solid",
      temp: 20,
      conduct: 1,
    };
  }

  // Define reaction between molten_pyrite and centrifuge_machine
  elements.molten_pyrite.reactions.push({
    elem1: "molten_pyrite",
    elem2: "centrifuge_machine",
    chance: 1.0,
    func: function(px, py, thisElem, otherElem) {
      // Remove molten_pyrite
      deletePixel(px, py);
      // Create molten_iron and sulfur nearby
      tryCreatePixel("molten_iron", px + 1, py);
      tryCreatePixel("sulfur", px - 1, py);
    }
  });

  console.log("✅ Pyrite centrifuge separation mod loaded!");
} else {
  alert("⚠️ This mod requires chem.js! Please enable it under Mods.");
}
