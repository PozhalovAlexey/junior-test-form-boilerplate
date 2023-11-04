import { useState } from 'react';
import { useForm } from 'react-hook-form';

import {
  Button,
  DescriptionInputBlock,
  ErrorMessage,
  FormWrapper,
  Input,
  InputsContainer,
  InputsDescriptionContainer,
  Label,
  LabelWrapper,
  TextArea,
  TextAreaContainer,
} from './styles';

export const Form = ({ setPosts }) => {
  const [hasDescription, setHasDescription] = useState(false);
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
    trigger,
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      title: '',
      description: null,
      url: '',
    },
  });

  const addPost = (data) => {
    const newPost = {
      id: Math.random(),
      title: data.title,
      created_at: new Date(),
      description: hasDescription ? data.description : null,
      alt_description: hasDescription ? data.description : null,
      urls: {
        regular: data.url,
      },
    };

    setPosts((prevPosts) => {
      return [...prevPosts, newPost];
    });
  };

  const onSubmit = (data) => {
    addPost(data);
    reset();
  };

  const onCheckboxChange = () => {
    if (hasDescription) {
      trigger();
    }

    setHasDescription((prev) => !prev);
  };

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <InputsContainer>
        <LabelWrapper>
          <Label>Название фото</Label>
          <Input
            {...register('title', {
              required: true,
              minLength: 5,
            })}
            type="text"
            placeholder="Название для фото"
            hasError={errors?.title}
          />
          <ErrorMessage>
            {errors?.title && (
              <p>{errors?.title?.message || 'Обязательно вставить фото'}</p>
            )}
          </ErrorMessage>
        </LabelWrapper>
        <LabelWrapper>
          <Label>Ссылка на фото</Label>
          <Input
            {...register('url', {
              required: true,
              minLength: 5,
            })}
            placeholder={'Вставить ссылку'}
            type={'text'}
            hasError={errors?.url}
          />
          <ErrorMessage>
            {errors?.url && (
              <p>{errors?.url?.message || 'Обязательно вставить ссылку'}</p>
            )}
          </ErrorMessage>
        </LabelWrapper>
      </InputsContainer>
      <InputsDescriptionContainer>
        <LabelWrapper>
          <DescriptionInputBlock>
            <input
              id="hasDescription"
              value={hasDescription}
              type="checkbox"
              onChange={onCheckboxChange}
            />
            <label htmlFor="hasDescription">Есть описание</label>
          </DescriptionInputBlock>
        </LabelWrapper>
        {hasDescription && (
          <TextAreaContainer>
            <TextArea
              {...register('description', {
                required: true,
                minLength: 5,
              })}
              placeholder="Описание"
              type="text"
              hasError={errors?.description}
            />
            <ErrorMessage>
              {errors?.description && (
                <p>
                  {errors?.description?.message ||
                    'Обязательно добавить описание'}
                </p>
              )}
            </ErrorMessage>
          </TextAreaContainer>
        )}
      </InputsDescriptionContainer>
      <Button type="submit" disabled={!isValid}>
        Добавить фото
      </Button>
    </FormWrapper>
  );
};
