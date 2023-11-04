const baseUrl = 'https://api.unsplash.com/';

export const unsplashToken = 'x2o6ayhWWERJwVzi11oVq_LoQZC4dVA0WWGaUy5lHyQ';

export const getRandomPhotoUrl = (imagesCount) =>
  `${baseUrl}photos/random?client_id=${unsplashToken}&count=${imagesCount}`;
