import React from "react";
import Logo from "../components/Logo";
import Home_img1 from "../image/home/home1/자산 1.png";
import search_btn1 from "../image/home/home1/search/btn_검색.png";

const Home1 = () => {
  return (
    <div className="home_1">
      <Logo />

      {/*메인화면 이미지  png*/}
      <p className="home_img_box">
        <img
          src={Home_img1}
          srcset="../image/home/home1/자산 1@2x.png 2x,
             ../image/home1/자산 1@3x.png 3x"
          alt="메인 화면 이미지"
          className="home_img"
        />
      </p>

      {/* 검색창 */}
      <p className="home_search_box">
        <input
          placeholder="정보 나누고 정보 얻고!"
          className="home_search"
        ></input>
        <button className="search_btn">
          <img
            src={search_btn1}
            srcset="../image/home/home1/search/btn_검색@2x.png 2x,
               ../image/home/home1/search/btn_검색@3x.png 3x
               "
            alt="버튼 이미지 "
          />
        </button>
      </p>
    </div>
  );
};

export default Home1;
