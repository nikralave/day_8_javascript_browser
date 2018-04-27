$(document).ready(function() {
    
    function toggleLightOne() {
        if($("#bulb1").attr("src") == "img/bulboff.gif") {
            $("#bulb1").attr("src", "img/bulbon.gif").fadeIn();
            $("#switch1").attr("src", "img/switch_on.png");
        } else {
            $("#bulb1").attr("src", "img/bulboff.gif");
            $("#switch1").attr("src", "img/switch_off.png");
        }
    }
    
    function toggleLightTwo() {
        if($("#bulb2").attr("src") == "img/bulboff.gif") {
            $("#bulb2").attr("src", "img/bulbon.gif").fadeIn();
            $("#switch2").attr("src", "img/switch_on.png");
        } else {
            $("#bulb2").attr("src", "img/bulboff.gif");
            $("#switch2").attr("src", "img/switch_off.png");
        }
    }

    function toggleLightThree() {
        if($("#bulb3").attr("src") == "img/bulboff.gif") {
            $("#bulb3").attr("src", "img/bulbon.gif").fadeIn();
            $("#switch3").attr("src", "img/switch_on.png");
        } else {
            $("#bulb3").attr("src", "img/bulboff.gif").fadeIn();
            $("#switch3").attr("src", "img/switch_off.png");
        }
    }  
    
    $("#switch1").click(function() {
       toggleLightOne(); 
      toggleLightThree();
    })
    
    $("#switch2").click(function() {
        toggleLightTwo();
        toggleLightOne();
    })
    
    $("#switch3").click(function() {
        toggleLightOne();
        toggleLightTwo();
        toggleLightThree();
    })
})