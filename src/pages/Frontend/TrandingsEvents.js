import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { fireStore } from '../../config/firebase';

export default function TrandingsEvents() {
   const [data,setData]=useState([])

    const getData = async()=>{
        const querySnapshot = await getDocs(collection(fireStore, "Events"));
        const arr=[]
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          arr.push(doc.data())
        });
        setData(arr)
    }



    useEffect(() => {
      getData()
    
      
    }, [])
    
  return (
    <>
    <div className="container">
        <div className="row">
            <div className="col">
                <h1>Data:</h1>
                {data.map((d,i)=>{
                        <h1>{i}) {d.title}</h1>
                })}
            </div>
        </div>
    </div>

    </>
  )
}
