import React, { useState } from 'react';
import axios from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function Login() {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { email: '', passwordHash: '' },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email').required('Required'),
      passwordHash: Yup.string().min(6, 'Min 6 chars').required('Required'),
    }),
    onSubmit: async (values) => {
      try {
        const res = await axios.post('http://localhost:5031/api/auth/login', values);
        localStorage.setItem('token', res.data.token);
        console.log("Login successful", res);
        navigate('/main');
      } catch (err) {
        setError('Invalid credentials', err);
      }
    }
  });

  return (
    <div className="container mt-5" style={{ maxWidth: 400 }}>
      <h2>Login</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={formik.handleSubmit}>
        <input className="form-control mb-2" name="email" placeholder="Email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} required />
        <input className="form-control mb-2" name="passwordHash" type="password" placeholder="Password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.passwordHash} required />
        <button className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
} 