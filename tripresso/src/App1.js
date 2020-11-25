import React, { Component } from 'react';
import Media from 'react-bootstrap/Media';
import Badge from 'react-bootstrap/Badge';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';


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
      
      //rating btn
      ratSortInc = () => {
        this.setState({
          data: this.state.data.sort((a,b) => {
            if(a.rating > b.rating){
              return 1;
            } else {
              return-1;
            }
          })
        })
      }
      ratSortDec = () => {
        this.setState({
          data: this.state.data.sort((a,b) => {
            if(a.rating < b.rating){
              return 1;
            } else {
              return-1;
            }
          })
        }) 
      }
      //price btn
      priceSortInc = () => {
        this.setState({
          data: this.state.data.sort((a,b) => {
            if(a.min_price*1 > b.min_price*1){
              return 1;
            } else {
              return-1;
            }
          })
        }) 
      }
      priceSortDec = () => {
        this.setState({
          data: this.state.data.sort((a,b) => {
            if(a.min_price*1 < b.min_price*1){
              return 1;
            } else {
              return-1;
            }
          })
        }) 
      }

    render() {
      const { error, isLoaded, data } = this.state;
      
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <div>
            <div>
              <div className="d-flex mx-5 mt-5 mb-0">
              <DropdownButton id="dropdown-basic-button" title="依評分排序" variant="info" className="mx-3">
                <Dropdown.Item onClick={this.ratSortInc}>小到大</Dropdown.Item>
                <Dropdown.Item onClick={this.ratSortDec}>大到小</Dropdown.Item>
              </DropdownButton>
              <DropdownButton id="dropdown-basic-button" title="依價格排序" variant="success" className="mx-3">
                <Dropdown.Item onClick={this.priceSortInc}>小到大</Dropdown.Item>
                <Dropdown.Item onClick={this.priceSortDec}>大到小</Dropdown.Item>
              </DropdownButton>
              </div>

              {data.map(data => (
                <Media key={data.id} className="mx-5 my-3 p-2 listInfo">
                  <a className="p-2 img" href={data.tour_detail_url}>
                    <img
                      width="250"
                      className="mr-3"
                      src={data.image_url}
                    />
                  </a>
                  <Media.Body>
                  
                    <p>評分<Badge variant="warning">{data.rating}</Badge></p>
                    <h5 className="title"><a href={data.tour_detail_url}>{data.title}</a></h5>
                    {data.tags.map((tags) => 
                      <Badge pill variant="info" key={tags} className="mx-1">
                        {tags}
                      </Badge>
                    )}

                    <Accordion defaultActiveKey="0" className="my-2">
                      <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1" className="accordion">
                          出發日期和數量
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                          <Card.Body>
                            <div className="autoFill mt-2">
                              {data.group.map((group)=>
                                <ul className="p-1 border border-success rounded" key={group.id}>
                                  <li>日期:{group.date}</li>
                                  <li>數量:{group.quantity}</li>
                                </ul>
                              )}
                            </div>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>

                    <h5 className="px-2 minPrice">最低價<span className="px-1 number">{data.min_price}</span><span className="up">起</span></h5>
                  </Media.Body>
                </Media>
                
              ))}

            </div>
          </div>
        );
      }
    }
  }

export default App1;
