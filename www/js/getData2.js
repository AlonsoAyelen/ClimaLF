
  var configuration = { // Change this settings to match your environment/needs
    host: 'http://clima.info.unlp.edu.ar',
    endpoint: '/last?lang=es',
    dateFormat: 'DD/MM/YY HH:mm'
  },
  $parts = (function($target) {
    return {
      date: $target.find('.date'),
      temperature: $target.find('.temperature'),
      humidity: $target.find('.humidity'),
      bar: $target.find('.bar'),
      windSpeed: $target.find('.wind-speed'),
      windDirection: $target.find('.wind-direction'),
      windChill: $target.find('.wind-chill'),
      uv: $target.find('.uv')
    };
  }($('#content')));

  function zeroPad(val) {
    return parseInt(val) < 10 ? '0' + val : val;
  }


  function update(config) {
    $.getJSON(config.host + config.endpoint, function(data) {
      $('#captured_at').html('Hoy a las: '+moment().format('HH:mm'));
      $('#temperature').html(data.temperature+' ºC');
      $('#humidity').html(data.humidity+' %');
      $('#bar').html(data.bar+' hPa');
      $('#wind_speed').html(data.wind_speed+' Km/h');
      //$('#wind_direction').html(data.wind_direction);
      $('#wind_chill').html(data.wind_chill+' ºC'); })
    .success(function() { $('#hayValor').val(1) })
    .error(function() { $('#hayValor').val(0) });
  }

  function getIUV(aUV){
  	switch(aUV){
  		case 0:
  		case 1:
  		case 2:
  			return aUV + " " + "Muy Bajo";
  		case 3:
  		case 4:
  			return aUV + " " + "Bajo";
  		case 5:
  		case 6:
  			return aUV + " " + "Moderado";
		case 7:
		case 8:
		case 9:
			return aUV + " " + "Alto";
  		case (aUV >= 10):
  			return aUV + " " + "Muy Alto";
  	}
  	return aUV + " error!";
  }

  //update(configuration);


  //intervalId = setInterval(function() { update(configuration); }, 60000);

