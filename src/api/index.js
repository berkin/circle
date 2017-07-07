import v4 from 'node-uuid'

const url = 'https://jsonplaceholder.typicode.com/posts'

export const fetchArticle = id =>
	fetch(url)
		.then((response) => {
			console.log(response)
		});
