import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import { Image, Box, Center } from '@chakra-ui/react'

const HomePage = () => {
    const [isPresent, setIsPresent] = useState(false);

    return (
        <div>
            <Navbar />
            <Center bg='gray.100' h='400px'>
                <Box boxSize='sm'>
                    <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
                </Box>
                <div>
                    <h1>Home Page</h1>
                </div>
            </Center>
        </div>
    );
};

export default HomePage;
