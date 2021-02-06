/* eslint-disable operator-linebreak */
import React from 'react';
import { useSelector } from 'react-redux';
import { Button, useDisclosure, Center, Text, Grid } from '@chakra-ui/react';
import CreatePostModal from './CreatePostModal.jsx';
import CardList from './CardList.jsx';

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
      {/* Welcome */}
      <Center bg="tomato" h="90px" color="white">
        <Text fontSize="xl">Challenge CRUD Posteos</Text>
        <Button onClick={onOpen} colorScheme="green" size="lg" ml="20">
          Crear Post
        </Button>
      </Center>
      {/* Modal Create Post */}
      <CreatePostModal
        isOpen={isOpen}
        initialRef={initialRef}
        finalRef={finalRef}
        onClose={onClose}
      />
      {/* List Post */}
      <Grid m="4">
        <Text fontSize="xl" p="5">
          Lista De Post
        </Text>
        <CardList stateStore={stateStore} />
      </Grid>
    </>
  );
};

export default Home;
