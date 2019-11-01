
$(function(){


             $(".headerbox").stop().animate({top:50},function(){
               $(".headerbox").stop().animate({top:200},500,function(){
                 $(".headerbox").stop().animate({top:120},function(){
                   $(".headerbox").stop().animate({top:180},500,function(){
                     $(".headerbox").stop().animate({top:160},function(){
                     });
                   });
                 });
               });
             });




          function slide1(){
             $(".slide1").stop().animate({top:-850},function(){
                $(".slide1 li:first").stop().appendTo(".slide1");
                $(".slide1").stop().css({top:0});
             });
          }
          setInterval(slide1,3000);

          var m1=0;

          function mslide1(){
              m1++;
              if(m1 > $(".mslide1 li:last").index()){
                m1=0;
              }
             $(".mslide1 li").eq(m1).stop().fadeIn("slow");
             $(".mslide1 li").eq(m1-1).stop().fadeOut();
           }
          setInterval(mslide1,3000);


         var a=0;

         function slide2(){
             a++;
             if(a > $(".slide2 li:last").index()){
               a=0;
             }
            $(".slide2 li").eq(a).stop().fadeIn("slow");
            $(".slide2 li").eq(a-1).stop().fadeOut();
          }
         setInterval(slide2,3000);



          function slide3(){
             $(".slide3").stop().animate({top:-760},function(){
                $(".slide3 li:first").stop().appendTo(".slide3");
                $(".slide3").stop().css({top:0});
             });
          }
          setInterval(slide3,3000);

          var m2=0;

          function mslide2(){
              m2++;
              if(m2 > $(".mslide2 li:last").index()){
                m2=0;
              }
             $(".mslide2 li").eq(m2).stop().fadeIn("slow");
             $(".mslide2 li").eq(m2-1).stop().fadeOut();
           }
          setInterval(mslide2,3000);


          var b=0;

          function slide4(){
              b++;
              if(b > $(".slide4 li:last").index()){
                b=0;
              }
             $(".slide4 li").eq(b).stop().fadeIn("slow");
             $(".slide4 li").eq(b-1).stop().fadeOut();
           }
          setInterval(slide4,3000);

          function slide5(){
            $(".slide5").stop().animate({top:-880},function(){
              $(".slide5 li:first").stop().appendTo(".slide5");
              $(".slide5").stop().css({top:0});
            });
          }setInterval(slide5,3000);


          var m3=0;

          function mslide3(){
            m3++;
            if(m3 > $(".mslide3 li:last").index()){
              m3=0;
            }
              $(".mslide3 li").eq(m3).stop().fadeIn("slow");
              $(".mslide3 li").eq(m3-1).stop().fadeOut();
          }
          setInterval(mslide3,3000);



         $(function(){
           $(".aphotowrap").hide();
           $(".aphotobox").mouseover(function(){
               $(this).children(".aphotowrap").stop().fadeIn();
           }).mouseout(function(){
             $(this).children(".aphotowrap").stop().fadeOut();
           });
         });

         $(function(){
           $(".bphotowrap").hide();
           $(".bphotobox").mouseover(function(){
             $(this).children(".bphotowrap").stop().fadeIn();
           }).mouseout(function(){
             $(this).children(".bphotowrap").stop().fadeOut();
           });
         });

         $(function(){
           $(".cphotowrap").hide();
           $(".cphotobox").mouseover(function(){
             $(this).children(".cphotowrap").stop().fadeIn();
           }).mouseout(function(){
             $(this).children(".cphotowrap").stop().fadeOut();
           });
         });

         $(function(){
           $(".dphotowrap").hide();
           $(".dphotobox").mouseover(function(){
             $(this).children(".dphotowrap").stop().fadeIn();
           }).mouseout(function(){
             $(this).children(".dphotowrap").stop().fadeOut();
           });
         });

         $(function(){
           $(".ephotowrap").hide();
           $(".ephotobox").mouseover(function(){
             $(this).children(".ephotowrap").stop().fadeIn();
           }).mouseout(function(){
             $(this).children(".ephotowrap").stop().fadeOut();
           });
         });


});
