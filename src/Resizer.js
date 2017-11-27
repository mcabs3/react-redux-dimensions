import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { resizeSaveSize } from './ResizerReducer';


const mapState = () => ({});
const mapDispatch = dispatch => ({
  save: w => dispatch(resizeSaveSize(w))
});

class Resizer extends React.Component {
  constructor(props) {
    super(props);
    this.updateDimensions = this.updateDimensions.bind(this);
  }
  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions)
  }

  updateDimensions() {
    const { save } = this.props;
    save(window.innerWidth);
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

Resizer.propTypes = {
  children: PropTypes.node,
  save: PropTypes.func.isRequired
};

Resizer.defaultProps = {
  children: undefined
};

export default connect(mapState, mapDispatch)(Resizer);
