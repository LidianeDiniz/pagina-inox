import { NextApiRequest, NextApiResponse } from "next";

interface ProductData {
  title: string;
  description: string;
  imageUrl: string;
}

const productsData: { [slug: string]: ProductData } = {
  "corrimao-inox-1": {
    title: "Corrimão de Inox 1",
    description: "Descrição do Corrimão de Inox 1...",
    imageUrl: "/corrimao2.jpg",
  },
  "corrimao-inox-2": {
    title: "Corrimão de Inox 2",
    description: "Descrição do Corrimão de Inox 2...",
    imageUrl: "/corrimao1.jpg",  },
  // Adicione mais produtos conforme necessário
};

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { slug } = req.query;
  
  if (!slug || typeof slug !== "string") {
    return res.status(400).json({ error: "Slug inválido" });
  }

  const product = productsData[slug];

  if (!product) {
    return res.status(404).json({ error: "Produto não encontrado" });
  }

  return res.status(200).json(product);
};
