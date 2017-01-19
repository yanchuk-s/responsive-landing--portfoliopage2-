

// aniamte secondtext
$(document).ready(function () {
        var objToStick = $(".box"); //Получаем нужный объект
        var topOfObjToStick = $(objToStick).offset().top; //Получаем начальное расположение нашего блока

        $(window).scroll(function () {
            var windowScroll = $(window).scrollTop(); //Получаем величину, показывающую на сколько прокручено окно

            if (windowScroll = topOfObjToStick) { // Если прокрутили больше, чем расстояние до блока, то приклеиваем его
                $(objToStick).addClass('animated slideInUp');
           
            };
        });
    });





// плавний скролінг
$(document).ready(function(){
    
    setBindings(); 
    
});

function setBindings() {
    
    $("li a").click(function(e){
        
        e.preventDefault();
        var sectionID = e.currentTarget.id + "Section";
        
       
        
        $("html body").animate({
            
            scrollTop: $("#" + sectionID).offset().top
        }, 1000)
    })
    
}
		 



//animation for search input
$(document).ready(function()
 {
 var flag=true;
 $("#search").click(function()
  {
  if(flag==true)
  {
    $(".inputCss").show("slow");
    flag=!flag;
  }
  else
  {
   $(".inputCss").hide("slow");

                flag=!flag;}
    });
});


// АНИМАЦИЯ ПРИ СКРОЛИ

$(document).ready(function() {
    

    
    $("#ipad").animated("bounceInRight","bounceOutLeft" );
        
    $(".aboutMe h1").animated("bounceInLeft","bounceInRight");
    $(".aboutMe p").animated("bounceInLeft","bounceInRight");
    $(".aboutMe h2").animated("bounceInLeft","bounceInRight");
    $(".sayHello").animated("bounceIn","bounceInRight");
    
    
    
    $("#device").animated("zoomInDown","bounceOutLeft" );
    
      $(".portfolio h1").animated("zoomInRight","bounceInRight");
    $(".portfolio p").animated("zoomInRight","bounceInRight");
    $(".portfolio h2").animated("zoomInRight","bounceInRight");
    
    
     $(".donate h1").animated("fadeInUpBig","bounceInRight");
    
    $(".contact i").animated("fadeInDownBig","bounceInRight");
    
     $(".contact h1").animated("fadeInUpBig","bounceInRight");
$(".mail").animated("fadeInUpBig","bounceInRight");
});


