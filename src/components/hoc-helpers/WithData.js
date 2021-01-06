import React from 'react';
import Spinner from "../Spinner";
import ErrorIndicator from '../ErrorIndicator';

const withData = (View, getData) => {
    return class extends Component {
  
      state = {
        itemList: null,
      };
    
      componentDidMount() {
    
        getData().then((itemList) => {
          this.setState({ itemList });
        });
      }
      render() {
        const { itemList } = this.state;
  
        if (!itemList) {
          return <Spinner />;
        }
        return <View { ... this.props } data = {data} />
      }
    };
  };

  export default withData;