import React from 'react';
import Logo from '../components/Logo';

const Home1= () => {

    return(
        <div>
            <Logo/>

           {/*메인화면 이미지  png*/}
            <img src="../image/home/home1/자산 1.png"
     srcset="../image/home/home1/자산 1@2x.png 2x,
             ../image/home1/자산 1@3x.png 3x"

             alt="메인 화면 이미지"
     className="home_img"/> 

           {/* jpg */} 
      <img src="../image/home/home1/자산 1.jpg"
     srcset="../image/home/home1/자산 1@2x.jpg 2x,
             ../image/home1/자산 1@3x.jpg 3x"

             alt="메인화면 이미지"
     className="home_img"/>

         {/* 검색창 */}

         <input placeholder="정보 나누고 정보 얻고!" className="home_search"></input>
         <button>검색</button>

        </div>

    );
};

export default Home1;