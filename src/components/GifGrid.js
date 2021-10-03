import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([])

    // //Hook para decir cuando se ejecutara (En este caso se ejecutra solo cuando el componente se renderizara)
    // useEffect(() => {
    //     getGifs(category)
    //         // .then(imgs => setImages(imgs))
    //         .then(setImages);
    // }, [category]);

    const { data: images, loading } = useFetchGifs(category);



    return (
        <>
            <h3 className="animate__animated animate__slideInUp">{category}</h3>
            {loading && <p className="animate__animated animate__flash">Loading</p>}
            <div className="card-grid">

                {
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </>
    )
}
