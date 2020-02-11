import React from 'react';
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import './carrousel.css';
import {connect} from 'react-redux';
import * as actionCreators from '../../store/actions/actions';
import { Message, Icon } from 'semantic-ui-react'

 class Carrousel extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
        itemsToShow:3,
        posiciones:[1,2,3],
        posiciones2:[],
        expanded:false,
        days: [
          {id:1,
          name:"lunes"},
          {id:2,
          name:"martes"},
          {id:3,
          name:"miercoles"},
          {id:4,
          name:"jueves"},
          {id:5,
          name:"viernes"},
          {id:6,
          name:"sabado"},
          {id:7,
          name:"domingo"},
        ],
        render:false
}}


  showMore = () => {

    var max = 0, maxObj = [];

    this.props.doctor.calendar.forEach(function(item) {
      if (item.slots.length > max) {
        max = item.slots.length;
        maxObj = [item]
      } else if(item.slots.length === max || item.slots.length < max ){
        maxObj.push(item);
    }});

    this.setState({posiciones2:Array.from(Array(max).keys())})
    console.log(max)
    console.log(this.state.posiciones2)




    this.state.itemsToShow === 3 ?
    
      this.setState({ itemsToShow: max, expanded: true })
     : 
      this.setState({ itemsToShow: 3, expanded: false })
    
  }

  onSlideChange(e) {
    console.log('Item`s position during a change: ', e.item);
    console.log('Slide`s position during a change: ', e.slide);
  }

  onSlideChanged(e) {
    console.log('Item`s position after changes: ', e.item);
    console.log('Slide`s position after changes: ', e.slide);
  }

  componentDidMount() {
    setTimeout(function() { //Start the timer
        this.setState({render: true}) //After 1 second, set render to true
    }.bind(this), 3000)
  }

 
  render() {
    const responsive = {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1024: {
        items: 3
      },
      1025: {
        items: 4
      },
      1026: {
        items: 5
      },
    };

    return (

        this.state.render === true ? 

        <div className="container col-md-6 ml-0 justify-content-center mt-3 w-100">

          <AliceCarousel
            duration={400}
            autoPlay={false}
            startIndex = {1}
            fadeOutAnimation={true}
            mouseDragEnabled={true}
            //playButtonEnabled={true}
            responsive={responsive}
            autoPlayInterval={2000}
            autoPlayDirection="rtl"
            autoPlayActionDisabled={true}
            onSlideChange={this.onSlideChange}
          >

             {this.state.days.map((item) => {
              const daySlots = this.props.doctor.calendar.find(o => o.day === item.id);
              console.log(this.props.doctor.calendar)
              console.log("slotssssssssss", daySlots)

               return (
                <div className="column yours-custom-class w-100 ">
                  <Link to="" style={{ color: 'black' }} className="page-link  header" >{item.name}</Link>
                  
                  {daySlots ?

                  (
                    daySlots.slots.length > 3 ?
                    
                    daySlots.slots.slice(0,this.state.itemsToShow).map((hr) => {
                      return <Link to="/page3"><button onClick={() => this.props.onSelectDoctor(this.props.doctor, item.name, hr)} className=" page-link page-item row justify-content-center w-100 " >{hr}</button></Link>
                    })
                    :
                    daySlots.slots.map((hr) => {
                      return <Link to="/page3"><button onClick={() => this.props.onSelectDoctor(this.props.doctor, item.name, hr)} className=" page-link page-item row justify-content-center w-100 " >{hr}</button></Link>

                    }))
                  
                  :

                  this.state.expanded ?   

                    this.state.posiciones2.map((item) => {
                      return (
                        <button  border = "none" disabled className=" page-link page-item row justify-content-center w-100 " >-</button>
                      )
                    }) : 
                    
                    this.state.posiciones.map((item) => {
                      return (
                        <button  border = "none" disabled className=" page-link page-item row justify-content-center w-100 " >-</button>
                      )
                    })

                  }

                </div>
               )})}
             
             
          </AliceCarousel>
       
          <Link style={{ textDecorationLine:"underline" }} className="mb-5" onClick={this.showMore} >
            {this.state.expanded ? 
            <span >Ver menos</span>
            : 
            <span>Ver mas</span>
          }
          </Link>
          : <Link></Link>

        </div> : <Message className=" col-md-6 "size='small' icon>
                  <Icon name='circle notched' loading />
                  <Message.Content>
                    <Message.Header>Un momento</Message.Header>
                    Corroborando la disponibilidad del Doctor
                  </Message.Content>
                </Message>

    ); 
  }
}


const mapDispatchToProps = dispatch => {
  return{
      onSelectDoctor: (dataDoctor,day,hour) => dispatch(actionCreators.selectDoctor(dataDoctor,day,hour))
  };
};

export default connect( null, mapDispatchToProps) (Carrousel);



