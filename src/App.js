import { useState } from 'react';
import { supabase } from './supbaseClient';
import './App.css';

function Dorms(){
  const [dormInfo, setMyDorms] = useState([]);
  async function getDorms() {
    let { data: dormdata, error } = await supabase
      .from('dormdata')
      .select('*')
    setMyDorms(dormdata);
  }
  getDorms()
  return (
    <table>
      {
        dormInfo.map(d => {
          <tr>
            <td>{d.name}</td>
            <td>{d.neighborhood}</td>
            <td>{d.year}</td>
          </tr>
        })
      }
    </table>
  )
}

function App() {
  return (
    <>
    <p>Hello</p>
    <Dorms />
    </>
  );
}
export default App;