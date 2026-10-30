import Link from "next/link";
export default function NotFound() {
  return (
    <div className="shell page-intro">
      <p className="eyebrow">404 / PAGE NOT FOUND</p>
      <h1>This path ends here.</h1>
      <p>
        The page may have moved. You can return home or explore the projects.
      </p>
      <div className="actions">
        <Link className="button primary" href="/">
          Go home
        </Link>
        <Link className="button secondary" href="/projects">
          View projects
        </Link>
      </div>
    </div>
  );
}
