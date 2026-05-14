import React from 'react';
import { Box, Flex, Image } from '@chakra-ui/react';
import { Users, UserCheck } from 'lucide-react';
import StatsCard from './StatsCard';

// import heroImageSrc from '../images/hero.png'; 

const heroImageSrc = "fdsf.jpg";
const HeroImage: React.FC = () => {
  return (
    <Box 
      flex={{ base: '1', lg: '1.5' }} 
      position="relative" 
      display="flex" 
      justifyContent="center" 
      alignItems="center"
      mt={{ base: 8, lg: 0 }}
      order={{ base: 1, lg: 2}}
    >
      {/* Декоративный фон (светлое пятно за парнем) */}
      <Box
        position="absolute"
        w="90%"
        h="90%"
        bg="purple.100"
        borderRadius="full"
        zIndex={0}
        opacity={0.5}
      />

      {/* Основная картинка */}
      <Image
        src={heroImageSrc}
        alt="Boy whistling"
        zIndex={1}
        maxH={{ base: '300px', md: '500px' }}
        w="auto"
        // fallback если картинки нет
        fallback={<Box w="300px" h="300px" bg="gray.200" borderRadius="full" />}
      />

      {/* Карточки статистики, висящие поверх */}
      <Flex
        position="absolute"
        bottom={{ base: 0, md: 8 }}
        right={{ base: 0, md: 8 }}
        zIndex={2}
        gap={4}
      >
        <StatsCard 
          icon={Users} 
          value="7" 
          label="кадетов в день" 
        />
        <StatsCard 
          icon={UserCheck} 
          value="200" 
          label="Вместимость: 200" 
        />
      </Flex>
    </Box>
  );
};

export default HeroImage;