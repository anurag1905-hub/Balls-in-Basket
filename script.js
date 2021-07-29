var colors=["red","blue","yellow","lightgrey","darkorchid","black","orange","deeppink","green","purple","saddlebrown","lightseagreen","deepskyblue","firebrick","crimson"];

$("#getBalls").click(function(){
   let index=Math.floor(Math.random()*15);
   console.log(index);
   console.log(colors[index]);
    console.log("Function triggered");
   $("#basket").append('<div class="ball" style="background-color:'+colors[index]+'"></div>');
});