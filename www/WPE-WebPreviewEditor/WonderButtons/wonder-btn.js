function newQuark() {
    var quark = new Array("down", "strange", "up", "top", "charm", "bottom");
    var x = Math.floor(Math.random() * 6);
    return quark[x];
}

//var recall =newQuark();
var recall = new Array(newQuark(), "down", "down", newQuark(), "down");
$("#recalllist").text(recall);


$(document).ready(function () {
    $(".backhex").delay(200).show("scale",
        {percent: 800, direction: 'both'}, 2000);
    $(".tri").delay(1500).slideDown(600);
    $(".wdrop").delay(1000).fadeIn(1200);

//$(".innerq").effect( "pulsate", {times:2},1000 );
    $(".quarkinfo").delay(1000).fadeIn(500);
//$(".hexoutline").delay(1000).fadeIn(1000);
});

$('.tri').click(function () {

    $(".tri").not(this).removeClass("inglow");
    $(this).toggleClass("inglow");
    var state = $(this).attr('id');
    $(".quarkinfo").html(state);
});


$('.hexblock').click(function () {


    for (var i = 0; i < recall.length; i++) {


        var xdelay = i * 1000;


        /* for (var j = 0; j < i; j++){
         if ( recall[j] === recall[i]){
         var cut = 0;
         cut = 300;

         xdelay = xdelay - cut;

         }else{
         console.log("ELSE xdelay"+xdelay);
         }

         };*/
        //$("#"+recall[i]).delay(xdelay);
        //$("#"+recall[i]).animate({opacity: ".0"}, {duration:100}).animate({opacity: "1"}, {duration:100});
        $("#" + recall[i]).delay(xdelay).fadeTo(100, 0.1).delay(100).fadeTo(100, 1);

    }

});



