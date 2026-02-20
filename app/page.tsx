import Header from "@/components/main/header/header";
import ServicesPreview from "@/components/main/services/servicesPreview";

export default function Home() {
  return (
    <div className="px-4 text-justify">
      <Header />
      <ServicesPreview />
    </div>
  );
}
