/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Button, useToast, Box, Textarea, Input, Text } from '@chakra-ui/react';
import { DeletePost } from '../services/DeletePost';
import { EditPost } from '../services/EditPost';

const CardPost = ({ id, title, body }) => {
  // Hooks of Chakra UI
  const dispatch = useDispatch();
  const toast = useToast();
  const [postEdit, setPostEdit] = React.useState(false);

  const postSelect = {
    id,
    title,
    body,
  };

  return (
    // Card Template
    <>
      <Box w="18rem" h="20rem" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Box bg="#e3e3e3" p="4" justifyContent="center" display="flex">
          {postEdit ? (
            <Input type="text" defaultValue={title.slice(0, 30)} />
          ) : (
            <Text>{title.slice(0, 30)}</Text>
          )}
        </Box>
        <Box p="4">
          {postEdit ? <Textarea defaultValue={body} /> : <p className="card-text">{body}</p>}
          <Box p="4" display="flex" justifyContent="center">
            {postEdit ? (
              <>
                <Button colorScheme="blue" onClick={() => dispatch(EditPost(postSelect))}>
                  Guardar
                </Button>
                <Button colorScheme="blue" ml="10" onClick={() => setPostEdit(false)}>
                  Cancelar
                </Button>
              </>
            ) : (
              <>
                <Button
                  colorScheme="blue"
                  onClick={() => {
                    dispatch(DeletePost(id));
                    toast({
                      position: 'bottom',
                      title: 'Listo!',
                      description: `Post ID ${id} Eliminado con exito!`,
                      status: 'success',
                      duration: 1200,
                      isClosable: true,
                    });
                  }}
                >
                  Eliminar
                </Button>
                <Button colorScheme="blue" ml="10" onClick={() => setPostEdit(true)}>
                  Editar
                </Button>
              </>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};

CardPost.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
export default CardPost;
