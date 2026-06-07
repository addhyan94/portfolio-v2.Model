console.log("Hello My Makers.... ");

let button1 = document.getElementById("buttonn");
let btn1_go = document.getElementById("cont_titel");
const btn = document.getElementById("backToTop");
button1.onclick = function () {
    btn1_go.scrollIntoView({
        behavior: "smooth"
    });

    let button2 = document.getElementById("buttonn2");
    button2.addEventListener("click", (e) => {
        alert("CV add ni hui hai aabhi ....");
    })
};


// scroll karke jab main section ke neech eaaoge to show hoga 
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        btn.classList.add("show");
    } else {
        btn.classList.remove("show");
    }
});

// click karo to jaoge uper 
btn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});