import React from 'react';
import './skill.css'; 

const Skill = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>About Me</span>
        <span className='skillDesc'>I am a deterministic, passionate and smart working student. My Aspiration is to become an Indian Commercial Pilot. As an Engineering student I have a creative mind and am always up for the new challenges. My enthusiasm helps me to explore,learn and think of new skills and ideas.</span>
        <div className='skillBars'>
            <div className='skillBar'>
                <div className='skillBarText'>
                    <h2>Python Developer</h2>
                    <p>I have knowledge of Python, Python with Data Science and Machine Learning.</p>

                </div>
            </div>
        </div>
        <div className='skillBars'>
            <div className='skillBar'>
                <div className='skillBarText'>
                    <h2>Front-End Developer</h2>
                    <p>I have knowledge of HTML, CSS, React.js</p>

                </div>
            </div>
        </div>
        <div className='skillBars'>
            <div className='skillBar'>
                <div className='skillBarText'>
                    <h2>Back-End Developer</h2>
                    <p>i have knowledge of Python, Php, JS, MongoDB, Express.JS, Node.JS, SQL, SQL Lite.</p>

                </div>
            </div>
        </div>
    </section>
  )
}

export default Skill;