import React from 'react'

const Write_category = () => {
    return (
        <div className="write_category">
            <ul id="write_c_list1">
                <li>학과</li>
                <li>교양</li>
                <li>게시판</li>
            </ul>
            <div>
                <p>글쓰기</p>
                <ul id="write_c_list2">
                    <li>교양필수</li>
                    <li>기초대학영어</li>
                    <li>글쓰기</li>
                </ul>
            </div>
        </div>
    );
};
export default Write_category;
