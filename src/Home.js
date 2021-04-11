import React from "react";
import { connect } from "react-redux";

import { requestApiData } from "./actions/actions";

class Home extends React.Component {
  componentDidMount() {
    this.props.requestApiDataProps();
  }

  person = (x) => (
      <div key={x.id.value}>
        <h2>{x.name.first} {x.name.last}</h2>
        <h3>{x.gender}</h3>
        <img src={x.picture.medium} alt=''></img>
      </div>
  )

  render() {
    const { results = [] } = this.props.data;
    console.log('Render here!')
    return (
      <h1>
        {results.map(this.person)}
      </h1>
    );
  }
}

const mapStateToProps = state => ({ data: state.data });

const mapDispatchToProps = dispatch => {
  return {
    requestApiDataProps: () => dispatch(requestApiData())
  } 
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
