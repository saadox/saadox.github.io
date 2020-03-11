let current = 1;

let imgs;

// let max_w = 600;
// let max_h = 400;

document.addEventListener("DOMContentLoaded", function() {
    imgs = {
        1:document.getElementById("img1"),
        2:document.getElementById("img2"),
        3:document.getElementById("img3"),
        4:document.getElementById("img4"),
        5:document.getElementById("img5"),
    };

    // alert(imgs[3]);
});


function slide_left() 
{

    let _go;
    if (current == 1) _go = 5;
    else  _go = current - 1;

    let toGoImg     = document.getElementById("img"+_go.toString());
    console.log(toGoImg);

    for (var e in imgs) {
        imgs[e] == toGoImg ? imgs[e].style.display = "block" : imgs[e].style.display = "none";
    }

    if (current == 1 ) current = 5;
    else current = current -  1;
    console.log(current);


}

 function slide_right() 
{
    
    let _go;
    if (current == 5) _go = 1;
    else _go = current + 1;

    let toGoImg     = document.getElementById("img"+_go.toString());
    console.log(toGoImg);


    for (var e in imgs) {
        imgs[e] == toGoImg ? imgs[e].style.display = "block" : imgs[e].style.display = "none";
    }

    if (current == 5 ) current = 1;
    else current += 1;
    console.log(current);


}