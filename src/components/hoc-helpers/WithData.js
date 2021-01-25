import React, { Component } from "react";
import Spinner from "../Spinner";
import ErrorIndicator from "../ErrorIndicator";

const withData = (View) => {
  return class extends Component {
    state = {
      data: null,
      hasError: false,
    };

    componentDidUpdate(prevProps) {
      if (this.props.getData !== prevProps.getData) {
        this.update();
      }
    }

    componentDidMount() {
      this.update();
    }

    update() {
      this.props
        .getData()
        .then((data) => {
          this.setState({ data });
        })
        .catch((err) => {
          this.setState({ hasError: true });
        });
    }

    render() {
      const { data, hasError } = this.state;

      if (!data && !hasError) {
        return <Spinner />;
      } else if (hasError) {
        return <ErrorIndicator />;
      }
      return <View {...this.props} data={data} />;
    }
  };
};

export default withData;
