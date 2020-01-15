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

 class Carrousel extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
        itemsToShow:3,
        expanded:false,
}}

showMore = () => {
  this.state.itemsToShow === 3 ? (
    this.setState({ itemsToShow: this.props.calendar[0].hours.length, expanded: true })
  ) : (
    this.setState({ itemsToShow: 3, expanded: false })
  )
}


  onSlideChange(e) {
    console.log('Item`s position during a change: ', e.item);
    console.log('Slide`s position during a change: ', e.slide);
  }

  onSlideChanged(e) {
    console.log('Item`s position after changes: ', e.item);
    console.log('Slide`s position after changes: ', e.slide);
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
            onSlideChanged={this.onSlideChanged}
          >
            
            {this.props.calendar.map((item) => {
            
            return (
                <div className="column yours-custom-class w-100 ">
                    <a className="page-link  header" >{item.day}</a>

                    {item.hours.slice(0,this.state.itemsToShow).map((hr) => {
                    return <Link to="/page3"><button onClick={() => this.props.onSelectDoctor(this.props.doctor, item.day, hr)} className=" page-link page-item row justify-content-center w-100 " >{hr}</button></Link>
                    })}
                  
                    {/*<div style={{display: this.state.showStore ? 'block' : 'none' }}>
                    {item.hours.map((hr) => {
                      return <Link to="/page3"><button  className=" page-link page-item w-100" >{hr}</button></Link>
                      })}
                    </div>*/}
                </div>
            )
        })}

          </AliceCarousel>

          <Link style={{ textDecorationLine:"underline" }} className="pb-5" onClick={this.showMore} >
            {this.state.expanded ? 
            (<span>Ver menos</span>) 
            : 
            (<span>Ver mas</span>)}
          </Link>
      </div>
    );
  }
}



const mapDispatchToProps = dispatch => {
  return{
      onSelectDoctor: (dataDoctor,day,hour) => dispatch(actionCreators.selectDoctor(dataDoctor,day,hour))
  };
};

export default connect( null, mapDispatchToProps) (Carrousel);



