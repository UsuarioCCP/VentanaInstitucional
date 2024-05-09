import { useState, useEffect } from 'react';
import Layout from '../../Componentes/Layout';
import VideoVisor from '../../Componentes/VideoVisor';
import Carousel from '../../Componentes/Carousel';
import Baner from '../../Componentes/Baner';

function Home() {
    // URL inicial en caso de que no haya ninguna en el almacenamiento local
    const defaultVideoUrl = "https://www.youtube-nocookie.com/embed/videoseries?si=yeeBIKp1zOIi73Y1&amp;list=PLmVJ0CeRYtBxYdB2Wd69y_EjBRjNbrWF0&loop=1&autoplay=1";

    const [videoUrl, setVideoUrl] = useState('');

    useEffect(() => {
        const initialVideoUrl = localStorage.getItem("videoUrl");
        if (initialVideoUrl) {
            setVideoUrl(initialVideoUrl);
        } else {
            setVideoUrl(defaultVideoUrl);
        }
    }, []);

    return (
        <Layout>
            <div className='grid grid-cols-3'>
                <div className="h-lvh col-span-3 lg:col-span-2 flex items-center justify-center flex-wrap">
                    <VideoVisor videoUrl={videoUrl} />
                </div>
                <div className="col-span-3 lg:col-span-1 carousel flex justify-center items-center">
                    <Carousel />
                </div>
            </div>
            <Baner />
        </Layout>
    );
}

export default Home;
