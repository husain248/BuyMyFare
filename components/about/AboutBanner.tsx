export default function AboutBanner() {
  return (
    <div className="2xxl:min-h-162.5 lg:min-h-125 sm:min-h-100 min-h-75 text-center relative bg-no-repeat bg-center bg-cover before:absolute before:inset-0 before:bg-black/20" style={{ backgroundImage: "url('/assets/images/banner/bnr1.png')" }}>
        <div className="container relative z-1 table h-full">
            <div className="text-center py-15 table-cell align-middle 2xxl:h-162.5 lg:h-125 sm:h-100 h-75">
                <h1 className="2xxl:text-11xxl xl:text-10xl sm:text-8xl text-5xl mb-2.5 text-white">About Us</h1>
            </div>
        </div>
    </div>
  );
}
