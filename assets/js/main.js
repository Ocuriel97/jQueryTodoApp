//check off by clicking
$('li').click(function(){
  if($(this).css('color') === 'rgb(128,128,128)'){
    console.log('grey af');
  } else {
  $(this).css({
    color: 'grey',
    textDecoration: 'line-through'
  });
}
});
