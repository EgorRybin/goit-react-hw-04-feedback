import React, { Component } from 'react';

import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Notification from '../Notification/Notification';
import Sections from '../Sections/Section';
import StatisticsValues from '../StatisticsValues/StatisticsValues';

class Statistics extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = e => {
    const { name } = e.target;
    this.setState(prev => {
      return {
        [name]: prev[name] + 1,
      };
    });
  };

  totalFidback = () => {
    const stateValues = Object.values(this.state);
    return stateValues.reduce((arr, el) => {
      return arr + el;
    }, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.floor((good / this.totalFidback()) * 100);
  };

  noFeedbackMassage = () => {
    return this.totalFidback() <= 0;
  };

  render() {
    const { onLeaveFeedback, countPositiveFeedbackPercentage, totalFidback } =
      this;

    return (
      <>
        <Sections title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Sections>

        <Sections title="Statistics">
          {totalFidback() > 0 ? (
            <StatisticsValues
              totalFidback={totalFidback}
              state={this.state}
              countPercentage={countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Sections>
      </>
    );
  }
}

export default Statistics;
