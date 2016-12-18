import { connect } from 'react-redux';
import { updateProgress } from '../actions';
import ProgressBar from '../components/shared/progress-bar';

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    onProgressItemClick: (id) => {
      dispatch(updateProgress(id));
    }
  }
}

const ProgressBarContainer = connect(mapStateToProps, mapDispatchToProps)(ProgressBar);

export default ProgressBarContainer;
