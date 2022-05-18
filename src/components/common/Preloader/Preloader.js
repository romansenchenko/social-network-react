/* import { makeStyles } from '@fluentui/react-make-styles';
 */import React from 'react';
import preloader from '../../../assets/images/preloaderOrigin.gif';
import s from '../Preloader/Preloader.module.css';

let Preloader = () => {
    return <div className={s.container}>
        <div className={s.beehivePreloader}>
            <img alt='preloader' src={preloader} />
        </div>
    </div>
} 

export default Preloader;