import React from 'react'
import Group_548 from '../../image/write/그룹 548.svg';
import Group_549 from '../../image/write/그룹 549.svg';

const Write_box2 = () => {
    return (
        <table className="write_box2">
            <tr>
                <td>파일첨부</td>
                <td>
                    <label for="file_up"><img src={Group_549} alt="파일첨부" /></label>
                    <input type="file" id="file_up" />

                </td>
                <td>
                    <img src={Group_548} alt="이미지삽입" />
                    <img src={Group_549} alt="파일첨부" />

                </td>
            </tr>
        </table>




    );
};
export default Write_box2;