function conversion(color) {
    if(color.charAt(0) === "(" || color.indexOf(',') > -1) {
        return rgbToHex(color);
    } else if (color.length >= 2 && color.length <= 7) {
        return hexToRGB(color);    
    } else {
        return false;
    }
}

function hexToRGB(hexColor) {
    if (hexColor.charAt(0) === "#") {
        hexColor = hexColor.substr(1);
    }
    if (hexColor.length < 2 || hexColor.length > 6) {
        return false;
    }

    let r, g, b;

    if (hexColor.length === 6) {
        r = parseInt(hexColor[0].toString() + hexColor[1].toString(), 16);
        g = parseInt(hexColor[2].toString() + hexColor[3].toString(), 16);
        b = parseInt(hexColor[4].toString() + hexColor[5].toString(), 16);
    } else if (hexColor.length === 3) {
        r = parseInt(hexColor[0].toString() + hexColor[0].toString(), 16);
        g = parseInt(hexColor[1].toString() + hexColor[1].toString(), 16);
        b = parseInt(hexColor[2].toString() + hexColor[2].toString(), 16);
    } else if (hexColor.length === 2) {
        r = parseInt(hexColor[0].toString() + hexColor[1].toString(), 16);
        g = r;
        b = b;
    } else {
        return false;
    }
    console.log( `(${r}, ${g}, ${b})` );
    return `(${r}, ${g}, ${b})`;
}

function rgbToHex(rgbColor) {
    const openPar = rgbColor.indexOf('(');
    const closePar = rgbColor.indexOf(')');
    if (openPar > -1) {
        rgbColor = rgbColor.substr(openPar + 1);
    }
    if (closePar > -1) {
        rgbColor = rgbColor.substr(0, closePar - 1);
    }
    
    let hexColor, tempInt;
    let rgbArray = [], hexArray = [];
    let separator = "";

    /* Checking which separator to use on .split() */
    if (rgbColor.indexOf(",") > -1) {
        separator = ",";
    }
    if (rgbColor.indexOf(" ") > -1) {
        separator += " ";
    }
    
    /* Storing the color values into a variable */
    rgbArray = rgbColor.split(separator);

    /* Converting color values to base 16 */
    for (rgbString in rgbArray) {
        tempInt = Number(rgbArray[rgbString]);
        hexArray.push(tempInt.toString(16));
        /* Adding "0" in front of single-digit hex */
        if (hexArray[rgbString].length < 2) {
            hexArray[rgbString] = "0" + hexArray[rgbString];
        }
    }

    /* Concatenating final hex number */
    hexColor = `#${hexArray[0]}${hexArray[1]}${hexArray[2]}`;

    console.log(hexColor);
    return hexColor;
}

// conversion('(255, 5, 0)');
// conversion('#ff0500');

console.log("Copy paste the code below into the console and replace placeholder with the color code you want to convert.")
console.log("conversion('paste-color-code');")