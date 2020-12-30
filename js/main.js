const p1 = document.getElementById("p1");{
    p1.innerHTML = ("Developers for life!");
    document.getElementById("p1").style.color = "#004c54";
    document.getElementById("p1").style.font = "40px arial";
}

const p2 = document.getElementById("p2");{
    p2.innerHTML = ("We are coders!");
    document.getElementById("p2").style.color = "#004c54";
    document.getElementById('p2').style.font = "20px arial";
}

const img1 = document.createElement("IMG"); {
    img1.setAttribute("src", "images/SW-121117-Coder-Popup1.jpg");
    img1.setAttribute("width", "500");
    img1.setAttribute("height", "300");
    img1.setAttribute("alt", "Image of Sample Code ");
    document.body.appendChild(img1);
}

removeItemButton.addEventListener('click', () => {
    document.body.removeChild(img1);
});