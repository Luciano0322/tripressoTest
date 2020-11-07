import React, { Component, useEffect, useState } from 'react';
import { listData } from './API';

function App () {
  const [rawDatas, setDatas] = useState([]);

  const getDatas = async () => {
    const rawDatas = await listData();
    setDatas(rawDatas);
  }

  useEffect(() =>{
    getDatas()
  }, [])
  
  // let cardInfo = {
  //   // "tour_list":{
  //   //   id,
  //   //   title,
  //   //   rating,
  //   //   agency,
  //   //   tour_days,
  //   //   min_price,
  //   //   tags,
  //   //   group,
  //   //   image_url,
  //   //   tour_detail_url
  //   // }
  // }

  // rawData.data.forEach((item, i) => {
  //   if(cardInfo[item.tour_list] == undefined){
  //     cardInfo[item.tour_list] = {
  //       id:'',
  //       title:'',
  //       rating:'',
  //       agency:'',
  //       tour_days:'',
  //       min_price:'',
  //       tags:'',
  //       group:'',
  //       image_url:'',
  //       tour_detail_url:'',
  //     }
  //   }
  //   cardInfo[item.tour_list] = {
  //     id:cardInfo[item.tour_list].id,
  //     title:cardInfo[item.tour_list].rating,
  //     agency:cardInfo[item.tour_list].agency,
  //     tour_days:cardInfo[item.tour_list].tour_days,
  //     min_price:cardInfo[item.tour_list].min_price,
  //     tags:cardInfo[item.tour_list].tags,
  //     group:cardInfo[item.tour_list].group,
  //     image_url:cardInfo[item.tour_list].image_url,
  //     tour_detail_url:cardInfo[item.tour_list].tour_detail_url
  //   }
  // });

  // console.log(cardInfo);

  return (
    <div className="App">
      
      <ul>
        {rawDatas.map(tour_list => (
        <li key={tour_list.toString()}>{tour_list.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default App;
