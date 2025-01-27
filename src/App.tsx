import React from 'react';
import './App.css'
import { MyComponent } from './Button'
import styled from 'styled-components';

function App() {

  return (
    <>
      <Container>
        <MyComponent />
        <MyComponent2 />
      </Container>
    </>
  )
}

export default App

const Container = styled.div`
  display: flex;
  gap: 10px;
`

const CustomButton = styled.button`
      background-color: ${({ theme }) => theme.palette.secondary.main};
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 4px;
      cursor: pointer;

      &:hover {
        background - color: ${({ theme }) => theme.palette.secondary.dark};
  }
      `;

const MyComponent2 = () => <CustomButton>Meu botão customizado</CustomButton>;
