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
    <table>
      <tbody>
        {dormInfo.map(d => (
          <tr key={d.id}>
            <td>{d.name}</td>
            <td>{d.neighborhood}</td>
            <td>{d.year}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
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
