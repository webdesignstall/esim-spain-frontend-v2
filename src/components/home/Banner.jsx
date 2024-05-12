import React from "react";

const Banner = () => {
  return (
    <div>
      <button>For One eSim</button>
      <h1>Working Seamlessly Across Many Type of Devices</h1>
      <div>
        <select name="country" id="">
          <option value="">Bangladesh</option>
          <option value="">India</option>
          <option value="">Pakistan</option>
        </select>
        <div>
          <input
            type="text"
            placeholder="Where do you need data for?"
            name=""
            id=""
          />
          <button>Search Now</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
