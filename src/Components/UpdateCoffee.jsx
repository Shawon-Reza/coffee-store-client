import { useEffect } from "react";
import { Link, useLoaderData, useNavigate, useNavigation } from "react-router-dom";
import Swal from "sweetalert2";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  // Make sure this is included!


const UpdateCoffee = () => {

    const coffee = useLoaderData();
    console.log(coffee);
    // const navigate = useNavigation();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;

        // Get form data
        const newCoffee = {
            name: form.name.value,
            supplier: form.supplier.value,
            category: form.category.value,
            chef: form.chef.value,
            taste: form.taste.value,
            details: form.details.value,
            photo: form.photo.value,
        };

        console.log(coffee);
        console.log(newCoffee);

        fetch(`http://localhost:5000/updatecoffee/${coffee._id}`, {
            method: "PUT",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Updated",
                        text: "You update a coffe item",
                        icon: "success"
                    });
                    navigate('/')
                } else {
                    toast.warning("No changes made to the coffee item", {
                        position: "top-center",
                        autoClose: 3000,  // Auto close after 3 seconds
                    });
                    
                    // alert("FCK")
                }
            })

        // Reset the form
        form.reset();
    };

    return (
        <div>
            <ToastContainer></ToastContainer>
            <section className="p-5">
                {/* Back Button */}
                <Link to={"/"}>
                    <button className="btn mb-3 shadow-2xl">Back</button>
                </Link>


                {/* Form Container */}
                <div className="bg-[#F4F3F0] p-10 rounded-lg shadow-2xl">
                    <div className="text-center">
                        <h1 className="font-bold text-2xl mb-2">Update Coffee Details</h1>
                        <p className="mx-auto text-gray-600 max-w-2xl">
                            It is a long-established fact that a reader will be distracted by the readable content of a page
                            when looking at its layout.
                        </p>
                    </div>

                    {/* Form */}
                    <div className="max-w-[900px] mx-auto shadow-2xl">
                        <form onSubmit={handleSubmit}
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-10">
                                {/* Left Column */}
                                <div className="flex flex-col gap-4 w-full">
                                    <label className="label-text font-semibold">Name</label>
                                    <input type="text" name="name" placeholder="Name" required
                                        defaultValue={coffee.name}
                                        className="input input-bordered input-primary w-full max-w-lg" />

                                    <label className="label-text font-semibold">Supplier</label>
                                    <input type="text" name="supplier" placeholder="Supplier Name"
                                        defaultValue={coffee.supplier}
                                        className="input input-bordered input-primary w-full max-w-lg" />

                                    <label className="label-text font-semibold">Category</label>
                                    <input type="text" name="category" placeholder="Category Name" required
                                        defaultValue={coffee.category}
                                        className="input input-bordered input-primary w-full max-w-lg" />
                                </div>

                                {/* Right Column */}
                                <div className="flex flex-col gap-4 w-full">
                                    <label className="label-text font-semibold">Chef</label>
                                    <input type="text" name="chef" placeholder="Coffee Chef"
                                        defaultValue={coffee.chef}
                                        className="input input-bordered input-primary w-full max-w-lg" />

                                    <label className="label-text font-semibold">Taste</label>
                                    <input type="text" name="taste" placeholder="Coffee Taste"
                                        defaultValue={coffee.taste}
                                        className="input input-bordered input-primary w-full max-w-lg" />

                                    <label className="label-text font-semibold">Details</label>
                                    <input type="text" name="details" placeholder="Coffee Details" required
                                        defaultValue={coffee.details}
                                        className="input input-bordered input-primary w-full max-w-lg" />
                                </div>
                            </div>

                            {/* Photo URL Field */}
                            <div className="p-10 -mt-15">
                                <label className="label-text font-semibold">Photo</label>
                                <input type="text" name="photo" placeholder="Photo URL"
                                    defaultValue={coffee.photo}
                                    className="input input-bordered input-primary w-full max-w-[1100px]" />
                            </div>

                            {/* Submit Button */}
                            <div className="text-center pb-10 ">
                                <button type="submit" className="btn btn-primary w-full max-w-md">
                                    Add Coffee
                                </button>
                            </div>
                        </form>
                    </div>

                </div>


            </section>
        </div>
    );
};

export default UpdateCoffee;