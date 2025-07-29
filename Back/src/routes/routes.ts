import {Router} from "express";
import { ProdutoController } from "../controllers/ProdutoController";
import { VedendorController } from "../controllers/VendedorController";

const router = Router();


//rotas do Vendedor
router.post("/vendedor",VedendorController.createVendedor);
router.get("/vendedor/:idVendedor",VedendorController.readVendedor);
router.get("/vendedores",VedendorController.readAllVendedores);
router.put("/vendedor/:idVendedor", VedendorController.updateVendedor);
router.delete("/vendedor/:idVendedor",VedendorController.deleteVendedor);
router.delete("/vendedores",VedendorController.deleteAllVendedores);


//rotas dos Produtos
router.post("/produto",ProdutoController.createProduto);
router.get("/produto/:idProduto",ProdutoController.readProduto);
router.get("/produtos",ProdutoController.readAllProdutos);
router.put("/produto/:idProduto", ProdutoController.updateProduto);
router.delete("/produto/:idProduto",ProdutoController.deleteProduto);
router.delete("/produtos",ProdutoController.deleteAllProdutos);

export default router
//upsert put, a pratica acima tanto faz