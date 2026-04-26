import CardLayout from './components/CartLayout';
import Header from './components/Header';
import Hero from './components/Hero';

const App = () => {
  return (
    <div className="flex flex-col gap-4">
      <Header />
      <Hero />
      <CardLayout />
    </div>
  );
};

export default App;
