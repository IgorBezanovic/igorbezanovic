import { Container } from "@mui/material";
import { profile } from "@/lib/site";
export function Footer({ role }: { role: string }) {
  return (
    <footer className="site-footer">
      <Container className="footer-inner">
        <span>
          © {new Date().getFullYear()} {profile.name} · {role}
        </span>
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
      </Container>
    </footer>
  );
}
