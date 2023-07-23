
// const fetcher = async (url) => {
//   const response = await fetch(url);
//   const data = await response.json();
//   return data;
// };
// const { data, error } = useSWR(
//   "https://jsonplaceholder.typicode.com/posts",
//   fetcher
// );

// if (error) return <div>Error fetching data</div>;
// if (!data) return <div>Loading...</div>;

// console.log(data);