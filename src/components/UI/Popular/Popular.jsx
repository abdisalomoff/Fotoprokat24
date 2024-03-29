import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/slice/fetchData.slice";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Loader from "../Loader/Loader";
import ProductCard from "../ProductCard/ProductCard";


const Popular = () => {
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
        "X-RapidAPI-Key": "53a76964e3mshf67bfcb5a2b5331p178ff6jsn6470922ad379",
      },
    };

    dispatch(fetchData({ url: popularUrl, options: popularOptions }));
  }, []);

  useEffect(() => {
    if (data) {
      console.log(data.data);
    }
  }, [data]);

//   if (!data?.data || !Array.isArray(data?.data)) {
//     console.error(error);
//     return null;
//   }

  return (
    <div className="products">
      <div className="products__inner container">
        <div className="products__title">Популярные товары</div>
        {loading && <Loader />}
        {error && <p>Error occurred while fetching data</p>}
        <Swiper
          slidesPerView={3}
          spaceBetween={15}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="products__wrapper"
        >
            
          {data?.data?.map((item) => (
            <SwiperSlide key={item?.product_id}>
              <ProductCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Popular;