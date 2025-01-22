import { LoaderFunctionArgs } from "react-router";

export async function loader({
  request,
}: LoaderFunctionArgs) {
  const data = await fetchApiFromServer({ request }); // (1)
  return data;
}

export async function clientLoader({
  request,
}: Route.ClientLoaderArgs) {
  const data = await fetchApiFromClient({ request }); // (2)
  return data;
}

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
}
