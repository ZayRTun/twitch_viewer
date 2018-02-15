$(document).ready(function() {
  
  var apiStr = "https://api.twitch.tv/kraken/streams";
  var apiChl = "https://api.twitch.tv/kraken/channels";
  var cID = "gvl9rx3e6ep0g29mnz9pxwsm0zhgp7";
  var tClient = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "habathcx", "RobotCaleb", "noobs2ninjas"];
    
  tClient.forEach(function(cL) {
      var urlStr = apiStr + "/" + cL + "?" + "client_id=" + cID ;                   //console.log(url);
      
      $.getJSON(urlStr, function(dataA) {
        //console.log(urlStr);
        if (dataA.stream === null) {
          var urlChl = apiChl + "/" + cL + "?" + "client_id=" + cID;
          $.getJSON(urlChl, function(dataB) {
            //console.log(urlChl)
            $("#all").append("<div id='offCont'><div class='d1'><p><img src="+dataB.logo+">" + dataB.display_name + "</p></div><div class='d2'><a href="+dataB.url+" target='_blank'><p>"+dataB.status+"</p></a></div><div class='d3'>Offline</div</div>");
            //$("#offCont").append("<div class='d3'></div")
            //$("#all").append("<div id='offCont'><div class='d3'><p>Off Line</p></div></div>");
 
            $("#offline").append("<div id='offCont'><div class='d1'><p><img src="+dataB.logo+">" + dataB.display_name + "</p></div><div class='d2'><a href="+dataB.url+" target='_blank'><p>"+dataB.status+"</p><a/></div><div class='d3'>offline</div</div>");
            //console.log(dataB.display_name + " offline")
          });
        } 
        else if (dataA.stream.stream_type === "live") {
           
          $("#all").append("<div id='offCont'><div class='d1'><p><img src="+dataA.stream.channel.logo+">" + dataA.stream.channel.display_name + "</p></div><div class='d2'><a href="+dataA.stream.channel.url+" target='_blank'><p>"+dataA.stream.channel.status+"</p></a></div><div class='d3'>"+dataA.stream.stream_type+"</div</div>");
          
          $("#online").append("<div id='offCont'><div class='d1'><p><img src="+dataA.stream.channel.logo+">" + dataA.stream.channel.display_name + "</p></div><div class='d2'><a href="+dataA.stream.channel.url+" target='_blank'><p>"+dataA.stream.channel.status+"</p></a></div><div class='d3'>"+dataA.stream.stream_type+"</div</div>" );
          
          $(".d1").addClass( "neoGlow" );
        }
      });
    });
});