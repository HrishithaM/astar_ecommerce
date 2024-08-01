
import React from 'react';
import './About.css';

const About = () => {
    return (
        <div style={{ padding: '20px' }}>
                 <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <h1 style={{ color: 'blue' }}>A*</h1>
                <p>We're here to help you grow.</p>
                <a href="http://www.a-staraccelerator.com">www.a-staraccelerator.com</a>
            </div>
            <div style={{ marginTop: '40px' }}>
                <h2>If any of these bullet points resonate with you, this is the right program for you.</h2>
                <ul>
                    <li>You want to see the variety of pieces that computer science entails.</li>
                    <li><strong>You want to experience what it is like to have an internship in technology.</strong></li>
                    <li>You want to gain experience working with various technologies.</li>
                    <li><strong>You have a desire to gain experience building full stack applications.</strong></li>
                    <li>You want interview prep resources and practice for future interview.</li>
                    <li><strong>You want leetcode workshops and practice.</strong></li>
                    <li>You want to learn how to integrate databases with your application development.</li>
                    <li><strong>You want to hear the experience of industry professionals on various topics.</strong></li>
                    <li>You want networking opportunities with industry professionals and fellow peers</li>
                    <li><strong>You want to learn industry practices that make you successful for future internships.</strong></li>
                </ul>
            </div>

            <div style={{ marginTop: '40px' }}>
                <h2>Industry Exposure</h2>
                <ul>
                    <li>Providing experience in industry Providing experience in industry practices and technologies to accelerate the career development of students. </li>
                </ul>
            </div>
            <div style={{ marginTop: '40px' }}>
                <h2>Mentorship Events</h2>
                <ul>
                    <li>Our program includes speakers and mentors from top-tech industry professionals at Amazon, Microsoft, Google and more! </li>
                </ul>
            </div>
            <div style={{ marginTop: '40px' }}>
                <h2>Technical Workshops</h2>
                <ul>
                    <li>Teaching students new and upcoming languages, alongside the backbone technologies of fullstack development. </li>
                </ul>
            </div>
            <div style={{ marginTop: '40px' }}>
                <h2>Real Business Case</h2>
                <ul>
                    <li>We are partnering with UW Bothell to build a mobile app that enhances the access to events and reinforces the community bond at the University. </li>
                </ul>
            </div>

            <div style={{ marginTop: '40px' }}>
                <h2>Program Details:</h2>
                <ul>
                    <li>Program size is capped at 25 students.</li>
                    <li><strong>We will meet in person 3 days a week</strong> (5:30pm-7:30pm) in a coworking space - Venture Mechanics - in Bellevue on Mondays, Wednesdays and Fridays.</li>
                    <li>While we will only meet synchronously 3 days a week, students are expected to actively collaborate and work with their teams, as well as ask questions to mentors outside of in-person time (You will get out of this program as much as you put in).</li>
                    <li>Appropriate amount of time to spend for a successful experience is 10-15 hours a week.</li>
                    <li>Workshops will be recorded (virtual option) but attendance is expected.</li>
                    <li>Please let us know if commute is a difficulty, we can help with accommodations for this.</li>
                    <li><strong>Program will run from June 24th to August 16th.</strong></li>
                </ul>
            </div>
        </div>
    );

};

export default About;
