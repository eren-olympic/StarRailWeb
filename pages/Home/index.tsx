import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import { Text, Image, Box, Center, useTheme } from '@chakra-ui/react'

const HomePage = () => {
    const [isPresent, setIsPresent] = useState(false);
    const theme = useTheme();

    return (
        <div>
            <Navbar />
            <Center bg={theme.colors.foreground} h='400px' color={theme.colors.text}>
                <Box boxSize='sm'>
                    <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
                </Box>
                <div>
                    <h1>Home Page</h1>
                    <Text fontSize='xs' color={theme.colors.comment}>This is a demo description</Text>
                </div>
            </Center>
        </div>
    );
};

export default HomePage;
