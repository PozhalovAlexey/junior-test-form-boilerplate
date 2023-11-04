import { formatDate } from '../FormatDate/formatDate';

import {
  CardBody,
  CardImage,
  CardProperty,
  CardTitle,
  DeleteIconWrapper,
  ImageListWrapper,
} from './styles';

export const ImageList = ({ posts, deletePost }) => {
  return posts?.map((post) => (
    <ImageListWrapper key={post.id}>
      <CardBody key={post.id}>
        <CardTitle>
          <div>{post?.title || 'Без заголовка'}</div>
          <DeleteIconWrapper
            onClick={() => {
              deletePost(post.id);
            }}
          />
        </CardTitle>
        <CardProperty>
          Дата добавления: {formatDate(post.created_at)}
        </CardProperty>

        <CardProperty>
          Описание: {post.description || 'Описание отсутствует'}{' '}
        </CardProperty>
        <CardImage src={post.urls.regular} />
      </CardBody>
    </ImageListWrapper>
  ));
};
