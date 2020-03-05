import React from "react";
import Complete_img from "../image/complete/자산 2.png";
import LoginButton from "../components/LoginButton";

const Complete = () => {
  return (
    <div className="entire_complete">
      <p className="big_box">
        <p className="big">Share U의 회원이 되신걸 축하드려요!</p>
      </p>
      <p className="small_box">
        <p className="small">다양한 정보를 열람,업로드 할 수 있어요!</p>
      </p>

      <p className="happy_img">
        <img
          src={Complete_img}
          srcset="./image/complete/자산 2@2x.png,
                     ./image/complete/자산 2@3x.png"
          alt="회원가입 완료 이미지"
          className="complete_img"
        />
      </p>

      <p className="login_btn_box">
        <LoginButton />
      </p>
    </div>
  );
};

export default Complete;
