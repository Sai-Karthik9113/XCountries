import React, { useEffect, useState } from 'react';
import Flag from './Card/Card';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      try {
        const response = await axios.get("https://xcountries-backend.azurewebsites.net/all");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setData([]);
      }
    }

    fetchData();
  }, []);
  
  
  return (
    <div className="App">
      <div className='wrapper'>
        {
          data.map((item, index) => (
            <Flag name={item.name} flag={item.flag} key={`Country${index}`} />
          ))
        }
      </div>
    </div>
  );
}

export default App;
