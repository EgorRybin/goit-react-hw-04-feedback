import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Notification from '../Notification/Notification';
import Sections from '../Sections/Section';
import StatisticsValues from '../StatisticsValues/StatisticsValues';
import { useState } from 'react';

export const Statistics = () => {
  const [state, setState] = useState({
    good: 0,
    bad: 0,
    neutral: 0,
  });

  const onLeaveFeedback = e => {
    const { name } = e.target;
    setState(prev => ({ ...prev, [name]: prev[name] + 1 }));
  };

  const totalFidback = () => {
    const stateValues = Object.values(state);
    return stateValues.reduce((arr, el) => {
      return arr + el;
    }, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.floor((state.good / totalFidback()) * 100);
  };

  return (
    <>
      <Sections title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(state)}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Sections>

      <Sections title="Statistics">
        {totalFidback() > 0 ? (
          <StatisticsValues
            totalFidback={totalFidback}
            state={state}
            countPercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Sections>
    </>
  );
};
