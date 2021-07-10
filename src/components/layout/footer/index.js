import React from "react";
import {Link} from "react-router-dom";
import Logo from "../../../assets/images/svg/logo-colored.svg";

const Column = ({title, links = [], isTargetLink = false, className}) => {
  return (
    <div className={`mb-10 relative w-3/6 md:w-auto ${className}`}>
      <h3 className="text-base md:text-base mb-5 font-medium text-primary">{title}</h3>

      <ul className="space-y-5 text-temp-gray text-sm md:text-sm-15">
        {links.map((link) => (
          <li key={link.id} className="hover:text-temp-primary">
            {isTargetLink ? (
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.linkName}
              </a>
            ) : link.id === "k2" ? (
              <a href="/" target="_blank" rel="noopener noreferrer">
                {link.linkName}
              </a>
            ) : (
              <Link to={link.url}>{link.linkName}</Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

const RightReservedAndSocialLink = () => {
  return (
    <div className="relative flex flex-wrap justify-between py-6 w-full text-sm ">
      <div className="pb-6 md:pb-0 w-full md:w-auto ">
        &copy;{new Date().getFullYear()} Routelift. All right reserved.
      </div>
      <div className="inline-flex flex-wrap w-4/12 md:w-3/12 lg:w-3/12 xl:w-2/12 justify-between md:justify-evenly">
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <svg
            width="19"
            height="16"
            viewBox="0 0 19 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.9"
              d="M16.2603 3.96297C16.2718 4.13192 16.2718 4.3009 16.2718 4.46984C16.2718 9.62288 12.5345 15.5604 5.70376 15.5604C3.59934 15.5604 1.64444 14.9207 0 13.8105C0.298998 13.8467 0.586457 13.8588 0.896959 13.8588C2.63336 13.8588 4.23181 13.2433 5.50826 12.1934C3.87533 12.1572 2.50688 11.0349 2.0354 9.49015C2.2654 9.52633 2.49538 9.55048 2.73689 9.55048C3.07037 9.55048 3.40388 9.50218 3.71434 9.41775C2.01242 9.05568 0.735938 7.48685 0.735938 5.59217V5.54391C1.2304 5.83355 1.80542 6.01456 2.41485 6.03867C1.41439 5.33871 0.758946 4.14399 0.758946 2.79236C0.758946 2.06829 0.942904 1.40455 1.26491 0.825278C3.09334 3.19061 5.84174 4.7353 8.92357 4.90428C8.86609 4.61464 8.83158 4.31297 8.83158 4.01126C8.83158 1.86313 10.4875 0.113281 12.5459 0.113281C13.6154 0.113281 14.5813 0.583934 15.2598 1.34422C16.0992 1.17528 16.9042 0.849423 17.6172 0.402916C17.3412 1.30804 16.7547 2.06833 15.9843 2.55102C16.7318 2.46658 17.4562 2.24931 18.1232 1.94764C17.6173 2.71996 16.9848 3.40781 16.2603 3.96297Z"
              fill="#540072"
            />
          </svg>
        </a>
        <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
          <svg
            width="19"
            height="20"
            viewBox="0 0 19 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.9"
              d="M18.5337 1.04868V17.9676C18.5337 18.5492 18.0847 19.0163 17.5345 19.0163H12.9147V11.6543H15.2691L15.621 8.78425H12.9107V6.95013C12.9107 6.11798 13.1291 5.55331 14.2658 5.55331H15.7141V2.98469C15.4633 2.95073 14.6057 2.87006 13.6024 2.87006C11.515 2.87006 10.083 4.20744 10.083 6.66567V8.78425H7.72047V11.6543H10.083V19.0205H1.40972C0.859556 19.0205 0.410522 18.5492 0.410522 17.9718V1.04868C0.410522 0.471267 0.859556 0 1.40972 0H17.5304C18.0847 0 18.5337 0.471267 18.5337 1.04868Z"
              fill="#540072"
            />
          </svg>
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <svg
            width="19"
            height="20"
            viewBox="0 0 19 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.9"
              d="M9.87794 4.63247C7.30653 4.63247 5.23242 6.80921 5.23242 9.50786C5.23242 12.2065 7.30653 14.3832 9.87794 14.3832C12.4493 14.3832 14.5235 12.2065 14.5235 9.50786C14.5235 6.80921 12.4493 4.63247 9.87794 4.63247ZM9.87794 12.6775C8.21623 12.6775 6.85775 11.256 6.85775 9.50786C6.85775 7.75968 8.21218 6.33822 9.87794 6.33822C11.5437 6.33822 12.8981 7.75968 12.8981 9.50786C12.8981 11.256 11.5396 12.6775 9.87794 12.6775ZM15.797 4.43304C15.797 5.06527 15.3119 5.57021 14.7135 5.57021C14.1111 5.57021 13.6299 5.06103 13.6299 4.43304C13.6299 3.80505 14.1151 3.29587 14.7135 3.29587C15.3119 3.29587 15.797 3.80505 15.797 4.43304ZM18.8738 5.58718C18.8051 4.06389 18.4736 2.71456 17.4102 1.60285C16.3509 0.491146 15.0652 0.143207 13.6138 0.0668297C12.1178 -0.0222766 7.63402 -0.0222766 6.13808 0.0668297C4.69065 0.138963 3.40494 0.486902 2.34161 1.59861C1.27828 2.71032 0.950785 4.05964 0.87801 5.58294C0.793105 7.1529 0.793105 11.8586 0.87801 13.4285C0.946742 14.9518 1.27828 16.3012 2.34161 17.4129C3.40494 18.5246 4.6866 18.8725 6.13808 18.9489C7.63402 19.038 12.1178 19.038 13.6138 18.9489C15.0652 18.8768 16.3509 18.5288 17.4102 17.4129C18.4695 16.3012 18.801 14.9518 18.8738 13.4285C18.9587 11.8586 18.9587 7.15715 18.8738 5.58718ZM16.9412 15.1131C16.6259 15.9447 16.0154 16.5854 15.2189 16.9207C14.0262 17.4171 11.196 17.3025 9.87794 17.3025C8.55989 17.3025 5.72568 17.4129 4.53701 16.9207C3.74456 16.5897 3.13406 15.949 2.81465 15.1131C2.34161 13.8613 2.45077 10.8911 2.45077 9.50786C2.45077 8.12459 2.34565 5.15013 2.81465 3.90265C3.13001 3.07099 3.74052 2.43027 4.53701 2.09506C5.72972 1.59861 8.55989 1.71318 9.87794 1.71318C11.196 1.71318 14.0302 1.60285 15.2189 2.09506C16.0113 2.42603 16.6218 3.06674 16.9412 3.90265C17.4143 5.15438 17.3051 8.12459 17.3051 9.50786C17.3051 10.8911 17.4143 13.8656 16.9412 15.1131Z"
              fill="#540072"
            />
          </svg>
        </a>

        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
          <svg
            width="17"
            height="18"
            viewBox="0 0 17 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.8582 0.780762C15.3499 0.780762 15.8214 0.976078 16.1691 1.32374C16.5167 1.67141 16.712 2.14294 16.712 2.63462V15.6116C16.712 16.1033 16.5167 16.5748 16.1691 16.9225C15.8214 17.2701 15.3499 17.4655 14.8582 17.4655H1.8812C1.38953 17.4655 0.917991 17.2701 0.570325 16.9225C0.22266 16.5748 0.0273438 16.1033 0.0273438 15.6116V2.63462C0.0273438 2.14294 0.22266 1.67141 0.570325 1.32374C0.917991 0.976078 1.38953 0.780762 1.8812 0.780762H14.8582ZM14.3947 15.1481V10.2354C14.3947 9.434 14.0764 8.66539 13.5097 8.0987C12.943 7.532 12.1744 7.21364 11.3729 7.21364C10.585 7.21364 9.66739 7.69564 9.22247 8.41864V7.38976H6.63634V15.1481H9.22247V10.5784C9.22247 9.86465 9.79716 9.28069 10.5109 9.28069C10.8551 9.28069 11.1851 9.41741 11.4285 9.66077C11.6719 9.90414 11.8086 10.2342 11.8086 10.5784V15.1481H14.3947ZM3.62382 5.93448C4.03683 5.93448 4.43292 5.77041 4.72496 5.47837C5.017 5.18634 5.18106 4.79025 5.18106 4.37724C5.18106 3.5152 4.48587 2.81073 3.62382 2.81073C3.20836 2.81073 2.80991 2.97578 2.51613 3.26955C2.22236 3.56333 2.05732 3.96178 2.05732 4.37724C2.05732 5.23928 2.76178 5.93448 3.62382 5.93448ZM4.91225 15.1481V7.38976H2.34466V15.1481H4.91225Z"
              fill="#540072"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

const Footer = (props) => {
  const columnData1 = [
    {
      id: "j1",
      url: "/route-lift",
      linkName: "RouteLift",
    },

    {
      id: "j2",
      url: "/route-lift-drive-app",
      linkName: "RouteLift Driver App",
    },
  ];

  const columnData2 = [
    {
      id: "k1",
      url: "/about",
      linkName: "About Us",
    },
    {
      id: "k2",
      url: "/blog",
      linkName: "Blog",
    },
    {
      id: "k3",
      url: "/faqs",
      linkName: "FAQs",
    },
  ];

  const columnData3 = [
    {
      id: "l1",
      url: "mailto:info@routelift.com",
      linkName: "info@routelift.com",
    },
    {
      id: "l2",
      url: "tel:+234 703 821 3457",
      linkName: "+234 703 821 3457",
    },
  ];

  return (
    <div className={!props.hasMainContainer && "container mx-auto px-4"}>
      <footer className="pb-8">
        <div className="py-8 flex flex-wrap justify-between space-y-6 lg:pr-9 border-t border-b">
          <div className="w-full lg:w-5/12 mt-5">
            <div className="mb-7">
              <Link to={"/"}>
                <img src={Logo} className="w-56 xl:w-72" alt="Logo" />
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-7/12 flex flex-wrap justify-start sm:justify-between lg:justify-around flex-grow">
            <Column title="PRODUCT" links={columnData1} className=" order-2 lg:order-1" />

            <Column title="COMPANY" links={columnData2} className=" order-3 lg:order-2" />

            <Column
              title="CONTACT"
              links={columnData3}
              isTargetLink={true}
              className=" order-1 lg:order-3"
            />
          </div>
        </div>

        <RightReservedAndSocialLink />
      </footer>
    </div>
  );
};

export default Footer;
