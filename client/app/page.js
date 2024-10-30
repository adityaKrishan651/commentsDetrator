"use client";

import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

  return (
    <>
      <Button variant="contained" onClick={() => router.push("/comments")}>Go To Comments</Button>
      <Button variant="outlined" onClick={() => router.push("/login")}>Login</Button>
    </>
  );
};

export default Home;
