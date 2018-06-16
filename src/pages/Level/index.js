import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchQuestions from '../../actions/questions';
import Question from '../../components/Question/index';
import Loading from '../../components/Loading/index';
import LevelUp from '../LevelUp';
import Congrats from '../Congrats';

class Level extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionIndex: 0,
    };
    this.handleCorrectAnswer = this.handleCorrectAnswer.bind(this);
    this.renderContent = this.renderContent.bind(this);
  }

  componentDidMount() {
    const { level } = this.props.match.params;
    this.props.getQuestions(level);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.level !== nextProps.match.params.level) {
      this.props.getQuestions(nextProps.match.params.level);
      this.setState({
        questionIndex: 0,
      });
    }
  }

  handleCorrectAnswer() {
    this.setState({
      questionIndex: this.state.questionIndex + 1,
    });
  }

  renderContent(error, loading, data, questionIndex) {
    if (error) return <p>{error}</p>;
    if (loading || data.length === 0) return <Loading />;
    if (!loading) {
      if (questionIndex === data.length) {
        if (this.props.match.params.level === 8) {
          return (
            <Congrats />
          );
        }
        return (
          <LevelUp
            level={this.props.match.params.level}
            questionIndex={questionIndex}
          />
        );
      }
      return (
        <Question
          question={data[questionIndex]}
          questionIndex={questionIndex}
          handleCorrectAnswer={this.handleCorrectAnswer}
        />
      );
    }
    return <p>Whaaat</p>;
  }

  render() {
    const { loading, error, data } = this.props;
    return this.renderContent(error, loading, data, this.state.questionIndex);
  }
}

Level.propTypes = {
  match: PropTypes.object,
  getQuestions: PropTypes.func,
  loading: PropTypes.bool,
  error: PropTypes.object,
  data: PropTypes.array,
};

function mapStateToProps(state) {
  return {
    loading: state.questions.loading,
    error: state.questions.error,
    data: state.questions.data,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getQuestions: (level) => { dispatch(fetchQuestions(level)); },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Level);
