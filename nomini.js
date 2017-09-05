const colors = ['#6e0a82', '#1cb1b7', '#e97451'] //TODO: change to less obnoxious colors
  	var color
  	let start = () =>{
  		let cook = Cookies.get('color')
  		if(!cook){
	  		color = colors[Math.floor(Math.random()*colors.length)]
  			Cookies.set('color', color, {expires:1})
  		}
  		else{
  			color = cook
  		}
  		$('#warn').empty()
  		$('head').append(`<meta name="theme-color" content="${color}">`)
  		$('body').css('background', color)
  	}
  	$(start) //auto starts script