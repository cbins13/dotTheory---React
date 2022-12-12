import React from "react";
import PropTypes from 'prop-types';

const ConfirmedFilter = ({toggleFilter, isFiltered}) => (
    <label>
            <input
              type="checkbox"
              onChange={toggleFilter}
              checked={isFiltered}
            />{" "}
            Hide those who haven't responded
          </label>
)


ConfirmedFilter.propTypes = {
  toggleFilter : PropTypes.func.isRequired,
  isFiltered: PropTypes.bool.isRequired
}


export default ConfirmedFilter;