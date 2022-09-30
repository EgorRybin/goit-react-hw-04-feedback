import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Notification from '../Notification/Notification';
import Sections from '../Sections/Section';
import StatisticsValues from '../StatisticsValues/StatisticsValues';
import { useState } from 'react';

export const Statistics = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const arrStrings = ['good', 'neutral', 'bad'];
  const arr = [good, neutral, bad];

  const onLeaveFeedback = e => {
    const { name } = e.target;
    if (name === 'good') {
      setGood(prev => prev + 1);
    }
    if (name === 'neutral') {
      setNeutral(prev => prev + 1);
    }
    if (name === 'bad') {
      setBad(prev => prev + 1);
    }
  };

  const totalFidback = () => {
    return arr.reduce((arr, el) => {
      return arr + el;
    }, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.floor((good / totalFidback()) * 100);
  };

  return (
    <>
      <Sections title="Please leave feedback">
        <FeedbackOptions
          options={arrStrings}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Sections>

      <Sections title="Statistics">
        {totalFidback() > 0 ? (
          <StatisticsValues
            totalFidback={totalFidback}
            good={good}
            bad={bad}
            neutral={neutral}
            countPercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Sections>
    </>
  );
};
