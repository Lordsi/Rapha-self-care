export default function Footer() {
  return (
    <footer className="site-footer">
      <p className="copyright">
        &copy; <span className="brand">Rapha Self-Care</span>{' '}
        {new Date().getFullYear()}
      </p>
    </footer>
  );
}
