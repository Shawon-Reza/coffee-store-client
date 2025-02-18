import { useEffect, useState } from "react";
import SingleCoffeDetails from "./SingleCoffeDetails";
import { useNavigate } from "react-router-dom";

const Coffeedetails = () => {
    const [coffeeList, setCoffeeList] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/coffeelist")
            .then(res => res.json())
            .then(data => setCoffeeList(data))
    }, [])


    console.log(coffeeList);
    const navigate = useNavigate();
    return (
        <div>
            <div className="text-center py-20 shadow-lg space-y-3">
                <p className="">--- Sip & Savor ---</p>
                <h2 className="text-2xl font-bold">Our Popular Products
                    Our Popular Products</h2>

                <button
                    className="btn bg-[#E3B577]"
                    onClick={() =>navigate("/addcoffee")}
                >Add Coffee</button>
            </div>


            {/* Shows all coffee on display */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 p-5">
                {
                    coffeeList.map(coffee =>
                        <SingleCoffeDetails
                            key={coffee._id}
                            coffee={coffee}
                            coffeeList={coffeeList}
                            setCoffeeList={setCoffeeList}

                        >
                        </SingleCoffeDetails>)
                }
            </div>
        </div>
    );
};

export default Coffeedetails;