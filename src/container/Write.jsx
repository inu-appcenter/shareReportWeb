/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import Write_category from '../components/write/Write_category';
import Write_box1 from '../components/write/Write_box1';
import Write_box2 from '../components/write/Write_box2';
import Write_textarea from '../components/write/Write_textarea';
import Write_btn from '../components/write/write_btn';

const Write = () => {
    return (
        <div className="write_container">
            <Write_category />
            <Write_box1 />
            <Write_textarea />
            <Write_box2 />
            <Write_btn />

        </div>
    );
};

export default Write;