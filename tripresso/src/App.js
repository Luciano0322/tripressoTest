import React, { Component, useEffect, useState } from 'react';
import { listData } from './API';

function App () {
  const [rawDatas, setDatas] = useState(null);

  const getDatas = async () => {
    const rawDatas = await listData();
    setDatas(rawDatas);
    console.log(rawDatas);
  }

  useEffect(() =>{
    getDatas()
  }, [])

  //rating排序
  const ratSortInc = rawDatas && rawDatas.data.tour_list.sort((a,b) => {
    if (a.rating > b.rating) {
      return 1;
    } else {
      return -1;
    }
  })
  console.log(ratSortInc);
  // let ratSortDec = ratSortInc.reverse()
  // console.log(ratSortDec);   
  //價格排序
  const priceSortInc = rawDatas && rawDatas.data.tour_list.sort((a,b) => {
      if (a.min_price*1 > b.min_price*1) {
      return 1;
      } else {
      return -1;
      }
  })
  console.log(priceSortInc);
  // const priceSortDec = priceSortInc.reverse()
  // console.log(priceSortDec);   

  return (
    <div className="App">
      {
        rawDatas && rawDatas.data.tour_list.map((tour_list) => (
        <div key={tour_list.id}>
          <a href={tour_list.tour_detail_url}><img src={tour_list.image_url} width="150" /></a>
          <p>{tour_list.rating}</p>
          <h3>{tour_list.title}</h3>
          {tour_list.tags.map((tags) => 
            <span>{tags}</span>
          )}
          {tour_list.group.map((group)=>
          <ul key={group.id}>
            <li>{group.date}</li>
            <li>{group.quantity}</li>
          </ul>
          )}

        </div>

        ))
      }
    </div>
  )
}

export default App;
