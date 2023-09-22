


class GridView {

	/**
	 * 	 properties
	 * @param [array] _tableClass -  css class for table 
	 * @param [array] data (входніе данніе)
	 * @param [array] attribute (управляем что віводім і как із входніх данніх data)
	 * @param [array] _element (куда будем віводіть табл)
	 * @param [array] _headerClass css class for table header

	 */

	constructor() {
		this._header = '';
		this._headerClass = [];
		this._tableClass = [];
		this._element = 'body';
		this.attribute = [];
	}

	/*
		Method set header 
	*/
	set header(header) {
		if (typeof header === 'string' && header.trim() != '') {
			this._header = header.trim();
			return true;
		}
		return false;

	}

	/*
		Method set headerClass
	*/
	set headerClass(headerClass) {
		if (typeof headerClass === 'object') {
			this._headerClass = headerClass;
			return true;
		}
		return false;

	}

	/*
		Method set element
	*/
	set element(element) {
		if (document.querySelector(element)) {
			this._element = element;
			return true;
		}
		return false;

	}



	/*
	 Method  for show GridViewTable
 */
	render() {
		// show header 
		if (this._header) {
			const header = document.createElement('h1');
			header.textContent = this._header;
			this._headerClass.forEach(cssClass => {
				header.classList.add(cssClass)
			});
			document.querySelector(this._element).append(header)
		}

		// show table
		const table = document.createElement('table');
		this._tableClass.forEach(cssClass => {
			table.classList.add(cssClass)
		});

		let trHeader = document.createElement('tr')
		for (let key in this.attribute) {
			let th = document.createElement('th');
			if (this.attribute[key].label) {
				th.textContent = this.attribute[key].label;
			} else {
				th.textContent = key;
			}
			trHeader.append(th)
		}

		table.append(trHeader)

		// draw table 

		for (let i =0;i < this.data.length; i++) {
			let dataArr = this.data[i];// 1 string of data  точнее один ебьект
			// console.log( 'this.data', this.data)
			// console.log('this.data[i]' ,this.data[i])
			// console.log('dataArr' ,dataArr)
			let tr = document.createElement('tr');
			for (let key in this.attribute) {
				let td = document.createElement('td');
				let value = dataArr[key];
				console.log('key=' , key);
				console.log(`dataArr[${key}]=` , dataArr[key]);
				if (this.attribute[key].value) {
					value = this.attribute[key].value(dataArr)
				} 
				if (this.attribute[key].valueChef) {
					value = this.attribute[key].valueChef(dataArr)
				} 
				if (this.attribute[key].src) {
					td.innerHTML = value;
				}
				else {
					td.textContent = value
				}
				tr.append(td)
			}
			table.append(tr)
		}

		document.querySelector(this._element).append(table)

	}
}