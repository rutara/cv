//order funkcija

$(document).ready(function () {
    

$(".amount").each(function () {
    var el = $(this),
    currentAmount = 0,
    param = $(this).attr("amount"),
    color = $(this).attr("color");
    el.css("background-color",color);
       // el.css("width", param+"%");
        var id = setInterval(frame, 10);
    console.log(param);

    function frame() {
        if (currentAmount >= param) {
            clearInterval(id);
        }
        else {
            el.css("width", currentAmount + "%");
            currentAmount++;
            console.log(currentAmount);

        }
        return currentAmount;
    };


    });
});

