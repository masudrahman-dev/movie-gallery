
import useSWR from "swr";
// Define a function to fetch data
const fetcher = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

function MyComponent() {
  // Fetch data using the useSWR hook
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/todos",
    fetcher
  );

  if (error) return <div>Error fetching data</div>;
  if (!data) return <div>Loading...</div>;

  console.log(data);
  return (
    <div>
      <h1>Data from the API:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
export default MyComponent;
