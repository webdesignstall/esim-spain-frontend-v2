import Layout from "@/components/layouts/HomePageLayout";

export default function Home() {
  return <div>Hello</div>;
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
