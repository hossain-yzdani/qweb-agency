const Header = () => {
  return (
    <div className="lg:flex lg:flex-row">
      <div className="flex flex-col lg:flex-1 gap-4 justify-center lg:justify-start items-center lg:items-start py-20 lg:py-40 lg:px-20">
        <h1 className="text-white text-5xl lg:text-6xl font-bold">
          آژانس کیو وب
        </h1>
        <p className="text-white text-center lg:text-xl">
          ارائه دهنده خدمات وبسایت مارکتینگ و توسعه کسب وکار
        </p>
      </div>
      <div className="lg:flex-1 flex justify-center items-center">
        <img
          className="w-120 hidden lg:block"
          src="logo/qweb-logo.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
 
export default Header;