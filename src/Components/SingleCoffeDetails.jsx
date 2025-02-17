import { IoIosEye } from "react-icons/io";
import { MdDelete, MdEdit } from "react-icons/md";

const SingleCoffeDetails = ({ coffee }) => {
    const { name, chef, taste, photo } = coffee;
    console.log(photo);

    return (
        <section className="">
            <div className="flex justify-around gap-5 my-5 bg-[#F5F4F1]  items-center h-[200px] rounded-xl shadow-lg">
                {/* Image Section */}
                <div className=" h-[200px] flex justify-center items-center">
                    <img src={photo} alt="Coffee" className="h-2/3" />
                </div>

                {/* Details Section */}
                <div className="list-none text-sm  font-semibold flex flex-col items-center justify-center">
                    <li>Name: {name}</li>
                    <li>Chef: {chef}</li>
                    <li>Taste: {taste}</li>
                </div>

                {/* Buttons Section */}
                <div className="flex justify-center">
                    <div className="join join-vertical gap-1">
                        <button className="btn join-item"><IoIosEye className="text-2xl" /></button>
                        <button className="btn join-item"><MdEdit className="text-2xl" /></button>
                        <button className="btn join-item"><MdDelete className="text-2xl" /></button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SingleCoffeDetails;
