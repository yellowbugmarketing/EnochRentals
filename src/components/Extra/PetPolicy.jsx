import MiniHeader from "../../layout/MainLayout/MiniHeader";
import Footer from "../../reusable/Footer";
import DogImg from "../../assets/images/dog.png";

const PetPolicy = () => {
  return (
    <div>
      <MiniHeader heading={"What We Do"} subHeading={""} />

      <div className="min-h-screen max-w-screen-xl px-4 py-8  md:p-10  mx-auto">
        <h1 className="font-primary tracking-wide text-5xl text-[#00b3c0] font-medium mt-8">
          Pet-Friendly Pet Policy
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="col-span-2 self-center">
            <p className="text-lg my-4">
            Many of our homes are pet friendly and will accept a maximum of 2 pets,
            except for cats which are not allowed. If you apply for or reside in 
            one of our homes and wish to have a pet, excluding cats,
            you will need to complete an online pet profile and pay a 
            non-refundable pet application fee of $250. In the case of questions, 
            the Landlord will make the final determination as to the breed or classification of any pet.
            </p>
          </div>
          <img
            src={DogImg}
            alt=""
            className="my-4   mx-auto h-[300px] -mt-20"
          />
        </div>
        {/*} <p className="text-lg my-4">
          If your pet is approved you will need to pay a non-refundable lease
          administration fee of $500 plus a resident amenity fee of $30 for one
          pet or $40 per month for two pets. Grace Management does accept
          assistant animals per state and federal guidelines. If you have an
          assistance animal, you will need to complete an online animal profile.
          There is no application fee for this process. Please contact our
          office with any questions. Unfortunately our insurance company will
          not allow the following dog breeds, even in our pet friendly homes:
  </p>*/}
        {/*<h1 className="font-primary tracking-wide text-2xl font-semibold  text-[#00b3c0] mt-6">
          Some services that all fall under property management are:
        </h1>

        <ul className="my-3 space-y-1 text-lg list-decimal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-10">
          <li>Rent Collection</li>
          <li>Tenant Relations</li>
          <li>Property Marketing</li>
          <li>Applicant Screening</li>
          <li>Accounting and Reporting</li>
          <li>Ongoing Inspections</li>
          <li>Maintenance Coordination</li>
          <li>Tenant Turnover and Evictions</li>
  </ul>*/}

        {/*<p className="text-md my-4">
          Any dog known to have vicious tendencies or known to have previously
          bitten someone is not permitted.
        </p>
        <p className="text-md my-4">
          Any dog or cat under the age of one year is not allowed.
        </p>
        <p className="text-md my-4">Ferrets are not allowed.</p>
        <p className="text-md my-4">
          All pet reptiles, amphibians, rodents and birds must be caged.
        </p>
        <p className="text-md my-4">
          Dog breeds other than those listed above and cats are considered on a
          case-by-case basis.
        </p>
        <p className="text-md my-4">
          In the case of questions, the Landlord will make the final
          determination as to the breed or classification of any animal.
  </p>*/}
      </div>
      <Footer />
    </div>
  );
};

export default PetPolicy;
