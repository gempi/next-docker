async function getMessage(name: string) {
  const res = await fetch(
    `${
      process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001"
    }/message/${name}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Message({
  params,
}: {
  params: { name: string };
}) {
  const data = await getMessage(params.name);

  return <>{data.message}</>;
}
