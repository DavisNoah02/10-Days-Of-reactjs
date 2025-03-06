import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext.jsx.jsx';
import '../Styles/login.Styles.css';
import { StyledWrapper, ErrorMessage } from '../Styles/login.Styles.jsx';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { emailLogin, googleLogin } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      await emailLogin(formData.email, formData.password);
      navigate('/dashboard');
    } catch {
    setError('Invalid email or password');
      
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await googleLogin();
      navigate('/dashboard');
    } catch  {
      setError('Google login failed');
    }
  };

  return (
    <StyledWrapper>
      <div className="form-container">
        <p className="title">Welcome back</p>
        <form className="form" onSubmit={handleEmailLogin}>
          <input 
            type="email" 
            name="email"
            className="input" 
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input 
            type="password" 
            name="password"
            className="input" 
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {error && <ErrorMessage>{error}</ErrorMessage>}
          
          <p className="page-link">
            <span className="page-link-label">Forgot Password?</span>
          </p>
          
          <button type="submit" className="form-btn">Log in</button>
        </form>
        
        <p className="sign-up-label">
          Don't have an account?
          <span 
            className="sign-up-link"
            onClick={() => navigate('/register')}
          >
            Sign up
          </span>
        </p>
        
        <div className="buttons-container">
          <div className="apple-login-button">
            <AppleIcon />
            <span>Log in with Apple</span>
          </div>
          
          <div 
            className="google-login-button"
            onClick={handleGoogleLogin}
          >
            <GoogleIcon />
            <span>Log in with Google</span>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

// Optional: Extract SVG Icons to separate components
const AppleIcon = () => (
  <svg 
    stroke="currentColor" 
    fill="currentColor" 
    strokeWidth={0} 
    className="apple-icon" 
    viewBox="0 0 1024 1024" 
    height="1em" 
    width="1em" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M747.4 535.7c-.4-68.2 30.5-119.6 92.9-157.5-34.9-50-87.7-77.5-157.3-82.8-65.9-5.2-138 38.4-164.4 38.4-27.9 0-91.7-36.6-141.9-36.6C273.1 298.8 163 379.8 163 544.6c0 48.7 8.9 99 26.7 150.8 23.8 68.2 109.6 235.3 199.1 232.6 46.8-1.1 79.9-33.2 140.8-33.2 59.1 0 89.7 33.2 141.9 33.2 90.3-1.3 167.9-153.2 190.5-221.6-121.1-57.1-114.6-167.2-114.6-170.7zm-105.1-305c50.7-60.2 46.1-115 44.6-134.7-44.8 2.6-96.6 30.5-126.1 64.8-32.5 36.8-51.6 82.3-47.5 133.6 48.4 3.7 92.6-21.2 129-63.7z" />
  </svg>
);

const GoogleIcon = () => (
  <svg 
    stroke="currentColor" 
    fill="currentColor" 
    strokeWidth={0} 
    version="1.1" 
    x="0px" 
    y="0px" 
    className="google-icon" 
    viewBox="0 0 48 48" 
    height="1em" 
    width="1em" 
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Google icon path */}
  </svg>
);

export default Login;