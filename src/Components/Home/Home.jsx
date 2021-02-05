/* eslint-disable operator-linebreak */
import React from 'react';
import { useSelector } from 'react-redux';
import { Button, useDisclosure } from '@chakra-ui/react';
import CardPost from '../cardPost/CardPost.jsx';
import CreatePostModal from '../createPostModal/CreatePostModal.jsx';

const Home = () => {
  //  Store Redux
  const stateStore = useSelector((state) => state);
  // state Chakra UI
  const { isOpen, onOpen, onClose } = useDisclosure();
  // Ref Chakra UI
  const initialRef = React.useRef();
  const finalRef = React.useRef();

  console.log(stateStore);
  // Render
  return (
    <>
      <h2>Bienvenido!</h2>
      <Button onClick={onOpen}>Crear Post</Button>
      <div>
        {stateStore.listPost &&
          stateStore.listPost.map((p) => (
            <div key={p.id}>
              <CardPost id={p.id} title={p.title} body={p.body} />
            </div>
          ))}
      </div>
      <CreatePostModal
        isOpen={isOpen}
        initialRef={initialRef}
        finalRef={finalRef}
        onClose={onClose}
      />
    </>
  );
};

export default Home;
