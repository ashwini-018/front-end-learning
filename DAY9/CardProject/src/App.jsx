import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">
          My Site
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>


      {/* <div className="card" style={{width: "18rem"}}>
        <img src="Cats.jpg" className="card-img-top" alt="A cat"/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>

      <div className="card" style={{width: "18rem"}}>
        <img src="Cats.jpg" className="card-img-top" alt="A cat"/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div> */}

      {/* // Add a container and a row to hold the columns */}
<div className="container text-center">
  <div className="row">
    {/* Column 1 */}
    <div className="col">
      <div className="card" style={{width: "18rem"}}>
        <img src="Cats.jpg" className="card-img-top" alt="A cat"/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
    
    {/* Column 2 */}
    <div className="col">
      <div className="card" style={{width: "18rem"}}>
        <img src="https://tse1.mm.bing.net/th/id/OIP.1T8Vc4hWQ9-k2RvHqR1VjgHaEh?cb=12ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3" className="card-img-top" alt="A cat"/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
          <a href="https://tse1.mm.bing.net/th/id/OIP.1T8Vc4hWQ9-k2RvHqR1VjgHaEh?cb=12ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  </div>
</div><br />

<div className="container text-center">
  <div className="row">
    {/* Column 1 */}
    <div className="col">
      <div className="card" style={{width: "18rem"}}>
        <img src="https://tse1.mm.bing.net/th/id/OIP.EHiWuuzTwh5nscCujaGzJwHaFS?cb=12ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3" className="card-img-top" alt="A cat"/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
    
    {/* Column 2 */}
    <div className="col">
      <div className="card" style={{width: "18rem"}}>
        <img src="https://th.bing.com/th/id/R.df8e8f3413aa4572a8be770d802e5053?rik=V61IXxGEBuZaqw&riu=http%3a%2f%2fimages2.wikia.nocookie.net%2f__cb20130812053539%2fhouseofnight%2fimages%2f8%2f8b%2fCats.jpg&ehk=b1FsWa2NdIyNgmj84FAQwDtwoekUGpqH0rYIpCmJpDY%3d&risl=&pid=ImgRaw&r=0" className="card-img-top" alt="A cat"/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  </div>
</div><br />

<div className="container text-center">
  <div className="row">
    {/* Column 1 */}
    <div className="col">
      <div className="card" style={{width: "18rem"}}>
        <img src="https://www.rd.com/wp-content/uploads/2023/05/GettyImages-1341465008.jpg" className="card-img-top" alt="A cat"/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
    
    {/* Column 2 */}
    <div className="col">
      <div className="card" style={{width: "18rem"}}>
        <img src="https://thvnext.bing.com/th/id/ODL.89391e484d2e1ab476d357043083679a?w=310&h=198&c=7&rs=1&bgcl=ffff14&r=0&o=6&cb=12&pid=AlgoBlockDebug&ucfimg=1" className="card-img-top" alt="A cat"/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default App;