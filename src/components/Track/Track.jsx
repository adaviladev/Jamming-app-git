import React from 'react';
import styles from './Track.module.css';

function Track({name, artist, album, onAdd, onRemove, isRemoval}) {

    const handleAction = () => {
        if (isRemoval) {
            onRemove();
        } else {
            onAdd();
        }
    }

    return (
        <div className={styles.Track}>
            <p>
                <strong>{name}</strong> by {artist} ({album})
            </p>
            <button onClick={handleAction}>{isRemoval ? '-' : '+'}</button>
        </div>
    );
}

export default Track;