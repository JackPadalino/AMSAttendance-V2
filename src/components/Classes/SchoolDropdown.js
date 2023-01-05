import React from 'react';

const SchoolDropdown = ({handleSchoolChange}) => {
    return (
        <>
            <label htmlFor="school">MS/HS</label>
            <select name='school' onChange={handleSchoolChange}>
                <option value="-">-</option>
                <option value="MS">MS</option>
                <option value="HS">HS</option>
            </select>
        </>
    );
};

export default SchoolDropdown;