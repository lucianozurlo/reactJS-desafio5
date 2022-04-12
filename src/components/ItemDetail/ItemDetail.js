import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'

const ItemDetail = ({ band, album, price, description, cover, stock }) => {

    const handleOnAdd = (quantity) => {
        alert(`Se agregaron ${quantity} productos`)
    }

    return (
        <section className='detail'>
            <picture>
                <img src={cover} alt={album} />
            </picture>
            <div>
                <p className='band'>{band}</p>
                <p className='album'>{album}</p>
                <p className='description'>{description}</p>
                <p className='price'>$ {price}</p>
                <p className='stock'>Stock disponible <span>{stock}</span> unidades</p>
                <ItemCount initial={0} stock={stock} onAdd={handleOnAdd} />
            </div>
        </section>
    )
}

export default ItemDetail