import BannerImage from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <>
      <section className="container p-4 md:p-0 m-auto md:flex text-center md:text-start md:items-center md:justify-between md:gap-10">
        <div className="flex flex-col gap-5">
          <h1 className="md:text-7xl text-4xl font-semibold md:font-extrabold inter-font text-[#030712FF] ;">
            Build Your Idea <br /><span className="brand-text">Development Stack</span>
          </h1>
          <p className="text-[#4b5563FF] text-[14px] md:text-[18px] md:max-w-xl max-w-4xs">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>
          <div className="md:my-5 flex md:">
            <button className="btn btn-neutral border-0 font-semibold bg-brand-color rounded-md md:px-4 md:py-2">Explore Technologies</button>
            <button className="btn btn-outline border-[#6e6b6b55] font-semibold rounded-md md:px-12 md:py-2 mx-5">Learn More</button>
          </div>
        </div>
        <div>
            <img src={BannerImage} alt="" />
        </div>
      </section>
    </>
  );
};

export default Banner;
