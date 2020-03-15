import React from 'react';
import Write_category from '../components/write/Write_category';
import Write_form_box1 from '../components/write/Write_form_box1';
import Write_textarea from '../components/write/Write_textarea';
import Write_write_box2 from '../components/write/Write_form_box2';
import Write_btn from '../components/write/write_btn';

const Write = () => {
    return (
        <div className="write_container">

            <Write_category />  {/* 미완 */}
            <Write_form_box1 />{/* 미완 */}
            <Write_textarea />
            <Write_write_box2 />{/* 미완 */}
            <Write_btn />
        </div>
    );
};
export default Write;