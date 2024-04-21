import { useState } from 'react';
import { supabase } from './supabaseClient';
import './index.css';

function Dorms() {
  const [dormInfo, setMyDorms] = useState([]);
  const [distanceInfo, setDistance] = useState([]);
  const [count, setCount] = useState(1);
  useState(() => {
    async function getDorms() {
      let { data: dormdata } = await supabase
      .from('dormdata')
      .select('*');
      setMyDorms(dormdata);
    }
    getDorms();
    async function getDistance() {
      let { data: distancedata } = await supabase
      .from('distancedata')
      .select('*');
      setDistance(distancedata);
    }
    getDistance();
  }, []);
   
      const increaseCount = () => {
        if (count < 26) {
          setCount(count+1);
        }
        else {
          setCount(1);
        }
  };
  
      const decreaseCount = () => {
        if (count > 1) {
          setCount(count-1);
        }
        else {
          setCount(26);
        }
  };
  return (
    <div className='font-mono text-green-800 text-center leading-10'>
        {dormInfo
        .filter(d => [count].includes(d.id))
        .map(d => (
          <>
          <h1 className='font-extrabold text-4xl mb-3'>{d.name}</h1>
          <div className='flex justify-center items-center'>
              <img className='h-auto max-w-xl mb-3' src={d.dorm_image} alt={d.name}/>
            </div>
          <div className='flex justify-center items-center gap-10 mb-3'>
            <button className='text-white bg-green-800 h-12 w-28 rounded-lg hover:scale-125 transition duration-150 ease-in-out' onClick={decreaseCount}>Back</button>
            <button className='text-white bg-green-800 h-12 w-28 rounded-lg hover:scale-125 transition duration-150 ease-in-out' onClick={increaseCount}>Next</button>
          </div>
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
        <div>
        {distanceInfo
        .filter(d => [count].includes(d.id))
        .map(d => (
          <>
          <h1>Estimated Walking Time:</h1>
          <p>Spartan Stadium: {d.spartanstadium} Minutes</p>
          <p>Breslin Center: {d.breslincenter} Minutes</p>
          <p>Munn Ice Arena: {d.munnicearena} Minutes</p>
          <p>Wharton Center: {d.whartoncenter} Minutes</p>
          <p>Wells Hall: {d.wellshall} Minutes</p>
          <p>Dairy Store: {d.dairystore} Minutes</p>
          <p>Beaumont Tower: {d.beaumonttower} Minutes</p>
          <p>Main Library: {d.library} Minutes</p>
          <p>Spartan Statue: {d.spartanstatue} Minutes</p>
          <p>Munn Field: {d.munnfield} Minutes</p>
          </>
        ))}
        </div>
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
