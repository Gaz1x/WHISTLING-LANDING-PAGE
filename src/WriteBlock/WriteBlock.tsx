import React from 'react';
import { Container, Flex, Box } from '@chakra-ui/react';
import HeroContent from './components/HeroContent';
import HeroImage from './components/HeroImage';

const WriteBlock: React.FC = () => {
  return (
    <Box py={16} bg="white">
      <Container maxW="container.xl">
        <Flex
          direction={{ base: 'column', lg: 'row' }}
          align="center"
          justify="space-between"
          gap={8}
        >
          <HeroContent />
          <HeroImage />
        </Flex>
      </Container>
    </Box>
  );
};

export default WriteBlock;