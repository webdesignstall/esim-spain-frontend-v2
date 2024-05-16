import { useRouter } from "next/router";
import ChoosePirateSim from "@/components/home/ChoosePirateSim";
import SimpleSteps from "@/components/home/SimpleSteps";
import Testimonials from "@/components/home/Testimonials";
import PackageLayout from "@/components/layouts/PackageLayout";
import PackageList from "@/components/packages";

const Packages = () => {
  const {
    query: { country },
  } = useRouter();

  return (
    <div>
      <div className="bg-[#0A0601]">
        <PackageList country={country} />
        <ChoosePirateSim />
        <SimpleSteps />
        <Testimonials />
      </div>
    </div>
  );
};

export default Packages;

Packages.getLayout = function getLayout(page) {
  return <PackageLayout>{page}</PackageLayout>;
};
