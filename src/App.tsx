
import Header from './components/Header'
import Biography from './components/Biography'
import Hero from './components/Hero'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
     <div className='flex-1'>
     <Header />
      <Hero />
      <Biography />
      </div> 
      <div>
      <Footer />
      </div>
      

      
    </div>
  );
}

export default App;
