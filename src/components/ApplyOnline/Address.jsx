import { useContext } from "react";
import { ApplyOnlineContext } from "../../context/ApplyOnlineContext";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { Autocomplete } from "@react-google-maps/api";

const phoneRegExp = /^(1\s?)?(\d{3}|\(\d{3}\))[\s\\-]?\d{3}[\s\\-]?\d{4}$/;
const schema = yup
  .object({
    streetAddress: yup.string().required("Address is Required"),
    subAddress: yup.string(),
    city: yup
      .string()
      .matches(/^[a-zA-Z]+$/, "Only letters are allowed")
      .required("City is Required"),
    state: yup
      .string()
      .matches(/^[a-zA-Z]+$/, "Only letters are allowed")
      .required("State is Required"),
    zip: yup
      .string()
      .required("Zip is Required")
      .matches(
        /^\d{5}(?:[-\s]\d{4})?$/,
        'Zip code must be in the format "xxxxx" or "xxxxx-xxxx"'
      ),
    country: yup.string(),
    residedFrom: yup.date().required("Resided From is Required"),

    oldRent: yup
      .number("Enter a Number")
      .required("Monthly Rent is Required")
      .typeError("Is not a number"),
    landLordName: yup
      .string()
      .matches(/^[a-zA-Z]+$/, "Only letters are allowed")
      .required("Landlord Name is Required"),
    landLordEmail: yup.string().email().required("Landlord Email is Required"),
    landLordPhone: yup
      .string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required(),
    reasonForLeaving: yup.string().required("Reason For Leaving is Required"),
  })
  .required();

export default function Address() {
  const PAGE_ID = 3;
  const { status, setStatus } = useContext(ApplyOnlineContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(schema),
    defaultValues: status[PAGE_ID - 1]?.data,
  });

  const navigation = useNavigate();
  const onSubmit = (data) => {
    const state = status.map((status) => {
      if (status.id === PAGE_ID) return { ...status, status: 2, data };
      else if (status.status !== 2 && status.id === 4)
        return { ...status, status: 1 };
      else return status;
    });
    setStatus(state);

    navigation("/apply-online/co-applicants");
  };
  const [location, setLocation] = useState(null);
  const [autocomplete, setAutocomplete] = useState(null);

  const onLoad = (autoC) => {
    setAutocomplete(autoC);
  };

  const onPlaceChanged = () => {
    setLocation(autocomplete.getPlace().formatted_address);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Where you've lived
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Please provide 3 years of residential history
          </p>
          <h2 className="text-base font-light my-3 leading-7 text-blue-500 border-b-2 pb-1 ">
            Where you've lived
          </h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
            <div className="col-span-full">
              <label
                htmlFor="streetAddress"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Address 1 <span className="text-red-600">*</span>
              </label>
              <div className="mt-2">
                <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                  <input
                    {...register("streetAddress")}
                    value={location}
                    onChange={(e) => {
                      setLocation(e.target.value);
                    }}
                    type="text"
                    name="streetAddress"
                    id="streetAddress"
                    autoComplete="streetAddress"
                    className={`${
                      !!errors.streetAddress ? "error-input" : "normal-input"
                    }`}
                  />
                </Autocomplete>
                <p className="text-xs mt-1 text-red-500">
                  {errors.streetAddress?.message}
                </p>
              </div>
            </div>
            <div className="col-span-full">
              <label
                htmlFor="subAddress"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Address 2
              </label>
              <div className="mt-2">
                <input
                  {...register("subAddress")}
                  type="text"
                  name="subAddress"
                  id="subAddress"
                  autoComplete="subAddress"
                  className={`${
                    !!errors.subAddress ? "error-input" : "normal-input"
                  }`}
                />{" "}
                <p className="text-xs mt-1 text-red-500">
                  {errors.subAddress?.message}
                </p>
              </div>
            </div>
            <div className="sm:col-span-2 sm:col-start-1">
              <label
                htmlFor="city"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                City <span className="text-red-600">*</span>
              </label>
              <div className="mt-2">
                <input
                  {...register("city")}
                  type="text"
                  name="city"
                  id="city"
                  autoComplete="city"
                  className={`${
                    !!errors.city ? "error-input" : "normal-input"
                  }`}
                />{" "}
                <p className="text-xs mt-1 text-red-500">
                  {errors.city?.message}
                </p>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="region"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                State / Province <span className="text-red-600">*</span>
              </label>
              <div className="mt-2">
                <select
                  {...register("state")}
                  name="state"
                  className={`${
                    !!errors.state ? "error-input" : "normal-input"
                  }`}
                >
                  <option value=""></option>
                  <option value="AA">AA</option>
                  <option value="AE">AE</option>
                  <option value="AK">AK</option>
                  <option value="AL">AL</option>
                  <option value="AP">AP</option>
                  <option value="AR">AR</option>
                  <option value="AS">AS</option>
                  <option value="AZ">AZ</option>
                  <option value="CA">CA</option>
                  <option value="CO">CO</option>
                  <option value="CT">CT</option>
                  <option value="DC">DC</option>
                  <option value="DE">DE</option>
                  <option value="FL">FL</option>
                  <option value="FM">FM</option>
                  <option value="GA">GA</option>
                  <option value="GU">GU</option>
                  <option value="HI">HI</option>
                  <option value="IA">IA</option>
                  <option value="ID">ID</option>
                  <option value="IL">IL</option>
                  <option value="IN">IN</option>
                  <option value="KS">KS</option>
                  <option value="KY">KY</option>
                  <option value="LA">LA</option>
                  <option value="MA">MA</option>
                  <option value="MD">MD</option>
                  <option value="ME">ME</option>
                  <option value="MH">MH</option>
                  <option value="MI">MI</option>
                  <option value="MN">MN</option>
                  <option value="MO">MO</option>
                  <option value="MP">MP</option>
                  <option value="MS">MS</option>
                  <option value="MT">MT</option>
                  <option value="NC">NC</option>
                  <option value="ND">ND</option>
                  <option value="NE">NE</option>
                  <option value="NH">NH</option>
                  <option value="NJ">NJ</option>
                  <option value="NM">NM</option>
                  <option value="NV">NV</option>
                  <option value="NY">NY</option>
                  <option value="OH">OH</option>
                  <option value="OK">OK</option>
                  <option value="OR">OR</option>
                  <option value="PA">PA</option>
                  <option value="PR">PR</option>
                  <option value="RI">RI</option>
                  <option value="SC">SC</option>
                  <option value="SD">SD</option>
                  <option value="TN">TN</option>
                  <option value="TX">TX</option>
                  <option value="UT">UT</option>
                  <option value="VA">VA</option>
                  <option value="VI">VI</option>
                  <option value="VT">VT</option>
                  <option value="WA">WA</option>
                  <option value="WI">WI</option>
                  <option value="WV">WV</option>
                  <option value="WY">WY</option>
                </select>
                <p className="text-xs mt-1 text-red-500">
                  {errors.state?.message}
                </p>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="zip"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                ZIP / Postal code <span className="text-red-600">*</span>
              </label>
              <div className="mt-2">
                <input
                  {...register("zip")}
                  type="text"
                  name="zip"
                  id="zip"
                  autoComplete="zip"
                  className={`${!!errors.zip ? "error-input" : "normal-input"}`}
                />{" "}
                <p className="text-xs mt-1 text-red-500">
                  {errors.zip?.message}
                </p>
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="country"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Country <span className="text-red-600">*</span>
              </label>
              <div className="mt-2">
                <select
                  {...register("country")}
                  id="country"
                  name="country"
                  autoComplete="country"
                  className={`${
                    !!errors.country ? "error-input" : "normal-input"
                  }`}
                  value={"US"}
                >
                  <option selected="selected" value="US">
                    United States
                  </option>
                  <option value="CA">Canada</option>
                  <option value="AF">Afghanistan</option>
                  <option value="AL">Albania</option>
                  <option value="DZ">Algeria</option>
                  <option value="AD">Andorra</option>
                  <option value="AO">Angola</option>
                  <option value="AI">Anguilla</option>
                  <option value="AQ">Antarctica</option>
                  <option value="AG">Antigua &amp; Barbuda</option>
                  <option value="AR">Argentina</option>
                  <option value="AM">Armenia</option>
                  <option value="AW">Aruba</option>
                  <option value="AU">Australia</option>
                  <option value="AT">Austria</option>
                  <option value="AZ">Azerbaijan</option>
                  <option value="BS">Bahamas</option>
                  <option value="BH">Bahrain</option>
                  <option value="BD">Bangladesh</option>
                  <option value="BB">Barbados</option>
                  <option value="BY">Belarus</option>
                  <option value="BE">Belgium</option>
                  <option value="BZ">Belize</option>
                  <option value="BJ">Benin</option>
                  <option value="BM">Bermuda</option>
                  <option value="BT">Bhutan</option>
                  <option value="BO">Bolivia</option>
                  <option value="BA">Bosnia &amp; Herzegovina</option>
                  <option value="BW">Botswana</option>
                  <option value="BV">Bouvet Island</option>
                  <option value="BR">Brazil</option>
                  <option value="GB">Britain (UK)</option>
                  <option value="IO">British Indian Ocean Territory</option>
                  <option value="BN">Brunei</option>
                  <option value="BG">Bulgaria</option>
                  <option value="BF">Burkina Faso</option>
                  <option value="BI">Burundi</option>
                  <option value="KH">Cambodia</option>
                  <option value="CM">Cameroon</option>
                  <option value="CV">Cape Verde</option>
                  <option value="BQ">Caribbean NL</option>
                  <option value="KY">Cayman Islands</option>
                  <option value="CF">Central African Rep.</option>
                  <option value="TD">Chad</option>
                  <option value="CL">Chile</option>
                  <option value="CN">China</option>
                  <option value="CX">Christmas Island</option>
                  <option value="CC">Cocos (Keeling) Islands</option>
                  <option value="CO">Colombia</option>
                  <option value="KM">Comoros</option>
                  <option value="CD">Congo (Dem. Rep.)</option>
                  <option value="CG">Congo (Rep.)</option>
                  <option value="CK">Cook Islands</option>
                  <option value="CR">Costa Rica</option>
                  <option value="HR">Croatia</option>
                  <option value="CU">Cuba</option>
                  <option value="CW">Curaçao</option>
                  <option value="CY">Cyprus</option>
                  <option value="CZ">Czech Republic</option>
                  <option value="CI">Côte d'Ivoire</option>
                  <option value="DK">Denmark</option>
                  <option value="DJ">Djibouti</option>
                  <option value="DM">Dominica</option>
                  <option value="DO">Dominican Republic</option>
                  <option value="TL">East Timor</option>
                  <option value="EC">Ecuador</option>
                  <option value="EG">Egypt</option>
                  <option value="SV">El Salvador</option>
                  <option value="GQ">Equatorial Guinea</option>
                  <option value="ER">Eritrea</option>
                  <option value="EE">Estonia</option>
                  <option value="SZ">Eswatini (Swaziland)</option>
                  <option value="ET">Ethiopia</option>
                  <option value="FK">Falkland Islands</option>
                  <option value="FO">Faroe Islands</option>
                  <option value="FJ">Fiji</option>
                  <option value="FI">Finland</option>
                  <option value="FR">France</option>
                  <option value="GF">French Guiana</option>
                  <option value="PF">French Polynesia</option>
                  <option value="TF">
                    French Southern &amp; Antarctic Lands
                  </option>
                  <option value="GA">Gabon</option>
                  <option value="GM">Gambia</option>
                  <option value="GE">Georgia</option>
                  <option value="DE">Germany</option>
                  <option value="GH">Ghana</option>
                  <option value="GI">Gibraltar</option>
                  <option value="GR">Greece</option>
                  <option value="GL">Greenland</option>
                  <option value="GD">Grenada</option>
                  <option value="GP">Guadeloupe</option>
                  <option value="GU">Guam</option>
                  <option value="GT">Guatemala</option>
                  <option value="GG">Guernsey</option>
                  <option value="GN">Guinea</option>
                  <option value="GW">Guinea-Bissau</option>
                  <option value="GY">Guyana</option>
                  <option value="HT">Haiti</option>
                  <option value="HM">
                    Heard Island &amp; McDonald Islands
                  </option>
                  <option value="HN">Honduras</option>
                  <option value="HK">Hong Kong</option>
                  <option value="HU">Hungary</option>
                  <option value="IS">Iceland</option>
                  <option value="IN">India</option>
                  <option value="ID">Indonesia</option>
                  <option value="IR">Iran</option>
                  <option value="IQ">Iraq</option>
                  <option value="IE">Ireland</option>
                  <option value="IM">Isle of Man</option>
                  <option value="IL">Israel</option>
                  <option value="IT">Italy</option>
                  <option value="JM">Jamaica</option>
                  <option value="JP">Japan</option>
                  <option value="JE">Jersey</option>
                  <option value="JO">Jordan</option>
                  <option value="KZ">Kazakhstan</option>
                  <option value="KE">Kenya</option>
                  <option value="KI">Kiribati</option>
                  <option value="KP">Korea (North)</option>
                  <option value="KR">Korea (South)</option>
                  <option value="KW">Kuwait</option>
                  <option value="KG">Kyrgyzstan</option>
                  <option value="LA">Laos</option>
                  <option value="LV">Latvia</option>
                  <option value="LB">Lebanon</option>
                  <option value="LS">Lesotho</option>
                  <option value="LR">Liberia</option>
                  <option value="LY">Libya</option>
                  <option value="LI">Liechtenstein</option>
                  <option value="LT">Lithuania</option>
                  <option value="LU">Luxembourg</option>
                  <option value="MO">Macau</option>
                  <option value="MG">Madagascar</option>
                  <option value="MW">Malawi</option>
                  <option value="MY">Malaysia</option>
                  <option value="MV">Maldives</option>
                  <option value="ML">Mali</option>
                  <option value="MT">Malta</option>
                  <option value="MH">Marshall Islands</option>
                  <option value="MQ">Martinique</option>
                  <option value="MR">Mauritania</option>
                  <option value="MU">Mauritius</option>
                  <option value="YT">Mayotte</option>
                  <option value="MX">Mexico</option>
                  <option value="FM">Micronesia</option>
                  <option value="MD">Moldova</option>
                  <option value="MC">Monaco</option>
                  <option value="MN">Mongolia</option>
                  <option value="ME">Montenegro</option>
                  <option value="MS">Montserrat</option>
                  <option value="MA">Morocco</option>
                  <option value="MZ">Mozambique</option>
                  <option value="MM">Myanmar (Burma)</option>
                  <option value="NA">Namibia</option>
                  <option value="NR">Nauru</option>
                  <option value="NP">Nepal</option>
                  <option value="NL">Netherlands</option>
                  <option value="NC">New Caledonia</option>
                  <option value="NZ">New Zealand</option>
                  <option value="NI">Nicaragua</option>
                  <option value="NE">Niger</option>
                  <option value="NG">Nigeria</option>
                  <option value="NU">Niue</option>
                  <option value="NF">Norfolk Island</option>
                  <option value="MK">North Macedonia</option>
                  <option value="MP">Northern Mariana Islands</option>
                  <option value="NO">Norway</option>
                  <option value="OM">Oman</option>
                  <option value="PK">Pakistan</option>
                  <option value="PW">Palau</option>
                  <option value="PS">Palestine</option>
                  <option value="PA">Panama</option>
                  <option value="PG">Papua New Guinea</option>
                  <option value="PY">Paraguay</option>
                  <option value="PE">Peru</option>
                  <option value="PH">Philippines</option>
                  <option value="PN">Pitcairn</option>
                  <option value="PL">Poland</option>
                  <option value="PT">Portugal</option>
                  <option value="PR">Puerto Rico</option>
                  <option value="QA">Qatar</option>
                  <option value="RO">Romania</option>
                  <option value="RU">Russia</option>
                  <option value="RW">Rwanda</option>
                  <option value="RE">Réunion</option>
                  <option value="AS">Samoa (American)</option>
                  <option value="WS">Samoa (western)</option>
                  <option value="SM">San Marino</option>
                  <option value="ST">Sao Tome &amp; Principe</option>
                  <option value="SA">Saudi Arabia</option>
                  <option value="SN">Senegal</option>
                  <option value="RS">Serbia</option>
                  <option value="SC">Seychelles</option>
                  <option value="SL">Sierra Leone</option>
                  <option value="SG">Singapore</option>
                  <option value="SK">Slovakia</option>
                  <option value="SI">Slovenia</option>
                  <option value="SB">Solomon Islands</option>
                  <option value="SO">Somalia</option>
                  <option value="ZA">South Africa</option>
                  <option value="GS">
                    South Georgia &amp; the South Sandwich Islands
                  </option>
                  <option value="SS">South Sudan</option>
                  <option value="ES">Spain</option>
                  <option value="LK">Sri Lanka</option>
                  <option value="BL">St Barthelemy</option>
                  <option value="SH">St Helena</option>
                  <option value="KN">St Kitts &amp; Nevis</option>
                  <option value="LC">St Lucia</option>
                  <option value="SX">St Maarten (Dutch)</option>
                  <option value="MF">St Martin (French)</option>
                  <option value="PM">St Pierre &amp; Miquelon</option>
                  <option value="VC">St Vincent</option>
                  <option value="SD">Sudan</option>
                  <option value="SR">Suriname</option>
                  <option value="SJ">Svalbard &amp; Jan Mayen</option>
                  <option value="SE">Sweden</option>
                  <option value="CH">Switzerland</option>
                  <option value="SY">Syria</option>
                  <option value="TW">Taiwan</option>
                  <option value="TJ">Tajikistan</option>
                  <option value="TZ">Tanzania</option>
                  <option value="TH">Thailand</option>
                  <option value="TG">Togo</option>
                  <option value="TK">Tokelau</option>
                  <option value="TO">Tonga</option>
                  <option value="TT">Trinidad &amp; Tobago</option>
                  <option value="TN">Tunisia</option>
                  <option value="TR">Turkey</option>
                  <option value="TM">Turkmenistan</option>
                  <option value="TC">Turks &amp; Caicos Is</option>
                  <option value="TV">Tuvalu</option>
                  <option value="UM">US minor outlying islands</option>
                  <option value="UG">Uganda</option>
                  <option value="UA">Ukraine</option>
                  <option value="AE">United Arab Emirates</option>
                  <option value="UY">Uruguay</option>
                  <option value="UZ">Uzbekistan</option>
                  <option value="VU">Vanuatu</option>
                  <option value="VA">Vatican City</option>
                  <option value="VE">Venezuela</option>
                  <option value="VN">Vietnam</option>
                  <option value="VG">Virgin Islands (UK)</option>
                  <option value="VI">Virgin Islands (US)</option>
                  <option value="WF">Wallis &amp; Futuna</option>
                  <option value="EH">Western Sahara</option>
                  <option value="YE">Yemen</option>
                  <option value="ZM">Zambia</option>
                  <option value="ZW">Zimbabwe</option>
                  <option value="AX">Åland Islands</option>
                </select>
                <p className="text-xs mt-1 text-red-500">
                  {errors.country?.message}
                </p>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="date"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Resided From <span className="text-red-600">*</span>
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset sm:max-w-xs outline-none">
                  <input
                    type="month"
                    name="date"
                    {...register("residedFrom")}
                    id="date"
                    className={`${
                      !!errors.residedFrom ? "error-input" : "normal-input"
                    }`}
                  />
                </div>
                <p className="text-xs mt-1 text-red-500">
                  {errors.residedFrom?.message}
                </p>
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="oldRent"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Monthly Rent <span className="text-red-600">*</span>
              </label>
              <div className="mt-2">
                <input
                  {...register("oldRent")}
                  type="text"
                  name="oldRent"
                  id="oldRent"
                  autoComplete="oldRent"
                  className={`${
                    !!errors.oldRent ? "error-input" : "normal-input"
                  }`}
                />
                <p className="text-xs mt-1 text-red-500">
                  {errors.oldRent?.message}
                </p>
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="landLordName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Landlord Name <span className="text-red-600">*</span>
              </label>
              <div className="mt-2">
                <input
                  {...register("landLordName")}
                  type="text"
                  name="landLordName"
                  id="landLordName"
                  autoComplete="landLordName"
                  className={`${
                    !!errors.landLordName ? "error-input" : "normal-input"
                  }`}
                />
                <p className="text-xs mt-1 text-red-500">
                  {errors.landLordName?.message}
                </p>
              </div>
            </div>
            <div className="col-span-full">
              <label
                htmlFor="landLordPhone"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Landlord Phone Number <span className="text-red-600">*</span>
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  {...register("landLordPhone")}
                  name="landLordPhone"
                  id="landLordPhone"
                  autoComplete="landLordPhone"
                  className={`${
                    !!errors.landLordPhone ? "error-input" : "normal-input"
                  }`}
                />
                <p className="text-xs mt-1 text-red-500">
                  {errors.landLordPhone?.message}
                </p>
              </div>
            </div>
            <div className="col-span-full">
              <label
                htmlFor="landLordEmail"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Landlord Email Address <span className="text-red-600">*</span>
              </label>
              <div className="mt-2">
                <input
                  {...register("landLordEmail")}
                  type="email"
                  name="landLordEmail"
                  id="landLordEmail"
                  autoComplete="landLordEmail"
                  className={`${
                    !!errors.landLordEmail ? "error-input" : "normal-input"
                  }`}
                />
                <p className="text-xs mt-1 text-red-500">
                  {errors.landLordEmail?.message}
                </p>
              </div>
            </div>
            <div className="col-span-full">
              <label
                htmlFor="reasonForLeaving"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Reason For Leaving <span className="text-red-600">*</span>
              </label>
              <div className="mt-2">
                <textarea
                  {...register("reasonForLeaving")}
                  id="reasonForLeaving"
                  name="reasonForLeaving"
                  rows="3"
                  className={`${
                    !!errors.reasonForLeaving ? "error-input" : "normal-input"
                  }`}
                ></textarea>
                <p className="text-xs mt-1 text-red-500">
                  {errors.reasonForLeaving?.message}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3 flex items-center justify-end gap-x-1">
        <Link to="/apply-online/contact-info">
          <button
            type="button"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Previous
          </button>
        </Link>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Continue
        </button>
      </div>
    </form>
  );
}
