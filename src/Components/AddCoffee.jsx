
const AddCoffee = () => {


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

        console.log(newCoffee);
        console.log(newCoffee.length);


        fetch("http://localhost:5000/addcoffee",
            {
                method: "POST",
                headers: {
                    "content-Type": "application/json"
                },
                body: JSON.stringify(newCoffee)
            }
        )
        .then(res=>res.json())
        .then(data=>console.log(data))

        // Reset the form
        form.reset();
    };

    return (
        <section className="p-5">
            {/* Back Button */}
            <button className="btn mb-3 shadow-2xl">Back</button>

            {/* Form Container */}
            <div className="bg-[#F4F3F0] p-10 rounded-lg shadow-2xl">
                <div className="text-center">
                    <h1 className="font-bold text-2xl mb-2">Add New Coffee</h1>
                    <p className="mx-auto text-gray-600 max-w-2xl">
                        It is a long-established fact that a reader will be distracted by the readable content of a page
                        when looking at its layout.
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-10">
                        {/* Left Column */}
                        <div className="flex flex-col gap-4 w-full">
                            <label className="label-text font-semibold">Name</label>
                            <input type="text" name="name" placeholder="Name" required
                                className="input input-bordered input-primary w-full max-w-lg" />

                            <label className="label-text font-semibold">Supplier</label>
                            <input type="text" name="supplier" placeholder="Supplier Name"
                                className="input input-bordered input-primary w-full max-w-lg" />

                            <label className="label-text font-semibold">Category</label>
                            <input type="text" name="category" placeholder="Category Name" required
                                className="input input-bordered input-primary w-full max-w-lg" />
                        </div>

                        {/* Right Column */}
                        <div className="flex flex-col gap-4 w-full">
                            <label className="label-text font-semibold">Chef</label>
                            <input type="text" name="chef" placeholder="Coffee Chef"
                                className="input input-bordered input-primary w-full max-w-lg" />

                            <label className="label-text font-semibold">Taste</label>
                            <input type="text" name="taste" placeholder="Coffee Taste"
                                className="input input-bordered input-primary w-full max-w-lg" />

                            <label className="label-text font-semibold">Details</label>
                            <input type="text" name="details" placeholder="Coffee Details" required
                                className="input input-bordered input-primary w-full max-w-lg" />
                        </div>
                    </div>

                    {/* Photo URL Field */}
                    <div className="p-10">
                        <label className="label-text font-semibold">Photo</label>
                        <input type="text" name="photo" placeholder="Photo URL"
                            className="input input-bordered input-primary w-full max-w-[1100px]" />
                    </div>

                    {/* Submit Button */}
                    <div className="text-center mt-6">
                        <button type="submit" className="btn btn-primary w-full max-w-md">
                            Add Coffee
                        </button>
                    </div>
                </form>
            </div>


        </section>
    );
};

export default AddCoffee;
