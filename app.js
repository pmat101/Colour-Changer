function changer() {
    const str = "0123456789ABCDEF";
    const rand = [];
    rand[0] = "#";
    for (let i = 1; i <= 6; i++) {
        rand[i] = str[Math.floor(Math.random() * 16)];
    }
    const newColor = rand.join("");
    document.getElementById("canvas").style.backgroundColor = newColor;
}

document.getElementById("button").addEventListener("click", changer);