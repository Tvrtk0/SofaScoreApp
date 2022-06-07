//@ts-ignore
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default fetcher;

export const API_BASENAME = 'https://api.sofascore.com/api/v1';
// https://api.sofascore1.com/api/v1
// https://api.sofascore.com/api/v1
// https://academy.dev.sofascore.com/api/v1
