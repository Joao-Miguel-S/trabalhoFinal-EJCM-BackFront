import { Prisma, PrismaClient } from "../generated/prisma";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export class ProdutoController{

    public static async createProduto(request: Request, response: Response){
        try{
            const {nome,genero,dataPublicacao,preco,descricao,idVendedor}=request.body;
            const createInput: Prisma.ProdutoCreateInput={
                nome: nome,
                genero:genero,
                dataPublicacao:dataPublicacao,
                preco: preco,
                descricao: descricao,
                vendedor:{
                    connect:{
                        id: idVendedor
                    }
                }
                 //acima está certo
                 // autenticação
            }

            const createdProduto = await prisma.produto.create({
                data: createInput,
            });
            response.status(201).json(createdProduto);
        }
        catch(erro: any){
            
            response.status(500).json({message: erro.message });
        }
    }

    public static async readProduto(request: Request, response: Response){
        try {
            const { idProduto } = request.params;

            const foundProduto = await prisma.produto.findUnique({
                where:{
                    idProd: idProduto
                }
            })
            response.status(201).json(foundProduto);
        } 
        catch (erro: any) {
            erro.message ="Falha ao encontrar produto";
            response.status(500).json({ message: erro.message });
        }
    }

    public static async readAllProdutos(response: Response){
        try{
            const foundProduto = await prisma.produto.findMany();
            response.status(201).json(foundProduto);
        }
        catch(erro:any){
            erro.message ="Falha ao encontrar produtos";
            response.status(500).json({ message: erro.message });
        }

    }

    public static async updateProduto(request: Request, response: Response) {
        try {
            const { idProduto } = request.params;
            const { nome,genero,dataPublicacao,preco,descricao} = request.body;

            const createInput: Prisma.ProdutoUpdateInput = {
                nome: nome,
                genero:genero,
                dataPublicacao:dataPublicacao,
                preco: preco,
                descricao: descricao
            };

            const updatedProduto= await prisma.produto.update({
                data: createInput,
                where: {
                    idProd: idProduto,
                },
            });

            response.status(200).json(updatedProduto);
        } 
        catch (erro: any) {
            erro.message ="Falha ao atualizar produto";
            response.status(500).json({ message: erro.message });
        }
    }

    public static async deleteProduto(request: Request, response: Response) {
        try {
            const { idProduto } = request.params;

            const deletedProduto = await prisma.produto.delete({
                where: {
                    idProd: idProduto,
                },
            });

            response.status(200).json(deletedProduto);
        } 
        catch (erro: any) {
            erro.message ="Falha ao deletar produto";
            response.status(500).json({ message: erro.message });
        }
    }

    public static async deleteAllProdutos(response: Response){
        try{
            const deletedAllProduto = await prisma.produto.deleteMany();
            response.status(500).json(deletedAllProduto);
        }
        catch(erro: any){
            erro.message ="Falha ao deletar todos os produtos";
            response.status(500).json({ message: erro.message });   
        }
    }
    public static async upserProduto(request: Request, response: Response){
        try{
            const {idProduto} = request.params;
            const {nome,genero,dataPublicacao,preco,descricao,idVendedor} = request.body;

            const createdProduto: Prisma.ProdutoCreateInput={
                nome: nome,
                genero: genero,
                dataPublicacao: dataPublicacao,
                preco: preco,
                descricao:descricao,
                vendedor: idVendedor
            }

            const updatedProduto: Prisma.ProdutoUpdateInput={
                nome: nome,
                genero: genero,
                dataPublicacao: dataPublicacao,
                preco: preco,
                descricao:descricao,
            }

            const upsertedProduto= await prisma.produto.upsert({
                create: createdProduto,
                update: updatedProduto,
                where: {
                    idProd: idProduto
                }
            })

            response.status(201).json(upsertedProduto);
        }
        catch(erro: any){
            erro.message="erro upsert"
            response.status(500).json({message: erro.message})
        }

    }
}