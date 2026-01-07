import React, { useState } from 'react';
import './RegistrationPage.css';

const RegistrationPage = () => {
  // State management for form fields
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Handle input blur for validation feedback
  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));
    validateField(name, formData[name]);
  };

  // Field validation
  const validateField = (name, value) => {
    let error = '';

    switch (name) {
      case 'fullName':
        if (!value.trim()) {
          error = 'Full name is required';
        } else if (value.trim().length < 3) {
          error = 'Name must be at least 3 characters';
        }
        break;

      case 'email':
        if (!value.trim()) {
          error = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = 'Please enter a valid email';
        }
        break;

      case 'password':
        if (!value) {
          error = 'Password is required';
        } else if (value.length < 8) {
          error = 'Password must be at least 8 characters';
        }
        break;

      case 'confirmPassword':
        if (!value) {
          error = 'Please confirm your password';
        } else if (value !== formData.password) {
          error = 'Passwords do not match';
        }
        break;

      default:
        break;
    }

    setErrors(prev => ({
      ...prev,
      [name]: error
    }));

    return error;
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    // Mark all fields as touched
    setTouched({
      fullName: true,
      email: true,
      password: true,
      confirmPassword: true
    });

    // If no errors, proceed with registration
    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData);
      // TODO: Backend API integration will be added here
      // Example: await registerUser(formData);
      alert('Registration successful! (Backend integration pending)');
    }
  };

  return (
    <div className="registration-page">
      <div className="registration-container">
        <div className="registration-header">
          <h1 className="registration-title">Create Account</h1>
          <p className="registration-subtitle">Join the Training Management System</p>
        </div>

        <form className="registration-form" onSubmit={handleSubmit} noValidate>
          {/* Full Name Field */}
          <div className="form-group">
            <label htmlFor="fullName" className="form-label">
              Full Name
            </label>
            <div className="form-input-wrapper">
              <input
                type="text"
                id="fullName"
                name="fullName"
                className={`form-input ${errors.fullName && touched.fullName ? 'input-error' : ''}`}
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.fullName && touched.fullName && (
                <span className="error-message">{errors.fullName}</span>
              )}
            </div>
          </div>

          {/* Email Field */}
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <div className="form-input-wrapper">
              <input
                type="email"
                id="email"
                name="email"
                className={`form-input ${errors.email && touched.email ? 'input-error' : ''}`}
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email && (
                <span className="error-message">{errors.email}</span>
              )}
            </div>
          </div>

          {/* Password Field */}
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <div className="form-input-wrapper">
              <input
                type="password"
                id="password"
                name="password"
                className={`form-input ${errors.password && touched.password ? 'input-error' : ''}`}
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && touched.password && (
                <span className="error-message">{errors.password}</span>
              )}
            </div>
          </div>

          {/* Confirm Password Field */}
          <div className="form-group">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password
            </label>
            <div className="form-input-wrapper">
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className={`form-input ${errors.confirmPassword && touched.confirmPassword ? 'input-error' : ''}`}
                placeholder="Re-enter your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.confirmPassword && touched.confirmPassword && (
                <span className="error-message">{errors.confirmPassword}</span>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-button">
            Create Account
          </button>

          {/* Login Link */}
          <div className="form-footer">
            <p className="footer-text">
              Already have an account?{' '}
              <a href="#" className="footer-link">
                Sign In
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;