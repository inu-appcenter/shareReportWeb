import React from 'react';




const Logo=() => {
    return(

        <div>
            
           <img src="../image/home/logo/그룹 69.png"
                srcset="../image/home/logo/그룹 69@2x.png 2x,
                     ../image/home/logo/그룹 69@3x.png 3x"

                     alt="홈페이지 로고"

                className="home_logo"/> 

                 
          <img src="../image/home/logo/그룹 69.jpg"
               srcset="../image/그룹 69@2x.jpg 2x,
                       ../image/그룹 69@3x.jpg 3x"

                       alt="홈페이지 로고"
               className="home_logo"/>
        </div>

    );


};

export default Logo;