import React from "react";
import Img_1 from "../image/home/quickmenu/btn_자료올리기.png";
import Img_2 from "../image/home/quickmenu/btn_학과별자료.png";
import Img_3 from "../image/home/quickmenu/btn_교양자료.png";
const Home2 = () => {
  return (
    <div className="home_2">
      {/*빠른메뉴 */}
      <div className="menu_Q">
        <p className="bold_p">빠른메뉴</p>
        <button type="button" className="Q_btn" onClick="">
          <img
            src={Img_1}
            srcset="../image/home/quickmenu/btn_자료올리기@2x.png 2x,
                       ../image/home/quickmenu/btn_자료올리기@3x.png 3x"
            alt="자료올리기 버튼"
          />
        </button>
        <button type="button" className="Q_btn">
          <img
            src={Img_2}
            srcset="../image/home/quickmenu/btn_학과별자료@2x.png 2x,
                       ../image/home/quickmenu/btn_학과별자료@3x.png 3x"
            alt="학과별자료 버튼"
          />
        </button>
        <button type="button" className="Q_btn">
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
        <div className="">
          <p className="bold_p">공지사항</p>
          <a className="plus"></a>
        </div>
        <hr></hr>
        <a>
          <br></br>
        </a>
        <a>
          {" "}
          <br></br>
        </a>
        <a>
          {" "}
          <br></br>
        </a>
        <a>
          {" "}
          <br></br>
        </a>
        <a>
          {" "}
          <br></br>
        </a>
        <a>
          {" "}
          <br></br>
        </a>
        <hr></hr>
      </div>
      {/*우수자료 */}
      <div className="good_data">
        <p className="bold_p">우수자료</p>
        <hr></hr>
        <a>
          <br></br>
        </a>
        <a>
          {" "}
          <br></br>
        </a>
        <a>
          {" "}
          <br></br>
        </a>
        <a>
          {" "}
          <br></br>
        </a>
        <a>
          {" "}
          <br></br>
        </a>
        <a>
          {" "}
          <br></br>
        </a>
        <hr></hr>
      </div>
      {/*로그인*/}
      <div className="login">
        <p className="bold_p">로그인</p>
        <form method="post" action="">
          <input className="login_input" type="text" placeholder="아이디"></input>
          <input className="login_input" type="password" placeholder="비밀번호"></input>
          <a href="" className="id_pw">
            아이디/비밀번호가 기억나지 않으세요?
          </a>
          <div className="flex">
            <button></button>
            <input></input>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home2;
