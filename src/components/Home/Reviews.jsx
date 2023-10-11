import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";
const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    const fetchedData = [];

    const querySnapshot = await getDocs(collection(db, "reviews"));
    querySnapshot.forEach((doc) => {
      fetchedData.push(doc.data());
    });
    setReviews(fetchedData);
  }

  return (
    <div
      className=" bg-black text pt-20 pb-16 bg-cover bg-fixed bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(https://images.unsplash.com/photo-1582653291997-079a1c04e5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)",
      }}
    >
      <div className="w-4/5 md:w-3/4 mx-auto">
        <h1 className="text-white font-primary tracking-wide text-4xl text-center uppercase">
          What clients say
        </h1>
        {reviews.length > 0 && (
          <Carousel
            swipeable={false}
            showArrows={true}
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
            stopOnHover={false}
            autoPlay
            infiniteLoop
            interval={4000}
          >
            {reviews.map((review, idx) => (
              <div key={idx} className="p-3 min-h-[180px]">
                <p className="text-white my-3"> {review.review}</p>
                <p className="text-white font-bold">- {review.name}.</p>
              </div>
            ))}
          </Carousel>
        )}
      </div>
    </div>
  );
};

export default Reviews;
