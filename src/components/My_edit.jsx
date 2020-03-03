import React from 'react'

const My_edit = () => {
    return (
        <div className="edit_container">
            <span className="title">회원정보수정</span>

            <div className="edit_list">

                <div className="basic_edit_list">
                    <span className="edit_title">기본 정보 (필수)</span>
                    <p>아이디</p>
                    <p id="id">id</p>
                    <p>이름(실명)</p>
                    <p id="name">name</p>
                    <span>전화번호</span>
                    <input type="tel" maxLength="11" />
                    <span>전공</span>
                    <input type="text" />
                </div>

                <div className="pw_edit_list">
                    <span className="edit_title">비밀번호변경</span>
                    <span>현재비밀번호</span>
                    <input type="password" id="user_pre_pw" />
                    <span>변경비밀번호</span>
                    <input type="password" />
                    <span>비밀번호확인</span>
                    <input type="password" />
                </div>

            </div>
            <input type="submit" id="edit_submit" value="수정하기" />

        </div>
    );
};
export default My_edit;