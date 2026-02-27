import ClientsPreview from "@/components/main/clients/clientsPreview";
import Header from "@/components/main/header/header";
import ServicesPreview from "@/components/main/services/servicesPreview";
import TextBox from "@/components/main/textbox/textBox";

export const dynamic = "force-dynamic";

export const metadata = {
  title : "کیو وب | آزانس رشد برند و تویعه کسب و کار",
  description : "در کیو وب با طراحی وبسایت، سئو و استراتژی دیجیتال، زیرساخت رشد پایدار کسب‌وکار خود را بسازید. همین امروز مسیر توسعه آنلاین خود را شروع کنید."
}

export default function Home() {
  return (
    <div className="px-4 text-justify">
      <Header />
      <ServicesPreview />
      
      <TextBox />
      <ClientsPreview />
    </div>
  );
}
