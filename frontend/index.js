document.addEventListener("DOMContentLoaded", () => {
    
    const fetchData = async (url) => {
        try{
            let res = await axios.get("https://api.giphy.com/v1/gifs/search?api_key=jenUJENXsFxpplM3rz4FBpwGl0VoJTXu&q=&limit=25&offset=0&rating=G&lang=en")
            console.log(res.data)
            debugger
        } catch(err) {
            console.log(err);
            
        }
    }
    fetchData()
})