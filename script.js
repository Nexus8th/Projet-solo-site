$(document).ready(function() {
   $("#audio_icon_off").click(function() {
     $("#audio_setting").prop("checked", false);
     $("#result1").html("OFF"); 
   });
   
   $("#audio_icon_on").click(function() {
     $("#audio_setting").prop("checked", true);
     $("#result1").html("ON"); 
   });
   
   $("#audio_setting").change(function() {
     if (this.checked) {
       $("#result1").html("ON");      
     } else {
       $("#result1").html("Off");
     }
   });
   
   $("#audio_setting2").change(function() {
     if (this.checked) {
       $("#result2").html("ON");  
     } else {
       $("#result2").html("OFF");
     }                   
   });
   
   $("#audio_setting3").change(function() {
     if (this.checked) {
       $("#icon_on").css({
         opacity: 1,
         left: "198px"
       });
       $("#icon_off").css({
         opacity: 0,
         left: "198px"
       });
       $("#result3").html("ON");
     } else {
       $("#icon_on").css({
         opacity: 0,
         left: "158px"
       });
       $("#icon_off").css({
         opacity: 1,
         left: "158px"
       });
       $("#result3").html("OFF");
     }
   });
   
   
 });