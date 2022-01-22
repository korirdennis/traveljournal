import './App.css';
import Destination from './components/Destination';
import Navbar from './components/Navbar';
import DestinationData from '../src/Data';

function App() {

   const DestinationElements = DestinationData.map(Dest => {
      return <Destination 
          key={Dest.id}
          name={Dest.title}
          image={Dest.imageUrl}
          description={Dest.description}
          startDate={Dest.startDate}
          endDate={Dest.endDate}
          location={Dest.location}
          googleMapsUrl={Dest.googleMapsUrl}
          />
    });

  return (
    <div className="App">
      <Navbar/>
      {DestinationElements}
    </div>
  );
}

export default App;
