import axios from 'axios';
import { useEffect, useState } from 'react';
import { createGlobalStyle } from 'styled-components';

import { getRandomPhotoUrl } from './axios/config';
import { Container } from './components/Container/Container';
import { ImageListContainer } from './components/Container/ImageListContainer';
import { Form } from './components/Form/Form';
import { ImageList } from './components/ImageList/ImageList';
import { Main } from './components/styles';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    min-height: 100vh;  
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  #root{
    width: 980px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

function App() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(undefined);

  const getRandomPhotoRequest = async () => {
    setErrorMessage(undefined);
    setIsLoading(true);

    try {
      await axios.get(getRandomPhotoUrl(5)).then(({ data }) => {
        setPosts(data);
        setIsLoading(false);
      });
    } catch (e) {
      setIsLoading(false);
      console.error(e.message);
      setErrorMessage(e.message);
    }
  };

  const deletePost = (postId) => {
    setPosts((prevPosts) => prevPosts.filter(({ id }) => id !== postId));
  };

  useEffect(() => {
    getRandomPhotoRequest();
  }, []);

  return (
    <>
      <GlobalStyle />
      <header>
        <h1>Тестовое задание</h1>
      </header>
      <Container>
        <Form setPosts={setPosts} posts={posts} />
      </Container>
      <Main>
        <ImageListContainer>
          {!isLoading ? (
            <ImageList deletePost={deletePost} posts={posts} />
          ) : (
            <>Список картинок загружается</>
          )}
          {errorMessage && (
            <>При запросе картинок произошла ошибка: {errorMessage} </>
          )}
        </ImageListContainer>
      </Main>
    </>
  );
}

export default App;
