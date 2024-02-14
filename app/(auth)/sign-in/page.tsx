import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <main>
      <div>
        <Link href="/sign-up" className="special">
          New Here? Register
        </Link>
        <h1>Sign In</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam a,
          porro nulla qui nisi ratione omnis ut quisquam iste aperiam excepturi
          libero nam dolores, officia eligendi ad corrupti et quam?
        </p>
      </div>
    </main>
  );
};

export default page;
