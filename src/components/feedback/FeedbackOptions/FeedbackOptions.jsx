import PropTypes from 'prop-types';

import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map((el, index) => (
        <button
          className={s.button}
          name={el}
          type="button"
          onClick={onLeaveFeedback}
          key={index}
        >
          {el}
        </button>
      ))}
    </>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string)
};
