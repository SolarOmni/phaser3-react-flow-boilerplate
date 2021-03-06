import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

// data has these properties, id, content, state, and initialProps 
function Modal({ data }) {
  let Component = data.Component;
  let initialProps = data.InitialProps;
  let state = data.state;
  return (
    <Container>
      <Component {...initialProps} sm={state} />
    </Container>
  )
}

export default Modal;