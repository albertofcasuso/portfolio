import React, { useState, useEffect } from 'react';
import { Spinner, Box, Image, AbsoluteCenter, HStack, Fade } from '@chakra-ui/react';
import { useGetFotoMediaQuery } from '../../services/media';

export default function Home() {
  const { data, isLoading } = useGetFotoMediaQuery(1);
  const photos = data ? data : [];

  if (isLoading) {
    return (
      <>
        <Box h="900px" w="100%">
          <AbsoluteCenter axis="both">
            <Spinner size={'xl'} />
          </AbsoluteCenter>
        </Box>
      </>
    );
  }

  if (!isLoading && data) {
    return (
      <>
        <HStack>
          <Fade in={data}>
            <Image src={photos[Math.floor(Math.random() * photos.length)].source_url} />
          </Fade>
        </HStack>
      </>
    );
  }
}
