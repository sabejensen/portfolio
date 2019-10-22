$(document).ready(function(){
  $("#menu-dev").hover(function(){
      $("body").css("background-image", "url('/images/circuit_bg.jpg')");
  },
  function(){
      $("body").css("background-image", "none");
  });
});
$(document).ready(function(){
    $("#menu-design").hover(function(){
        $("body").css("background-image", "url('/images/vapor_bg.jpg')");
    },
    function(){
        $("body").css("background-image", "none");
    });
  });
  $(document).ready(function(){
    $("#menu-articles").hover(function(){
        $("body").css("background-image", "url('/images/type_bg.jpg')");
    },
    function(){
        $("body").css("background-image", "none");
    });
  });
  $(document).ready(function(){
    $("#menu-about").hover(function(){
        $("body").css("background-image", "url('/images/guitar_bg.jpg')");
    },
    function(){
        $("body").css("background-image", "none");
    });
  });