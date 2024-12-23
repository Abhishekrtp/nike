import { star } from "../assets/icons"


 const ReviewCard = ({imgURL, customerName, rating, feedback}) => {
  return (
    <div className="flex jusjufy-center items-center flex-col">

      <img
       src={imgURL} 
       alt="customer"
        className="w-[120px]
         h-[120px] rounded-full object-cover"
      />
      <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
      <div className="mt-3 justify-center items-center gap-2.5 flex">
        <img 
          src={star}
          width={24}
          height={24}
          className="object-contain m-0"
        
        />
        <p className="font-montserrat text-xl  text-slate-gray">
          {rating}
        </p>
      </div>
      <h3 className="mt-1 font-palanquin text-3xl text-center  font-bold">{customerName}</h3>

    </div>
  )
}

export default ReviewCard