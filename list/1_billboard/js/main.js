
    $(document).ready(function(){

        $(window).scroll(function(){
          if($(this).scrollTop()>800){
            $("#scroll_bar").css("opacity","1");
          }else{
            $("#scroll_bar").css("opacity","0");
          }
        });
        $("#scroll_bar").click(function(){
          $("html,body").animate({scrollTop:0},400);
          return false;
        });


        $(".a").click(function(){

           $(".anav").slideToggle();

        });



        $(window).resize(function(){


          if($(window).width()>700){

            $(".anav").show();

            }

            if($(window).width()<700){

              $(".anav").hide();

              }


        });


    });
