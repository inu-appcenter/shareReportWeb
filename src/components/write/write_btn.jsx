import React from 'react'
import Submit_btn from '../../image/write/btn_자료올리기.svg';

const Write_btn = () => {
    return (
        <form action="" className="write_btn">
            <input type="image" src={Submit_btn} name="Submit" alt="제출버튼" />
        </form>
    );
};
export default Write_btn;