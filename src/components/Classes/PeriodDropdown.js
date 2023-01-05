import React from 'react';

const PeriodDropdown = ({handlePeriodChange}) => {
    return (
        <>
            <label htmlFor="period">Period</label>
            <select name='period' onChange={handlePeriodChange}>
                <option value="-">-</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
            </select>
        </>
    );
};

export default PeriodDropdown;