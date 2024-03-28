import image05 from "../../image/05.png"

const Products = () => {
  return (
    <div className="home">
      <div className="home-content">
        <img src={image05} alt="" width={150} height={150} />
        <h1 style={{ color: 'darkblue' }}>สินค้า</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam sapiente quibusdam magni perspiciatis aut minima aperiam officiis, quasi sed, adipisci corrupti autem perferendis! Sequi iure doloremque soluta optio explicabo natus? Dignissimos aliquid consectetur, expedita sint id delectus. Labore harum, tempore distinctio inventore perspiciatis facilis at recusandae omnis duc.</p>
      </div>
      <button>
        ซื้อสินค้า
      </button>
    </div>
  )
}

export default Products