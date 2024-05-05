const fetchOrders = () => {
    return [
        {
            id: 1,
            restaurant: "Kebab & Curry",
            address: "Sector 43, Gurgaon",
            items: [
                { name: "Paneer Kebab", price: "405", quantity: 1 },
                { name: "Chicken Tikka Kebab", price: "445", quantity: 1 }
            ],
            total: "₹850",
            paymentStatus: 'PAID', // or 'UNPAID'
            readyTime: "12.24",
            deliveryPartner: {
                name: "Raghav",
                eta: "8 mins",
                image: "/path-to-raghav-image.jpg"
            }
        },
        {
            id: 2,
            restaurant: "Kebab & Curry 2",
            address: "Sector 43, Gurgaon",
            items: [
                { name: "Paneer Kebab", price: "405", quantity: 1 },
                { name: "Chicken Tikka Kebab", price: "445", quantity: 1 }
            ],
            total: "₹850",
            paymentStatus: 'PAID', // or 'UNPAID'
            readyTime: "12.24",
            deliveryPartner: {
                name: "Raghav",
                eta: "8 mins",
                image: "/path-to-raghav-image.jpg"
            }
        },
        {
            id: 3,
            restaurant: "Kebab & Curry 3",
            address: "Sector 43, Gurgaon",
            items: [
                { name: "Paneer Kebab", price: "405", quantity: 1 },
                { name: "Chicken Tikka Kebab", price: "445", quantity: 1 }
            ],
            total: "₹850",
            paymentStatus: 'PAID', // or 'UNPAID'
            readyTime: "12.24",
            deliveryPartner: {
                name: "Raghav",
                eta: "8 mins",
                image: "/path-to-raghav-image.jpg"
            }
        },
        // Additional orders can be added here
    ];
}

export default fetchOrders