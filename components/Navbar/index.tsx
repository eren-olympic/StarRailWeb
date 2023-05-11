import React from "react";
import { Box, useTheme } from "@chakra-ui/react";

const Navbar = () => {
    const theme = useTheme();

    return (
        <Box bg={theme.colors.background} w="100%" borderBottom='1px solid' p={4} color={theme.colors.comment}>
            <Box as='button' borderRadius='md' bg={theme.colors.primary} color={theme.colors.text} p={2} _hover={{ bg: theme.colors.primaryDark }}>
                Neobase
            </Box>
        </Box>
    );
};

export default Navbar;