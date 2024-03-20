import React, {useState, useEffect} from 'react'
import Accordion from './Accordian'
import axios from 'axios'

function TestComponent() {
  const [data, setData]=useState([])
  useEffect(()=>{
    axios.get('https://raw.githubusercontent.com/Vibencode-Solutions/mock-api/main/api.json')
          .then(res=>{setData(res.data); console.log(res.data)})
          .catch(err=>console.log(err))
  },[])
  return (
    <div>
      <h1>Accordion Example</h1>
      <Accordion data={data} />
    </div>
  )
}

export default TestComponent