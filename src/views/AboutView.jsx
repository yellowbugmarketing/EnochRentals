import About from "../components/Home/About";
import Reviews from "../components/Home/Reviews";
import MiniHeader from "../layout/MainLayout/MiniHeader";
import Footer from "../reusable/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import LeaveAMessage from "../components/Home/LeaveAMessage";
const AboutView = () => {
  return (
    <div>
      <MiniHeader heading={"About Us"} subHeading={""} />
      <div className="p-10  max-w-screen-lg mx-auto text-center tracking-wide">
        <h1 className="font-primary text-center text-3xl my-10">ABOUT</h1>
        <hr className="max-w-lg mx-auto" />

        <p className="font-primary my-10  text-secondary leading-6 tracking-widest">
          Established in 2015, ENOCH Properties is full-service residential and
          commercial property management company servicing Fort Worth with an
          unwavering dedication toward the optimization of each property under
          management. With offices in Fort Worth, ENOCH Properties is able to
          meticulously manage client investments thoroughout Fort Worth,
          ensuring each is operating at its highest and best use.
        </p>

        <p className="font-primary my-10  text-secondary leading-6 tracking-widest">
          Diversifying further, ENOCH Properties multidisciplinary team is
          unmatched in the industry. With both an in-house legal department and
          CPA’s on staff, our operation is able to avoid legal/tax issues at the
          outset and optimize revenue streams to their full potential. In the
          event legal issues do occur, our team can provide legal guidance and
          limit liability efficiently.
        </p>
        <hr className="max-w-lg mx-auto" />
      </div>
      {/* <div className=" text pt-10 pb-16 bg-cover bg-fixed bg-center bg-no-repeat">
        <div className="w-4/5 md:w-3/4 mx-auto">
          <h1 className="font-primary tracking-wide text-2xl text-center uppercase mb-5">
            What clients say
          </h1>
          <Carousel
            swipeable={true}
            showArrows={false}
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
            autoPlay={true}
            infiniteLoop={true}
          >
            <div key="slide1" className="p-3 min-h-[180px]">
              <p className="my-3 text-secondary tracking-wide text-md leading-6">
                {" "}
                Throughout the management of our portfolio of over 150 units,
                CREM Management has consistently exuded transparency, honest and
                a commitment to manage costs as if each property was their own.
                As owners in real estate portfolios themselves, they seemed to
                be directly aligned with our interest in the diligent and
                economically efficient management of our units. They're truly
                that unicorn vendor and we're so happy with our partnership.
              </p>
              <p className="font-bold">
                - DAVE TRIKIN, TRIKIN CAPITA MANAGEMENT.
              </p>
            </div>
            <div key="slide2" className="p-3 min-h-[180px]">
              <p className="my-3 text-secondary tracking-wide text-md leading-6">
                I cannot stress this enough, for any multifamily/retail property
                management needs, CREM Mangement is a must consideration. Their
                management prices are at market but their service, without a
                doubt, is above anything we've experienced on the management
                side. Unfortunately, it took us 4 years, headaches and multiple
                management companies to finally connect.
              </p>
              <p className="font-bold">
                - DAVE TRIKIN, TRIKIN CAPITA MANAGEMENT.
              </p>{" "}
            </div>
          </Carousel>
        </div>
      </div> */}
      {/* <Reviews /> */}
      <LeaveAMessage header={"TELL US ABOUT YOUR PROPERTY NEEDS"} />
      <Footer />
    </div>
  );
};

export default AboutView;
