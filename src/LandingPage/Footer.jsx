import React from 'react'


export const Footer = () => {
  return (
    <>

    <div className="Footercontainer bg-dark text-white pb-5 " style={{width:'100%'}}>

        <div className="mainFooter m-auto pt-3" style={{width:'90%'}}>

            <div className="someText d-flex align-items-center gap-sm-2 gap-md-3 gap-lg-4">
                <button className='createbut'>O</button>
                <small className='fw-bold '>List Your Show</small>
                <div className="div ">
             <small>Got a show,event,activity or a great experience ? Partner with us & get listed on BookMyShow</small>
            </div>
            <button className='bg-danger p-1 text-white rounded-3 w-sm-25 w-lg-25 w-xl-50 '>Contact Today !</button>
             </div>

        </div>
        <hr />
        <div className="fotimg m-auto" style={{width:'10%'}}>
  <img src="imges/logo2.jpg" alt="" width={80} />
        </div>
        <div className="foticons d-flex justify-content-center gap-3 mt-5" style={{width:'100%'}}>
            <div className="youtube ">
                  <i className="bi bi-facebook"></i>
            </div>
            <div className="youtube ">
                 <i className="bi bi-instagram"></i> 
            </div>
           <div className="youtube ">
                <i className="bi bi-twitter-x"></i> 
            </div>
             <div className="youtube ">
               <i className="bi bi-youtube "></i>
            </div>
            <div className="youtube ">
                    <i className="bi bi-pinterest"></i>
            </div>
            <div className="youtube ">
              <i className="bi bi-linkedin"></i>
            </div>
        </div>
    <div className="coptFoot d-grid m-5" style={{textAlign:'center'}}>
        <small>Copyright 2025 <i className="bi bi-c-circle"></i>Bigtree Entertainment Pvt.Ltd. All Rights Reserved</small>
        <small>The content and images used on the site are copyright protected and copyrights with the respective owners. The usage of the content and images on this website is intended to promote the works and no endorsement of the artist shall be implied. Unauthorized use is rohibited and punishable by law.</small>
    </div>
      </div>
    </>
  )
}
