import  { useState, useEffect } from "react";
import Loader from "../Loader/Loader";
import axios from 'axios';
import "./News.scss";

const News = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [showAllNews, setShowAllNews] = useState(false);

  const formatDate = (dateString) => {
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('ru-RU', options);
  };

  useEffect(() => {
    const fetchData = async () => {
      const url = "https://api.spaceflightnewsapi.net/v3/articles";

      try {
        const response = await axios.get(url);

        // console.log(response.data);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleToggleNews = () => {
    setShowAllNews((prev) => !prev);
  };

  return (
    <div className="news">
      <div className="container">
        <div className="news__title">Новости компании</div>
        {loading && <Loader />}
        {error && <p>Error occurred while fetching data</p>}
        <ul className="news__wrapper">
          {data?.map((article, index) => (
            <li className="news-item" key={article.id}>
              <img
                src={article.imageUrl}
                alt="photo"
                className="news-item_img"
              />
              <div className="news-item_body">
                <div className="news-item_date">{formatDate(article.publishedAt)}</div>
                <div className="news-item_title">{article.title.slice(0, 80) + '...'}</div>
                <div className="news-item_descr">{article.summary.slice(0, 80) + '...'}</div>
              </div>
            </li>
          )).slice(0, showAllNews ? undefined : 3)}
        </ul>
        {data && (
          <button className="news__btn" onClick={handleToggleNews}>
            {showAllNews ? "Mеньше новости" : "Все новости"}
          </button>
        )}
      </div>
    </div>
  );
};

export default News;
