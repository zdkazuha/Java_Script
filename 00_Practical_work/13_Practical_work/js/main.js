function getColor() {
    return `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
}

$("button.addBlock").on('click', function() { 
    let $number = $(".blocks p");
    if( $number.length >= 14) {
        $number.each( function () {
            this.remove();
            });
        return;
    }

    $(".blocks").append(`<p style="background-color: ${getColor()};"></p>`);
});

<<<<<<< HEAD
$(".blocks").on("dblclick", function(e) {
    if (e.target.tagName === "P") {
        e.target.remove();
    }
});


=======
>>>>>>> d5b04e56b7312f017bb8c6a092c2542e821a23a7
//

let number = 0;

$("button.next").on('click', function () {
    let $p = $(".Task2_1 p");

    $p.each( function () { this.style.backgroundColor = "gray" });

    if (number === 0)
         $p[0].style.backgroundColor = "green";
    else if (number === 1)
         $p[1].style.backgroundColor = "orange";
    else if (number === 2)
         $p[2].style.backgroundColor = "red";

    number = (number + 1) % 3;
});
<<<<<<< HEAD

$(".Star p").on('click', function () {
    let $p = $(".Star p");
    let index = +$(this).data('id');

    $p.each(function (i) {
        this.style.color = (i + 1) <= index ? "yellow" : "gray";
    });
});
=======
>>>>>>> d5b04e56b7312f017bb8c6a092c2542e821a23a7
