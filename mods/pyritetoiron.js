// Pyrite smelting mod for Sandboxels

if (enabledMods.includes("mods/chem.js")) {
  elements.pyrite.reactions ??= [];

  elements.pyrite.reactions.push(
    {
      // When exposed to fire or lava, there's a chance to convert to iron
      "elem1": "pyrite",
      "elem2": "fire",
      "chance": 0.5,
      "func": function(px, py, thisElem, otherElem) {
        changePixel(px, py, "iron");
        // Optional: release sulfur as byproduct
        if (Math.random() < 0.5) {
          tryCreatePixel("sulfur", px+1, py);
        }
      }
    },
    {
      // Also allow lava to smelt it
      "elem1": "pyrite",
      "elem2": "lava",
      "chance": 1.0,
      "func": function(px, py, thisElem, otherElem) {
        changePixel(px, py, "iron");
        if (Math.random() < 0.5) {
          tryCreatePixel("sulfur", px-1, py);
        }
      }
    }
  );

  console.log("✅ Pyrite smelting mod loaded!");
} else {
  alert("⚠️ This mod requires chem.js! Please enable it under Mods.");
}
