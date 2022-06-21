$(function(){
    var indexP=0
    var moveTop=0;
    var winHeight=null;
    $("nav a").eq(0).addClass("active");

    function page(indexP){
      $("nav a").removeClass("active");
      $("nav a").eq(indexP).addClass("active");
    }

    $("nav a").each(function(indexP){
      $(this).click(function(){
        var $hash=$(this.hash).offset().top;
        $("nav a").removeClass("active");
        $(this).addClass("active");
        $("html,body").stop().animate({
            scrollTop:$hash
        });
        return false;
      });
    });
    

    // function wheel(){
    //     winWidth=$(window).width();
    //     winHeight=$(window).height();
    //     $(".section").css({
    //         height:winHeight
    //     });
    //     $(".section").each(function(index){
    //       $(this).on('DOMMouseScroll mousewheel', function(e){
    //         if(e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
    //             console.log("올렸어요");
    //             if($(this).prev()!=undefined){
    //                 moveTop=$(this).prev().offset().top;
    //                 indexP=index-1;
    //                 page(indexP)
                    
    //             }
    //         }else{
    //             console.log("내렸어요")
    //             if($(this).next()!=undefined){
    //                 moveTop=$(this).next().offset().top;
    //                 indexP=index+1;
    //                 page(indexP)
    //             }
    //         }
    //         console.log("indexP : "+indexP)
    //         autoNum=indexP;
    //         $("html,body").stop().animate({
    //             scrollTop:moveTop
    //         },700);

    //         $(window).resize(function(){
    //             var winHeight=$(window).height();
    //             $(".section").css({
    //                 height:winHeight
    //             });
    //             $("html,body").stop().animate({
    //                 scrollTop:winHeight*indexP 
    //             },0);
    //         });
    //       });  
    //     });
        
    // }
    
    // wheel();

    // $(window).resize(function(){
    //     wheel();
    // });


    $(".web-img").click(function(){
        var modal_content=$(this).parent().find(".modal-section").html();
        $(".modal-con").html(modal_content);
        $(".modal-wrap").show();

    });

    $(".modal-close").click(function(){
        $(".modal-wrap").hide();
    });


    $(window).scroll(function(){
        var winScrollTop=$(this).scrollTop();
        $("nav a").each(function(index){
            var hashTop=$(this.hash).offset().top;
            if(winScrollTop+200>hashTop){
                $("nav a").removeClass("active");
                $(this).addClass("active");
            }
        });
        
        if(winScrollTop+$(window).height()/2>$("#s3").offset().top){
            $(".web-thum").eq(0).addClass("web-thum-ani1");
            $(".web-thum").eq(1).addClass("web-thum-ani2");
            $(".web-thum").eq(2).addClass("web-thum-ani3");
        }
        if(winScrollTop+$(window).height()/2>$("#s5").offset().top){
            $(".banner").eq(0).addClass("banner-ani1");
            $(".banner").eq(1).addClass("banner-ani2");
            $(".banner").eq(2).addClass("banner-ani3");
            $(".banner").eq(3).addClass("banner-ani4");
            $(".banner").eq(4).addClass("banner-ani5");
            $(".banner").eq(5).addClass("banner-ani6");
        }
    });

    $(".banner-img").click(function(){
        var modal_content=$(this).find(".modal-section").html();
        $(".modal-con").html(modal_content);
        // css로 디자인 조정하기 
        $(".modal-body").css({
            height:"auto",
            width:"50%",
            padding:"20px 0"
        })
        $(".modal-wrap").show();
    });

    $(".detail-img").click(function(){
        var modal_content=$(this).find(".modal-section").html();
        $(".modal-con").html(modal_content);
        $(".modal-wrap").show();
    });


    //원형 프로그래스바 js 플러그인 복붇 

    var s1Top=$("#s2").offset().top;
    var bool=true;
    $(window).scroll(function(){
        var winScrollTop=$(window).scrollTop();
        if(winScrollTop+$(window).height()/2 >s1Top && bool){
            /* $('.photo.circle').circleProgress({
                value: 0.6,
                fill:"gold"
              }).on('circle-animation-progress', function(event, progress) {
                $(this).find('strong').html(Math.round(60 * progress) + '<i>%</i>');
            });
            $('.ill.circle').circleProgress({
                value: 0.6,
                fill:"blue"
              }).on('circle-animation-progress', function(event, progress) {
                $(this).find('strong').html(Math.round(60 * progress) + '<i>%</i>');
            }); */

            $(".photo").addClass("active");
            $(".ill").addClass("active");
            $(".html").addClass("active");
            bool=false;
        }
    });
});