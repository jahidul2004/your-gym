import PropTypes from "prop-types";

const PriceOption = ({ option }) => {
    return (
        <div className="border border-success p-4 rounded-lg flex flex-col justify-between">
            <div className="mb-3">
                <img
                    className="w-full rounded-lg"
                    src={option.picture}
                    alt=""
                />
            </div>
            <div>
                <h1 className="text-4xl font-bold my-2">{option.name}</h1>
                <p>{option.description}</p>
                <ul className="list-disc list-inside marker:text-green">
                    {option.features.map((feature) => (
                        <li>{feature}</li>
                    ))}
                </ul>
                <button className="btn btn-success text-white w-full mt-4">
                    Buy for {option.price}$/mon
                </button>
            </div>
        </div>
    );
};

PriceOption.PropTypes = {
    option: PropTypes.object.isRequired,
};

export default PriceOption;
