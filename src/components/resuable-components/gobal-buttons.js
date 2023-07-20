import Link from 'next/link';

function GobalButtons({ bg, link , text, specialClass }) {
  const buttonStyle = {
    backgroundColor: bg,
  };

  return (
    <>
      <Link href={link} style={buttonStyle} className={`bg-opacity-100 ${specialClass} h-[40px] md:flex items-center rounded-md px-4  text-white font-medium text-center transition duration-200 hover:translate-y-[-0.125rem] hover:shadow-lg hover:shadow-blue hover:shadow-outline-purple hover:ring-0 hover:ring-inset hover:ring-transparent hover:ring-offset-transparent hover:rotate-0 hover:skew-x-0 hover:skew-y-0 hover:scale-x-100 hover:scale-y-100`}>
          {text}
      </Link>
    </>
  );
}

export default GobalButtons;