import React from 'react';
import Logo1 from '../image/home/logo/그룹 69.png'




const Logo=() => {
    return(

        <div className="home_logo_box">
            {/* png */}
           <img src={Logo1}
                srcset="../image/home/logo/그룹 69@2x.png 2x,
                     ../image/home/logo/그룹 69@3x.png 3x"

                     alt="홈페이지 로고"

                className="home_logo"/> 
                
              
             
        </div>

    );


};

export default Logo;