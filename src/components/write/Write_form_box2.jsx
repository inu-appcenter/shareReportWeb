import React from 'react'
import Square_green from '../../image/write/사각형 448.svg';
import Img_icon from '../../image/write/그룹 312.svg';
import Square_blue from '../../image/write/사각형 445.svg';
import File_icon from '../../image/write/그룹 311.svg';

const Write_form_box2 = () => {
    return (
        <div className="write_form_box2">
            <form action="">
                <label for="file_attach">파일첨부</label>
                <input type="file" id="file_attach" />   {/*업로드 구현 모름*/}
            </form>
            <div className="attach_icons">
                <div className="img_attach_icon">
                    <img src={Square_green} alt="이미지삽입 사각형" id="square_green" />
                    <img src={Img_icon} alt="이미지삽입 아이콘" id="img_icon" />
                    <span>이미지삽입</span>
                </div>
                <div className="file_attach_icon">
                    <img src={Square_blue} alt="파일첨부 사각형" id="square_blue" />
                    <img src={File_icon} alt="파일첨부 아이콘" id="file_icon" />
                    <span>파일첨부</span>
                </div>

            </div>



        </div>

    );
};
export default Write_form_box2;