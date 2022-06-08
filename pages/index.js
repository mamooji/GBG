import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Process from "../components/Process";
import Testimonials from "../components/Testimonials";
import Divider from "../components/Divider";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Divider text="Our Process" />
      <Process />
      <Divider text="Testimonials" />
      <Testimonials />
    </Layout>
  );
};

export default Home;
