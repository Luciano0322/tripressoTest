import React, { Component } from 'react'
const Roomcontext = React.createContext();
export default class RoomProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }
    //get data
    componentDidMount() {
        //this.getdata
        fetch("https://interview.tripresso.com/tour/search")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({                       
                        items: result.data.tour_list
                    })
                },
                (error) => {
                    this.setState({
                        isLoad: true,
                        error
                    })
                }
            )

    }

render() {
    console.log(this.state.items.sort((a,b)=>a.rating-b.rating));
    console.log(this.state.items.sort((a,b)=>b.rating-a.rating));
    return (
        <div>
            <Roomcontext.Provider value={{ ...this.state }}>
                {this.props.children}
            </Roomcontext.Provider>
        </div>
    )
}
}
export { Roomcontext }