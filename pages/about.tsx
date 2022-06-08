import Layout from "../components/Layout";
import AboutUs from "../components/AboutUs";
import Stats from "../components/Stats";
import Divider from "../components/Divider";

const About = () => {
  return (
    <Layout>
      <AboutUs />
      <Divider text="Statistics" />
      <Stats />
    </Layout>
  );
};

export default About;
