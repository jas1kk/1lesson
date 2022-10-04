<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
<script>
$(document).ready(function(){
$("video").on("mouseover" , function(){
  this.play();
  $( this ).css( "background-color", "black" );
});
$("video").on("mouseleave",  function(){
  this.pause();
})	
})
</script>

<video width = 320px src="http://www.mokselle.ru/video/video-bg.mp4">
</video>