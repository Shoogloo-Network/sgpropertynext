"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import './Login.css';

const Login = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = localStorage.getItem('user');
    const user = JSON.parse(storedUser);

    if (user && user.email === formData.email && user.password === formData.password) {
      localStorage.setItem('isLogin', true);
      router.push('/'); // Navigate to the home page
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <div className="form-group">
          <input 
            type="email" 
            placeholder="Email" 
            value={formData.email} 
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
        <div className="form-group">
          <input 
            type="password" 
            placeholder="Password" 
            value={formData.password} 
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
        </div>
        <button className="login-btn" type="submit">Login</button>
        <div className="register-link">
          <p>Don’t have an account? <Link href="/register">Register</Link></p>
        </div>
      </form>
    </div>
  );
};

export default Login;
