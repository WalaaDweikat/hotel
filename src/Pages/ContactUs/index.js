import "./contactUs.css";
import Footer from "../../Components/Footer/index.js";
import arrow from "../../images/arrow.png";
import Form from "../../Components/Form/index.js";
export default function Home() {
  return (
    <div className="homeContainer">
      <div className="contactUs">
        <h1>CONTACT-US</h1>
      </div>
      <div className="p2">
        <div className="cu">
          <div className="whereAt">
            <p className="where">WE ARE HERE FOR YOU</p>
            <p className="at">
              At Luxury Hotels, we take our customers seriously. Do you have any
              enquiries, compaints or requests, please forward it to our support
              desk and we will get back to you as soon as possible.
            </p>
          </div>
          <div className="evForm">
            <div className="ev">
              <p>
                497 Evergreen Rd. Roseville,
                <br />
                CA 95673
              </p>
              <p>
                <b>View map</b>
                <img src={arrow} alt="arrow" />
              </p>
              <p>
                Phone: +44 345 678 903 <br />
                Email: luxury_hotels@gmail.com
              </p>
            </div>
            <Form />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
