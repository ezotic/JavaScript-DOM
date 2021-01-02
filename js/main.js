document.getElementById("bodyColor").style.fontFamily = "Arial, sans-serif";

const img1 = document.createElement("IMG"); {
    img1.setAttribute("src", "images/e.jpg");
    img1.setAttribute("width", "250");
    img1.setAttribute("height", "250");
    img1.setAttribute("alt", "Image of Earl M. Smith");
    document.body.appendChild(img1);
}

const nickN = document.getElementById("nickN");{
    nickN.innerHTML = ("Nickname: E");
    document.getElementById("nickN").style.color = "#004c54";
    // document.getElementById("nickN").style.font = "20px arial";
}
const fav = document.getElementById("fav");{
    fav.innerHTML = ("Favorites: Doctor Who, Star Trek/Wars/Gate, Black Thought");
    document.getElementById("fav").style.color = "#004c54";
    // document.getElementById("nickN").style.font = "20px arial";
}
const home = document.getElementById("home");{
    home.innerHTML = ("Hometown: Phildelphia, PA");
    document.getElementById("home").style.color = "#004c54";
    // document.getElementById("nickN").style.font = "20px arial";
}
const factz = document.getElementById("factz");{
    factz.innerHTML = ("Random Fact: US Air Force Veteran with 2 MBAs from Wilmington University, and thrist for knowledge.");
    document.getElementById("factz").style.color = "#004c54";
    // document.getElementById("nickN").style.font = "20px arial";
}
