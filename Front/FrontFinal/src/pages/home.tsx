import '../globals.css' 

import Categorias from '../components/categorias'
import BoxProduto from '../components/boxProduto'
import Container from '../components/container'
import Titulo from '../components/tituloContainer'

import carrinho from "../assets/carrinho.svg" 
import menu from "../assets/menu.svg" 
import logo from "../assets/LogoElektro.svg" 
import imgInicio from "../assets/imgInicio.svg"

import categoriaCelulares from "../assets/categoriaCelular.svg"
import categoriaNotebooks from "../assets/categoriaNotebook.svg"
import categoriaTablets from "../assets/categoriaTablet.svg"
import categoriaAcessorios from "../assets/categoriaAcessorios.svg"
import categoriaPcs from "../assets/categoriaPcs.svg"
import categoriaSmartwatches   from "../assets/categoriaSmartwatches.svg"
import categoriaPerifericos from "../assets/categoriaPerifericos.svg"
import categoriaTvs from "../assets/categoriaTvs.svg"

import paraVoceCelular from "../assets/paraVoceCelular.svg"
import paraVoceCapa from "../assets/paraVoceCapa.svg"

import maisVendidos1 from "../assets/maisVendidos1.svg"
import maisVendidos2 from "../assets/maisVendidos2.png"

import destaque2 from "../assets/destaque1.svg"
import destaque1 from "../assets/destaque2.svg"

import facebookIcon from "../assets/facebookIcon.svg"
import linkedinIcon from "../assets/linkedinIcon.svg"
import instaIcon from "../assets/instaIcon.svg"
import tiktokIcon from "../assets/tiktokIcon.svg"
import twitterIcon from "../assets/twitterIcon.svg"

export default function Home(){
    return(
        <div className='w-full  items-center flex flex-col'>

            <header className='w-full h-[71px] flex flex-row justify-between items-center rounded-bl-[16px] rounded-br-[16px] bg-[#2B2B2B]'>
                <img src={menu} className='w-[24px] h-[24px] ml-7'></img>
                <img src={carrinho} className='w-[24px] h-[24px] mr-7'></img>
            </header>

            <main className='flex flex-col justify-center items-center mt-6 w-[85%]'>
                
                <div id="inicio" className='flex flex-col w-full border-solid border-[#7575759d] border-b-[2px]'>
                    <div className='flex flex-row w-full items-center justify-center text-[25px] '>
                        <img src={logo} className='w-[42px] h-[42px]'></img>
                        <h5 className='russoOne text-[#FF8F0E]'>Bem-vindo à Elektro! </h5>
                    </div>
                    <div className=' flex justify-center w-full  mb-5 mt-5'>
                        <img src={imgInicio} className='w-[327px] h-[210px]'></img>
                    </div>
                </div> 

                <Titulo titulo="Categorias"></Titulo>
                <Container identificador='categorias'>
                    <Categorias src={categoriaCelulares} nome='Celurares'></Categorias>
                    <Categorias src={categoriaNotebooks} nome='Notebooks'></Categorias>
                    <Categorias src={categoriaTablets} nome='Tablets'></Categorias>
                    <Categorias src={categoriaPerifericos} nome='Periféricos'></Categorias>
                    <Categorias src={categoriaTvs} nome='TVs'></Categorias>
                    <Categorias src={categoriaAcessorios} nome='Acessorios'></Categorias>
                    <Categorias src={categoriaPcs} nome='PCS'></Categorias>
                    <Categorias src={categoriaSmartwatches} nome='Smartwatches'></Categorias>
                </Container> 

                <Titulo titulo="Para você"></Titulo>
                <Container identificador='paraVoce'>
                    <BoxProduto src={paraVoceCelular} nomeProduto='Celular' precoProduto='R$800,00'></BoxProduto>
                    <BoxProduto src={paraVoceCapa} nomeProduto='Capa protetora' precoProduto='R$20,00'></BoxProduto>
                </Container>
 
                <Titulo titulo="Produtos em Destaque"></Titulo>
                <Container identificador='Destaque'>
                    <BoxProduto src={destaque1} nomeProduto='Smart TV' precoProduto='R$1400,00'></BoxProduto>
                    <BoxProduto src={destaque2} nomeProduto='Monitor' precoProduto='R$750,00'></BoxProduto>
                </Container>

                <Titulo titulo="Mais vendidos"></Titulo>
                <Container identificador='Destaque'>
                    <BoxProduto src={maisVendidos1} nomeProduto='Smartphone' precoProduto='R$3200,00'></BoxProduto>
                    <BoxProduto src={maisVendidos2} nomeProduto='Smartwatch' precoProduto='R$900,00'></BoxProduto>
                </Container>
            </main> 

            <footer className='bg-[#FFAE50] w-full h-[150px] flex flex-col '>
                <p>Siga-nos nas redes sociais!</p>
                <div className='flex '>
                    <img src={facebookIcon}></img>
                    <img src={instaIcon}></img>
                    <img src={tiktokIcon}></img>
                    <img src={twitterIcon}></img>
                    <img src={linkedinIcon}></img>
                </div>
            </footer>
        </div> 
    )
}