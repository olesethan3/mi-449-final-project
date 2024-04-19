import { useState } from 'react';
import { supabase } from './supabaseClient';
import './App.css';

function Dorms() {
  const [dormInfo, setMyDorms] = useState([]);

  useState(() => {
    async function getDorms() {
      let { data: dormdata } = await supabase
      .from('dormdata')
      .select('*');
      setMyDorms(dormdata);
    }
    getDorms();
  }, []);

  return (
    <div>
        {dormInfo
        .filter(d => [1].includes(d.id))
        .map(d => (
          <>
          <h1>{d.name}</h1>
          <img src={d.dorm_image} alt={d.name}/>
          <p>Address: {d.address}</p>
          <p>Year Opened: {d.year}</p>
          <p>Neighborhood: {d.neighborhood}</p>
          <p>Number of Floors: {d.floors}</p>
          <p>Bathoom Style: {d.bathroom_style}</p>
          <p>Double Rooms Available?: {d.double_rooms}</p>
          <p>Single Rooms Available?: {d.single_rooms}</p>
          <p>Dining Hall Inside?: {d.dining_hall}</p>
          </>
        ))}
    </div>
  )
}
  
  function App() {
    return (
      <>
        <Dorms />
      </>
    );
  }
  export default App;
