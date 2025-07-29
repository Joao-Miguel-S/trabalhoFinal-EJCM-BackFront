import { Prisma, PrismaClient } from "../generated/prisma";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export class VedendorController{

    public static async createVendedor(request: Request, response: Response){
        try{
            const {nome,email,numeroTelefone,avaliacao,endereco}=request.body;
            const createInput: Prisma.VendedorCreateInput={
                nome: nome,
                email:email,
                numeroTelefone:numeroTelefone,
                avaliacao: avaliacao,
                endereco: endereco
            }

            const createdVendedor = await prisma.vendedor.create({
                data: createInput,
            });
            response.status(201).json(createdVendedor);
        }
        catch(erro: any){
            erro.message ="Falha ao criar vendedor";
            response.status(500).json({message: erro.message });
        }
    }

    public static async readVendedor(request: Request, response: Response){
        try {
			const { idVendedor } = request.params;

            const foundVendedor = await prisma.vendedor.findUnique({
                where:{
                    id: idVendedor
                }
            })
			response.status(201).json(foundVendedor);
		} 
        catch (erro: any) {
            erro.message ="Falha ao encontrar vendedor";
			response.status(500).json({ message: erro.message });
		}
    }

    public static async readAllVendedores(response: Response){
        try{
            const foundVendedores = await prisma.vendedor.findMany();
            response.status(201).json(foundVendedores);
        }
        catch(erro:any){
            erro.message ="Falha ao encontrar vendedores";
			response.status(500).json({ message: erro.message });
        }


    }

    public static async updateVendedor(request: Request, response: Response) {
		try {
			const { idVendedor } = request.params;
			const { nome,email,numeroTelefone,avaliacao,endereco} = request.body;

			const createInput: Prisma.VendedorUpdateInput = {
                nome: nome,
                email:email,
                numeroTelefone:numeroTelefone,
                avaliacao: avaliacao,
                endereco: endereco
			};

			const updatedVendedor = await prisma.vendedor.update({
				data: createInput,
				where: {
					id: idVendedor,
				},
			});

			response.status(200).json(updatedVendedor);
		} 
        catch (erro: any) {
            erro.message ="Falha ao atualizar vendedor";
			response.status(500).json({ message: erro.message });
		}
	}

    public static async deleteVendedor(request: Request, response: Response) {
		try {
			const { idVendedor } = request.params;

			const deletedVendedor = await prisma.vendedor.delete({
				where: {
					id: idVendedor,
				},
			});

			response.status(200).json(deletedVendedor);
		} 
        catch (erro: any) {
            erro.message ="Falha ao deletar vendedor";
			response.status(500).json({ message: erro.message });
		}
	}

    public static async deleteAllVendedores(response: Response){
        try{
            const deletedAllVendedores = await prisma.vendedor.deleteMany();
            response.status(500).json(deletedAllVendedores);
        }
        catch(erro: any){
            erro.message ="Falha ao deletar todos os vendedor";
			response.status(500).json({ message: erro.message });   
        }
    }
    public static async upserVendedor(request: Request, response: Response){
        try{
            const {idVendedor} = request.params;
            const {nome,email,numeroTelefone,endereco,avaliacao} = request.body;

            const createdVendedor: Prisma.VendedorCreateInput={
                nome: nome,
                email: email,
                numeroTelefone: numeroTelefone,
                endereco: endereco,
                avaliacao:avaliacao
            }

            const updatedVendedor: Prisma.VendedorUpdateInput={
                nome: nome,
                email: email,
                numeroTelefone: numeroTelefone,
                endereco: endereco,
                avaliacao:avaliacao
            }

            const upsertedVendedor= await prisma.vendedor.upsert({
                create: createdVendedor,
                update: updatedVendedor,
                where: {
                    id: idVendedor
                }
            })

            response.status(201).json(upsertedVendedor);
        }
        catch(erro: any){
            erro.message="erro upsert"
            response.status(500).json({message: erro.message})
        }

    }
}