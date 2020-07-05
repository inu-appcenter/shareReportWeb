import React from "react";
import Img_1 from "../image/home/quickmenu/btn_자료올리기.png";
import Img_2 from "../image/home/quickmenu/btn_학과별자료.png";
import Img_3 from "../image/home/quickmenu/btn_교양자료.png";
const Home2 = () => {
  return (
    <div className="home_2">
      {/*빠른메뉴 */}
      <div className="menu_Q">
        <p>빠른메뉴</p>
        <button className="Q_btn" onClick="">
          <img
            src={Img_1}
            srcset="../image/home/quickmenu/btn_자료올리기@2x.png 2x,
                       ../image/home/quickmenu/btn_자료올리기@3x.png 3x"
            alt="자료올리기 버튼"
          />
        </button>
        <button className="Q_btn">
          <img
            src={Img_2}
            srcset="../image/home/quickmenu/btn_학과별자료@2x.png 2x,
                       ../image/home/quickmenu/btn_학과별자료@3x.png 3x"
            alt="학과별자료 버튼"
          />
        </button>
        <button className="Q_btn">
          <img
            src={Img_3}
            srcset="../image/home/quickmenu/btn_교양자료@2x.png 2x,
                       ../image/home/quickmenu/btn_교양자료@3x.png 3x"
            alt="교양 버튼"
          />
        </button>
      </div>

      {/*공지사항 */}
      <div className="Notice">
        <a href="">공지사항 +</a>
      </div>
      {/*우수자료 */}
      <div className="good_data">
        <p>우수자료</p>
      </div>
      {/*로그인*/}
      <div className="login">
        <p>로그인</p>
      </div>
    </div>
  );
};

export default Home2;
