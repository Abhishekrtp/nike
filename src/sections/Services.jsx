import {services} from "../components/index"

import ServicesCard from "../components/ServicesCard"

 const Services = () => {
  return (
    <section className="max-container flex justify-center gap-9 flex-wrap">
      {services.map((service) => (
        <ServicesCard key={service.label} {...service} />
      ))}


    </section>
  )
}

export default Services