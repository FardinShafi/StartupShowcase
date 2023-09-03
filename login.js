function load() {
    var selectedOption = document.getElementById("menuX").value;
    var urlToLoad = "";
    

    if (selectedOption === "1" ) {
    urlToLoad = "bookGarage.html";
    }
  
    else if (selectedOption === "2" ) {
        urlToLoad = "offerGarage.html";
    }
   
    else if (selectedOption === "3") {
        urlToLoad = "supervise.html";
    }

    else if (selectedOption === "4") {
        urlToLoad = "admin.html";
    }
    

    if (urlToLoad !== "") {
        window.location.href = urlToLoad;
        return false;
    }

    return true;
}