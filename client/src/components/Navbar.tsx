import { Box, Flex, Button, Text, Container } from "@chakra-ui/react";
import { useColorMode, useColorModeValue } from "@/components/ui/color-mode";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";

export default function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode();

    // Define colors for better readability and aesthetics
    const bg = useColorModeValue("white", "gray.900");
    const borderColor = useColorModeValue("gray.200", "gray.700");
    const textColor = useColorModeValue("gray.800", "white");
    const shadow = useColorModeValue("lg", "dark-lg");

    return (
        <Container maxW="900px" px={4}>
            <Box
                bg={bg}
                px={6}
                my={6}
                borderRadius="2xl"
                borderWidth="1px"
                borderColor={borderColor}
                boxShadow={shadow}
                position="sticky"
                top={4}
                zIndex={10}
            >
                <Flex h={16} alignItems="center" justifyContent="space-between">
                    {/* LEFT SIDE: Logos + Math */}
                    <Flex alignItems="center" gap={3} display={{ base: "none", sm: "flex" }}>
                        <img src='/react.png' alt='React Logo' width={40} height={40} />
                        <Text fontSize="2xl" fontWeight="bold" color="gray.500">+</Text>
                        <img src='/go.png' alt='Go Logo' width={40} height={40} />
                        <Text fontSize="2xl" fontWeight="bold" color="gray.500">=</Text>
                        <img src='/todo.png' alt='Todo Logo' width={40} height={40} />
                    </Flex>

                    {/* RIGHT SIDE: Title + Toggle */}
                    <Flex alignItems="center" gap={4}>
                        <Text 
                            fontSize="xl" 
                            fontWeight="bold" 
                            letterSpacing="wide"
                            color={textColor}
                        >
                            Daily Tasks
                        </Text>

                        {/* Divider Line (Optional visual separation) */}
                        <Box w="1px" h="24px" bg="gray.300" display={{ base: "none", md: "block" }} />

                        {/* Theme Toggle Button */}
                        <Button 
                            onClick={toggleColorMode} 
                            variant="surface" // 'surface' or 'ghost' looks best here
                            size="sm"
                            borderRadius="full"
                        >
                            {colorMode === "light" ? <IoMoon size={18} /> : <LuSun size={18} />}
                        </Button>
                    </Flex>
                </Flex>
            </Box>
        </Container>
    );
}