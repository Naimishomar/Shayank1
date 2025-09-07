import React,{useState} from 'react'

function News() {
    const [news, setNews] = useState([]);

    const fetchNews = async()=>{
        try {
            const response = await fetch('https://newsapi.org/v2/everything?q=disaster%20India&sortBy=popularity&apiKey=067df7392f654740830a87b2c24b0cd3');
            const data = await response.json();
            if (data.articles && data.articles.length > 0) {
                setNews(data.articles);
                console.log(data.articles);
            } else {
                console.log("No articles found.");
            }
        } catch (error) {
          console.log("Error fetching news:", error);     
        }
    }
  return (
    <div>
        <h1>News</h1>
        <button onClick={fetchNews} className='bg-blue-400 text-white px-5 py-2 rounded-full'>Fetch News</button>
        {news.map((article, index)=>(
            <div key={index}>
                <h2 className='text-2xl font-semibold'>{article.title}</h2>
                <p>{article.description}</p>
            </div>
        ))}

    </div>
  )
}

export default News