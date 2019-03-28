import React, { useEffect, useState } from 'react';
import style from './Gif.module.scss';
import { giphy } from '../../../config/axios';

const gif = props => {
    // Component to fetch GIFs from Giphy. Uses prop search (str) to make the request.
    const [gif, setGif] = useState('');
    const [gifList, setGifList] = useState([]);

    useEffect(()=>{
        if (!gif){
            console.log(props.search);
            giphy.get(`search?q=${props.search.replace(/\s/, "+")}&api_key=HO6ODO8AX4emQJJKF6w4YfQHhBXQM8Xh`)
            .then(response => {
                const index = Math.floor(Math.random() * 25);
                setGif(response.data.data[index].images.fixed_height.url);
                setGifList(response.data.data);
            })
        }
    });

    const changeGif = () => {
        const index = Math.floor(Math.random() * 25);
        setGif(gifList[index].images.fixed_height.url);
    };

    return (
    <div className={style.Gif}>
        <img onClick={changeGif} src={gif} alt='GIF' width={props.width} height={props.height}/>
    </div>
    );
}

export default gif;