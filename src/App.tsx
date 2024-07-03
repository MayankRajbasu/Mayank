import Header from "./Components/Header";
import Layout from "./Components/Layout";
import Hero from "./Components/Sections/Hero";
import About from "./Components/Sections/About";
import Work from "./Components/Sections/Work";
import Project from "./Components/Sections/Project";
import Contact from "./Components/Sections/Contact";

export default function App() {
  return (
    <>
      <Header />
      <main id="container">
        <Layout id="hero"><Hero /></Layout>
        <Layout id="about"><About /></Layout>
        <Layout id="works"><Work /></Layout>
        <Layout id="projects"><Project/></Layout>
        <Layout id="contact"><Contact /></Layout>
      </main>
    </>
  )
}
