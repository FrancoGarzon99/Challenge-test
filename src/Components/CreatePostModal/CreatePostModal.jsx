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
} from '@chakra-ui/react';
// import { useDispatch } from 'react-redux';
// import { CreatePost } from '../../Redux/Actions';

const CreatePostModal = ({ initialRef, finalRef, isOpen, onClose }) => {
  // const dispatch = useDispatch();
  // state Component
  const [dataForm, setDataForm] = useState({});
  // save date in state
  const handleForm = (e) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
  };
  console.log(dataForm);
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
                onChange={handleForm}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Descripción</FormLabel>
              <Textarea placeholder="Descripción del Post" name="body" onChange={handleForm} />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Guardar
            </Button>
            <Button onClick={onClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

CreatePostModal.propTypes = {
  initialRef: PropTypes.objectOf(PropTypes.any).isRequired,
  finalRef: PropTypes.objectOf(PropTypes.any).isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
export default CreatePostModal;
