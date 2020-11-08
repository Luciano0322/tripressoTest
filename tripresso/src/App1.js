import React, { Component } from 'react';



class App1 extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        status: null,
        data: []
      };
    }
  
    componentDidMount() {
      fetch("https://interview.tripresso.com/tour/search")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              status: result,
              data: result.data
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
  
    render() {
      const { error, isLoaded, data } = this.state;
      
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        console.log(data.tour_list);
        // //rating排序
        // const ratSortInc = data.tour_list.sort((a,b) => {
        //     if (a.rating > b.rating) {
        //     return 1;
        //     } else {
        //     return -1;
        //     }
        // })
        // console.log(ratSortInc);
        // const ratSortDec = ratSortInc.reverse()
        // console.log(ratSortDec);
        // //價格排序
        // const priceSortInc = data.tour_list.sort((a,b) => {
        //     if (a.min_price*1 > b.min_price*1) {
        //     return 1;
        //     } else {
        //     return -1;
        //     }
        // })
        // console.log(priceSortInc);
        // const priceSortDec = priceSortInc.reverse()
        // console.log(priceSortDec);
        return (
          <ul>
            {data.tour_list.map(tour_list => (
              <li key={tour_list.id}>
                {tour_list.title} {tour_list.rating}
              </li>
            ))}
          </ul>
        );
      }
    }
  }

export default App1;
