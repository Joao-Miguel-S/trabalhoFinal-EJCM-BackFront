import '../globals.css'
import coracao from "../assets/coracao.svg"

type paraVoceProps={
    src:string;
    nomeProduto:string;
    precoProduto: string;
}

export default function boxProduto(props: paraVoceProps){
    return (
        <div className='caixaParaVoce'>
            <img src={props.src} className='m-1 rounded-[15px] '></img>
            <div className='flex justify-around'>
                <div>
                    <p className='montserrat font-normal text-[#2B2B2B] text-[13px] mb-2'>{props.nomeProduto}</p>
                    <p className='montserrat font-bold text-[15px] mb-1'>{props.precoProduto}</p> 
                </div>
                <img src={coracao} className='w-[22px] h-[20xp]'  ></img>
            </div>
            
        </div>
    )
}