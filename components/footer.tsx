export default function Footer() {
  return (
    <footer className="footer footer-center absolute bottom-0 h-16">
      <div className="text-base">&copy; Lyenx, {new Date().getFullYear()}</div>
    </footer>
  );
}
