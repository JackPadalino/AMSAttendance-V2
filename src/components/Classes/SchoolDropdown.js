import React from 'react';

const SchoolDropdown = ({school,handleSchoolChange}) => {
    return (
        <>
            <label htmlFor="school">MS/HS</label>
            <select name='school' value={school} onChange={handleSchoolChange}>
                <option value="-">-</option>
                <option value="MS">MS</option>
                <option value="HS">HS</option>
            </select>
        </>
    );
};

export default SchoolDropdown;