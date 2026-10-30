import Link from "next/link";
import { profile } from "@/data/profile";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-content">
        <div>
          <strong>{profile.name}</strong>
          <p>Thoughtful testing. Clear evidence. Better software.</p>
          <small>
            © {new Date().getFullYear()} · {profile.location}
          </small>
        </div>
        <div className="footer-links">
          <a href={profile.github}>GitHub ↗</a>
          <a href={profile.linkedin}>LinkedIn ↗</a>
          <Link href="/resume">Résumé</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
