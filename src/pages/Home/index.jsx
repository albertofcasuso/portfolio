import React, { useState, useEffect } from 'react';
import LightBox from 'yet-another-react-lightbox';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import 'yet-another-react-lightbox/styles.css';
import { Spinner, Box, Image, Fade, AbsoluteCenter } from '@chakra-ui/react';
import { useGetFotoMediaQuery } from '../../services/media';

export default function Home() {
  const [index, setIndex] = useState(-1);
  const [photoSrc, setPhotoSrc] = useState([]);
  const { data, isLoading } = useGetFotoMediaQuery();
  useEffect(() => {
    if (!isLoading && data && data.length > 0) {
      const photosSrc = data.map(item => {
        return { src: item.source_url, width: item.media_details.width, height: item.media_details.height };
      });
      setPhotoSrc(photosSrc);
    }
  }, [data, isLoading]);

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
        <Box padding={4} w="100%" mx="auto" sx={{ columnCount: [1, 2, 2], columnGap: '8px' }}>
          {photoSrc.map((src, index) => {
            return (
              <Fade in={src.src} key={src.src}>
                <Image
                  key={src.src}
                  w="100%"
                  mb={2}
                  d="inline-block"
                  src={src.src}
                  alt="Alt"
                  onClick={() => setIndex(index)}
                />
              </Fade>
            );
          })}
        </Box>
        {/* <PhotoAlbum
          layout="masonry"
          photos={photoSrc}
          onClick={({ index }) => setIndex(index)}
          columns={containerWidth => {
            if (containerWidth >= 300 && containerWidth < 600) return 2;
            if (containerWidth >= 600) return 2;
          }}
          componentsProps={containerWidth => ({
            imageProps: { loading: 'lazy' }
          })}
        /> */}
        <LightBox slides={photoSrc} open={index >= 0} index={index} close={() => setIndex(-1)} plugins={[Fullscreen]} />
      </>
    );
  }
}
