document.getElementById("button-id").addEventListener("click", function() {
    alert("Thank you for submitting...");
});

document.getElementById("readMore").addEventListener("click", function() {
    alert("This is it! There is no more.");
});

var d = new Date();
document.getElementById("date_year").innerHTML = d.getFullYear();
