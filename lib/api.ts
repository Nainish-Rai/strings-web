/* eslint-disable react-hooks/rules-of-hooks */
import useSWR from "swr";
const fetcher = (url: RequestInfo | URL) =>
  fetch(url).then((res) => res.json());
// const BASE_URL = "https://nainishlumos.vercel.app/api";
const BASE_URL = "http://localhost:3000/api";
// const BASE_URL = process.env.API_BASE_URL;
export function getCompleteUserDetails(username: string) {
  const address = `${BASE_URL}/userdetails/${username}`;
  const { data, error, isLoading } = useSWR(address, fetcher);
  return {
    data: data,
    isLoading,
    isError: error,
  };
}

// export function imagesApi(searchTerm) {
//   const { data, error, isLoading } = useSWR(
//     `${BASE_URL}/images/${searchTerm}`,
//     fetcher
//   );
//   return {
//     data: data,
//     isLoading,
//     isError: error,
//   };
// }
