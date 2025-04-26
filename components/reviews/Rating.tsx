import { FaRegStar, FaStar } from "react-icons/fa"

function Rating({rating}:{rating:number}) {
  const stars = Array.from({length:5},(_,i)=> i+1<=rating)
  return (
    <div className="flex items-center gap-1">
    {stars.map((isFilled,i)=>{
      const classname = `w-3 h-3 ${isFilled?'text-primary' : 'text-gray-400'}`
      return isFilled?
        <FaStar className={classname} key={i}/>
      :
        <FaRegStar className={classname} key = {i}/>
      
    })}
    </div>
  )
}
export default Rating