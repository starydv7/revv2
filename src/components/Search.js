import React, { useEffect } from 'react'
import { useState } from 'react'
import styles from "./Pages.module.css"
const Search = () => {
  const [breedname,setBreedname]=useState("")
    const [data,setData]=useState([])
  
  const getdata=()=>{
        console.log(breedname)
        fetch(`https://dog.ceo/api/breed/${breedname}/images`).
        then((res)=>res.json())
        .then((res)=>{
            setData(res.message)
                
        })
      }
    //   useEffect(()=>{
    //     getdata()
    //   },[])
    return (
    <div>
        
        <div>
            <input type="text" placeholder='Enter the  breedname' 
            onChange={(e)=>setBreedname(e.target.value)}/>
            <button onClick={getdata}>Search</button>
        </div>

        <br />
        <div className={styles.searchimg}>
            {data && data.map((el,i)=>{
                return <div key={i}>
                  <img  width="200px" height="210px"src={el} alt="" />
                </div>
            })}
        </div>
    </div>
  )
}

export default Search