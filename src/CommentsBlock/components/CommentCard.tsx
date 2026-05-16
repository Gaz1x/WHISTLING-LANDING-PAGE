import { Box, Flex, Text, Avatar, Icon } from '@chakra-ui/react';
import { Star } from 'lucide-react';

interface commentProps{
  name: string;
  avatar: string;
  rating: number;
  text: string;
}

function CommentCard({name, avatar, rating, text } : commentProps){
  return (
    <Box
      bg="white"
      borderRadius="2xl"
      p={6}
      boxShadow="0 4px 20px rgba(0,0,0,0.08)"
      _hover={{ transform: 'translateY(-4px)', boxShadow: '0 8px 30px rgba(0,0,0,0.12)' }}
      transition="all 0.3s"
    >

      <Flex gap={1} mb={4}>
        {[...Array(5)].map((_, i) => (
          <Icon
            as={Star}
            size={16}
            color={i < rating ? "yellow.400" : "gray.300"}
            fill={i < rating ? "yellow.400" : "none"}
          />
        ))}
      </Flex>

      <Text fontSize="md" color="gray.700" mb={5} lineHeight="1.6">
        {text}
      </Text>

      <Flex align="center" gap={3}>
        <Avatar 
          name={name} 
          src={avatar}
          size="md"
          bg="purple.100"
          color="purple.600"
        />
        <Text fontWeight="bold" color="gray.800">
          {name}
        </Text>
      </Flex>
    </Box>
  );
};

export default CommentCard;