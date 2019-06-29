export const stats = (arrayObjLinks) => {
	const array = arrayObjLinks.length;
	const allArray = `Total: ${array}`;
	console.log(allArray);

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
	const myarray = Array.from(mySet);
	const uniqueLinks = myarray.length;
	const uniqueArray = `Unique: ${uniqueLinks}`;
	console.log(uniqueArray);
}

stats(arrayObjLinks);

