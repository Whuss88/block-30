import { useNavigate } from "react-router-dom"

const Details = ({selectedBook}) => {
  const Navigate = useNavigate()

  
  return (
    <>
      <section>
        <h1>Details of {selectedBook.title}</h1>
        <p>Id: {selectedBook.id}</p>
        <p>Author: {selectedBook.author}</p>
        <p>description: {selectedBook.description}</p>
        {selectedBook.available ? <p>Available: In stock</p> : <p>Available: Out of Stock</p> } 
        <img src={selectedBook.coverimage}
        height={300}
        width={200}/>

        <button onClick={() => Navigate('/')}>home</button>  


      </section>
    
    </>
  )
}
 
export default Details