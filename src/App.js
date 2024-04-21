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
    <div className='font-mono text-msu-color text-center leading-10'>
        {dormInfo
        .filter(d => [count].includes(d.id))
        .map(d => (
          <>
          <div className='sticky top-0 mb-7'>
            <h1 className='font-extrabold text-white text-5xl bg-green-800'>MSU Dorm Info</h1>
            <h1 className='font-extrabold text-4xl bg-[#f2f3f4]'>{d.name}</h1>
          </div>
          <div className='flex justify-center items-center'>
              <img className='h-auto max-w-xl mb-3 rounded-lg' src={d.dorm_image} alt={d.name}/>
            </div>
          <div className='flex justify-center items-center gap-10 mb-3'>
            <button className='text-white bg-green-800 h-12 w-28 rounded-lg hover:scale-125 transition duration-150 ease-in-out' onClick={decreaseCount}>Back</button>
            <button className='text-white bg-green-800 h-12 w-28 rounded-lg hover:scale-125 transition duration-150 ease-in-out' onClick={increaseCount}>Next</button>
          </div>
          <div className="flex flex-wrap px-60">
            <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
              <h2 className='font-bold text-xl'>Address</h2>
              <p>{d.address}</p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
              <h2 className='font-bold text-xl'>Year Opened</h2>
              <p>{d.year}</p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
              <h2 className='font-bold text-xl'>Neighborhood</h2>
              <p>{d.neighborhood}</p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
              <h2 className='font-bold text-xl'>Floors</h2>
              <p>{d.floors}</p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
              <h2 className='font-bold text-xl'>Bathroom Style</h2>
              <p>{d.bathroom_style}</p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
              <h2 className='font-bold text-xl'>Double Rooms Available?</h2>
              <p>{d.double_rooms}</p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
              <h2 className='font-bold text-xl'>Single Rooms Available?</h2>
              <p>{d.single_rooms}</p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
              <h2 className='font-bold text-xl'>Dining Hall Inside?</h2>
              <p>{d.dining_hall}</p>
            </div>
          </div>
          </>
        ))}
        <div>
        {distanceInfo
        .filter(d => [count].includes(d.id))
        .map(d => (
          <>
          <div className='mt-5'>
            <h2 className='font-bold text-2xl'>Estimated Walking Time:</h2>
            <div className='flex justify-center items-start mr-8 gap-10'>
              <div className='flex justify-center items-center gap-3 mt-5'>
                <div>
                  <h3 className='font-bold text-lg'>Spartan Stadium</h3>
                  <p>{d.spartanstadium} Minutes</p>
                </div>
                <img className='h-auto max-w-32 mb-3' src="https://lh3.googleusercontent.com/p/AF1QipNACvhznQPLBFjYiXebx_Sl6FJ1uoRqNxMXa6qc=s1360-w1360-h1020" alt="Spartan Stadium"></img>
              </div>
              <div className='flex justify-center items-center gap-3 mt-5'>
                <div>
                  <h3 className='font-bold text-lg'>Breslin Center</h3>
                  <p>{d.breslincenter} Minutes</p>
                </div>
                <img className='h-auto max-w-32 mb-3' src="https://msuspartans.com/images/2020/1/6/breslin.jpeg" alt="Breslin Center"></img>
              </div>
              <div className='flex justify-center items-center gap-3 mt-5'>
                <div>
                  <h3 className='font-bold text-lg'>Munn Ice Arena</h3>
                  <p>{d.munnicearena} Minutes</p>
                </div>
                <img className='h-auto max-w-32 mb-3' src="https://msuspartans.com/images/2023/9/12/Munn_Surface.jpg" alt="Munn Ice Arena"></img>
              </div>
              <div className='flex justify-center items-center gap-3 mt-5'>
                <div>
                  <h3 className='font-bold text-lg'>Wharton Center</h3>
                  <p>{d.whartoncenter} Minutes</p>
                </div>
                <img className='h-auto max-w-32 mb-3' src="https://irwinseating-images.s3.amazonaws.com/Installations/Wharton-Center/Wharton-Cobb-3519.jpg" alt="Wharton Center"></img>
              </div>
              <div className='flex justify-center items-center gap-3 mt-5'>
                <div>
                  <h3 className='font-bold text-lg'>Wells Hall</h3>
                  <p>{d.wellshall} Minutes</p>
                </div>
                <img className='h-auto max-w-32 mb-3' src="https://64.media.tumblr.com/5c1298687c3c7a551b17c2adf81fac51/c07421a473d4e62c-81/s500x750/36861b4c020b8d54add278ee0d3949cfcd19f3c1.jpg" alt="Wells Hall"></img>
              </div>
            </div>
            <div className='flex justify-center items-start mr-8 gap-10'>
              <div className='flex justify-center items-center gap-3 mt-5'>
                <div>
                  <h3 className='font-bold text-lg'>Dairy Store</h3>
                  <p>{d.dairystore} Minutes</p>
                </div>
                <img className='h-auto max-w-32 mb-3' src="https://news.jrn.msu.edu/wp-content/uploads/2023/08/Dairy-Store-1170x942.jpg" alt="MSU Dairy Store"></img>
              </div>
              <div className='flex justify-center items-center gap-3 mt-5'>
                <div>
                  <h3 className='font-bold text-lg'>Beaumont Tower</h3>
                  <p>{d.beaumonttower} Minutes</p>
                </div>
                <img className='h-auto max-w-32 mb-3' src="https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,q_75,w_1200/v1/crm/lansing/IMG_2022_49E3E082-5056-A36A-06484E080E56B2E7-49e3bf9d5056a36_49e3e4de-5056-a36a-063661126f934719.jpg" alt="Beaumont Tower"></img>
              </div>
              <div className='flex justify-center items-center gap-3 mt-5'>
                <div>
                  <h3 className='font-bold text-lg'>Main Library</h3>
                  <p>{d.library} Minutes</p>
                </div>
                <img className='h-auto max-w-32 mb-3' src="https://visitlearn.msu.edu/upload/images/venues/msu-libraries.jpg" alt="MSU Main Library"></img>
              </div>
              <div className='flex justify-center items-center gap-3 mt-5'>
                <div>
                  <h3 className='font-bold text-lg'>Spartan Statue</h3>
                  <p>{d.spartanstatue} Minutes</p>
                </div>
                <img className='h-auto max-w-32 mb-3' src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/michigan-state-the-spartan-statue-john-mcgraw.jpg" alt="Spartan Statue"></img>
              </div>
              <div className='flex justify-center items-center gap-3 mt-5'>
                <div>
                  <h3 className='font-bold text-lg'>Munn Field</h3>
                  <p>{d.munnfield} Minutes</p>
                </div>
                <img className='h-auto max-w-32 mb-3' src="https://recsports.msu.edu/_assets/images/rentablespaces/fields/MunnField6.jpg" alt="Munn Field"></img>
              </div>
            </div>
            <div>
            </div>
          </div>
          </>
        ))}
        </div>
    </div>
  )
} 

function NewUser() {
  const [email, newEmail] = useState('');
  const [password, newPassword] = useState('');

  const emailAdded = (event) => {
    newEmail(event.target.value);
  };

  const passwordAdded = (event) => {
    newPassword(event.target.value);
  };

  const userAdded = async () => {
      await supabase.auth.signUp({
        email,
        password,
      });
  }

  return (
    <div className='text-center'>
      <p className='font-bold text-lg text-msu-color mb-5'>Join The Mailing List:</p>
      <input type='email' value={email} onChange={emailAdded}
      placeholder="Enter your email" />
      <input type='password' value={password} onChange={passwordAdded}
      placeholder="Enter a password" />
      <button className=' w-20 h-8 bg-green-800 text-white hover:scale-125 transition duration-150 ease-in-out mb-10' onClick={userAdded}>Sign Up</button>
    </div>
  );
}

  function App() {
    return (
      <>
        <div className='bg-[#f2f3f4]'>
          <Dorms />
          <NewUser />
        </div>
      </>
    );
  }
  export default App;
