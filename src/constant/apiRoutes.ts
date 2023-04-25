export const SIGN_UP = '/auth/sign-up';
export const SIGN_IN = '/auth/sign-in';
export const REFRESH_TOKEN = '/token/renew';

export const ARTICLES_GET = '/scholar/articles';
export const ARTICLE_BY_ID = (id: string) => `/scholar/articles/${id}`;

export const COMMENT_ARTICLE_BY_ID = (id: string) => `/scholar/articles/${id}/comments`;
