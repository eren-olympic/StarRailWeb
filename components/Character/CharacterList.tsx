import React from "react";
import { Box, Center, Text, Image, Grid, GridItem, useTheme } from "@chakra-ui/react";

const CharacterList = () => {
    const theme = useTheme();

    return (
        <div>
            <Grid templateColumns="repeat(5, 1fr)" gap={6}>
                <GridItem bg={theme.colors.primary} w='100%' p='2' gap='1' border=' 1{theme.colors.comment}'>
                    <Center>Testing</Center>
                </GridItem>
                <GridItem w='100%' p='2' gap='1' border={theme.colors.comment} />
                <GridItem w='100%' p='2' gap='1' border={theme.colors.comment} />
                <GridItem w='100%' p='2' gap='1' border={theme.colors.comment} />
                <GridItem w='100%' p='2' gap='1' border={theme.colors.comment} />
            </Grid>
        </div>
    );
};

export default CharacterList;