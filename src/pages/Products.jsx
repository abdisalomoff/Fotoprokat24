import { useDispatch, useSelector } from "react-redux";
import "./Products.scss";
import { fetchData } from "../components/redux/slice/fetchData.slice";
import { useEffect } from "react";
import Loader from "../components/UI/Loader/Loader";
import ProductCard from "../components/UI/ProductCard/ProductCard";

const Products = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.data);

  useEffect(() => {
    const popularUrl = "https://real-time-product-search.p.rapidapi.com/search";
    const popularOptions = {
      method: "GET",
      params: {
        q: "canon sony camera",
        country: "us",
        language: "en",
      },
      headers: {
        "X-RapidAPI-Host": "real-time-product-search.p.rapidapi.com",
        "X-RapidAPI-Key": "fbce8f334dmsha455e3f17e5cccbp1e6f9djsnb461c372bb26",
      },
    };

    dispatch(fetchData({ url: popularUrl, options: popularOptions }));
  }, []);

  useEffect(() => {
    if (data) {
      console.log(data.data);
    }
  }, [data]);

  return (
    <main>
      <section className="products container">
        <h5 className="products__heading">Главная / Sony</h5>
        <h1 className="products__type">Фотокамеры</h1>
        <p className="products__mark">Canon</p>
        {loading && <Loader />}
        {error && <p>Error occurred while fetching data</p>}
        <ul className="products__list">
          {data?.data?.map((item) => (
            <li key={item?.product_id} className="products__item">
              <ProductCard item={item} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Products;
