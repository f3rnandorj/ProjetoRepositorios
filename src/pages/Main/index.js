import React from 'react';

import { Title } from './styles';

function Main() {
  return <Title>Hello world!</Title>;
}

export default Main;

/* COMO SERIA UM ENCADEAMENTO

function Main() {
  return (
    <Title error={false}>
      Main
      <small>Menor</small>
    </Title>
  );
}
  }*/
