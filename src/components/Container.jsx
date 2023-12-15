import React from 'react'

const Container = () => {
  return (
    <>
    <div id="container">
        <img src="https://real-estate-web.pages.dev/prologis.png" alt="" />
        <img src="https://real-estate-web.pages.dev/tower.png" alt="" />
        <img src="https://real-estate-web.pages.dev/equinix.png" alt="" />
        <img src="https://real-estate-web.pages.dev/realty.png" alt="" />
    </div>

    {/* next page */}
    <div id="page2">
    <div id="slider">
        <h2>Best Choices</h2>
        <h1>Popular Residencies</h1>
    </div>
    <div id="slider2">
        <div className="child">
            <img src="https://real-estate-web.pages.dev/r1.png" alt="" />
            <p><span>$</span>47,053</p>
            <h1>Aliva Priva Jardin</h1>
            <h4>Jakarta Garden City street,cakung.pulo<br></br>Gadung Jakarta Timur ,Dki Jakarta</h4>
        </div>
        <div className="child">
            <img src="https://real-estate-web.pages.dev/r2.png" alt="" />
            <p><span>$</span>66,653</p>
            <h1>Assati Garden city</h1>
            <h4>Jakarta Garden City street,cakung.pulo<br></br>Gadung Jakarta Timur ,Dki Jakarta</h4>
        </div>
        <div className="child">
            <img src="https://real-estate-web.pages.dev/r3.png" alt="" />
            <p><span>$</span>35,678</p>
            <h1>Citralan Puri Serang</h1>
            <h4>Jakarta Garden City street,cakung.pulo<br></br>Gadung Jakarta Timur ,Dki Jakarta</h4>
        </div>
        <div className="child">
            <img src="https://real-estate-web.pages.dev/r1.png" alt="" />
            <p><span>$</span>37,543</p>
            <h1>Aliva Priva Jardin</h1>
            <h4>Jakarta Garden City street,cakung.pulo<br></br>Gadung Jakarta Timur ,Dki Jakarta</h4>
        </div>
    </div>
   </div>
   <div id="page3">
    <div id="parent">
        <div id="left">
            <img src="https://real-estate-web.pages.dev/value.png" alt="" />
        </div>
        <div id="right">
            <div id="main-bar">
                <h3>Our Value</h3>
                <h1>
                    
                    Value We Give to You
                </h1>
                <p>We always ready to help by providijng the best services for you.<br></br>
                    We beleive a good blace to live can make your life better
                    </p>
            </div>
            <div id="bar">
                <h3>Best interest rates on the market</h3>
                <p>Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat <br></br> ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu <br></br>reprehenderit enim.</p>
            </div>
        </div>
    </div>
   </div>

   <div id="main-tag">
    <div id="flex-bar">
    <div id="slide">
        <h2>Our Contact Us</h2>
        <h1>Easy to contact us</h1>
        <p>We always ready to help by providijng the best services for you. We beleive a good<br></br> blace to live can make your life better</p>
       
    </div>
    <div id="slider-part">
    <div id="slide2">
        <div id="menu-bar">
        <div id="menu2">
        <i class="fa-solid fa-phone"></i>
        </div>
        <div class="menu">
        <p>Call</p>
        <span>021 123 145 14</span>
        </div>
        </div>
    
    <button>call now</button>
    </div>
    
    <div id="slide2">
        <div id="menu-bar">
        <div id="menu2">
        <i class="fa-solid fa-phone"></i>
        </div>
        <div class="menu">
        <p>Call</p>
        <span>021 123 145 14</span>
        </div>
        </div>
    
    <button>call now</button>
    </div>
    </div>
    
    <div id="slider-part2">
            <div id="slide2">
                <div id="menu-bar">
                <div id="menu2">
                <i class="fa-solid fa-phone"></i>
                </div>
                <div class="menu">
                <p>Call</p>
                <span>021 123 145 14</span>
                </div>
                </div>
            
            <button>call now</button>
            </div>
            
            <div id="slide2">
                <div id="menu-bar">
                <div id="menu2">
                <i class="fa-solid fa-phone"></i>
                </div>
                <div class="menu">
                <p>Call</p>
                <span>021 123 145 14</span>
                </div>
                </div>
            
            <button>call now</button>
            </div>
    </div>
    <div id="command">
        <img src="https://real-estate-web.pages.dev/contact.jpg" alt="" />
    </div>
    </div>
   </div>
   <div id="page7">
    <h1>Get started with Homyz</h1>
    <p>Subscribe and find super attractive price quotes from us.<br></br>
        Find your residence soon</p>
        <button>Get started</button>
   </div>
    </>
  )
}

export default Container