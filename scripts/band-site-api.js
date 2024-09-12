const apiKEY = "fd3c0df7-6310-4cec-9694-29cf914c5af2";
class BandSiteApi {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com";
    }
    async postComment(comment) {
        try {
            const response = await fetch(`${this.baseUrl}/comments?api_key=${this.apiKey}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(comment)
            });

            if (!response.ok) {
                throw new Error('Failed to post comment');
            }

            const data = await response.json();
            return data;  // Return response from API after posting
        } catch (error) {
            console.error('Error posting comment:', error);
        }
    }

    async getComments() {
        try {
            const response = await axios.get(`${this.baseUrl}/comments?api_key=${this.apiKey}`);
            const comments = response.data;
            // Sort comments from newest to oldest
            return comments.sort((a, b) => new Date(b.date) - new Date(a.date));
        } catch (error) {
            console.error('Error fetching comments:', error);
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

const bandApi = new BandSiteApi("821b0af8-cb8c-4c6a-9c47-0d7da5d506ed");

(async () => {
    // Post a comment
    const comment = {
        name: 'John Doe',
        comment: 'Great show!',
        // date: new Date().toISOString()
    };
    await bandApi.postComment(comment);

})();

export {BandSiteApi, apiKEY};