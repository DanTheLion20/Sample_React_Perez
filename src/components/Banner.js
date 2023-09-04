import BannerImage from "../img/Doma.jpg";

const Banner = () => {
    return ( 
        <>
           <img src ={BannerImage} aria-hidden alt="Banner Image" className="w-100"/>
        </>
     );
}
 
export default Banner;