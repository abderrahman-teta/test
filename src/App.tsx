//@ts-nocheck
import React,{useState,useEffect} from 'react';
import './App.css';

import LIST_RESPONSE from './utils/fakeData.ts';

function App() {
  const [search,setSearch] = useState('');
  const [data,setData] = useState([]);
  useEffect(()=>{
    setData(LIST_RESPONSE.items)
  },[])
  
    const handleOnCheck = (e) => {
      const { name, checked } = e.target;
      if (name === "allSelect") {
        let tempItem = data.map((item) => {
          return { ...item, isChecked: checked };
        });
        setData(tempItem);
      } else {
        let tempItem = data.map((item) =>
          item.label === name ? { ...item, isChecked: checked } : item
        );
        setData(tempItem);
      }
    };
 
  
  
  const handleChange = (e) =>{
    setSearch(e.target.value)
    if(e.target.value === ""){
      setData(LIST_RESPONSE.items);
    }else {
      const filteredData = data.filter(item=>{
        return item.label.includes(search);
      })
      setData(filteredData)
    }
   
    
  }

  return (
    <div className="App">
      <div className="container">
        <div className="contoler">
          <input value={search} type="text"  onChange={handleChange}/>
        </div>
        
      
        <div className="conroler all">
            <input
             
              type="checkbox"
              checked={!data.some((item) => item?.isChecked !== true)}
              name="allSelect"
              id="all"
              onChange={handleOnCheck}
              
            />
      <label>Select all</label>
      
   </div>
        <div className="conroler">
        {data.map(( item, index) => (
          <div  key={index}>
            <input
              type="checkbox"
              
              name={item.label}
              checked={item?.isChecked || false}
              onChange={handleOnCheck}
            />
            <label >{item.label}</label>
          </div>
        ))}
      
      
   </div>
        
      </div>
    </div>
  );
}

export default App;
