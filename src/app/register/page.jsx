"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import './Register.css';
import { postData } from '../_components/api/data';
const Register = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify(formData));
    try {
      const response = await postData(process.env.NEXT_PUBLIC_API_USER_REGISTER, {
        name: formData.fname,
        email: formData.email,
        mobile: formData.phone,
        lastname: formData.lname,
        message: "Register",
        status: 0,
        password: formData.password,
      });
      console.log(response);
      // Optionally, notify the user of success (e.g., using alert, toast, or state)
      // alert("Form submitted successfully!");
      router.push('/')
    } catch (error) {
      console.error(error);
      // Optionally, notify the user of the error
      alert("Error submitting form: " + error.message);
    }
    
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Create Account</h2>
        <div className="form-group">
          <input type="text" placeholder="First Name" value={formData.fname} onChange={(e) => setFormData({ ...formData, fname: e.target.value })} />
        </div>
        <div className="form-group">
          <input type="text" placeholder="Last Name" value={formData.lname} onChange={(e) => setFormData({ ...formData, lname: e.target.value })} />
        </div>
        <div className="form-group">
          <input type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
        </div>
        <div className="form-group">
          <input type="tel" placeholder="Phone" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
        </div>
        <div className="form-group">
          <input type="password" placeholder="Password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
        </div>
        <button className="register-btn" type="submit">Register</button>
        <div className="login-link">
          <p>Already have an account? <Link href="/login">Login</Link></p>
        </div>
      </form>
    </div>
  );
};

export default Register;
