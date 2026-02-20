const Header = () => {
  return (
    <section dir="rtl" className="mb-14 flex px-6 text-white">
      <div className="max-w-5xl mx-auto text-center">
        <div
          className="fade-in-section visible lg:mt-4"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-sm font-medium mb-8">
            {" "}
            ✨ استودیو خدمات مارکتینگ و رشد برند {" "}
          </span>
        </div>
        <h1
          id="heroHeadline"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 fade-in-section visible"
          style={{ animationDelay: "0.2s" }}
        >
          {" "}
         آژانس توسعه کسب و کار <span className="text-gradient">
            کیو {" "}
          </span>{" "}
           <span className="text-gradient"> وب </span> 
        </h1>
        <p
          id="heroSubheadline"
          className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 fade-in-section visible"
          style={{ animationDelay: "0.3s" }}
        >
         ارائه خدمات طراحی وبسایت، اپلیکیشن، هویت برند و تولید محتوا
        </p>
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 fade-in-section visible"
          style={{ animationDelay: "0.4s" }}
        >
          <button
            id=""
            className="btn-glow rounded-full py-4 px-10 cursor-pointer"
          >
            شروع پروژه
          </button>{" "}
        </div>
        {/* <div className="mt-20 scroll-indicator fade-in-section visible" style={{animationDelay: "0.5s"}}">
       <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(139, 92, 246, 0.6)" stroke-width="2" className="mx-auto"><path d="M12 5v14M19 12l-7 7-7-7" />
       </svg>
      </div> */}
      </div>
    </section>
  );
}
 
export default Header;