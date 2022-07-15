import Image from "next/image";
import React from "react";

const ProductsList: React.FC = () => {
  const productList = [
    {
      id: 1,
      productImage: "/assets/default-product-image.png",
      fullPrice: "R$85,41",
      installmentPrice: `em 12x R$ 8,11`,
      productDescription: `Tênis flatform amortecimento air feminino conforto leveza`,
    },
    {
      id: 2,
      productImage: "/assets/default-product-image.png",
      fullPrice: "R$54,99",
      installmentPrice: `em 10x R$ 5,49`,
      productDescription: `Calça de moletom masculina`,
    },
    {
      id: 3,
      productImage: "/assets/default-product-image.png",
      fullPrice: "R$70,00",
      installmentPrice: `em 10x R$ 7,00`,
      productDescription: `Camiseta esporte dri-fit azul`,
    },
    {
      id: 4,
      productImage: "/assets/default-product-image.png",
      fullPrice: "R$99,99",
      installmentPrice: `em 10x R$ 9,99`,
      productDescription: `Camiseta Polo verde`,
    },
    {
      id: 5,
      productImage: "/assets/default-product-image.png",
      fullPrice: "R$20,00",
      installmentPrice: `em 4x R$ 5,50`,
      productDescription: `Pulseira de pedras`,
    },
    {
      id: 6,
      productImage: "/assets/default-product-image.png",
      fullPrice: "R$69,99",
      installmentPrice: `em 8x R$ 8,75`,
      productDescription: `Calça Jogger Masculina Bege`,
    },
  ];

  return (
    <div className="grid gap-3 lg:grid-cols-3 sm:grid-cols-2 max-w-fit">
      {productList.map((productItem) => (
        <div
          key={productItem.id}
          className="border border-gray-300 shadow-lg w-64 h-96 bg-white rounded"
        >
          <div className="mb-2 border-b-2">
            <Image
              src={productItem.productImage}
              alt="Imagem do produto"
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="contain"
            />
          </div>
          <div className="px-4">
            <h3 className="font-bold">{productItem.fullPrice}</h3>
            <p className="font-medium">{productItem.installmentPrice}</p>
            <span className="bg-blue-200 text-blue-600 rounded-sm font-medium py-0.2 px-1">
              Enviando normalmente
            </span>
            <p>{productItem.productDescription}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
