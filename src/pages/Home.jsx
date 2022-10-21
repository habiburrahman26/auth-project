import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import anastasiia from '../assets/anastasiia-chepinska-9BQNKxbxENg-unsplash.jpg';
import henderson from '../assets/gabrielle-henderson-NduAPLzahw8-unsplash.jpg';
import hunter from '../assets/hunter-reilly-1_auz_MWfMc-unsplash.jpg';
import jevgeni from '../assets/jevgeni-fil-6J12SdjEDao-unsplash.jpg';
import mailchimp from '../assets/mailchimp-lsdA8QpWN_A-unsplash.jpg';
import mario from '../assets/mario-scheibl-KiMVM5cy4aw-unsplash.jpg';
import markus from '../assets/markus-schmidt-wwTmJu0HxDg-unsplash.jpg';
import surface from '../assets/surface-1shdfk7mQzw-unsplash.jpg';
import surface2 from '../assets/surface-exSKJMg-_vI-unsplash.jpg';
import vladislav from '../assets/vladislav-nahorny-pofTdYR_-pg-unsplash.jpg';
import windows from '../assets/windows-dD4QVRywr1w-unsplash.jpg';
import andrew from '../assets/ben-koorengevel-xZquCcJaNkA-unsplash.jpg';
import { authActions } from '../store';

const Home = () => {
  const [location, setLocation] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      const location = prompt('Where are you from?');
      setLocation(location);
    }, 500);
  }, []);

  const logoutHandler = () => {
    dispatch(authActions.logout());
    return navigate('/login');
  };

  return (
    <div className="px-4">
      <div className="p-2 relative">
        <p className="text-center pt-2">
          You are from <span className="font-semibold">{location}</span>
        </p>
        <button
          className="absolute top-2 right-0 px-6 py-2 rounded-full bg-pink-500 border-0 text-white"
          onClick={logoutHandler}
        >
          Logout
        </button>
      </div>
      <div className="grid justify-center gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-6">
        <div>
          <img src={anastasiia} alt="" />
        </div>
        <div>
          <img src={henderson} alt="" />
        </div>
        <div>
          <img src={andrew} alt="" />
        </div>
        <div>
          <img src={jevgeni} alt="" />
        </div>
        <div>
          <img src={windows} alt="" />
        </div>
        <div>
          <img src={mailchimp} alt="" />
        </div>
        <div>
          <img src={mario} alt="" />
        </div>
        <div>
          <img src={markus} alt="" />
        </div>
        <div>
          <img src={surface} alt="" />
        </div>
        <div>
          <img src={vladislav} alt="" />
        </div>
        <div>
          <img src={surface2} alt="" />
        </div>
        <div>
          <img src={hunter} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
