//getting this apikey to start a session to fetch and update the data
const apiKEY= getApiKey();
function getApiKey() {(async() =>{
    let response = await axios.get("https://unit-2-project-api-25c1595833b2.herokuapp.com/register");
    console.log(response.data);
    return response.data[0]["api_key"];
})();
}

class BandSiteApi {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com";
    }
    async postComment(comment) {
        try {
            const response = await axios.post(`${this.baseUrl}/comments?api_key=${this.apiKey}`,
                {
                    name: comment.name,
                    comment: comment.comment 
                }    
            );
            const data = response.data;
            return data;  // Return response from API after posting
        } catch (error) {
            console.error('Error posting comment:', error);
        }
    }

    async likeComment(id) {
        try {
            const response = await axios.put(`${this.baseUrl}/comments/${id}/like?api_key=${this.apiKey}`);
            const data = response.data;
            return data;  // Return response from API after posting
        } catch (error) {
            console.error('Error liking comment:', error);
        }
    }

    async getComments() {
        try {
            const response = await axios.get(`${this.baseUrl}/comments?api_key=${this.apiKey}`);
            const comments = response.data;
            // Sort comments from newest to oldest
            return comments.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
        } catch (error) {
            console.error('Error fetching comments:', error);
        }
    }

    async deleteComment(id) {
        try {
            const response = await axios.delete(`${this.baseUrl}/comments/${id}?api_key=${this.apiKey}`);
            return response.data;
        } catch (error) {
            console.error('Error deleting comment:', error);
        }
    }

    async getShows() {
        
        try {
            const response = await axios.get(`${this.baseUrl}/showdates?api_key=${this.apiKey}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching shows:', error);
        }
    }
}
export {BandSiteApi, apiKEY};