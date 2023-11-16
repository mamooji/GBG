import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Process from "../components/Process";
import Divider from "../components/Divider";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Divider text="Our Process" />
      <Process />
    </Layout>
  );
};

export default Home;
