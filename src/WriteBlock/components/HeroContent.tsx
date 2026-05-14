import React from 'react';
import { Box, Text, Button, Flex, Badge } from '@chakra-ui/react';
import { ArrowRight, Calendar, User } from 'lucide-react';

const HeroContent: React.FC = () => {
  return (
    <Box flex={{ base: '1', lg: '1' }} pr={{ lg: 8 }} order={{ base :2, lg: 1}}>
      {/* Главный заголовок */}
      <Text 
        as="h1" 
        fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} 
        fontWeight="800" 
        lineHeight="1.1" 
        mb={4}
        color="gray.900"
      >
        Мастер-класс <br /> по свисту двумя <br /> пальцами
      </Text>

      {/* Подзаголовок */}
      <Text
        fontSize={{ base: 'xl', md: '2xl' }} 
        fontWeight="700" 
        color="orange.400" 
        mb={8}
      >
        Пальцы во рту — шум на всю страну!
      </Text>

      {/* Кнопка записи */}
      <Button
        size="lg"
        bg="orange.300" // Желто-оранжевый цвет кнопки
        color="gray.800"
        fontWeight="bold"
        px={8}
        py={6}
        borderRadius="xl"
        _hover={{ bg: "orange.400" }}
        rightIcon={<ArrowRight size={20} />}
        w={{ base: '100%', md: 'auto' }}
        mb={8}
      >
        Записаться
      </Button>

      {/* Теги с информацией */}
      <Flex direction="column" gap={3}>
        <Flex align="center" gap={2} color="gray.600" fontSize="sm">
          <Calendar size={18} />
          <Text>Офлайн мастер-класс + путь в академию</Text>
        </Flex>
        
        <Badge 
          bg="gray.100" 
          color="gray.600" 
          borderRadius="full" 
          px={3} 
          py={1} 
          w="fit-content"
          fontWeight="medium"
        >
          <Flex align="center" gap={1}>
            <User size={14} />
            14–25 лет
          </Flex>
        </Badge>
      </Flex>
    </Box>
  );
};

export default HeroContent;