import { Container, Box, Image, Flex, HStack, Text} from "@chakra-ui/react"; 
import Clicker from "./components/Clicker";
import SoundMeter from "./components/SoundMeter";

// import hero from "./images/fingerHero.png";
import paintSrc from "./images/paint.png";

function InteractiveComponents() {
    return(
            <Container maxW="container.xl" mb={8}>
                <Flex direction="column" alignItems="center">
                    <HStack display="flex" verticalAlign="center" mb={4}>
                        <Image
                            src={paintSrc}
                            alt="Paint"
                            w={{ base: "80px", md: "120px" }} 
                            h="10px" 
                            fallback={<Box w="90px" h="15px" bg="yellow.400" mb={8}/>}
                            sx={{
                            transform: "scaleY(-1)",
                            }}
                        />
                        <Text as="h1" fontSize={{base: "2xl", md:"4xl"}} fontWeight="900">Испытай себя</Text>
                        <Image
                            src={paintSrc}
                            alt="Paint"
                            w={{ base: "80px", md: "120px" }} 
                            h="10px" 
                            fallback={<Box w="90px" h="15px" bg="yellow.400" mb={8}/>}
                            // mb={8}
                            sx={{
                            transform: "scaleY(-1) scaleX(-1)",
                            }}
                        />
                    </HStack>
                    {/* <Box
                        // position="absolute"
                        maxH="400px"
                        w="auto"
                        bg="purple.100"
                        borderRadius="full"
                        // opacity={0.5}
                    >
                    <Image
                        src={hero}
                        alt="Paint"
                        maxH="400px"
                        w="auto"
                        // zIndex={1}
                        fallback={<Box w="90px" h="15px" bg="yellow.400" mb={8}/>}
                        // mb={8}
                        sx={{
                            transform: "scaleX(-1)",
                        }}
                        display={{base:"none", md: "block"}}
                    />
                    </Box> */}
                    <Flex w="100%" direction={{base: "column", lg: "row"}} mb={8} gap={5}>
                        <Clicker maxClicks={100} discount={30} decrease={1} timeout={400}/>
                        <SoundMeter/>
                    </Flex>
                </Flex>
            </Container>
    );
}

export default InteractiveComponents;