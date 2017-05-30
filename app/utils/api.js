var axios = require('axios');

module.exports = {
	fetchPopularRepos: function(language){
		var theURI = 'https://api.github.com/search/repositories?q=stars:>1+language:'+ language + '&sort=stars&order=desc&type=Repositories';
		console.log(theURI);
		var encodedURI = window.encodeURI(theURI);
		return axios.get(encodedURI)
			.then(function(response){
				return(response.data.items);
			})
	}
}