
let hexNum = document.getElementById("hex");
let display = document.getElementById("btn-display");
let rgb = document.getElementById("btn-rgb");
let invert = document.getElementById("btn-invert");
let color = document.getElementById("color");
let colorText = document.getElementById("color-text");

display.addEventListener('click', () => {
    if (isHexColor(hexNum.value)) {
        let inhex = invertHEX(hexNum.value);
        colorText.innerHTML = `#${hexNum.value}`;
        colorText.style.color = `#${inhex}`;
        color.style.backgroundColor = `#${hexNum.value}`;
    } else {
        wrongHEX(); 
    }
});

invert.addEventListener('click', () => {
    if (isHexColor(hexNum.value)) {
        let ihex = invertHEX(hexNum.value);
        colorText.innerHTML = `#${ihex}`;
        color.style.backgroundColor = `#${ihex}`;
        colorText.style.color = `#${hexNum.value}`;
    } else {
        wrongHEX();
    }
});

rgb.addEventListener('click', () => {
    if (isHexColor(hexNum.value)) {
        let rgbNumber = convert2RGB(hexNum.value);
        let invHEX = invertHEX(hexNum.value);
        colorText.innerHTML = `rgb(${rgbNumber.join(',')})`;
        colorText.style.color = `#${invHEX}`;
        color.style.backgroundColor = `#${hexNum.value}`;
    } else {
        wrongHEX();
    }

});


// HEX to RGB converter

const convert2RGB = (h) => {
    const rgb = [];
    for (i = 0; i < 6; i+=2) {
        rgb.push(parseInt(h[i].concat(h[i+1]), 16));     
    }
    return rgb;
};

//invert HEX color

const invertHEX = (hex) => {
    let rgb = convert2RGB(hex);
    let r = (255 - rgb[0]).toString(16);
        g = (255 - rgb[1]).toString(16);
        b = (255 - rgb[2]).toString(16);
    
    return padZero(r) + padZero(g) + padZero(b);
};

//PAD with Zero

const padZero = (str) => {
    if(str.length < 2) {
        str = '0' + str;
    }
    return str;
}

//WRONG NUMBER

const wrongHEX = () => {
    colorText.style.color = "#FFFFFF";
    colorText.innerHTML = "Not a valid number";
    color.style.backgroundColor = "#000000";
    // alert("Not a valid number. Make sure it has 6 characters");
};

//IS HEX VALID

isHexColor = hex => typeof hex === 'string' && hex.length === 6 && !isNaN(Number('0x' + hex));