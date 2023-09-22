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
gridView.header = 'Hello';
gridView.headerClass = ['header'];
gridView.attribute = {
	'company' : {
		'label' : 'Компания',
		'src' : 'html'
	},
	'chef' : {
		'label' : 'Директор',
		'valueChef' : (data) => {
			 if (data['chef'] === 'Yoshi Tannamuri') {
				return data['chef'] + ' kityoza';
			}
			return data['chef'];
		}
	},
	'country' : {
		'label' : 'Страна',
		'value' : (data) => {
			if (data['country'] === 'Germany') {
				return data['country'] + ' map';
			} 
			return data['country'];
		}
	}

}
gridView.data = dataExample;
gridView.render();