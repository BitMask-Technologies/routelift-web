import React, {useEffect} from "react";

const Card = ({title, content}) => {
  return (
    <div className="bg-primary px-8 py-10 rounded-lg flex flex-wrap space-y-6 md:space-y-0 md:space-x-8">
      <div className="w-full md:h-12 md:w-12">
        <div className="bg-white rounded-full h-12 w-12 px-3 py-3 ">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.6667 6.38909C20.695 6.37258 20.7185 6.34894 20.7348 6.32052C20.7511 6.29211 20.7597 6.25991 20.7597 6.22714C20.7597 6.19437 20.7511 6.16218 20.7348 6.13376C20.7185 6.10534 20.695 6.0817 20.6667 6.06519L13.507 1.9055C13.0489 1.63996 12.5288 1.50012 11.9993 1.50012C11.4698 1.50012 10.9496 1.63996 10.4915 1.9055L3.33325 6.06519C3.30495 6.0817 3.28146 6.10534 3.26514 6.13376C3.24882 6.16218 3.24023 6.19437 3.24023 6.22714C3.24023 6.25991 3.24882 6.29211 3.26514 6.32052C3.28146 6.34894 3.30495 6.37258 3.33325 6.38909L11.9057 11.4319C11.9346 11.4489 11.9674 11.4578 12.0009 11.4578C12.0344 11.4578 12.0672 11.4489 12.0961 11.4319L20.6667 6.38909Z"
              fill="#FF9900"
            />
            <path
              d="M2.53125 7.66453C2.50266 7.64802 2.47022 7.63935 2.4372 7.6394C2.40418 7.63946 2.37177 7.64823 2.34323 7.66483C2.31469 7.68143 2.29104 7.70527 2.27467 7.73394C2.2583 7.76262 2.24979 7.7951 2.25 7.82812V15.9792C2.25071 16.372 2.35424 16.7578 2.55029 17.0982C2.74634 17.4385 3.02809 17.7217 3.3675 17.9194L10.9688 22.477C10.9972 22.4935 11.0296 22.5021 11.0625 22.5021C11.0954 22.5022 11.1277 22.4935 11.1562 22.4771C11.1847 22.4606 11.2083 22.437 11.2248 22.4085C11.2413 22.38 11.25 22.3477 11.25 22.3148V12.8578C11.25 12.8249 11.2413 12.7926 11.2248 12.7642C11.2084 12.7357 11.1847 12.7121 11.1563 12.6956L2.53125 7.66453Z"
              fill="#FF9900"
            />
            <path
              d="M12.75 12.8906V22.3125C12.75 22.3453 12.7587 22.3777 12.7752 22.4061C12.7917 22.4346 12.8153 22.4583 12.8438 22.4747C12.8723 22.4911 12.9047 22.4998 12.9375 22.4998C12.9704 22.4998 13.0028 22.4911 13.0312 22.4746L20.632 17.917C20.9712 17.7195 21.2528 17.4368 21.4489 17.0969C21.645 16.7569 21.7488 16.3716 21.75 15.9792V7.82808C21.7499 7.79522 21.7411 7.76297 21.7246 7.73456C21.7081 7.70615 21.6844 7.68257 21.656 7.66619C21.6275 7.64981 21.5952 7.64121 21.5623 7.64124C21.5295 7.64126 21.4972 7.64993 21.4688 7.66636L12.8438 12.7289C12.8153 12.7453 12.7917 12.7688 12.7753 12.7972C12.7588 12.8256 12.7501 12.8578 12.75 12.8906Z"
              fill="#FF9900"
            />
          </svg>
        </div>
      </div>

      <div className="text-white w-full md:w-9/12">
        <p className="font-medium pb-4 text-xl">{title}</p>
        <p className="font-light leading-7">{content}</p>
      </div>
    </div>
  );
};

const Row = ({className}) => {
  return (
    <div className={`section ${className}`}>
      <div className="grid grid-cols-1 lg:grid-cols-2 md:px-4 lg:px-6 gap-6 lg:gap-10">
        <Card
          title="Automate your delivery operations using RouteLift"
          content={`RouteLifft offers your business its route optimization algorithm to 
    help you automate and scale your delivery operations to serve 
    your customers more efficiently and maximize your profits.`}
        />
        <Card
          title="Route Optimization"
          content={`Our route management solution optimizes your routes using 
    real-world factors like vehicle capacities, delivery time 
    windows, priority stops, driver speeds, delivery types, 
    driver breaks, and so much more.`}
        />
      </div>
    </div>
  );
};

const WhyRouteLiftSection = () => {
  useEffect(() => {
    const sections = [...document.querySelectorAll(".section")];

    const options = {
      root: document.querySelector(".why-listing-section"),
      threshold: 1,
      rootMargin: "0px",
    };

    const observer = new IntersectionObserver(function (entries, observer) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });
  }, []);
  return (
    <div className="container mx-auto px-4 main-why-section">
      <div className="relative mb-2 pt-2 pb-4 md:pt-10 md:pb-14">
        <div className="pt-6 pb-14 lg:pb-20 text-center mx-auto w-10/12 md:w-9/12 lg:w-8/12 xl:w-7/12">
          <h3 className="font-semibold text-3xl md:text-4xl lg:text-5xl goodbye-text">
            Why RouteLift ?
          </h3>
        </div>
        <div className="why-listing-section">
          <Row className="section1" />
          <Row className="section2" />
          <Row className="section3" />
          <Row className="section4" />
          <Row className="section5" />
          <Row className="section6" />
        </div>
      </div>
    </div>
  );
};

export default WhyRouteLiftSection;
