import React, { useState, useEffect } from 'react';
import LightBox from 'yet-another-react-lightbox';
import { Masonry } from 'masonic';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import 'yet-another-react-lightbox/styles.css';
import { Spinner, Box, Image, AbsoluteCenter, Fade } from '@chakra-ui/react';
import { useGetFotoMediaQuery } from '../../services/media';

export default function Home() {
  const [page, setPage] = useState(1);
  const [index, setIndex] = useState(-1);
  const { data, isLoading, isFetching, isError } = useGetFotoMediaQuery(page);
  const photos = data ? data : [];
  const lightboxPhotos = data
    ? data.map(item => ({
        src: item.source_url
      }))
    : [];

  const onScroll = () => {
    const scrolledToBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 400;
    if (scrolledToBottom && !isFetching) {
      if (!isError) {
        setPage(page + 1);
      }
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', onScroll);

    return function () {
      document.removeEventListener('scroll', onScroll);
    };
  }, [page, isFetching]);

  const handleImageClick = index => {
    setIndex(index);
  };

  const MasonryCard = ({
    index,
    data: {
      source_url,
      slug,
      media_details: {
        sizes: { medium_large }
      }
    },
    width
  }) => {
    return (
      <>
        <Image
          key={source_url}
          w="100%"
          mb={2}
          src={medium_large.source_url}
          alt="Alt"
          onClick={() => handleImageClick(index)}
          loading={index <= 1 ? 'eager' : 'lazy'}
        />
      </>
    );
  };

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
        <Masonry items={photos} render={MasonryCard} maxColumnCount={2} columnGutter={10} rowGutter={5} />
        <LightBox
          slides={lightboxPhotos}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          plugins={[Fullscreen]}
          carousel={{ preload: 1 }}
        />
      </>
    );
  }
}
