import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid } from '@chakra-ui/react';
import CardPost from '../cardPost/CardPost.jsx';

const CardList = ({ stateStore }) => (
  <div>
    <Grid templateColumns="repeat(4, 1fr)" gap={6} className="scroll-style">
      {/* eslint-disable-next-line operator-linebreak */}
      {stateStore.listPost.map((p) => (
        <Box key={p.id}>
          <CardPost id={p.id} title={p.title} body={p.body} />
        </Box>
      ))}
    </Grid>
  </div>
);
CardList.propTypes = { stateStore: PropTypes.objectOf(PropTypes.any).isRequired };
export default CardList;
