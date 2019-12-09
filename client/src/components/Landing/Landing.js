import React from "react";

const Landing = () => (
    <div id="start" class="row">
        <div class="s8 m6 offset-s2" id="title">
            <h2>Andrew Mendez</h2>
            {/* <img class="responsive-img" src="assets/images/Logo-Large.jpg" alt="Logo" style="max-width: 600px;"> */}
            <p>Full Stack Developer. Here to Develop Your Things</p>
        </div>
        <div class="s8 m4" id="start-btns">
            <button id="profile-btn">See Profile <i class="material-icons tiny">forward</i></button>
            <button id="portfolio-btn">Explore Work <i class="material-icons tiny">forward</i></button>
        </div>
    </div>
)
export default Landing;