
    $(document).ready(function(){


      $(".em1").click(function(){

          $(".ephoto1").css({"opacity":"1","transition":"all 0.3s ease-in-out"});
          $(".ephoto2").css({"opacity":"0","transition":"all 0.3s ease-in-out"});
          $(".ephoto3").css({"opacity":"0","transition":"all 0.3s ease-in-out"});

          $(".etextin1").css({"opacity":"1","transition":"all 0.3s ease-in-out"});
          $(".etextin2").css({"opacity":"0","transition":"all 0.3s ease-in-out"});
          $(".etextin3").css({"opacity":"0","transition":"all 0.3s ease-in-out"});

      });

      $(".em2").click(function(){

        $(".ephoto1").css({"opacity":"0","transition":"all 0.3s ease-in-out"});
        $(".ephoto2").css({"opacity":"1","transition":"all 0.3s ease-in-out"});
        $(".ephoto3").css({"opacity":"0","transition":"all 0.3s ease-in-out"});

        $(".etextin1").css({"opacity":"0","transition":"all 0.3s ease-in-out"});
        $(".etextin2").css({"opacity":"1","transition":"all 0.3s ease-in-out"});
        $(".etextin3").css({"opacity":"0","transition":"all 0.3s ease-in-out"});

      });

      $(".em3").click(function(){

        $(".ephoto1").css({"opacity":"0","transition":"all 0.3s ease-in-out"});
        $(".ephoto2").css({"opacity":"0","transition":"all 0.3s ease-in-out"});
        $(".ephoto3").css({"opacity":"1","transition":"all 0.3s ease-in-out"});

        $(".etextin1").css({"opacity":"0","transition":"all 0.3s ease-in-out"});
        $(".etextin2").css({"opacity":"0","transition":"all 0.3s ease-in-out"});
        $(".etextin3").css({"opacity":"1","transition":"all 0.3s ease-in-out"});

      });



                $(".a").click(function(){

                   $(".anav").slideToggle();

                });


                if($(window).width()<600){

                  $(".anav").hide();

                }

                if($(window).width()>600){

                  $(".anav").show();

                }


                $(window).resize(function(){


                  if($(window).width()<1920){

                    $(".anav").show();

                    }


                  if($(window).width()<599){

                    $(".anav").hide();

                  }


                });


    });
