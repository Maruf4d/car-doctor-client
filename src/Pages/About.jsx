import photo from '../assets/Images/Rectangle 4.png'
import photo1 from '../assets/Images/Rectangle 5.png'


const About = () => {
  return (
    <div className="flex mt-24">
      <div className="w-[50%]">
    <img src={photo} />
    <img className='absolute left-64 top-[950px] z-50' src={photo1} />
      </div>
      <div className="w-[50%]">
       <div className='w-[80%] my-20 mx-14'>
       <h1 className='text-orange-500 font-bold'>About us</h1>
        <h1 className='font-bold text-4xl mt-5'>We are qualified & of experience in this field</h1><br />
        <p className='text-gray-400'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p><br />
        <p className='text-gray-400'>
        the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. 
        </p>
        <button className="btn btn-error mt-10 text-white text-xl">Get More Info</button>
       </div>
      </div>
    </div>
  );
};

export default About;
