import ItemCount from '../ItemCount/ItemCount';
import './Item.css'

const Item = ({ band, album, cover, stock }) => {

    const handleOnAdd = (quantity) => {
        alert(`Se agregaron ${quantity} productos `)
    }

    return (
        <section>
            <picture>
                <img src={cover} alt={album} />
            </picture>
            <p className='band'>{band}</p>
            <p className='album'>{album}</p>
            <button className='detalles'>Ver detalle</button>
            <ItemCount initial={0} stock={stock} onAdd={handleOnAdd} />
        </section>
    )
}

export default Item