import _ from 'lodash'
import React, { Component } from 'react'
import { Search, Grid, Header, Segment 
} from 'semantic-ui-react'
import {connect} from 'react-redux';
import * as actionCreators from '../../store/actions/actions';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const initialState = { isLoading: false, results: [], value: '' }

 class SearchButton2 extends Component {
  state = initialState

  handleResultSelect = (e, { result }) => this.setState({ value: result.first_name })

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.setState(initialState)

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = (result) => re.test(result.first_name)

      this.setState({
        isLoading: false,
        results: _.filter(this.props.doctors, isMatch),
      })
    }, 300)
  }


  render() {
    const { isLoading, value, results } = this.state
    return (
      <Grid className="justify-content-center">
        <Grid.Column width={6}>
          <Search
            placeholder="Buscar"
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={_.debounce(this.handleSearchChange, 500, {
              leading: true,
            })}
            results={results}
            value={value}
            {...this.props}
          />
          
           <Link to="/page2"><button onClick={() => this.props.onSearch2(this.state.results)} className="mt-5 ui button">{this.state.value === "" ? 'Nuestros Profesionales':'Buscar resultados'} </button></Link>
          {/* {this.state.results ? 
              this.state.results.map((result) => <li>{result.first_name}</li>)
            : null}  */}
        </Grid.Column>

        {/* <Grid.Column width={10}>
          <Segment>
            <Header>State</Header>
            <pre style={{ overflowX: 'auto' }}>
              {JSON.stringify(this.state, null, 2)}
            </pre>
            <Header>Options</Header>
            <pre style={{ overflowX: 'auto' }}>
              {JSON.stringify(this.props.doctors, null, 2)}
            </pre>
          </Segment>
        </Grid.Column> */}
        </Grid>
    )
  }
}

const mapStateToProps = (state) => {
    return{
        doctors:state.doc.doctors,
    };
  }

  const mapDispatchToProps = dispatch => {
    return{
        onSearch2: (results) => dispatch(actionCreators.searched2(results))
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(SearchButton2);