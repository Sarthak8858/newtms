import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ email: '', password: '' });

  // Demo credentials
  const DEMO_EMAIL = 'demo@tms.com';
  const DEMO_PASSWORD = 'Demo@123';

  const handleDemoLogin = () => {
    setEmail(DEMO_EMAIL);
    setPassword(DEMO_PASSWORD);
    setErrors({ email: '', password: '' });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { email: '', password: '' };

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Please enter a valid email';
      valid = false;
    }

    // Password validation
    if (!password) {
      newErrors.password = 'Password is required';
      valid = false;
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // TODO: Backend API integration will be added here
      // Example: await loginAPI({ email, password });
      console.log('Login submitted:', { email, password });
      
      // Future: Navigate to dashboard after successful authentication
      // navigate('/dashboard');
    }
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        {/* Left Section - Branding */}
        <div className="login-brand-section">
          <div className="brand-content">
            <div className="brand-logo">
              <div className="logo-icon">TMS</div>
            </div>
            <h1 className="brand-title">Training Management System</h1>
            <p className="brand-subtitle">
              Analyze, Track & Visualize Skills for Industry Readiness
            </p>
            <div className="brand-features">
              <div className="feature-item">
                <span className="feature-icon">📊</span>
                <span className="feature-text">Performance Analytics</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🎯</span>
                <span className="feature-text">Skill Assessment</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">📈</span>
                <span className="feature-text">Progress Tracking</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Login Form */}
        <div className="login-form-section">
          <div className="form-container">
            <div className="form-header">
              <h2 className="form-title">Welcome Back</h2>
              <p className="form-description">Sign in to access your dashboard</p>
            </div>

            <form onSubmit={handleSubmit} className="login-form">
              {/* Email Field */}
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <div className="input-wrapper">
                  <input
                    type="email"
                    id="email"
                    className={`form-input ${errors.email ? 'input-error' : ''}`}
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors({ ...errors, email: '' });
                    }}
                    autoComplete="email"
                  />
                  <span className="input-icon">📧</span>
                </div>
                {errors.email && (
                  <span className="error-message">{errors.email}</span>
                )}
              </div>

              {/* Password Field */}
              <div className="form-group">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <div className="input-wrapper">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    className={`form-input ${errors.password ? 'input-error' : ''}`}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (errors.password) setErrors({ ...errors, password: '' });
                    }}
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? '👁️' : '👁️‍🗨️'}
                  </button>
                </div>
                {errors.password && (
                  <span className="error-message">{errors.password}</span>
                )}
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="form-options">
                <label className="remember-me">
                  <input type="checkbox" />
                  <span>Remember me</span>
                </label>
                <a href="#" className="forgot-password">
                  Forgot Password?
                </a>
              </div>

              {/* Login Button */}
              <button type="submit" className="btn-login">
                Sign In
              </button>

              {/* Divider */}
              <div className="divider">
                <span>OR</span>
              </div>

              {/* Demo Login Button */}
              <button
                type="button"
                className="btn-demo"
                onClick={handleDemoLogin}
              >
                <span className="demo-icon">🎭</span>
                Use Demo Credentials
              </button>

              {/* Demo Credentials Info */}
              <div className="demo-info">
                <p className="demo-title">Demo Credentials:</p>
                <div className="demo-credentials">
                  <p><strong>Email:</strong> {DEMO_EMAIL}</p>
                  <p><strong>Password:</strong> {DEMO_PASSWORD}</p>
                </div>
              </div>
            </form>

            {/* Footer */}
            <div className="form-footer">
              <p>
                Don't have an account?{' '}
                <a href="#" className="signup-link">
                  Sign Up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
