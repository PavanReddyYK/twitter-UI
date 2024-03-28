"use client";
import React from "react";
import AsyncSelect from "react-select/async";
// import { ColourOption, colourOptions } from '../data';

const filterColors = (inputValue) => {};

const loadOptions = (inputValue, callback) => {
  setTimeout(() => {
    callback(filterColors(inputValue));
  }, 1000);
};

const Widgets = () => {
  return (
    <div className="widgets-wrapper">
      <div className="widgets-wrapper__header">
        <div className="search-wrapper">
          <AsyncSelect
            className="asyncSelect"
            cacheOptions
            loadOptions={loadOptions}
            defaultOptions
          />
        </div>
      </div>
      <div className="widgets-container">
        <div className="subscribe-wrapper">
          <div className="text-header">Subscribe to Premium</div>
          <div className="text-content">
            Subscribe to unlock new features and if eligible, receive a share of
            ads revenue.
          </div>
          <div className="button-wrapper">
            <button type="button">Subscribe</button>
          </div>
        </div>
        <div className="trending-wrapper"></div>
        <div className="follow-wrapper"></div>
        <div className="follow-wrapper"></div>
      </div>
    </div>
  );
};

export default Widgets;
