import React, { useRef, useState } from 'react';

import styled from 'styled-components';
import WorldMap from './WorldMap';

import emailjs from '@emailjs/browser';

const Section = styled.div`
  height: 100vh;
  /* background-color: #254e58; */
  background-color: #90aead;
  scroll-snap-align: center;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
  @media only screen and (max-width: 760px) {
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: flex-end;
  /* gap: 20px; */
  @media only screen and (max-width: 760px) {
    /* align-items: center; */
    justify-content: center;
  }
`;

const Title = styled.h1`
  font-weight: 200;
`;
const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  @media only screen and (max-width: 760px) {
    width: 300px;
  }
`;
const Input = styled.input`
  padding: 20px;
  background-color: #e8e8e8;
  border: none;
  border-radius: 5px;
`;
const TextArea = styled.textarea`
  padding: 20px;
  background-color: #e9e9e9;
  border: none;
  border-radius: 5px;
`;
const Button = styled.button`
  width: 300px;
  padding: 10px;
  background-color: #e64833;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin: 0;
`;

const Right = styled.div`
  flex: 1;
  position: relative;

  @media only screen and (max-width: 760px) {
    display: none;
  }
`;

const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_4eigpy2', 'template_ja5k6t5', ref.current, {
        publicKey: 'bJWberTaJZHLJJ7Y6',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setSuccess(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setSuccess(false);
        }
      );
  };

  return (
    <Section id="ContactSection">
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            {' '}
            <Title>Contact</Title>
            <Input placeholder="Name" name="name"></Input>
            <Input placeholder="Name" name="email"></Input>
            <TextArea placeholder="Name" name="message" rows={10}></TextArea>
            <Button type="submit">Send</Button>
            {success && "your message has been sent, We'll get back soon!"}
          </Form>
        </Left>
        <Right className="map">
          <WorldMap />
        </Right>
      </Container>
    </Section>
  );
};

export default Contact;
