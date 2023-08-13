import {
  Box,
  Button,
  HStack,
  Heading,
  Input,
  Stack,
  VStack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w={'full'} px={'4'}>
          <Heading size={'md'} textTransform={'uppercase'} textAlign={'center'}>
            follow us on vercel
          </Heading>
          <HStack borderBottom={'2px solid white'} py={2}>
            <Input
              placeholder="Email..."
              border={'none'}
              borderRadius={'none'}
              outline={'none'}
              focusBorderColor="none"
            />
            <Button
              p={0}
              colorScheme="purple"
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend size={20} />
            </Button>
          </HStack>
        </VStack>
        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
        >
          <Heading textTransform={'uppercase'}>GAURAV POWER</Heading>
          <Text>All Rights Reserved</Text>
        </VStack>
        <VStack w={'full'}>
          <Heading size={'md'} textTransform={'uppercase'}>
            Social media
          </Heading>
          <Button variant={'ghost'} colorScheme="red">
            <a href="http://youtube.com/">Youtube</a>
          </Button>
          <Button variant={'ghost'} colorScheme="pink">
            <a href="http://instagram.com">Instagram</a>
          </Button>
          <Button variant={'ghost'} colorScheme="purple">
            <a href="http://discord.com/">Discord</a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
