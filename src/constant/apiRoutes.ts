export const SIGN_UP = '/auth/sign-up';
export const SIGN_IN = '/auth/sign-in';
export const REFRESH_TOKEN = '/token/renew';

export const GET_PROFILE = '/users/profile';

export const ARTICLES_GET = '/scholar/articles';

export const APPLICANTS_GET = '/code-connection/applicants';

export const CREATE_CARD = '/code-connection/cards';

export const INVITE_USER = (id: number) => `/code-connection/cards/${id}/invitations`;

export const INVITATIONS_GET = '/code-connection/cards/invitations';

export const ARTICLE_BY_ID = (id: string) => `/scholar/articles/${id}`;

export const COMMENT_ARTICLE_BY_ID = (id: string) => `/scholar/articles/${id}/comments`;

export const CONTESTS_GET = '/contests';

export const MATERIALS_GET = '/scholar/materials';
export const MATERIAL_BY_ID = (id: string) => `/scholar/materials/${id}`;
