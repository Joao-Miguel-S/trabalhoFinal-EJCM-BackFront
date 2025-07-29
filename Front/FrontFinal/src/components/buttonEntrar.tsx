import '../globals.css'

type buttonProps={
    texto: string
}

export default function ButtonEntrar(props:buttonProps){
    return(
        <button className='buttonEntrar montserrat mt-8'>{props.texto}</button>
    )

}