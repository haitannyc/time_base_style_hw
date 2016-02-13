$(document).ready (function() {
  

setInterval(function () {
  var dayTime = new Date ();
  var minutesToLeadZero = ('0' + dayTime.getMinutes()).substr(-2);
  var secondsToLeadZero = ('0' + dayTime.getSeconds()).substr(-2);
  $("#hour").text(dayTime.getHours());

  $("#minutes").text(minutesToLeadZero);
  $("#seconds").text(secondsToLeadZero);
  $("#milliseconds").text(dayTime.getMilliseconds()).substr(-8);

  },100);

// ----------------above is clock display

// ---even minutes turn red---------


setInterval(function () {
    var dayTime = new Date ();
    var minutesColor = dayTime.getMinutes();

    if ((minutesColor % 2) === 0)  {
      // red color for even minutes
       $('#minutes').css( "color", "red" );
    } 
    else {
      $('#minutes').css( "color", "black" );
    }
  },1000);

// change background on 5 minutes
    setInterval(function () {
     var dayTime = new Date ();  
    var fiveMinutesColor = dayTime.getMinutes();
    var backgroundColors = ["#FFF8DC", "#6495ED", "#FF8C00", "#ADD8E6"];
    

    var rand = backgroundColors[Math.floor(Math.random() * backgroundColors.length)]; 
    
  

    if ((fiveMinutesColor % 5) === 0)  {
      // setTimeout(function () {
       console.log(rand);
      $('body').css( "background", rand);
      } 
    },25000);

   // change text color for ever hour change  
   // every hour minutes should equal 0
   setInterval(function () {
    var dayTime = new Date ();  
   var hourColor = dayTime.getMinutes();
   var backgroundColors = ["#00FFFF", "#00BFFF", "#7B68EE", "#6A5ACD"];
   

   var rand = backgroundColors[Math.floor(Math.random() * backgroundColors.length)]; 
   
   // ----change clock color every hour----
   // ---minutes should equal to 0 at every hour change

   if (hourColor  === 0)  {
     // setTimeout(function () {
      console.log(rand);
     $('body').css( "color", rand);
     } 
   },5000000);
    
   // ------bottom interval timer
   

    


  // end of doc ready
});