//@ts-ignore
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default fetcher;

export const apiUrl = 'https://academy.dev.sofascore.com/api/v1';
