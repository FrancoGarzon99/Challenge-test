import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Home from '../../Components/Home/Home.jsx';
import { GetPostApi } from '../../Redux/Actions';

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
