import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        {/* Top Section */}
        <div className="footer-top">
          <div className="footer-col">
            <h3>COMPANY</h3>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>SOLUTIONS</h3>
            <ul>
              <li><a href="#">Square Connect</a></li>
              <li><a href="#">Prime Connect</a></li>
              <li><a href="#">Smart Agent</a></li>
              <li><a href="#">Rent Agreement</a></li>
              <li><a href="#">Escrow</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>RESOURCES</h3>
            <ul>
              <li><a href="#">Data Intelligence</a></li>
              <li><a href="#">Real Estate Guide</a></li>
              <li><a href="#">Cities Real Estate</a></li>
              <li><a href="#">Awards & Recognition</a></li>
              <li><a href="#">Media Coverage</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>CONNECT WITH US</h3>
            <ul>
              <li>Write to us at:<br/><a href="mailto:connect@example.com">connect@example.com</a></li>
              <li>Existing Clients:<br/><a href="mailto:care@example.com">care@example.com</a></li>
              <li>Job/Career Related:<br/><a href="mailto:careers@example.com">careers@example.com</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="footer-about">
            <p>Your company description here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="footer-copyright">
            <p>© 2024 Your Company Name. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
