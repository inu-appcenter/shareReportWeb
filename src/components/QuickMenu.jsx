import React from "react";
import upload from "../image/home/quickmenu/btn_자료올리기.png";
import depart_data from "../image/home/quickmenu/btn_학과별자료.png";
import culture_data from "../image/home/quickmenu/btn_교양자료.png";

const Quick_menu = () => {
<<<<<<< HEAD
  return (
    <div>
      <p className="quick_menu_box">
        <p className="quick_menu">빠른메뉴</p>
      </p>

      <button className="upload_btn_box">
        <img
          src={upload}
          srcset="../image/home/quickmenu/btn_자료올리기@2x.png 2x,
             ../image/home/quickmenu/btn_자료올리기@3x.png 3x"
          alt="자료 올리기"
          className="upload_btn"
        />
      </button>

      <button className="dapart_btn_box">
        <img
          src={depart_data}
          srcset="../image/home/quickmenu/btn_학과별자료@2x.png 2x,
        ../image/home/quickmenu/btn_학과별자료@3x.png 3x"
          alt="학과별 자료"
          className="dapart_btn"
        />
      </button>

      <button className="culture_btn_box">
        <img
          src={culture_data}
          srcset="../image/home/quickmenu/btn_교양자료@2x.png 2x,
        ../image/home/quickmenu/btn_교양자료@3x.png 3x"
          alt="교양 자료"
          className="culture_btn"
        />
      </button>
    </div>
  );
=======
  return <div>

  </div>;
>>>>>>> 70161074eaa06f622e5f0128a9526d15172c95e4
};

export default Quick_menu;
