/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Button, useToast } from '@chakra-ui/react';
import { DeletePost } from '../../services/api/deletePost/DeletePost';

const CardPost = ({ id, title, body }) => {
  const dispatch = useDispatch();
  const toast = useToast();

  return (
    <div className="card" style={{ width: '18rem' }}>
      <div className="card-header">{title.slice(0, 30)}</div>
      <div className="card-body">
        <p className="card-text">{body}</p>
        <Button
          colorScheme="blue"
          onClick={() => {
            dispatch(DeletePost(id));
            toast({
              position: 'bottom',
              title: 'Exelente!',
              description: `Post ${id} Eliminado con exito!`,
              status: 'success',
              duration: 9000,
              isClosable: true,
            });
          }}
        >
          Eliminar
        </Button>
        <Button colorScheme="blue" ml="10">
          Editar
        </Button>
      </div>
    </div>
  );
};

CardPost.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
export default CardPost;
