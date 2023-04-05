  import { Button, Form, Input } from 'antd';
  import React from 'react';
  import { Link, useNavigate } from 'react-router-dom';
  import { useDispatch } from 'react-redux';
  import axios from 'axios';
  import toast from 'react-hot-toast';
  import { hideLoading, showLoading } from '../redux/alertsSlice';
  import Header from '../subcomponent/Header/Header';
  import './Register.css';

  function Register() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onFinish = async (values) => {
      try {
        dispatch(showLoading());
        const response = await axios.post('/api/user/register', values);
        dispatch(hideLoading());

        if (response.data.success) {
          toast.success(response.data.message);
          navigate('/login');
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        dispatch(hideLoading());
        toast.error('Something went wrong');
      }
    };

    const validateMessages = {
      required: '${label} is required!',
      types: {
        email: '${label} is not a valid email!',
      },
      password: {
        range: 'Password should be at least 8 characters long!',
      },
      confirmPassword: {
        match: 'Passwords do not match!',
      },
    };

    const validatePassword = (rule, value, callback) => {
      if (value && value.length < 8) {
        callback('error');
      } else {
        callback();
      }
    };

    const validateConfirmPassword = ({ getFieldValue }) => ({
      validator(_, value) {
        if (!value || getFieldValue('password') === value) {
          return Promise.resolve();
        }
        return Promise.reject(new Error('Passwords do not match!'));
      },
    });

    return (
      <div className="authentication">
        <Header />
        <div className="authentication-form card p-3">
          <h1 className="card-title">Nice To Meet U</h1>
          <Form
            layout="vertical"
            onFinish={onFinish}
            validateMessages={validateMessages}
          >
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true }]}
            >
              <Input placeholder="Name" />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, type: 'email' }]}
            >
              <Input placeholder="Email" />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true },
                { validator: validatePassword },
              ]}
            >
              <Input placeholder="Password" type="password" />
            </Form.Item>
            <Form.Item
              label="Confirm Password"
              name="confirmPassword"
              rules={[
                { required: true },
                validateConfirmPassword,
              ]}
            >
              <Input placeholder="Confirm Password" type="password" />
            </Form.Item>

            <Button
              className="register-button full-width-button"
              htmlType="submit"
            >
              Register
            </Button>

            <Link to="/login" className="anchor mt-2">
              <Button className="register-button full-width-button">
                Click Here to LogIn
              </Button>
            </Link>
          </Form>
        </div>
      </div>
    );
  }

  export default Register;