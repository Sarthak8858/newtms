import React, { useState } from 'react';
import './Registration.css';

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    validateField(name, formData[name]);
  };

  const validateField = (name, value) => {
    let error = '';
    switch (name) {
      case 'fullName':
        if (!value.trim()) error = 'Full name is required';
        else if (value.trim().length < 3) error = 'Name must be at least 3 characters';
        break;
      case 'email':
        if (!value.trim()) error = 'Email is required';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = 'Please enter a valid email';
        break;
      case 'password':
        if (!value) error = 'Password is required';
        else if (value.length < 8) error = 'Password must be at least 8 characters';
        break;
      case 'confirmPassword':
        if (!value) error = 'Please confirm your password';
        else if (value !== formData.password) error = 'Passwords do not match';
        break;
    }
    setErrors(prev => ({ ...prev, [name]: error }));
    return error;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });
    setTouched({ fullName: true, email: true, password: true, confirmPassword: true });
    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData);
      alert('Registration successful! (Backend pending)');
    }
  };

  return (
    <div className="registration-page">
      <div className="registration-container">
        <div className="registration-header">
          <h1 className="registration-title">Create Account</h1>
          <p className="registration-subtitle">Join TMS</p>
        </div>
        <form className="registration-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <div className="form-input-wrapper">
              <input
                type="text"
                name="fullName"
                className={`form-input \${errors.fullName && touched.fullName ? 'input-error' : ''}`}
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.fullName && touched.fullName && <span className="error-message">{errors.fullName}</span>}
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Email</label>
            <div className="form-input-wrapper">
              <input
                type="email"
                name="email"
                className={`form-input \${errors.email && touched.email ? 'input-error' : ''}`}
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email && <span className="error-message">{errors.email}</span>}
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Password</label>
            <div className="form-input-wrapper">
              <input
                type="password"
                name="password"
                className={`form-input \${errors.password && touched.password ? 'input-error' : ''}`}
                placeholder="Create password"
                value={formData.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && touched.password && <span className="error-message">{errors.password}</span>}
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Confirm Password</label>
            <div className="form-input-wrapper">
              <input
                type="password"
                name="confirmPassword"
                className={`form-input \${errors.confirmPassword && touched.confirmPassword ? 'input-error' : ''}`}
                placeholder="Re-enter password"
                value={formData.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.confirmPassword && touched.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
            </div>
          </div>
          <button type="submit" className="submit-button">Create Account</button>
          <div className="form-footer">
            <p>Already have account? <a href="#" className="footer-link">Sign In</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;