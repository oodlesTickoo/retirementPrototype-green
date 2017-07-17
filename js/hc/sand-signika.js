
Highcharts.createElement('link', {

 	href: 'https://fonts.googleapis.com/css?family=Dosis:400,600',
	rel: 'stylesheet',
	type: 'text/css'
}, null, document.getElementsByTagName('head')[0]);


Highcharts.theme = {


	chart: {
		backgroundColor: null,
		style: {

			fontFamily: "Dosis, sans-serif"
		}
	},

	title: {
		style: {
			color: '#000',
			textTransform: 'uppercase',
			fontWeight: 'bold',
			fontSize: '20px'
		}
	},
	subtitle: {
		style: {
			color: 'black'
		}
	},
	tooltip: {
		borderWidth: 0
	},
	legend: {
		itemStyle: {
			fontWeight: 'bold',
			fontSize: '15px'
		}
	},

	xAxis: {
		gridLineColor: '#707073',
		labels: {
			style: {
				color: '#000',
				fontWeight: 'bold',
				fontSize:'15px'
			}
		},
		lineColor: '#707073',
		minorGridLineColor: '#505053',
		tickColor: '#707073',
		title: {
			style: {
				color: '#A0A0A3',
                   fontSize:'15px'

			}
		}
	},
	yAxis: {
		gridLineColor: '#707073',
		labels: {
			style: {
				color: '#000',
				fontWeight: 'bold',
				fontSize:'15px'
			}
		},
		lineColor: '#707073',
		minorGridLineColor: '#505053',
		tickColor: '#707073',
		tickWidth: 1,
		title: {
			style: {
				color: '#000',
				fontWeight: 'bold',
                   fontSize:'15px'
			}
		}
	},
	plotOptions: {
		series: {
			shadow: true,
			fillOpacity: 0.5
		},
		candlestick: {
			lineColor: '#404048'
		},
		map: {
			shadow: false
		}
	},

	// Highstock specific
	navigator: {
		xAxis: {
			gridLineColor: '#D0D0D8'
		}
	},
	rangeSelector: {
		buttonTheme: {
			fill: 'white',
			stroke: '#C0C0C8',
			'stroke-width': 1,
			states: {
				select: {
					fill: '#D0D0D8'
				}
			}
		}
	},
	scrollbar: {
		trackBorderColor: '#C0C0C8'
	},

	// General
	background2: '#E0E0E8'

};

// Apply the theme
Highcharts.setOptions(Highcharts.theme);

Highcharts.setOptions({lang: {
			thousandsSep: ','
		}});
