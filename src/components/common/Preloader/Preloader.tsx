import React, { FC } from 'react';
import preloader from '../../../assets/images/preloaderOrigin.gif';
import s from '../Preloader/Preloader.module.css';

type PropsType ={ }

let Preloader: FC<PropsType> = () => {
    return <div className={s.container}>
        <div className={s.beehivePreloader}>
            <img alt='preloader' src={preloader} />
        </div>
    </div>
} 

export default Preloader;