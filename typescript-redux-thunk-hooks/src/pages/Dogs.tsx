import React, { Fragment } from 'react';
import DogsList from '../components/dogs_list/dogs_list';

export const Dogs: React.FC = () => {
  return (
    <Fragment>
      <h1>Dogs</h1>
      <DogsList />
    </Fragment>
  );
};
