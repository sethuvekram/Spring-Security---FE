import React, { useEffect } from "react";
import "./Footer.scss";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocalShippingTwoToneIcon from "@mui/icons-material/LocalShippingTwoTone";
import SupportAgentTwoToneIcon from "@mui/icons-material/SupportAgentTwoTone";
import AssignmentReturnIcon from "@mui/icons-material/AssignmentReturn";
import AOS from "aos";
function Footer() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="total-footer">
    <div className="our_service">
      <div className="footer-left">
        <div className="footer" data-aos="fade-right">
          {/* <section
        className="services"
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
      > */}
          <div className="headf">
            <h2 id="os">Our Services</h2>
            <h2 id="cu">Contact Us</h2>
          </div>
          <div className="services-list">
            <div className="service">
              <div>
                <LocalShippingTwoToneIcon />
              </div>
              <h3>Free Shipping</h3>
              <p>Get free shipping on all orders over $50.</p>
            </div>
            <div className="service">
              <div>
                <SupportAgentTwoToneIcon />
              </div>

              <h3>24/7 Customer Support</h3>
              <p>
                Our customer support team is available 24/7 to help with any
                questions or issues.
              </p>
            </div>
            <div className="service">
              <div>
                <AssignmentReturnIcon />
              </div>
              <h3>Easy Returns</h3>
              <p>
                If you're not satisfied with your purchase, simply return it
                within 30 days for a full refund.
              </p>
            </div>
            <div className="footer_contact">
              <p>123 Main Street</p>
              <p>New York, NY 10001</p>
              <p>Email: info@yourcompany.com</p>
              <p>Phone: 555-555-5555</p>
            </div>
          </div>
        </div>
        <div className="footer-right"></div>
      </div>
      
    </div>

<div className="footer_social">
<ul>
  <li style={{ listStyle: "none" }}>
    <FacebookRoundedIcon />
  </li>
  <li style={{ listStyle: "none" }}>
    <TwitterIcon />
  </li>
  <li style={{ listStyle: "none" }}>
    <InstagramIcon />
  </li>

  <li style={{ listStyle: "none" }}>
    <LinkedInIcon />
  </li>
  <li style={{ listStyle: "none" }}>
    <WhatsAppIcon />
  </li>
</ul>
</div>
</div>
  );
}

export default Footer;
