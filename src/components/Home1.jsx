import React from 'react';
import Logo from '../components/Logo';
import Home_img1 from '../image/home/home1/자산 1.png'

const Home1= () => {

    return(
        <div className="home_1">
            <Logo/>

           {/*메인화면 이미지  png*/}
            <img src={Home_img1}
     srcset="../image/home/home1/자산 1@2x.png 2x,
             ../image/home1/자산 1@3x.png 3x"

             alt="메인 화면 이미지"
     className="home_img"/> 

        
         {/* 검색창 */}
        
         <input placeholder="정보 나누고 정보 얻고!" className="home_search"></input>
         <button></button>
         

        </div>

    );
};

export default Home1;