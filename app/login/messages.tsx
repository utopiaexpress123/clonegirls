"use client";

import { useSearchParams } from "next/navigation";

export default function Messages() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
  const message = searchParams.get("message");
  return (
    <>
      {error && (
        <p className="p-4 rounded-md border bg-fuchsia-100 text-gray-800 text-center text-sm">
          {error}
        </p>
      )}
      {message && (
        <p className="p-4 rounded-md border bg-lime-200 border-lime-200 text-gray-700 text-center text-sm">
          {message}
        </p>
      )}
    </>
  );
}
