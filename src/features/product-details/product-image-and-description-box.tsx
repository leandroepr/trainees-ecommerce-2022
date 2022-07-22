const ProductImageAndDescriptionBox = () => {
  return (
    <section className="space-y-4 mr-20 ml-4">
      <div className="flex scale-75 items-center justify-center">
        <img
          src="https://http2.mlstatic.com/camiseta-hering-super-cotton-masculina-D_NQ_NP_851063-MLB40515678610_012020-O.jpg"
          alt="Camisa preta"
        ></img>
      </div>
      <div className="font-bold text-lg text-black">Descrição</div>
      <div className="flex max-w-xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac
        magna vehicula, hendrerit arcu condimentum, mollis ligula. Quisque enim
        nisi, commodo eu ex nec, sollicitudin sagittis mauris. Pellentesque non
        metus vitae leo aliquam commodo pulvinar et sem. Vestibulum fringilla
        massa a mauris lacinia varius. Nulla a ante felis. Ut eu eleifend arcu,
        sit amet semper nisi. Duis fermentum ligula nec blandit vehicula.
        Integer ut libero justo. Pellentesque eget mauris lobortis, hendrerit
        nisl vitae, fermentum justo.
      </div>
    </section>
  )
}

export default ProductImageAndDescriptionBox
