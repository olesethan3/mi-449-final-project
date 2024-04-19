import { useState } from 'react';
import { supabase } from './supbaseClient';
import './App.css';

function Dorms(){
  const [dormInfo, setMyDorms] = useState([]);
  async function getDorms() {
    let { data: DormData, error } = await supabase
      .from('DormData')
      .select('*')
    setMyDorms(DormData);
  }
  getDorms()
  return (
    <table>
      {
        dormInfo.map(d => {
          <tr>
            <td>{d.Name}</td>
            <td>{d.Neighborhood}</td>
            <td>{d.Floors}</td>
          </tr>
        })
      }
    </table>
  )
}

function App() {
  return (
    <Dorms />
  );
}
export default App;