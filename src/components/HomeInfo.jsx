import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='px-8 py-4 mx-5 text-center text-white sm:text-xl sm:leading-snug neo-brutalism-blue'>
        Hi, Kami
        <span className='mx-2 font-semibold text-white'>Adrian, Ni'am, dan Hilmy</span>
        
        <br />
        dan Ini adalah tugas grafika komputer kami
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
          Ingin tahu sejarah <br /> menara eiffel ? 
        </p>

        <Link to='/about' className='neo-brutalism-white neo-btn'>
          Pelajari
          <img src={arrow} alt='arrow' className='object-contain w-4 h-4' />
        </Link>
      </div>
    );
  }


  if (currentStage === 3) {
    return (
      <div className='info-box'>
      <p className='font-medium text-center sm:text-xl'>
        Perlu komunikasi? <br/> <br />
      </p>

      <Link to='/contact' className='neo-brutalism-white neo-btn'>
        Mari bicara
        <img src={arrow} alt='arrow' className='object-contain w-4 h-4' />
      </Link>
    </div>
    );
  }

  return null;
};

export default HomeInfo;
