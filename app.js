console.log('hey is this not broke yo')


$(function(){ //this is the top thing
//all JQ goes in here
console.log('JQ is work yo')
$('.loadingbar').addClass('stretch')

$('html').mousemove((event)=>{
  console.log(event.originalEvent.pageX)
  console.log(event.originalEvent.pageY)
  location.reload();
})
})
