
       $(function(){

                   $(".a").click(function(){

                      $(".anav").slideToggle();

                   });




                   $(window).resize(function(){


                     if($(window).width()<1920){

                       $(".anav").show();

                       }

                       if($(window).width()<1200){

                         $(".anav").hide();

                         }


                     if($(window).width()<599){

                       $(".anav").hide();

                     }


                   });

       });
