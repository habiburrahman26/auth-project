import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../store';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const isAuthenticate = useSelector((state) => state.isAuthenticate);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    dispatch(authActions.login(data));

    if (isAuthenticate) {
      return navigate('/');
    }
  };

  return (
    <div className=" flex flex-col items-center justify-center shadow-lg w-[500px] mx-auto mt-32 py-6 px-10 rounded">
      <h2 className="text-2xl font-semibold pb-10">Login</h2>
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full mb-3">
          <label htmlFor="username" className="block text-gray-700 pb-1">
            Username
          </label>
          <input
            type="username"
            name="username"
            placeholder="Username..."
            className="border focus:outline-none w-full p-2 rounded focus:border-blue-500"
            {...register('username', {
              required: {
                value: true,
                message: 'Username is required',
              },
              pattern: {
                value: /^[a-zA-Z]{2,}$/i,
                message: 'Enter valid username',
              },
            })}
          />
          {errors.username && (
            <span className="text-red-400 text-sm">
              {errors.username?.message}
            </span>
          )}
        </div>
        <div>
          <label htmlFor="password" className="block text-gray-700 pb-1">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Password..."
            className="border focus:outline-none w-full p-2 rounded focus:border-blue-500"
            {...register('password', {
              required: {
                value: true,
                message: 'Password is required',
              },
              minLength: {
                value: 8,
                message: 'Password must be at least 8 characters',
              },
              maxLength: {
                value: 100,
                message: 'Password must be less than 100 characters',
              },
            })}
          />
          {errors.password && (
            <span className="text-red-400 text-sm">
              {errors.password?.message}
            </span>
          )}
        </div>
        <div className="flex justify-center mt-8 pb-4">
          <button className="px-6 py-2 bg-blue-500 rounded text-white">
            Login
          </button>
        </div>
      </form>

      <p>
        No account yet?{' '}
        <Link to="/registration" className="text-blue-500">
          Registration
        </Link>{' '}
        here
      </p>
    </div>
  );
};

export default Login;
