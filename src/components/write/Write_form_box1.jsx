import React from 'react'
import Drop_btn from '../../image/write/그룹 393.svg'

const Write_form_box1 = () => {
    return (
        <form action="" className="write_form_box1">

            <div className="write_title_box">
                <label for="write_title" >글제목</label>
                <input type="text" id="write_title" />
            </div>

            <div className="class_box">
                <label for="class_select">강의선택</label> {/*드롭다운*/}
                <input type="text" id="class_select" />
                <a href=""><img src={Drop_btn} alt="" /></a>

                <label for="name_prof">교수명</label>
                <input type="text" id="name_prof" />
            </div>

        </form>

    );
};
export default Write_form_box1;