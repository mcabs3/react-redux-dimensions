import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { saveDimensionData } from './Reducer';


const mapState = () => ({});
const mapDispatch = dispatch => ({
  save: data => dispatch(saveDimensionData(data))
});

class Screen extends React.Component {
  constructor(props) {
    super(props);
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  componentWillMount() {
    this.updateDimensions();
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions)
  }

  updateDimensions() {
    const { save } = this.props;
    save({
      height: window.innerHeight,
      width: window.innerWidth
    });
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

Screen.propTypes = {
  children: PropTypes.node,
  save: PropTypes.func.isRequired
};

Screen.defaultProps = {
  children: undefined
};

export default connect(mapState, mapDispatch)(Screen);
