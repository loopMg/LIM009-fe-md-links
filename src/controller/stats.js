export const statsLinks = (arrayObjLinks) => {
		
	let mySet = new Set();

	arrayObjLinks.forEach((element)=> {
		if(!mySet.has(element.href))
		{
			return mySet.add(element.href)
		}
		else 
		{
			return true
		}
	})
	const array = arrayObjLinks.length;
	const allLinks = `Total: ${array}`;
	const myarray = Array.from(mySet);
	const uniqueArray = myarray.length;
	const uniqueLinks = `Unique: ${uniqueArray}`;

	let result = `${allLinks} \n${uniqueLinks}`
	return result
}

export const statsValidate = (arrayObjLinks) => {
	let brokens = [];
	arrayObjLinks.forEach((element) => {
		 if(element.statusText !== 'OK') 
		{
		 brokens.push(element);
		}
	})
	let brokensArray = brokens.length;
	let brokensLinks = `Brokens: ${brokensArray}`;
	return brokensLinks
}