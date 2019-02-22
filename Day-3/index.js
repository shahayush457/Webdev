$( document).ready(function(){
  $("#font-list").css({
      "background-color" : "#DDDDDD",
      "font-size" : "20px",
      "color" : "#000"
  });
  let fontitem=""; 
  for(var i=15;i<65;i++){
      fontitem ='<li id="font'+i+'">I am font size: ' + i + '</li>';
      $("#font-list").append(fontitem);
      red=Math.floor(Math.random()*256);
      blue=Math.floor(Math.random()*256);
      green=Math.floor(Math.random()*256);
      randomcolor ="rgb(" +red + ","+green + ","+ blue +")";
      $("#font"+i).css({
          "background-color": randomcolor,
          "font-size" : i+"px",
          "margin" : "0.5rem 0"
      });
  }
});