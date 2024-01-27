var htmlValidate = document.querySelector("html").getAttribute("dir")
var elements = document.querySelectorAll("*:not(html):not(body)")
console.log(htmlValidate)

if(!htmlValidate){
    document.querySelector("html").setAttribute("dir", "rtl")
    document.querySelector("html").setAttribute("lang", "fa")
    for (var element of elements) {
        if (element.getAttribute("dir") === "ltr") {
            element.setAttribute("dir", "rtl")
        }
    }
} else if(htmlValidate == "rtl") {
    document.querySelector("html").setAttribute("dir", "ltr")
    document.querySelector("html").setAttribute("lang", "en")
    for (var element of elements) {
        if (element.getAttribute("dir") === "rtl") {
            element.setAttribute("dir", "ltr")
        }
    }
} else {
    document.querySelector("html").removeAttribute("lang")
    document.querySelector("html").removeAttribute("dir")
    for (var element of elements) {
        if (element.getAttribute("dir") === "ltr") {
            element.setAttribute("dir", "rtl")
        }
    }
}