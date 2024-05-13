import testimonialData from "@/constants/testimonialData";
import { FaUser } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div className="max-w-[1320px] w-full mx-auto px-10 pt-20 pb-60 flex flex-col gap-10">
      <div className="flex justify-between items-center">
        <h2 className="text-[45px] lg:w-1/2 text-[#FFFFFF] font-medium  leading-[50px]">
          What Our Customers Have to Say About Piratemobile
        </h2>
        <div className="flex lg:w-1/2 justify-end items-center">
          <button className="bg-[#C09D5E] rounded-full font-medium px-6 py-3 flex gap-2 items-center text-white">
            Read More Reviews
          </button>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {testimonialData.map((item, index) => (
          <div
            className={`flex h-auto gap-4 bg-[#454545] border-[1px] border-[#EAEAEA] rounded-[14px] p-5`}
            key={item.id}
          >
            <div>
              {item?.user?.profileImage ? (
                <img
                  className="w-16 h-16 rounded-full"
                  src={item.user.profileImage}
                  alt={item.user.name}
                />
              ) : (
                <FaUser className="w-11 h-11 text-white rounded-full" />
              )}
            </div>
            <div>
              <div className="mb-2 flex justify-between items-center">
                <div>
                  <h4 className="text-white text-xs">{item.user.name}</h4>
                  <span className="text-gray-400 text-[14px]">
                    {item.user.designation}
                  </span>
                </div>
                <div className="text-white text-xl">{item.user.platform}</div>
              </div>
              <blockquote>
                <div
                  className="text-white text-xs flex flex-col gap-2"
                  dangerouslySetInnerHTML={{ __html: item.review }}
                ></div>
              </blockquote>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
