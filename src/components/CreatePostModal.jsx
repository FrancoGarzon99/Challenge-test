/* eslint-disable operator-linebreak */
/* eslint-disable object-curly-newline */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Button,
  Textarea,
  Text,
  useToast,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { CreatePost } from '../services/CreatePost';

const CreatePostModal = ({ initialRef, finalRef, isOpen, onClose }) => {
  // Toast Chakra UI
  const toast = useToast();
  // Dispatch
  const dispatch = useDispatch();
  // Function create Random ID to post
  const randomID = () => {
    const id = Math.floor(Math.round(Math.random() * (500 - 50) + 50));
    return id;
  };

  // state Component
  const [dataForm, setDataForm] = useState({
    id: randomID(),
    title: '',
    body: '',
  });
  // State submiting true
  const [validateInputs, setValidateInputs] = useState({
    title: true || false,
    body: true || false,
  });
  // Submiting Click
  const submitingForm = () => {
    dispatch(CreatePost(dataForm));
    toast({
      position: 'bottom',
      title: 'Listo!',
      description: 'Post Creado con exito!',
      status: 'success',
      duration: 1200,
      isClosable: true,
    });
    setDataForm({ id: randomID(), title: '', body: '' });
    setValidateInputs({ title: true, body: true });
    onClose();
  };
  // Render
  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>¡Crea un nuevo Post!</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Titulo</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Titulo del Post"
                name="title"
                onChange={(e) => {
                  setDataForm({ ...dataForm, title: e.target.value });
                  if (e.target.value) {
                    setValidateInputs({ ...validateInputs, title: false });
                  } else {
                    setValidateInputs({ ...validateInputs, title: true });
                  }
                }}
              />
              {validateInputs.title === true && (
                <Text color="red" fontSize={11}>
                  Completa este campo!
                </Text>
              )}
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Descripción</FormLabel>
              <Textarea
                placeholder="Descripción del Post"
                name="body"
                onChange={(e) => {
                  setDataForm({ ...dataForm, body: e.target.value });
                  if (e.target.value) {
                    setValidateInputs({ ...validateInputs, body: false });
                  } else {
                    setValidateInputs({ ...validateInputs, body: true });
                  }
                }}
              />
              {validateInputs.body === true && (
                <Text color="red" fontSize={11}>
                  Completa este campo!
                </Text>
              )}
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue"
              isDisabled={!validateInputs.body === false || !validateInputs.title === false}
              mr={3}
              onClick={submitingForm}
            >
              Guardar
            </Button>
            <Button onClick={onClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
// Proptypes props
CreatePostModal.propTypes = {
  initialRef: PropTypes.objectOf(PropTypes.any).isRequired,
  finalRef: PropTypes.objectOf(PropTypes.any).isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
export default CreatePostModal;
