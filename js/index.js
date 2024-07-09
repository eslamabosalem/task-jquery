/// <reference types="../@types/jquery" />
const setinggrow=$(".roops").outerWidth(true);
console.log(setinggrow);
$("#sidenav").animate({left:-setinggrow})
let isopen=false
$("#sidenav .seting").on("click",function(){

$(this).parent().animate({left: isopen?-setinggrow:0},2000)
isopen=!isopen;

})



//Duration//

// $('#Duration .toggle').on("click",function(){
//     $('.inner').nextAll(($(this).next()).slideUp(1000));
//     $(this).next().slideToggle(1000);
// });

$(".singer-1 .singer").next().slideDown(0);
$(".singer").on("click",function(e){

    $(".singer-text").slideUp(1000);
    $(e.target).next().css("display")==="none"?$(e.target).next().slideDown(1000):$(e.target).next().slideUp(1000);
});




var countDownDate = new Date("july 25, 2024 15:37:25").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();
    
  var distance = countDownDate - now;
    
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var secs = Math.floor((distance % (1000 * 60)) / 1000);
    

  $(".days").html(`${days} D`);
  $(".hours").html(`${hours} h`);
  $(".minutes").html(`${ mins } m`);
  $('.seconds').html(`${ secs} s`)
    

}, 1000);






/*textarea*/

var lenthMaxCount = 100;
$('textarea').keyup(function() {
var Length=$(this).val().length;
var maxxLength=lenthMaxCount-Length;
if(maxxLength<=0){
    $("#sum").text("your available character finished");
}else{
    $("#sum").text(maxxLength);
}


});













