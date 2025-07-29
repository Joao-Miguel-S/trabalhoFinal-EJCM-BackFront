import '../globals.css'

type containerProps={
    identificador: string
    children:any
}

export default function container(props: containerProps){
    return (
        <div id={props.identificador} className='container'> 
            {props.children}
        </div>
    )
}