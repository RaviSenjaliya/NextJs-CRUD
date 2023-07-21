"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function page({ params }) {
  const [data, setData] = useState([]);
  let id = params.userid;
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(`http://localhost:8080/api/tutorials/${id}`);
    const jsonData = await response.json();
    setData(jsonData);
  };
  console.log(data);
  return (
    <div>
      <h1>
        Name: <span>{data.fname}</span> <span>{data.lname}</span>
      </h1>
      <p>Phone no: {data.phone} </p>
      <p>collage : {data.clg} </p>
      <Link href={"/user"}>
        <button>go back</button>
      </Link>
    </div>
  );
}
