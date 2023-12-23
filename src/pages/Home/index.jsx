import React, { useState, useEffect } from 'react';
import { Spinner, Box, Image, AbsoluteCenter, HStack, Fade } from '@chakra-ui/react';
import { useGetFotoMediaQuery } from '../../services/media';

export default function Home() {
  const [selectedPhoto, setSelectedPhoto] = useState(0);
  const { data, isLoading } = useGetFotoMediaQuery(1);
  const photos = data ? data : [];

  useEffect(() => {
    const timer = setInterval(() => {
      const number = Math.floor(Math.random() * photos.length);
      setSelectedPhoto(number);
    }, 5000);
    return () => clearTimeout(timer);
  }, [photos, selectedPhoto]);

  useEffect(() => {
    const number = Math.floor(Math.random() * 3);
    setSelectedPhoto(number);
  }, []);

  if (isLoading) {
    return (
      <>
        <Box h="100%" w="100%" minHeight={'700px'}>
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
        <HStack justify={'center'} height={'100%'}>
          <Image src={photos[selectedPhoto].source_url} width={'77%'} height={'auto'} />
        </HStack>
      </>
    );
  }
}
