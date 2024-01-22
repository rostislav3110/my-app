import React, { useEffect, useState } from 'react';
import getData from '../utils/getData';

const path = "everything?q=bitcoin&apiKey=6acf5cf1eb0c49cf88bfcac5365415a3";

const News = () => {

  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    async function fetchNewsData () {
      try {
        const getNewsData = await getData(path, "apiNews");
        setNewsData(getNewsData)
      } catch(error) {
        console.error(error);
      }
    }
    fetchNewsData()
  }, []);


  return (
    <div>
      <h1>Top news for you</h1>
      {newsData.articles?.map((newsItem, index) => {
        return (
          <div key={index}>
            <h1>{newsItem.title}</h1>
            <div>
              <img src={newsItem.urlToImage} alt="" />
            </div>
            <p>{newsItem.description}</p>
          </div>
        )
      })}
    </div>
  )
};

export default News;