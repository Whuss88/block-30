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
        <p>Availability: {selectedBook.available}</p> {/* change to true or false statement for yes or no  */}
        <img src={selectedBook.coverimage}
        height={300}
        width={200}/>

        <button onClick={() => Navigate('/')}>home</button>  


      </section>
    
    </>
  )
}
 
export default Details