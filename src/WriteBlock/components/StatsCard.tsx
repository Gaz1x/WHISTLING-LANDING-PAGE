import { Box, Text, Icon } from '@chakra-ui/react';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
}

function StatsCard({ icon: IconComponent, value, label } : StatsCardProps) {
  return (
    <Box
      bg="white"
      p={4}
      borderRadius="2xl"
      boxShadow="0 4px 20px rgba(0,0,0,0.05)"
      w={{ md: "180px", base: "130px"}}
      textAlign="center"
    >
      <Icon as={IconComponent} color="purple.400" boxSize={{md: 8, base: 4}} mb={{md: 2, base: 1}}/>
      <Text fontSize={{md: "4xl", base: "2xl"}} fontWeight="bold" color="gray.800">
        {value}
      </Text>
      <Text fontSize={{md: "xl", base: "sm"}} color="gray.500" lineHeight="1.2">
        {label}
      </Text>
    </Box>
  );
};

export default StatsCard;