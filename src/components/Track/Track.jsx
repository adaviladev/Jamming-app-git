import React from 'react';
import styles from './Track.module.css';

function Track() {
    return (
        <div className={styles.Track}>
            <p>Track Name - Artist Name</p>
            <button>+</button>
        </div>
    );
}

export default Track;