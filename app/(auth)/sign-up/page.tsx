import Link from "next/link";

const page = () => {
  return (
    <main>
      <div>
        <Link href="/sign-in" className="special">
          Already Registered? Login
        </Link>
        <h1>Sign Up</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo eligendi
          repudiandae ut maxime fugiat deleniti sit dolore magnam! Atque quo
          illum totam culpa doloribus ut esse quaerat, accusantium architecto
          odio.
        </p>
      </div>
    </main>
  );
};

export default page;
