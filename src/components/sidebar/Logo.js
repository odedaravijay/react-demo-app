import LogoImage from './logo.svg'
import LogoStyle from "./logo.style.css";
export const Logo = ()=>{
    return(
        <div className="logo d-flex align-items-center justify-content-center">
            <img  src={LogoImage}/>
        </div>
    )
};
