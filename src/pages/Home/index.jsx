import React from 'react';
import { useGetPostsQuery } from '../../services/posts';

export default function Home() {
  const { data, isLoading } = useGetPostsQuery();
  console.log(data);
  return (
    <>
      <p>Post List</p>
      {data &&
        data.map(item => {
          return (
            <>
              <li>{item.title.rendered}</li>
            </>
          );
        })}
    </>
  );
}
