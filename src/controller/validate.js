import fetch from 'node-fetch'


//validate array of objet with Links 
export const validateLinks = (arrayLinks) => {
	const arrayPromesas = arrayLinks.map(link => {
		return fetch(link.href)
			.then((res) => {
				if (res.ok) {
					return {
						href: link.href,
						text: link.text,
						path: link.path,
						status: res.status,
						statusText: res.statusText
					};
				} else {
					return {
						href: link.href,
						text: link.text,
						path: link.path,
						status: res.status,
						statusText: 'Fail'
					}
				}
			})
			.catch(() => {
				return {
					href: link.href,
					text: link.text,
					path: link.path,
					status: undefined,
					statusText: 'Fail'
				}
			});
	})
	return Promise.all(arrayPromesas)
}

