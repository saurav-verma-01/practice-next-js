import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>
        <h1>This is My Home Page</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero autem
          dignissimos aperiam culpa eos saepe asperiores dolores quam, nihil
          molestiae, corrupti, voluptatem commodi! Autem eos iusto nisi
          quibusdam maxime cupiditate.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero autem
          dignissimos aperiam culpa eos saepe asperiores dolores quam, nihil
          molestiae, corrupti, voluptatem commodi! Autem eos iusto nisi
          quibusdam maxime cupiditate.
        </p>
        <h2>Want to checkout Projects</h2>
        <Link href="/projects/list" className="link">
          Project 🏢
        </Link>
      </div>
    </main>
  );
}
