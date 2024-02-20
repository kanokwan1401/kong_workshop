import image12 from "../../image/12.png"

const Member = () => {
  return (
    <div className="home">
      <div className="home-content">
        <img src={image12} alt="" width={150} height={150} />
        <h1 style={{ color: 'darkblue' }}>สมัครสมาชิก</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam sapiente quibusdam magni perspiciatis aut minima aperiam officiis, quasi sed, adipisci corrupti autem perferendis! Sequi iure doloremque soluta optio explicabo natus? Dignissimos aliquid consectetur, expedita sint id delectus. Labore harum, tempore distinctio inventore perspiciatis facilis at recusandae omnis duc.</p>
      </div>
      <button>
        สมัครสมาชิก
      </button>
    </div>
  )
}

export default Member