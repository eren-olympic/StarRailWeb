import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import { Text, Image, Box, Center, useTheme } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

const HomePage = () => {
    const [isPresent, setIsPresent] = useState(false);
    const theme = useTheme();

    return (
        <div>
            <Navbar />
            <Tabs variant='enclosed' isFitted>
                <TabList>
                    <Tab>Tab1</Tab>
                    <Tab>Tab2</Tab>
                    <Tab>Tab3</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <p>This is Tab One!</p>
                    </TabPanel>
                    <TabPanel>
                        <p>This is Tab Two!</p>
                    </TabPanel>
                    <TabPanel>
                        <p>This is Tab Three!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    );
};

export default HomePage;
