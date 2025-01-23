import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import Contactheader from "./components/Contactheader/Contactheader";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <main className="main_container">
        <Contactheader />
        <ContactForm />
      </main>
    </div>
  );
}

export default App;
