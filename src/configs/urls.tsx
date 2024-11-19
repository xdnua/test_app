export const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export const getApiUrl = (endpoint: string) => API_BASE_URL + endpoint;

export const POST_API = getApiUrl('/posts');
export const COMMENT_API = getApiUrl('/comments');
export const ALBUM_API = getApiUrl('/albums');
