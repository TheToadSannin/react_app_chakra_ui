import {
  Avatar,
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <Container maxW={'conatiner.xl'} h={'100vh'} p={'16'}>
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          width={['full', '96']}
          m={'auto'}
          my={'16'}
        >
          <Heading alignSelf={'center'}>Gaurav Power</Heading>
          <Avatar alignSelf={'center'} boxSize={'32'} />
          <Input
            placeholder="Name"
            type="text"
            required
            focusBorderColor={'purple.500'}
          ></Input>
          <Input
            placeholder="Email or Username"
            type="email"
            required
            focusBorderColor={'purple.500'}
          ></Input>
          <Input
            placeholder="Password"
            type="password"
            required
            focusBorderColor={'purple.500'}
          ></Input>
          <Button colorScheme="purple" type="submit">
            Signup
          </Button>
          <Text textAlign={'right'}>
            {' '}
            Already a User?{' '}
            <Button variant={'link'} colorScheme="purple">
              <Link to={'/Login'}>Login</Link>
            </Button>{' '}
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Signup;
