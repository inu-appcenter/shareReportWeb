import React, { useState } from 'react'
import Drop_btn from '../../image/write/그룹 393.svg';

const Write_box1 = () => {
    //드롭다운
    const [open, setOpen] = useState(false);

    return (
        <form action="" className="write_box1">
            <table>
                <tr colspan="2">
                    <label for="write_title" >글제목</label>
                    <input type="text" id="write_title" />
                </tr>

                <tr>
                    <td>
                        <label for="class_select">강의선택</label> {/*드롭다운*/}
                        <input type="text" id="class_select" />
                        <a href="." id="target_write_select" onClick={function (e) {
                            e.preventDefault();
                            setOpen(!open);
                        }}>
                            <img src={Drop_btn} alt="" />
                        </a>
                    </td>

                    <td>
                        <label for="name_prof">교수명</label>
                        <input type="text" id="name_prof" />
                    </td>
                </tr>
                {open &&        //dropdown
                    <div>
                        <ul id="write_dropdown_item">
                            <li className="write_dd_category"><p>#</p>
                                <ul className="write_dd_class">
                                    <li>결혼과가족<span className="write_dd_prof">김김김</span></li>
                                    <li>경영경제수학<span className="write_dd_prof">김김김</span></li>
                                    <li>경영의이해<span className="write_dd_prof">김김김</span></li>
                                    <li>경제와사회<span className="write_dd_prof">김김김</span></li>
                                    <li>계량적사고와의사결정<span className="write_dd_prof">김김김</span></li>
                                </ul>
                            </li>

                            <li className="write_dd_category"><p>ㄱ</p>
                                <ul className="write_dd_class">
                                    <li>1<span className="write_dd_prof">김김김</span></li>
                                    <li>2<span className="write_dd_prof">김김김</span></li>
                                    <li>3<span className="write_dd_prof">김김김</span></li>
                                    <li>4<span className="write_dd_prof">김김김</span></li>
                                    <li>5<span className="write_dd_prof">김김김</span></li>
                                    <li>6<span className="write_dd_prof">김김김</span></li>
                                    <li>7<span className="write_dd_prof">김김김</span></li>
                                    <li>8<span className="write_dd_prof">김김김</span></li>
                                    <li>9<span className="write_dd_prof">김김김</span></li>
                                </ul>

                            </li>

                            <li className="write_dd_category"><p>ㄴ</p>
                                <ul className="write_dd_class">
                                    <li>0<span className="write_dd_prof">김김김</span></li>
                                    <li>1<span className="write_dd_prof">김김김</span></li>
                                    <li>2<span className="write_dd_prof">김김김</span></li>
                                    <li>3<span className="write_dd_prof">김김김</span></li>
                                    <li>4<span className="write_dd_prof">김김김</span></li>
                                    <li>5<span className="write_dd_prof">김김김</span></li>
                                    <li>6<span className="write_dd_prof">김김김</span></li>
                                    <li>7<span className="write_dd_prof">김김김</span></li>
                                    <li>8<span className="write_dd_prof">김김김</span></li>
                                    <li>9<span className="write_dd_prof">김김김</span></li>
                                    <li>0<span className="write_dd_prof">김김김</span></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                }
            </table>

        </form>

    );
};
export default Write_box1;