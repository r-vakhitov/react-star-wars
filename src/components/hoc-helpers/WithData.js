import React, { Component } from 'react';
import Spinner from "../Spinner";
import ErrorIndicator from '../ErrorIndicator';

const withData = (View, getData) => {
    return class extends Component {
  
      state = {
        data: null,
        hasError: false
      };
    
      componentDidMount() {
    
        getData().then((data) => {
          this.setState({ data });
        })
        .catch(err => {
          this.setState({ hasError: true})
        });
      }
      render() {
        const { data, hasError } = this.state;
  
        if (!data && !hasError) {
          return <Spinner />;
        } else if (hasError) {
          return <ErrorIndicator />
        }
        return <View { ... this.props } data = {data} />
      }
    };
  };

  export default withData;