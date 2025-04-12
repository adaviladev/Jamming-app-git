import React from 'react';
import styles from './Track.module.css';

function Track({name, artist, album, onAdd}) {
    return (
        <div className={styles.Track}>
            <p>
                <strong>{name}</strong> by {artist} ({album})
            </p>
            <button onClick={onAdd}>+</button>
        </div>
    );
}

export default Track;