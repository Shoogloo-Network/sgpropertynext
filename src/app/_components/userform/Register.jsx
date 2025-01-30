import  { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Register.css';
const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
    });

    //to store the form data
    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('user', JSON.stringify(formData));
        navigate('/');
       
    };
  return (
    <div className="register-container">
        <form className="register-form" onSubmit={handleSubmit}>
            <h2>Create Account</h2>
            <div className="form-group">
                <input 
                    type="text" 
                    placeholder='Name' 
                    value={formData.name} 
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
            </div>
            <div className="form-group">
                <input 
                    type="email" 
                    placeholder='Email' 
                    value={formData.email} 
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
            </div>
            <div className="form-group">
                <input 
                    type="tel" 
                    placeholder='Phone' 
                    value={formData.phone} 
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
            </div>
            <div className="form-group">
                <input 
                    type="password" 
                    placeholder='Password' 
                    value={formData.password} 
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                />
            </div>
            <button className="register-btn" type='submit'>Register</button>
            <div className="login-link">
                <p>Already have an account?<Link to="/login">Login</Link></p>
            </div>
        </form>
    </div>
  )
}

export default Register
