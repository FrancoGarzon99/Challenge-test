import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Home from '../../components/home/Home.jsx';
import { GetPostApi } from '../../services/api/getPost/GetPost';

const HomeContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetPostApi());
  }, []);

  return (
    <>
      <div>
        <Home />
      </div>
    </>
  );
};
export default HomeContainer;
