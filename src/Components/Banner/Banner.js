import React from 'react';
import bio from '../../Images/AtornyBio.jpg'
const Banner = () => {
    return (
        <div className='container'>
            <div className=" mt-5 mb-5" >
                <div className="row g-0">
                    <div className="col-md-6 col-sm-6">
                        <img src={bio} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-6 col-sm-6">
                        <h2>KENNETH D. AITA, ESQUIR</h2>
                        <h4>YOUR BEST ADVOCATE – LET ME DEFEND YOU</h4>
                        <p>Mr. Aita was admitted to practice in New Jersey in May 1998 and Pennsylvania in June 1998. Mr. Aita is also admitted in the United States District Court for the District of New Jersey and the Eastern District of Pennsylvania.</p>
                        <p>Mr. Aita has extensive experience in the area of Criminal Practice. As a privately retained criminal defense attorney, Mr. Aita has successfully defended matters in New Jersey Municipal, State and Federal Courts. Mr. Aita has handled DUIs, drug offenses, murders, robbery, theft, sexual assaults, white-collar crime, official misconduct, along with many other offenses. He also served as a municipal prosecutor which gives him unique insight into defending criminal matters as he has seen the case from the other side.</p>
                        <p>Mr. Aita has successfully argued two matters before the New Jersey Supreme Court; State v. Brown, now cited as the leading case regarding when police may search real property alleged to be abandoned; and also In the Matter of S.S., the defense of an attorney who was facing disbarment.</p>
                        <p>n addition to the above, Mr. Aita has extensive experience in Civil Rights matters. He served as one of the lead counsel In Re: Camden Police Cases whereby approximately 80 individuals brought suit for damages for violation of civil rights due to police misconduct. Five Camden Police Officers arrested innocent individuals and planted evidence, stole money, and lied under oath to cover up for the illegal conduct. The matter was ultimately settled for $3,000.000.</p>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;