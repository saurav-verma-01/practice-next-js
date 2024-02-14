import Link from "next/link";

const page = ({ params }) => {
  return (
    <main>
      <div>
        <h2 className="all-projects-link">
          <Link href="/projects/list">ALL PROJECTS</Link>
        </h2>
        <h1>Project Name - {params.projectName.toUpperCase()}</h1>
        <h2>Project Details</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, vel.</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, vel.
          Lorem ipsum dolor sit amet.
        </p>
      </div>
    </main>
  );
};

export default page;
