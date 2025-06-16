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

function getColor() {
    return `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
}

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
