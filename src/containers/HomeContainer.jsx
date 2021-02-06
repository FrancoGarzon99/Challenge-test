import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Home from '../components/Home.jsx';
import { GetPostApi } from '../services/GetPost';

const HomeContainer = () => {
  // Hook Redux
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetPostApi());
  }, []);
  // Render
  return (
    <>
      <div>
        <Home />
      </div>
    </>
  );
};
export default HomeContainer;
