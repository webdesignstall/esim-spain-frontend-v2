import CountrySection from "@/components/home/CountrySection";
import HomePageLayout from "@/components/layouts/HomePageLayout";

export default function Home() {
  return (
    <div className="bg-[#0A0601]">
      <CountrySection />
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <HomePageLayout>{page}</HomePageLayout>;
};
