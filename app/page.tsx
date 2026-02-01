import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

export const revalidate = 0;

export default function Home() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}
