const products = [
    {
        id: 1,
        band: 'Nirvana',
        album: 'Nevermind',
        price: 1200,
        cover: 'https://cdn.oldskull.net/wp-content/uploads/2015/01/Rock_Covers-ilustracion-oldskull-15.jpg',
        stock: 15,
        description: 'Discazo!'
    },
    {
        id: 2,
        band: 'The Beatles',
        album: 'Revolver',
        price: 800,
        cover: 'https://cdn.oldskull.net/wp-content/uploads/2015/01/Rock_Covers-ilustracion-oldskull-02-880x879.jpg',
        stock: 10,
        description: 'Otro discazo!'
    },
    {
        id: 3,
        band: 'Sonic Youth',
        album: 'Sister',
        price: 500,
        cover: 'https://cdn.oldskull.net/wp-content/uploads/2015/01/Rock_Covers-ilustracion-oldskull-20.jpg',
        stock: 5,
        description: 'Otro discazo más'
    }
]

export const getProducts = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(products)
        }, 2000);
    })
}

export const getProductsById = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 2000);
    })
}

