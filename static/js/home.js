function updateCarousel(){
    $(".carousel").each(function(){
      $(this).data("count", $(this).find(".carousel-image").length);

      curIndex = $(this).data("index");
      $(this).find(".carousel-image").each(function(index){
        if(index != curIndex){
          $(this).addClass("hide");
        }else{
          $(this).removeClass("hide");
        }
      });

    });
  }

  function stepCarousel(){
    $(".carousel").each(function(){
      $(this).data("index", $(this).data("index") + 1);
      if($(this).data("index") == $(this).data("count")){
        $(this).data("index", 0);
      }
    });
  }

  function initCarousel(){
    $(".carousel").each(function(){
      if($(this).data("index") == undefined){
        $(this).data("index", 0);
      }

      delay = $(this).data("delay");
      if(delay == undefined){
        delay = 5000;
      }

      window.setInterval(function(){
        stepCarousel();
        updateCarousel();
      }, delay);
    });
  }

  initCarousel();
  updateCarousel();