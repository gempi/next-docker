"use client";

import { useEffect, useState } from "react";

export default function Message() {
  const [data, setData] = useState<{ message: string } | null>(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `${
        process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001"
      }/message/john`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No data</p>;

  return <>{data.message}</>;
}
