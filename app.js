$(document).ready(function(){
  
  $.getJSON('https://freegeoip.net/json/', function(data2){
    var lat = data2.latitude;
    var long = data2.longitude;
    var api = 'https://api.forecast.io/forecast/2e53bdc4525b7c631700785076860763/'+ lat + ',' + long;
  
    $.ajax({
      type: 'GET',
      url: api,
      dataType: 'jsonp',
      success: function(data) {
      var weatherType = data.currently.summary;
      var fTemp = data.currently.temperature.toFixed(1);
      var cTemp = ((fTemp - 32) * (5/9)).toFixed(1);
      var windSpeed = data.currently.windSpeed;
      var location = data.timezone;
      var tempSwap = true;
      //comment here
      $('#location').html(location);
      $('#weatherType').html(weatherType);
      $('#cTemp').html(cTemp + " &#8451;");
      $('#windSpeed').html(windSpeed);
        
      $('#cTemp').click(function() {
        if (tempSwap === false) {
          $('#cTemp').html(cTemp + " &#8451;");          
          tempSwap = true;
        } else {
          $('#cTemp').html(fTemp + " &#8457;");
          tempSwap = false;
        }
        
        
      });
        
        if (cTemp > 20) {
          $('body').css('background-image', 'url(http://www.yexplore.travel/wp-content/uploads/2013/12/316.jpg)');
        } else if (cTemp > 15) {
          $('body').css('background-image', 'url(https://pearlsofwisdomdotme.files.wordpress.com/2014/10/10612219_10203455800826960_500701786_o.jpg)');
        } else if (cTemp > 10) {
          $('body').css('background-image', 'url(http://www.eveboo.com/wp-content/uploads/2013/03/summer_dusk_hd_widescreen_wallpapers_1680x1050.jpeg)');
        } else {
          $('body').css('background-image', 'url(https://i.ytimg.com/vi/vhDVX4Iug9A/maxresdefault.jpg)');
        }

      }
      
    });
    
  });
  
});
