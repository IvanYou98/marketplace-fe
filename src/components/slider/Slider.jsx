import SimpleImageSlider from "react-simple-image-slider";
import { sliderImages } from "../../data";
import "./Slider.css"


const Slider = () => {
    const images = sliderImages.map(imageUrl => {
        return {
            url: imageUrl
        }
    });

    return (
        <div className="slider-container">
            <SimpleImageSlider
                width={1000}
                height={630}
                images={images}
                showBullets={true}
                showNavs={true}
                autoPlay={true}
                slideDuration={2}
            />
        </div>
    )
}

export default Slider;