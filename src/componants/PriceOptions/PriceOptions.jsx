import PriceOption from "./PriceOption";

const PriceOptions = () => {
    const priceOptions = [
        {
            id: 1,
            name: "Basic Membership",
            price: 29.99,
            description:
                "Access to gym facilities and equipment during off-peak hours.",
            picture: "https://i.ibb.co.com/ZW6qnDf/download.jpg",
            features: [
                "Access to cardio and weight training equipment",
                "Free initial fitness assessment",
                "Limited access to group classes",
            ],
        },
        {
            id: 2,
            name: "Standard Membership",
            price: 49.99,
            description:
                "Access to gym facilities, group classes, and personal training discounts.",
            picture: "https://i.ibb.co.com/ZW6qnDf/download.jpg",
            features: [
                "Access to all gym facilities",
                "Unlimited group classes",
                "10% discount on personal training sessions",
                "Access to locker rooms and showers",
            ],
        },
        {
            id: 3,
            name: "Premium Membership",
            price: 69.99,
            description:
                "Unlimited access to gym facilities, all classes, and one free personal training session per month.",
            picture: "https://i.ibb.co.com/ZW6qnDf/download.jpg",
            features: [
                "Unlimited access to all facilities and classes",
                "One free personal training session per month",
                "Free nutrition consultation",
                "Access to premium facilities (steam room, sauna)",
            ],
        },
        {
            id: 4,
            name: "Family Membership",
            price: 99.99,
            description:
                "Membership for up to 4 family members with all premium benefits.",
            picture: "https://i.ibb.co.com/ZW6qnDf/download.jpg",
            features: [
                "All benefits of Premium Membership for up to 4 family members",
                "Family fitness events and activities",
                "Childcare services during classes",
                "Priority booking for classes",
            ],
        },
        {
            id: 5,
            name: "Student Membership",
            price: 19.99,
            description:
                "Discounted rate for students with valid ID, access to all facilities.",
            picture: "https://i.ibb.co.com/ZW6qnDf/download.jpg",
            features: [
                "Full access to gym facilities",
                "Access to group classes",
                "Free fitness workshops",
                "Flexible payment options",
            ],
        },
    ];

    return (
        <div>
            <h2 className="text-5xl my-4 font-bold">Best Price In The Town</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-2">
                {priceOptions.map((option) => (
                    <PriceOption key={option.id} option={option}></PriceOption>
                ))}
            </div>
        </div>
    );
};

export default PriceOptions;
