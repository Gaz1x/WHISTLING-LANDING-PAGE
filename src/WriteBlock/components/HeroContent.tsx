import { useState } from 'react';
import { 
  Box, 
  Text, 
  Button, 
  Image, 
  Flex, 
  Badge,

  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from '@chakra-ui/react';
import { ArrowRight, Calendar, User, Phone, Check, Mail} from 'lucide-react';

import paintSrc from "../images/paint.png";

function HeroContent() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isRegistred, setReg] = useState(false);

  const handleSubmit = () => {
    setReg(true);
    onClose();
  };

  const handleClick = () => {
    if (!isRegistred) {
      onOpen();
    }
  }
  return (
    <>
    <Box flex={{ base: '1', lg: '1' }} pr={{ lg: 8 }} order={{ base :2, lg: 1}}>
      <Text 
        as="h1" 
        fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }} 
        fontWeight="800" 
        lineHeight="1.1" 
        mb={4}
        color="gray.900"
      >
        Мастер-класс по свисту двумя пальцами
      </Text>
      <Text
        fontSize={{ base: '2xl', md: '3xl' }} 
        fontWeight="700" 
        color="yellow.400" 
        mb={0}
      >
        Пальцы во рту — <br/> шум на всю страну!
      </Text>
      <Image
        src={paintSrc}
        alt="Paint"
        w="90px"
        h="15px"
        fallback={<Box w="90px" h="15px" bg="yellow.400" mb={8}/>}
        mb={8}
        sx={{
          transform: "scaleY(-1)",
        }}
      />
      <Button
        size="lg"
        bgGradient={!isRegistred ? 'linear(to-t, yellow.500, yellow.300)' : 'linear(to-t, green.500, green.300)'}
        color="gray.800"
        fontWeight="bold"
        px={8}
        py={8}
        borderRadius="xl"
        _hover={{bgGradient: !isRegistred ? 'linear(to-t, yellow.300, yellow.100)' :  'linear(to-t, green.300, green.100)'}}
        rightIcon={!isRegistred ? <ArrowRight size={20}/> : <Check size={20}/>} 
        w={{ base: '100%', md:'70%' }}
        mb={4}
        onClick={handleClick}
      >
        {!isRegistred ? "Записаться" : "Вы записаны"}
      </Button>

      <Flex direction="column" gap={3}>
        <Flex align="center" gap={2} color="gray.900" fontSize="md">
          <Calendar size={24} />
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
          <Flex align="center" gap={2} fontSize="md">
            <User size={20} />
            14–25 лет
          </Flex>
        </Badge>
      </Flex>
    </Box>
    
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="md">
        <ModalOverlay bg="blackAlpha.600" backdropFilter="blur(4px)" />
        <ModalContent borderRadius="2xl" p={6}>
          <ModalHeader fontSize="2xl" fontWeight="bold" color="gray.800">
            Запись на мастер-класс
          </ModalHeader>
          <ModalCloseButton />
          
          <form onSubmit={handleSubmit}>
            <ModalBody display="flex" flexDirection="column" gap={4}>
              
              <FormControl>
                <FormLabel display="flex" alignItems="center" gap={2} fontWeight="medium">
                  <User size={16} />
                  Ваше имя
                </FormLabel>
                <Input
                  placeholder="Иван Иванов"
                  borderRadius="xl"
                  borderColor="gray.200"
                  _focus={{ borderColor: "orange.300"}}
                />
              </FormControl>

              <FormControl>
                <FormLabel display="flex" alignItems="center" gap={2} fontWeight="medium">
                  <Phone size={16} />
                  Телефон
                </FormLabel>
                <Input
                  placeholder="+7 (999) 000-00-00"
                  borderRadius="xl"
                  borderColor="gray.200"
                  _focus={{ borderColor: "orange.300"}}
                />
              </FormControl>

              <FormControl>
                <FormLabel display="flex" alignItems="center" gap={2} fontWeight="medium">
                  <Mail size={16} />
                  E-mail
                </FormLabel>
                <Input
                  placeholder="svistun@mail.ru"
                  borderRadius="xl"
                  borderColor="gray.200"
                  _focus={{ borderColor: "orange.300"}}
                />
              </FormControl>

              <FormControl>
                <FormLabel fontWeight="medium">Комментарий</FormLabel>
                <Textarea
                  placeholder="Есть вопросы? Напишите здесь..."
                  rows={3}
                  borderRadius="xl"
                  borderColor="gray.200"
                  resize="none"
                  _focus={{ borderColor: "orange.300"}}
                />
              </FormControl>
            </ModalBody>
            <ModalFooter gap={3}>
              <Button variant="ghost" onClick={onClose} borderRadius="xl">
                Отмена
              </Button>
              <Button
                type="submit"
                bg="orange.300"
                color="gray.800"
                fontWeight="bold"
                borderRadius="xl"
                px={6}
                _hover={{ bg: "orange.400" }}
              >
                Отправить
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
      </>
  );
};

export default HeroContent;