import CounterExample from './components/CounterExample';
import HelloWorld from './components/HelloWorld';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />

      <HelloWorld name="Austin"/>

      <Footer />
    </div>
  );
}

export default App;
