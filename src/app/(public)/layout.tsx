import Navbar from "../components/Navbar";
import "../globals.css";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
      {/* Footer can be added here as well if created later */}
    </>
  );
}
