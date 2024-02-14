import Link from "next/link";

const ProjectList = () => {
  return (
    <main>
      <div>
        <h1>My Project List</h1>

        <ul className="project-list">
          <li>
            <Link href="/projects/filmpire">
              Filmpire - (React, Redux, Framer Motion MUI)
            </Link>
          </li>
          <li>
            <Link href="/projects/spotify">
              Spotify - (Javascript, Sass, Array, JSON)
            </Link>
          </li>
          <li>
            <Link href="/projects/dev-overflow">
              Dev Overflow - (Next.js, App Router, Tailwind CSS, Typescript )
            </Link>
          </li>
          <li>
            <Link href="/projects/car-rent">
              Car Rent - (Next JS, Context API, Tailwind CSS)
            </Link>
          </li>
          <li>
            <Link href="/projects/nike-store">
              Nike Store - (Next JS, Redux Toolkit, Tailwind CSS, Authorization)
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default ProjectList;
