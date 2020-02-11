import React from 'react';
import ToolBar from '../ToolBar/toolBar';
// import FilterBar from '../FilterBar/filterBar';
import SearchResults from '../SearchResults/searchResults';
import './page2.css';
import Arrow from '../Arrow/arrow';
import Footer from '../Footer/footer';
import ButtonExampleCircularSocial from '../SocialMedia/socialMedia2';
import SearchButton3 from '../SearchButton/searchButton3';


export default class Page2 extends React.Component{

    render(){
        return(
            
            <div className="backgroundPage2 bg-light" id="top" >
                <ToolBar/>

                <ButtonExampleCircularSocial/>
                <SearchButton3/>

                {/* <FilterBar/> */}

                <Arrow />

                <div className="container pt-5 pb-5">
                    <h2 className="text-center">Resultados de tu busqueda</h2>
                </div>

                <SearchResults/>
                
                <Footer/>

            </div>  
           
        )};
};






