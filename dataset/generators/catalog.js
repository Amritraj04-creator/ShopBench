const CATEGORIES = [
    {
        code: "CAT001",
        name: "Electronics",
        description:
            "Electronic devices, components and accessories.",
        image_path: "categories/electronics.jpg",

        productTypes: [
            "Mobile Phones",
            "Laptops",
            "Tablets",
            "Desktop Computers",
            "Monitors",
            "Keyboards",
            "Mice",
            "Headphones",
            "Earbuds",
            "Speakers",
            "Chargers",
            "Power Banks",
            "USB Cables",
            "Webcams",
            "Smartwatches",
            "Routers",
            "External SSDs",
            "External Hard Drives",
            "RAM Modules",
            "Graphics Cards"
        ]
    },

    {
        code: "CAT002",
        name: "Clothing",
        description:
            "Clothing and apparel for everyday and seasonal use.",
        image_path: "categories/clothing.jpg",

        productTypes: [
            "T-Shirts",
            "Shirts",
            "Jeans",
            "Trousers",
            "Shorts",
            "Jackets",
            "Hoodies",
            "Sweaters",
            "Dresses",
            "Skirts",
            "Sarees",
            "Kurtas",
            "Leggings",
            "Track Pants",
            "Sportswear",
            "Blazers",
            "Coats",
            "Socks",
            "Innerwear",
            "Sleepwear"
        ]
    },

    {
        code: "CAT003",
        name: "Home & Kitchen",
        description:
            "Kitchenware, home essentials and household products.",
        image_path: "categories/home-kitchen.jpg",

        productTypes: [
            "Cookware Sets",
            "Frying Pans",
            "Pressure Cookers",
            "Kitchen Knives",
            "Cutting Boards",
            "Dinner Sets",
            "Mugs",
            "Water Bottles",
            "Storage Containers",
            "Food Storage Jars",
            "Electric Kettles",
            "Toasters",
            "Mixer Grinders",
            "Coffee Makers",
            "Lunch Boxes",
            "Kitchen Organizers",
            "Bedsheets",
            "Pillows",
            "Blankets",
            "Curtains"
        ]
    },

    {
        code: "CAT004",
        name: "Beauty & Personal Care",
        description:
            "Personal care, skincare, haircare and grooming products.",
        image_path: "categories/beauty-personal-care.jpg",

        productTypes: [
            "Face Wash",
            "Moisturizers",
            "Face Creams",
            "Sunscreens",
            "Face Serums",
            "Shampoos",
            "Conditioners",
            "Hair Oils",
            "Hair Dryers",
            "Hair Straighteners",
            "Hair Trimmers",
            "Electric Shavers",
            "Body Wash",
            "Hand Wash",
            "Perfumes",
            "Deodorants",
            "Lip Balms",
            "Makeup Kits",
            "Nail Care Kits",
            "Skincare Kits"
        ]
    },

    {
        code: "CAT005",
        name: "Sports & Fitness",
        description:
            "Sports equipment, fitness gear and outdoor activity products.",
        image_path: "categories/sports-fitness.jpg",

        productTypes: [
            "Running Shoes",
            "Sports Shoes",
            "Footballs",
            "Basketballs",
            "Cricket Bats",
            "Cricket Balls",
            "Badminton Rackets",
            "Tennis Rackets",
            "Table Tennis Bats",
            "Yoga Mats",
            "Dumbbells",
            "Kettlebells",
            "Resistance Bands",
            "Exercise Benches",
            "Skipping Ropes",
            "Gym Gloves",
            "Sports Bags",
            "Sports Bottles",
            "Fitness Trackers",
            "Cycling Helmets"
        ]
    },

    {
        code: "CAT006",
        name: "Books & Stationery",
        description:
            "Books, writing materials, school supplies and art products.",
        image_path: "categories/books-stationery.jpg",

        productTypes: [
            "Fiction Books",
            "Non-Fiction Books",
            "Academic Books",
            "Programming Books",
            "Business Books",
            "Children's Books",
            "Notebooks",
            "Journals",
            "Diaries",
            "Sketchbooks",
            "Drawing Books",
            "Ball Pens",
            "Gel Pens",
            "Pencils",
            "Markers",
            "Highlighters",
            "Pencil Cases",
            "School Backpacks",
            "File Folders",
            "Art Supplies"
        ]
    },

    {
        code: "CAT007",
        name: "Toys & Games",
        description:
            "Toys, games and recreational products for children and families.",
        image_path: "categories/toys-games.jpg",

        productTypes: [
            "Building Blocks",
            "Toy Cars",
            "Toy Trucks",
            "Dolls",
            "Action Figures",
            "Board Games",
            "Card Games",
            "Puzzles",
            "Remote Control Cars",
            "Toy Robots",
            "Educational Toys",
            "Musical Toys",
            "Stuffed Toys",
            "Toy Kitchens",
            "Toy Blasters",
            "Science Kits",
            "Craft Kits",
            "Outdoor Toys",
            "Strategy Games",
            "Electronic Games"
        ]
    },

    {
        code: "CAT008",
        name: "Grocery",
        description:
            "Packaged foods, cooking essentials and everyday grocery products.",
        image_path: "categories/grocery.jpg",

        productTypes: [
            "Rice",
            "Wheat Flour",
            "Pulses",
            "Cooking Oil",
            "Spices",
            "Salt",
            "Sugar",
            "Tea",
            "Coffee",
            "Breakfast Cereals",
            "Biscuits",
            "Snacks",
            "Noodles",
            "Pasta",
            "Sauces",
            "Pickles",
            "Dry Fruits",
            "Packaged Juices",
            "Chocolates",
            "Baking Ingredients"
        ]
    },

    {
        code: "CAT009",
        name: "Automotive",
        description:
            "Automotive maintenance products, accessories and equipment.",
        image_path: "categories/automotive.jpg",

        productTypes: [
            "Car Batteries",
            "Car Chargers",
            "Engine Oils",
            "Air Filters",
            "Oil Filters",
            "Car Floor Mats",
            "Seat Covers",
            "Car Covers",
            "Windshield Wipers",
            "Car Cleaning Kits",
            "Tyre Inflators",
            "Tyre Repair Kits",
            "Car Vacuum Cleaners",
            "Dashboard Cameras",
            "Parking Sensors",
            "LED Headlights",
            "Motorcycle Helmets",
            "Motorcycle Covers",
            "Motorcycle Accessories",
            "Car Accessories"
        ]
    },

    {
        code: "CAT010",
        name: "Accessories",
        description:
            "Personal accessories, travel products and everyday carry items.",
        image_path: "categories/accessories.jpg",

        productTypes: [
            "Backpacks",
            "Wallets",
            "Belts",
            "Sunglasses",
            "Traditional Watches",
            "Caps",
            "Hats",
            "Handbags",
            "Travel Bags",
            "Luggage",
            "Keychains",
            "Umbrellas",
            "Phone Cases",
            "Laptop Sleeves",
            "Card Holders",
            "Travel Organizers",
            "Passport Covers",
            "Jewelry Boxes",
            "Hair Accessories",
            "Fashion Accessories"
        ]
    }
];

const BRAND_ASSIGNMENT_CONFIG = {
    small: {
        brandCount: 10,
        brandsPerCategory: 4
    },

    medium: {
        brandCount: 50,
        brandsPerCategory: 8
    },

    large: {
        brandCount: 100,
        brandsPerCategory: 12
    }
};

function getBrandCodesForCategory(
    categoryIndex,
    datasetName
) {
    const config =
        BRAND_ASSIGNMENT_CONFIG[datasetName];

    if (!config) {
        throw new Error(
            `Unknown dataset: ${datasetName}`
        );
    }

    const {
        brandCount,
        brandsPerCategory
    } = config;

    const brandCodes = [];

    for (
        let offset = 0;
        offset < brandsPerCategory;
        offset++
    ) {
        const brandIndex =
            (
                categoryIndex * 2 +
                offset
            ) % brandCount;

        const brandNumber =
            brandIndex + 1;

        brandCodes.push(
            `B${String(brandNumber).padStart(3, "0")}`
        );
    }

    return brandCodes;
}

const SUPPLIER_ASSIGNMENT_CONFIG = {
    small: {
        supplierCount: 10,
        suppliersPerCategory: 4
    },

    medium: {
        supplierCount: 50,
        suppliersPerCategory: 8
    },

    large: {
        supplierCount: 100,
        suppliersPerCategory: 12
    }
};

function getSupplierCodesForCategory(
    categoryIndex,
    datasetName
) {
    const config =
        SUPPLIER_ASSIGNMENT_CONFIG[datasetName];

    if (!config) {
        throw new Error(
            `Unknown dataset: ${datasetName}`
        );
    }

    const {
        supplierCount,
        suppliersPerCategory
    } = config;

    const supplierCodes = [];

    for (
        let offset = 0;
        offset < suppliersPerCategory;
        offset++
    ) {
        const supplierIndex =
            (
                categoryIndex * 3 +
                offset
            ) % supplierCount;

        const supplierNumber =
            supplierIndex + 1;

        supplierCodes.push(
            `S${String(supplierNumber).padStart(3, "0")}`
        );
    }

    return supplierCodes;
}

module.exports = {
    CATEGORIES,
    BRAND_ASSIGNMENT_CONFIG,
    getBrandCodesForCategory,
    SUPPLIER_ASSIGNMENT_CONFIG,
    getSupplierCodesForCategory
};