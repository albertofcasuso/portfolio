import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import parse from 'html-react-parser';
import { useGetStreetProjectsQuery } from '../../services/proyectos';
import { Box, VStack, HStack, Button } from '@chakra-ui/react';
import './street.scss';

export default function StreetPage() {
  const navigate = useNavigate();
  const { page: currentPage } = useParams();
  const { data, isError, error } = useGetStreetProjectsQuery(currentPage);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  useEffect(() => {
    if (!currentPage) {
      navigate('/street/1');
    }
  }, [currentPage]);

  useEffect(() => {
    if (
      (isError && error.data.code === 'rest_post_invalid_page_number') ||
      (isError && error.data.code === 'rest_invalid_param')
    ) {
      navigate('/street/1');
    }
  }, [isError, error]);

  const goToNextPage = () => {
    navigate(`/street/${Number(currentPage) + 1}`);
  };

  const goToPreviousPage = () => {
    navigate(`/street/${Number(currentPage) - 1}`);
  };

  return (
    <div>
      <VStack spacing={10} width={'100%'} justify={'center'} align={'center'}>
        {data && data.data.length > 0
          ? data.data.map(post => {
              return (
                <>
                  <Box w="80%" padding={10} alignContent={'center'} justifyContent={'center'}>
                    {parse(post.content.rendered)}
                  </Box>
                </>
              );
            })
          : 'Loading...'}
      </VStack>
      <HStack justify={'space-around'} padding={10}>
        <Button onClick={goToPreviousPage} isDisabled={Number(currentPage) === 1 ? true : false} variant={'link'}>
          Prev. Page
        </Button>
        <Button
          onClick={goToNextPage}
          isDisabled={Number(currentPage) >= Number(data?.totalPages) ? true : false}
          variant={'link'}
        >
          Next Page
        </Button>
      </HStack>
    </div>
  );
}
