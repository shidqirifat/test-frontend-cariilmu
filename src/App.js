import Gap from "./components/atoms/Gap";
import Hero from "./components/moleculs/Hero";
import Header from "./components/organismes/Header";
import CardClass from "./templates/CardClass";
import CardInstructor from "./templates/CardInstructor";

function App() {
  return (
    <>
      <Header />
      <main className="bg-slate-50">
        <Hero />
        <div className="px-10 py-10 mb-40 max-w-6xl mx-auto">
          <CardClass />
          <Gap height={40} />
          <CardInstructor />
        </div>
      </main>
    </>
  );
}

export default App;
