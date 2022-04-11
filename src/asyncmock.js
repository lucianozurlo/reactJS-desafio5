const products = [
    {
        id: 1,
        band: 'Nirvana',
        album: 'Nevermind',
        price: 1000,
        cover: 'https://cdn.oldskull.net/wp-content/uploads/2015/01/Rock_Covers-ilustracion-oldskull-15.jpg',
        stock: 15,
        description: 'Descripcion de A'
    },
    {
        id: 2,
        band: 'The Beatles',
        album: 'Revolver',
        price: 1000,
        cover: 'https://cdn.oldskull.net/wp-content/uploads/2015/01/Rock_Covers-ilustracion-oldskull-02-880x879.jpg',
        stock: 10,
        description: 'Descripcion de B'
    },
    {
        id: 3,
        band: 'Sonic Youth',
        album: 'Sister',
        price: 1000,
        cover: 'https://cdn.oldskull.net/wp-content/uploads/2015/01/Rock_Covers-ilustracion-oldskull-20.jpg',
        stock: 5,
        description: 'Descripcion de C'
    }
]

export const getProducts = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(products)
        }, 2000);
    })
}