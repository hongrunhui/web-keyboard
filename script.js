window.onload = function() {
    var keys = document.querySelectorAll(".key");
    [].forEach.call(keys, function(item){
        item.timer = null;
        item.addEventListener("click", changeColor);
    })
    function changeColor(e) {
        var target = e.currentTarget;
        target.classList.add("light");
        clearTimeout(target.timer);
        target.timer = setTimeout(function() {
            target.classList.remove("light");
        },400);
    }
};