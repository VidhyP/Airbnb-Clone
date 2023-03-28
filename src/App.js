import './App.css';
import './components/Navbar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import card from './images/card.png';


function App() {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <Card
                img={card}
                rating="5.0"
                reviewCount={6}
                country="Canada"
                title="Life Lessons with Katie"
                price={136}
            />
        </div>
    )
}

export default App;