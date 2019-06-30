

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
	const allArray = `Total: ${array}`;
	const myarray = Array.from(mySet);
	const uniqueLinks = myarray.length;
	const uniqueArray = `Unique: ${uniqueLinks}`;

	let result = `${allArray} \n${uniqueArray}`
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
	let totalBrokens = brokens.length;
	return totalBrokens
}