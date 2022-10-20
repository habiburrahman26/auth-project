import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className=" flex flex-col items-center justify-center shadow-lg w-[500px] mx-auto mt-32 py-6 px-10 rounded">
      <h2 className="text-2xl font-semibold pb-10">Login</h2>
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full mb-3">
          <label htmlFor="email" className="block text-gray-700 pb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email..."
            className="border focus:outline-none w-full p-2 rounded focus:border-blue-500"
            {...register('email', {
              required: {
                value: true,
                message: 'Email is required',
              },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Enter valid email address',
              },
            })}
          />
          {errors.email && (
            <span className="text-red-400 text-sm">
              {errors.email?.message}
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
        No account yet? <Link to="/registration" className='text-blue-500'>Registration</Link> here
      </p>
    </div>
  );
};

export default Login;
