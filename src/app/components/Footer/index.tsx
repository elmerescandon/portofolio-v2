export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 px-6 md:px-12 py-3 md:py-4">
      <p className="font-mono text-xs md:text-sm tracking-wide">
        &copy; {new Date().getFullYear()} raul escandon
      </p>
    </footer>
  );
}
