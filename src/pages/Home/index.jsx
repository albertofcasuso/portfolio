import React, { useState, useEffect } from 'react';
import PhotoAlbum from 'react-photo-album';
import LightBox from 'yet-another-react-lightbox';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import 'yet-another-react-lightbox/styles.css';
import { Spinner } from '@chakra-ui/react';
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
        <Spinner />
      </>
    );
  }
  if (!isLoading && data) {
    return (
      <>
        <PhotoAlbum
          layout="masonry"
          photos={photoSrc}
          onClick={({ index }) => setIndex(index)}
          columns={containerWidth => {
            if (containerWidth >= 300 && containerWidth < 600) return 2;
            if (containerWidth >= 600) return 3;
          }}
        />
        <LightBox
          slides={photoSrc}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          // enable optional lightbox plugins
          plugins={[Fullscreen]}
        />
      </>
    );
  }
}
