import React, { Component } from 'react';



class App1 extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        data: [],
        sortType:''
      };
    }

    componentDidMount() {
      fetch("https://interview.tripresso.com/tour/search")
      .then(res => res.json())
      .then(
          (result) => {
            this.setState({
              isLoaded: true,
              data: result.data.tour_list
            });
          },

          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
      }
        
      // handleDataSort = (sortType) =>{
      //   let newData = [...this.state.data]
      //   //rating
      //   if(sortType === 'ratSortInc') {
      //       newData = newData.sort((a,b) => {
      //         if (a.rating > b.rating) {
      //         return 1;
      //         } else {
      //         return -1;
      //         }
      //     })
      //   }
      //   if(sortType === 'ratSortDec') {
      //       newData = newData.sort((a,b) => {
      //         if (a.rating < b.rating) {
      //         return 1;
      //         } else {
      //         return -1;
      //         }
      //     })
      //   }
      //   //價格
      //   if(sortType === 'priceSortInc') {
      //       newData = newData.sort((a,b) => {
      //         if (a.min_price*1 > b.min_price*1) {
      //         return 1;
      //         } else {
      //         return -1;
      //         }
      //     })
      //   }
      //   if(sortType === 'priceSortDec') {
      //       newData = newData.sort((a,b) => {
      //         if (a.min_price*1 < b.min_price*1) {
      //         return 1;
      //         } else {
      //         return -1;
      //         }
      //     })
      //   }
      //   this.setState({
      //     data: newData,
      //     sortType
      //   })
      // }
      
    render() {
      const { error, isLoaded, data } = this.state;
      
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        // //rating排序
        // const ratSortInc = data.tour_list.sort((a,b) => {
          //     if (a.rating > b.rating) {
        //     return 1;
        //     } else {
        //     return -1;
        //     }
        // })
        // console.log(...ratSortInc);
        // const ratSortDec = ratSortInc.reverse()
        // console.log(...ratSortDec);
        // //價格排序
        // const priceSortInc = data.tour_list.sort((a,b) => {
        //     if (a.min_price*1 > b.min_price*1) {
        //     return 1;
        //     } else {
        //     return -1;
        //     }
        // })
        // console.log(...priceSortInc);
        // const priceSortDec = priceSortInc.reverse()
        // console.log(...priceSortDec);
        return (
          <div>
            <div>
              {/* <button onClick={this.handleDataSort('ratSortInc')}>ratSortInc</button> */}
              {data.map(data => (
                <div key={data.id}>
                <a href={data.tour_detail_url}><img src={data.image_url} width="150" /></a>
                <p>{data.rating}</p>
                <h3>{data.title}</h3>
                {data.tags.map((tags) => 
                  <span>{tags}</span>
                )}
                {data.group.map((group)=>
                <ul key={group.id}>
                  <li>{group.date}</li>
                  <li>{group.quantity}</li>
                </ul>
                )}
      
              </div>
              ))}
            </div>
          </div>
        );
      }
    }
  }

export default App1;
