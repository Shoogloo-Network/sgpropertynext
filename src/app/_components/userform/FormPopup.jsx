import './FormPopup.css';
import axios from 'axios';

const FormPopup = ({ onClose }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.elements[0].value,
      email: e.target.elements[1].value,
      phone: e.target.elements[2].value,
      message: e.target.elements[3].value,
    };

    try {
      const response = await axios.post(
        'https://www.parislondrestrain.fr/mapi/user/register',
        {
          name: formData.name,
          email: formData.email,
          mobile: formData.phone,
          lastname: "Dash",
          message: formData.message,
          status: 0,
          password: "test@1234",
        }
      );
      console.log(response.data);
      // Optionally, notify the user of success (e.g., using alert, toast, or state)
    //   alert("Form submitted successfully!");
      onClose(); // Close the popup if needed
    } catch (error) {
      console.error(error);
      // Optionally, notify the user of the error
      alert("Error submitting form: " + error.message);
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>
          ✕
        </button>
        <h2>Request Information</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <input type="tel" placeholder="Your Phone Number" required />
          </div>
          <div className="form-group">
            <textarea placeholder="Your Message" rows="4" required></textarea>
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormPopup;
