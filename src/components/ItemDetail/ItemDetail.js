import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'

const ItemDetail = ({ band, album, price, cover, stock }) => {

    const handleOnAdd = (quantity) => {
        alert(`Se agregaron ${quantity} productos`)
    }

    return (
        <section>
            <picture>
                <img src={cover} alt={album} />
            </picture>
            <p className='band'>{band}</p>
            <p className='album'>{album}</p>
            <p className='price'>$ {price}</p>
            <p className='stock'>Stock disponible <span>{stock}</span> unidades</p>
            <button className='detalles'>Ver detalle</button>
            <ItemCount initial={0} stock={stock} onAdd={handleOnAdd} />
        </section>
    )
}

export default ItemDetail