import React, { useState, useEffect } from "react";
// this is here just because i didnt need to use an api in my code so i made something for the task
export default function ApiPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) => {
        setData(data.results[0]); 
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Random User API</h1>
      {loading ? (
        <p className="text-lg text-gray-500">Loading...</p>
      ) : (
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <img
            src={data.picture.large}
            alt="User"
            className="w-32 h-32 rounded-full mx-auto"
          />
          <h2 className="text-xl font-semibold mt-4">
            {data.name.first} {data.name.last}
          </h2>
          <p className="text-gray-600">{data.email}</p>
          <p className="text-gray-600">{data.location.country}</p>
        </div>
      )}
    </div>
  );
}
