const dataExample = [
	{
		company: 'Alfreds <b>Futterkiste</b>',
		chef: 'Maria Anders',
		country: 'Germany'
	},
	{
		company: 'Centro comercial Moctezuma',
		chef: 'Francisco Chang',
		country: 'Mexico'
	},
	{
		company: 'Ernst Handel',
		chef: 'Roland Mendel',
		country: 'Austria',
	},
	{
		company: 'Island Trading',
		chef: 'Helen Bennett',
		country: 'UK'
	},
	{
		company: 'Laughing Bacchus Winecellars',
		chef: 'Yoshi Tannamuri',
		country: 'Canada',
	}
];

let gridView = new GridView();


const data = {
	header : 'Hello', 
	headerClass: ['header'],
	attribute: {
		'company': {
			'label': 'Компания',
			'src': 'html'
		},
		'chef': {
			'label': 'Директор',
			'valueChef': (data) => {
				if (data['chef'] === 'Yoshi Tannamuri') {
					return data['chef'] + ' Japanese';
				}
				return data['chef'];
			}
		},
		'country': {
			'label': 'Страна',
			'value': (data) => {
				if (data['country'] === 'Germany') {
					return data['country'] + ' map';
				}
				return data['country'];
			}
		}

	},
	data : dataExample,
}

gridView.data = dataExample;
gridView.render(data);