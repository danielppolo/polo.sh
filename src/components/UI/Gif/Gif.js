import React, { useEffect, useState } from 'react';
import style from './Gif.module.scss';
import { giphy } from '../../../config/axios';

const gif = props => {
    // Component description
    const [url, setUrl] = useState('');
    useEffect(()=>{
        if(!url){
            console.log('GET GIF');
            giphy.get(`${props.search}&api_key=HO6ODO8AX4emQJJKF6w4YfQHhBXQM8Xh&limit=1`)
            .then(response => {
                setUrl(response.data.data[0].images.fixed_height.url);
            })
        }
    });
    return (
    <div className={style.Gif}>
        <img src={url} alt='GIF' width={props.width} height={props.height}/>
    </div>
    );
}

export default gif;