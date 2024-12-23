import ReviewCard from "../components/ReviewCard"
import { reviews } from "../components"

  const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="text-4xl font-palanquin font-bold text-center">
        What Our
          <span className="text-coral-red"> Customers </span>
        Say?
        
      </h3>
      <p className="info-text mt-4 lg:max-w-lg text-center">Hear genuine stories from our satisfied customers about their exceptional experience with us.</p>

      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">

        {reviews.map((review) => (
          <ReviewCard 
            key={review.customerName}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
          
        ))}

      </div>
     

    </section>
  )
}

export default CustomerReviews