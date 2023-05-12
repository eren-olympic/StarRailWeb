import React from "react";
import { Box, Grid, GridItem, Link, useTheme } from "@chakra-ui/react";
import NextLink from "next/link";

const Tab: React.FC<{ label: string; href: string }> = ({ label, href }) => {
    const theme = useTheme();

    return (
        <GridItem
            bg={theme.colors.background}
            borderRadius='md'
            boxShadow='md'
            border='1px solid'
            p='2'
            _hover={{
                bg: theme.colors.foreground,
                cursor: 'pointer',
                color: theme.colors.text,
            }}
            textAlign='center'
            color={theme.colors.comment}
        >
            <Link as={NextLink} href={href}>
                {label}
            </Link>
        </GridItem>
    )
};

const Navbar = () => {
    const theme = useTheme();

    return (
        <Box w='100%' h='100%' borderBottom='1px solid' bg={theme.colors.background} px='12' py='4'>
            <Grid templateColumns="repeat(4, 1fr)" gap={6}>
                <Tab label='Home' href='/'/>
                <Tab label='Character' href='/character' />
                <Tab label='Inventory' href='/inventory' />
                <Tab label='Calculator' href='/calculator' />
            </Grid>
        </Box>
    );
};

export default Navbar;