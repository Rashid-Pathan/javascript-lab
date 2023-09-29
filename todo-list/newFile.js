listContainer.addEventListener("click", function (e) {
    if (e.target.tagNmae == "Li") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName == "SPAN") {
        e.target.parentElement.remove();
        saveData();

    }
}, false);
