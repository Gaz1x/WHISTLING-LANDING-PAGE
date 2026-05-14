import React from 'react';
import { Box, Text, Flex, Icon } from '@chakra-ui/react';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ icon: IconComponent, value, label }) => {
  return (
    <Box
      bg="white"
      p={4}
      borderRadius="2xl"
      boxShadow="0 4px 20px rgba(0,0,0,0.05)"
      w="180px" // Фиксированная ширина как на макете
      textAlign="center"
    >
      <Icon color="purple.400" mb={2} />
      <Text fontSize="2xl" fontWeight="bold" color="gray.800">
        {value}
      </Text>
      <Text fontSize="sm" color="gray.500" lineHeight="1.2">
        {label}
      </Text>
    </Box>
  );
};

export default StatsCard;