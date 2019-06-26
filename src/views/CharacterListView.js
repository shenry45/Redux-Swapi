import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import { CharacterList } from "../components";
// import actions
import { fetchChars } from '../actions';

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.fetchChars();
  }

  render() {
    // return something here to indicate that you are fetching data
    this.props.fetching && (
      <Loader type="Rings" color="#ff0000" height={80} width={80} />
    )

    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    )
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = state => ({
  characters: state.charsReducer.characters,
  fetching: state.fetching
});

export default connect(
  mapStateToProps,
  { fetchChars }
)(CharacterListView);
