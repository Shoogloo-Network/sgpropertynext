import './FormPopup.css';

const FormPopup = ({ onClose }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            name: e.target.elements[0].value,
            email: e.target.elements[1].value,
            phone: e.target.elements[2].value,
            message: e.target.elements[3].value
        };
        console.log('Form Data:', formData);
    };

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <button className="close-button" onClick={onClose}>✕</button>
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
                    <button type="submit" className="submit-button">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default FormPopup;
