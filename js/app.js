document.addEventListener("DOMContentLoaded", function () {
    var loadElement = document.getElementById("load");
    var loadingElement = document.getElementById("loading");

    if (loadElement) {
        loadElement.classList.add("hidden");
        setTimeout(function () {
            loadElement.style.display = 'none';
        }, 300);
    }

    if (loadingElement) {
        setTimeout(function () {
            loadingElement.classList.add("hidden");
            setTimeout(function () {
                loadingElement.style.display = 'none';
            }, 300);
        }, 300);
    }

});