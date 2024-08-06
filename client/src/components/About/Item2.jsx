import React from 'react';
import './Item.css';
import styles from './italicText.css';

function Item2() {
    return (
        <div className="item item2">
            <h2>Founding Team:</h2>
            <div className="paras">
                <p className={styles.italicText}>
                    <strong>Vikranth</strong><i> is a Computer Science student at the University of Wisconsin - Madison, and is currently an intern at PACCAR. He developed a passion for Computer Science his junior year of high school, and wants to share his passion with others. Vikranth values an environment that teaches on-the-job skills, provides resources for career development, encourages problem solving and critical thinking in a group setting, and mentorship as he believes these     are the pieces for helping students grow.</i> 
                </p>
                <p>
                    <strong>Shyam Ramesh</strong> <i>is a Computer Science student at the University of Washington Bothell. Shyam has experience in full stack development while working at a startup and will be interning at Amazon this summer. Shyam values an environment where mentorship is encouraged and practiced as he believes that it fosters growth. In his free time, he enjoys playing football, working out, and painting.</i> 
                </p>
            </div>
        </div>
    );
}

export default Item2;
