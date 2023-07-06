let palette = document.getElementById("color-palette");
let numColorInput = document.getElementById("num-colors");
let genButton = document.getElementById("gen-pal");

// Generate original palette
genPalette();

// Generate palette when button clicked
genButton.addEventListener("click", genPalette);

// Generate color palette
function genPalette() {

    // Clear palette
    while (palette.firstChild) {
        palette.removeChild(palette.lastChild);
    }

    // Check if input is valid
    if (numColorInput.value !== "") {
        numColorInput.value <= 0 ? numColorInput.value = 1 : {};
        numColorInput.value > 6 ? numColorInput.value = 6 : {};
    }
    else {
        numColorInput.value = 1;
    }

    let numColors = numColorInput.value;

    // Set grid template columns
    palette.style.gridTemplateColumns = `repeat(${numColors}, 1fr)`;

    // Generate colors
    for (let i = 0; i < numColors; i++) {
        let color = document.createElement("div");
        color.classList.add("color");
        let randomColor = genHex();
        color.style.backgroundColor = '#' + randomColor;
        let colortext = document.createElement("h2");
        colortext.innerHTML = randomColor;
        colortext.style.color = determineTextColor(randomColor);
        color.appendChild(colortext);
        palette.appendChild(color);
    }
}

//Generate random hex color
function genHex() {

    // Hexadecimal characters
    let letters = "0123456789ABCDEF";
    let hex = "";

    // Generate 6 random characters
    for (let i = 0; i < 6; i++) {
        hex += letters[Math.floor(Math.random() * 16)];
    }

    return hex;
}

// Determine text color based on background color
function determineTextColor(hexCode) {

    // Convert hex to rgb
    let red = parseInt(hexCode.substring(0, 2), 16);
    let green = parseInt(hexCode.substring(2, 4), 16);
    let blue = parseInt(hexCode.substring(4, 6), 16);

    // Determine text color based on algorithm
    if ((red * 0.299 + green * 0.587 + blue * 0.114) > 186) {
        return "#000000";
    }
    else {
        return "#FFFFFF";
    }
}