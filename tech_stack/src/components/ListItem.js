import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, LayoutAnimation} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
  componentWillUpdate() {
    // gets called automatically right before component updates
    LayoutAnimation.spring();
  }

  renderDescription() {
    const { library, expanded } = this.props;

    if (expanded) {
      return (
        <CardSection>
          <Text style={{ flex: 1 }}>
          {library.description}
          </Text>
        </CardSection>
      );
    }
  }

  render() {
    const { titleStyle } = styles;

    console.log(this.props)
    const { id, title } = this.props.library;

    return (
      <TouchableWithoutFeedback
      onPress={()=> this.props.selectLibrary(id)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {title}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }

}


const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};


const mapStateToProps = (state, ownProps) => {
  // AGAIN, selectedLibraryId comes from reducers index.js key for SelectionReducer
  // return {selectedLibraryId: state.selectedLibraryId};

  // moving logic out of component
  const expanded = state.selectedLibraryId === ownProps.library.id;

  return { expanded };

  // recall that every time an Action Creator is called is runs the action through all reducers
  // reducers combine and produce some state
  // state is passed to all components with the mapStateToProps function to update their props
  // app rerenders
};


// connect can do two things: get the current state from provider (store)
// change the state by dispatching an action
// since we don't want to access state, just change it
// we pass null as first arg where mapstatetoprops would go
// and pass our actions as the second arg (where actions go, of course)
// pushes the action to our store, takes all the actions in the actions object (2nd arg)
// and passes it to our component as props
export default connect(mapStateToProps, actions)(ListItem);
