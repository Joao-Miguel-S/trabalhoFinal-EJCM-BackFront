import '../globals.css'
import Seta from "../assets/seta.svg"
import Perfil from "../assets/Perfil.png"
 
type headerProps={
    titulo: string;
}

export default function Header(props: headerProps){
    return(
        <div className='header'>
            <img src={Seta} alt=""/>
            <h1 className=' montserrat text-[24px] font-[500]'>{props.titulo}</h1>
            <img src={Perfil} alt="" className='w-[50px] h-[50px]'/>
        </div>
    )

}   