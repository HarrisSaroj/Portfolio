import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = formData;

  // Handle input fields, when some value changes
  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
 
  const clickHandler = async (e, req, res) => {
    if(e){
      e.preventDefault();
    }
    console.log(formData);
    let result = await fetch("http://localhost:4000/register/", {
      method: "post",
      body: JSON.stringify({ name, email, message }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    if (!name || !email || !message) {
      toast.error("All fields are reqired");
    } else {
      toast.success("Thankyou for your Response");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  useEffect(() => {
    clickHandler();
  }, []);

  return (
    <div className="w-full h-full flex justify-center items-center mx-auto">
      
      {/* <div className="text-lg capitalize font-Vietnam text-[#597a59] px-2 pt-2 text-center md:text-3xl">
        Questions, Thoughts, Or Just Want To Say hello?
      </div> */}
      <div className="flex gap-36">
        <div className="lg:w-[450px] md:w-[400px ] w-[350px]">
          <form action="" className="">
            <label>
              <input
                required
                type="text"
                name="name"
                value={name}
                onChange={handleOnChange}
                placeholder="Your Name"
                // style={{
                //   boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                // }}
                className="w-full outline-none border-b-[1px] bg-black p-[12px] text-pure-greys-50"
              />
            </label>
            <label>
              <input
                required
                type="email"
                name="email"
                value={email}
                onChange={handleOnChange}
                placeholder="Enter Email"
                className="w-full mt-10 outline-none  p-[12px] border-b-[1px] bg-black text-pure-greys-50"
              />
            </label>
            <label>
              <textarea
                required
                rows="2"
                cols="17"
                type="text"
                name="message"
                value={message}
                onChange={handleOnChange}
                placeholder="Share your thoughts"
                // style={{
                //   boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                // }}
                className="w-full outline-none border-b-[1px] mt-10  bg-black p-[12px] text-pure-greys-50"
              />
            </label>
            <button
              type="submit"
              onClick={clickHandler}
              className="p-2 border-[2px] shadow-2xl border-[#f34af9] mt-10  cursor-pointer border-r-0 border-t-0"
            >
              Submit
            </button>
          </form>
        </div>
        {/* <div className="relative mx-auto">
          <div className="absolute -z-10 h-[450px] w-[300px]">
            <img src={eclipse} height={400} width={300} alt="eclipse"/>
          </div>
          <div className="text-7xl ml-20">Contact</div>
          <div className="text-6xl ml-60">Us</div>
        </div> */}
      </div>
    </div>
  );
};

export default Contact;
