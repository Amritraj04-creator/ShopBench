const PRODUCT_RULES = {
    // ============================================================
    // ELECTRONICS
    // ============================================================

    "Mobile Phones": {
        attributes: {
            storage: ["128GB", "256GB", "512GB"],
            ram: ["4GB", "6GB", "8GB", "12GB"],
            display: ["6.1 inch", "6.4 inch", "6.7 inch"],
            battery: ["4000mAh", "4500mAh", "5000mAh"],
            camera: ["48MP", "50MP", "64MP", "108MP"]
        },
        priceRange: {
            min: 8000,
            max: 120000
        }
    },

    "Laptops": {
        attributes: {
            processor: [
                "Intel Core i3",
                "Intel Core i5",
                "Intel Core i7",
                "AMD Ryzen 5",
                "AMD Ryzen 7"
            ],
            ram: ["8GB", "16GB", "32GB"],
            storage: ["256GB SSD", "512GB SSD", "1TB SSD"],
            display: ["13.3 inch", "14 inch", "15.6 inch", "16 inch"],
            operatingSystem: [
                "Windows",
                "Linux",
                "ChromeOS"
            ]
        },
        priceRange: {
            min: 30000,
            max: 180000
        }
    },

    "Tablets": {
        attributes: {
            storage: ["64GB", "128GB", "256GB", "512GB"],
            ram: ["4GB", "6GB", "8GB", "12GB"],
            display: ["8 inch", "10.1 inch", "11 inch", "12.9 inch"],
            battery: ["5000mAh", "7000mAh", "8000mAh"],
            connectivity: ["WiFi", "WiFi + Cellular"]
        },
        priceRange: {
            min: 10000,
            max: 100000
        }
    },

    "Desktop Computers": {
        attributes: {
            processor: [
                "Intel Core i3",
                "Intel Core i5",
                "Intel Core i7",
                "AMD Ryzen 5",
                "AMD Ryzen 7"
            ],
            ram: ["8GB", "16GB", "32GB", "64GB"],
            storage: ["512GB SSD", "1TB SSD", "2TB SSD"],
            graphics: [
                "Integrated Graphics",
                "4GB Dedicated",
                "8GB Dedicated",
                "12GB Dedicated"
            ]
        },
        priceRange: {
            min: 25000,
            max: 200000
        }
    },

    "Monitors": {
        attributes: {
            display: ["22 inch", "24 inch", "27 inch", "32 inch"],
            resolution: [
                "1920x1080",
                "2560x1440",
                "3840x2160"
            ],
            refreshRate: ["60Hz", "75Hz", "120Hz", "144Hz"],
            panel: ["IPS", "VA", "TN"]
        },
        priceRange: {
            min: 7000,
            max: 100000
        }
    },

    "Keyboards": {
        attributes: {
            type: ["Membrane", "Mechanical", "Wireless"],
            connection: ["USB", "Bluetooth", "2.4GHz Wireless"],
            layout: ["Full Size", "Tenkeyless", "Compact"]
        },
        priceRange: {
            min: 500,
            max: 15000
        }
    },

    "Mice": {
        attributes: {
            type: ["Optical", "Gaming", "Ergonomic"],
            connection: ["USB", "Bluetooth", "2.4GHz Wireless"],
            dpi: ["800 DPI", "1600 DPI", "3200 DPI", "6400 DPI"]
        },
        priceRange: {
            min: 300,
            max: 10000
        }
    },

    "Headphones": {
        attributes: {
            type: ["Over-Ear", "On-Ear", "Wireless"],
            connection: ["Wired", "Bluetooth", "USB"],
            battery: ["20 hours", "30 hours", "40 hours", "50 hours"]
        },
        priceRange: {
            min: 800,
            max: 30000
        }
    },

    "Earbuds": {
        attributes: {
            type: ["In-Ear", "True Wireless"],
            battery: ["20 hours", "30 hours", "40 hours"],
            connectivity: ["Bluetooth 5.0", "Bluetooth 5.2", "Bluetooth 5.3"],
            noiseCancellation: ["Yes", "No"]
        },
        priceRange: {
            min: 800,
            max: 25000
        }
    },

    "Speakers": {
        attributes: {
            type: ["Portable", "Bookshelf", "Soundbar"],
            connection: ["Bluetooth", "USB", "AUX"],
            power: ["10W", "20W", "50W", "100W"]
        },
        priceRange: {
            min: 1000,
            max: 40000
        }
    },

    "Chargers": {
        attributes: {
            type: ["Wall Charger", "Fast Charger", "Wireless Charger"],
            power: ["10W", "20W", "33W", "65W", "100W"],
            ports: ["1", "2", "3", "4"]
        },
        priceRange: {
            min: 300,
            max: 8000
        }
    },

    "Power Banks": {
        attributes: {
            capacity: ["10000mAh", "20000mAh", "30000mAh"],
            output: ["10W", "18W", "22.5W", "33W"],
            ports: ["2", "3", "4"]
        },
        priceRange: {
            min: 800,
            max: 8000
        }
    },

    "USB Cables": {
        attributes: {
            type: ["USB-A to USB-C", "USB-C to USB-C", "USB-C to Lightning"],
            length: ["1m", "1.5m", "2m", "3m"],
            speed: ["USB 2.0", "USB 3.0", "USB 3.2"]
        },
        priceRange: {
            min: 150,
            max: 3000
        }
    },

    "Webcams": {
        attributes: {
            resolution: ["720p", "1080p", "1440p", "4K"],
            frameRate: ["30fps", "60fps"],
            connection: ["USB-A", "USB-C"]
        },
        priceRange: {
            min: 1000,
            max: 20000
        }
    },

    "Smartwatches": {
        attributes: {
            display: ["1.3 inch", "1.5 inch", "1.8 inch"],
            battery: ["5 days", "7 days", "10 days", "14 days"],
            connectivity: ["Bluetooth", "Bluetooth + Cellular"],
            waterResistance: ["IP67", "IP68", "5ATM"]
        },
        priceRange: {
            min: 1500,
            max: 50000
        }
    },

    "Routers": {
        attributes: {
            standard: ["WiFi 5", "WiFi 6", "WiFi 6E", "WiFi 7"],
            bands: ["Single Band", "Dual Band", "Tri Band"],
            ports: ["2", "4", "5"]
        },
        priceRange: {
            min: 1500,
            max: 30000
        }
    },

    "External SSDs": {
        attributes: {
            capacity: ["500GB", "1TB", "2TB", "4TB"],
            interface: ["USB 3.0", "USB 3.2", "USB-C"],
            speed: ["500MB/s", "1000MB/s", "2000MB/s"]
        },
        priceRange: {
            min: 4000,
            max: 50000
        }
    },

    "External Hard Drives": {
        attributes: {
            capacity: ["1TB", "2TB", "4TB", "6TB"],
            interface: ["USB 3.0", "USB 3.2"],
            rpm: ["5400 RPM", "7200 RPM"]
        },
        priceRange: {
            min: 3500,
            max: 30000
        }
    },

    "RAM Modules": {
        attributes: {
            capacity: ["4GB", "8GB", "16GB", "32GB"],
            type: ["DDR4", "DDR5"],
            speed: ["2666MHz", "3200MHz", "4800MHz", "5600MHz"]
        },
        priceRange: {
            min: 1500,
            max: 30000
        }
    },

    "Graphics Cards": {
        attributes: {
            memory: ["4GB", "6GB", "8GB", "12GB", "16GB"],
            memoryType: ["GDDR6", "GDDR6X"],
            interface: ["PCIe 4.0", "PCIe 5.0"]
        },
        priceRange: {
            min: 15000,
            max: 200000
        }
    },

    // ============================================================
    // CLOTHING
    // ============================================================

    "T-Shirts": {
        attributes: {
            material: ["Cotton", "Polyester", "Cotton Blend"],
            size: ["S", "M", "L", "XL", "XXL"],
            fit: ["Regular", "Slim", "Relaxed"],
            sleeve: ["Half Sleeve", "Full Sleeve"]
        },
        priceRange: {
            min: 300,
            max: 3000
        }
    },

    "Shirts": {
        attributes: {
            material: ["Cotton", "Linen", "Cotton Blend"],
            size: ["S", "M", "L", "XL", "XXL"],
            fit: ["Regular", "Slim", "Relaxed"],
            sleeve: ["Half Sleeve", "Full Sleeve"]
        },
        priceRange: {
            min: 500,
            max: 5000
        }
    },

    "Jeans": {
        attributes: {
            material: ["Denim", "Stretch Denim"],
            size: ["28", "30", "32", "34", "36", "38"],
            fit: ["Slim", "Regular", "Relaxed", "Straight"],
            wash: ["Light", "Medium", "Dark"]
        },
        priceRange: {
            min: 800,
            max: 6000
        }
    },

    "Trousers": {
        attributes: {
            material: ["Cotton", "Polyester", "Linen Blend"],
            size: ["28", "30", "32", "34", "36", "38"],
            fit: ["Slim", "Regular", "Relaxed"],
            style: ["Formal", "Casual"]
        },
        priceRange: {
            min: 600,
            max: 5000
        }
    },

    "Shorts": {
        attributes: {
            material: ["Cotton", "Polyester", "Denim"],
            size: ["S", "M", "L", "XL", "XXL"],
            fit: ["Regular", "Relaxed"],
            length: ["Knee Length", "Above Knee"]
        },
        priceRange: {
            min: 300,
            max: 2500
        }
    },

    "Jackets": {
        attributes: {
            material: ["Cotton", "Polyester", "Denim", "Leather"],
            size: ["S", "M", "L", "XL", "XXL"],
            fit: ["Regular", "Slim", "Relaxed"],
            style: ["Casual", "Outdoor", "Fashion"]
        },
        priceRange: {
            min: 1000,
            max: 15000
        }
    },

    "Hoodies": {
        attributes: {
            material: ["Cotton", "Fleece", "Cotton Blend"],
            size: ["S", "M", "L", "XL", "XXL"],
            fit: ["Regular", "Relaxed", "Oversized"],
            sleeve: ["Full Sleeve"]
        },
        priceRange: {
            min: 700,
            max: 5000
        }
    },

    "Sweaters": {
        attributes: {
            material: ["Wool", "Cotton", "Acrylic", "Wool Blend"],
            size: ["S", "M", "L", "XL", "XXL"],
            fit: ["Regular", "Relaxed"],
            style: ["Crew Neck", "V-Neck", "Cardigan"]
        },
        priceRange: {
            min: 700,
            max: 6000
        }
    },

    "Dresses": {
        attributes: {
            material: ["Cotton", "Polyester", "Rayon", "Silk Blend"],
            size: ["XS", "S", "M", "L", "XL"],
            fit: ["Regular", "Slim", "Relaxed"],
            length: ["Mini", "Midi", "Maxi"]
        },
        priceRange: {
            min: 700,
            max: 10000
        }
    },

    "Skirts": {
        attributes: {
            material: ["Cotton", "Polyester", "Denim"],
            size: ["XS", "S", "M", "L", "XL"],
            fit: ["Regular", "Slim"],
            length: ["Mini", "Midi", "Maxi"]
        },
        priceRange: {
            min: 500,
            max: 6000
        }
    },

    "Sarees": {
        attributes: {
            material: ["Cotton", "Silk", "Georgette", "Chiffon"],
            length: ["5.5m", "6m"],
            style: ["Traditional", "Festive", "Casual"],
            border: ["Plain", "Printed", "Decorative"]
        },
        priceRange: {
            min: 800,
            max: 25000
        }
    },

    "Kurtas": {
        attributes: {
            material: ["Cotton", "Linen", "Rayon", "Silk Blend"],
            size: ["S", "M", "L", "XL", "XXL"],
            fit: ["Regular", "Slim", "Relaxed"],
            style: ["Casual", "Festive", "Formal"]
        },
        priceRange: {
            min: 500,
            max: 6000
        }
    },

    "Leggings": {
        attributes: {
            material: ["Cotton Blend", "Polyester", "Nylon"],
            size: ["S", "M", "L", "XL"],
            fit: ["Regular", "Slim"],
            stretch: ["Low", "Medium", "High"]
        },
        priceRange: {
            min: 300,
            max: 2500
        }
    },

    "Track Pants": {
        attributes: {
            material: ["Polyester", "Cotton", "Cotton Blend"],
            size: ["S", "M", "L", "XL", "XXL"],
            fit: ["Regular", "Slim", "Relaxed"],
            style: ["Training", "Casual", "Running"]
        },
        priceRange: {
            min: 500,
            max: 3500
        }
    },

    "Sportswear": {
        attributes: {
            material: ["Polyester", "Nylon", "Cotton Blend"],
            size: ["S", "M", "L", "XL", "XXL"],
            fit: ["Regular", "Slim", "Relaxed"],
            use: ["Running", "Training", "Gym", "Outdoor"]
        },
        priceRange: {
            min: 500,
            max: 5000
        }
    },

    "Blazers": {
        attributes: {
            material: ["Polyester", "Wool Blend", "Cotton Blend"],
            size: ["S", "M", "L", "XL", "XXL"],
            fit: ["Slim", "Regular"],
            style: ["Formal", "Casual"]
        },
        priceRange: {
            min: 2000,
            max: 15000
        }
    },

    "Coats": {
        attributes: {
            material: ["Wool", "Wool Blend", "Polyester"],
            size: ["S", "M", "L", "XL", "XXL"],
            fit: ["Regular", "Slim"],
            style: ["Formal", "Casual", "Winter"]
        },
        priceRange: {
            min: 2000,
            max: 20000
        }
    },

    "Socks": {
        attributes: {
            material: ["Cotton", "Polyester", "Cotton Blend"],
            size: ["Free Size", "M", "L", "XL"],
            length: ["Ankle", "Crew", "Knee Length"]
        },
        priceRange: {
            min: 100,
            max: 1500
        }
    },

    "Innerwear": {
        attributes: {
            material: ["Cotton", "Modal", "Cotton Blend"],
            size: ["S", "M", "L", "XL", "XXL"],
            fit: ["Regular", "Slim"],
            packSize: ["1", "2", "3", "5"]
        },
        priceRange: {
            min: 200,
            max: 2500
        }
    },

    "Sleepwear": {
        attributes: {
            material: ["Cotton", "Rayon", "Polyester"],
            size: ["S", "M", "L", "XL", "XXL"],
            fit: ["Regular", "Relaxed"],
            style: ["Night Suit", "Pajama Set", "Short Set"]
        },
        priceRange: {
            min: 400,
            max: 3500
        }
    },

    // ============================================================
    // HOME & KITCHEN
    // ============================================================

    "Cookware Sets": {
        attributes: {
            material: ["Stainless Steel", "Aluminium", "Hard Anodized"],
            pieces: ["3 Piece", "5 Piece", "7 Piece", "10 Piece"],
            coating: ["Non-Stick", "Ceramic", "Uncoated"],
            inductionCompatible: ["Yes", "No"]
        },
        priceRange: {
            min: 1200,
            max: 15000
        }
    },

    "Frying Pans": {
        attributes: {
            material: ["Aluminium", "Stainless Steel", "Cast Iron"],
            diameter: ["20cm", "24cm", "26cm", "28cm"],
            coating: ["Non-Stick", "Ceramic", "Uncoated"],
            inductionCompatible: ["Yes", "No"]
        },
        priceRange: {
            min: 400,
            max: 5000
        }
    },

    "Pressure Cookers": {
        attributes: {
            capacity: ["2L", "3L", "5L", "7L"],
            material: ["Aluminium", "Stainless Steel"],
            type: ["Stovetop", "Induction"],
            safetyValve: ["Standard", "Advanced"]
        },
        priceRange: {
            min: 800,
            max: 6000
        }
    },

    "Kitchen Knives": {
        attributes: {
            material: ["Stainless Steel", "Carbon Steel"],
            bladeLength: ["6 inch", "8 inch", "10 inch"],
            type: ["Chef Knife", "Utility Knife", "Paring Knife"],
            handle: ["Plastic", "Wood", "Steel"]
        },
        priceRange: {
            min: 200,
            max: 3000
        }
    },

    "Cutting Boards": {
        attributes: {
            material: ["Wood", "Bamboo", "Plastic", "Composite"],
            size: ["Small", "Medium", "Large"],
            thickness: ["10mm", "15mm", "20mm"],
            type: ["Regular", "Grooved", "Double Sided"]
        },
        priceRange: {
            min: 200,
            max: 2500
        }
    },

    "Dinner Sets": {
        attributes: {
            material: ["Ceramic", "Porcelain", "Glass", "Stainless Steel"],
            pieces: ["12 Piece", "18 Piece", "24 Piece", "32 Piece"],
            style: ["Classic", "Modern", "Decorative"],
            dishwasherSafe: ["Yes", "No"]
        },
        priceRange: {
            min: 800,
            max: 10000
        }
    },

    "Mugs": {
        attributes: {
            material: ["Ceramic", "Glass", "Stainless Steel"],
            capacity: ["250ml", "350ml", "450ml", "500ml"],
            type: ["Coffee Mug", "Travel Mug", "Tea Mug"],
            dishwasherSafe: ["Yes", "No"]
        },
        priceRange: {
            min: 100,
            max: 2000
        }
    },

    "Water Bottles": {
        attributes: {
            material: ["Stainless Steel", "Plastic", "Glass", "Copper"],
            capacity: ["500ml", "750ml", "1L", "1.5L"],
            type: ["Regular", "Insulated", "Sports"],
            leakProof: ["Yes", "No"]
        },
        priceRange: {
            min: 200,
            max: 4000
        }
    },

    "Storage Containers": {
        attributes: {
            material: ["Plastic", "Glass", "Stainless Steel"],
            capacity: ["500ml", "1L", "1.5L", "2L", "3L"],
            type: ["Airtight", "Stackable", "Regular"],
            microwaveSafe: ["Yes", "No"]
        },
        priceRange: {
            min: 200,
            max: 3000
        }
    },

    "Food Storage Jars": {
        attributes: {
            material: ["Glass", "Plastic", "Stainless Steel"],
            capacity: ["500ml", "1L", "1.5L", "2L"],
            type: ["Airtight", "Clip Top", "Screw Top"],
            transparency: ["Transparent", "Opaque"]
        },
        priceRange: {
            min: 150,
            max: 2500
        }
    },

    "Electric Kettles": {
        attributes: {
            capacity: ["1L", "1.5L", "1.7L", "2L"],
            power: ["1000W", "1500W", "2000W"],
            material: ["Plastic", "Stainless Steel", "Glass"],
            temperatureControl: ["Yes", "No"]
        },
        priceRange: {
            min: 800,
            max: 6000
        }
    },

    "Toasters": {
        attributes: {
            slots: ["2 Slot", "4 Slot"],
            power: ["700W", "1000W", "1500W"],
            browningLevels: ["5", "6", "7"],
            type: ["Pop-Up", "Long Slot"]
        },
        priceRange: {
            min: 1000,
            max: 7000
        }
    },

    "Mixer Grinders": {
        attributes: {
            power: ["500W", "750W", "1000W"],
            jars: ["2", "3", "4"],
            speedLevels: ["3", "4", "5"],
            type: ["Mixer Grinder", "Juicer Mixer Grinder"]
        },
        priceRange: {
            min: 1800,
            max: 10000
        }
    },

    "Coffee Makers": {
        attributes: {
            type: ["Drip", "Espresso", "French Press", "Pod"],
            capacity: ["300ml", "600ml", "1L", "1.5L"],
            power: ["600W", "1000W", "1500W"],
            programmable: ["Yes", "No"]
        },
        priceRange: {
            min: 500,
            max: 40000
        }
    },

    "Lunch Boxes": {
        attributes: {
            material: ["Stainless Steel", "Plastic", "Glass"],
            capacity: ["500ml", "750ml", "1L", "1.5L"],
            compartments: ["1", "2", "3", "4"],
            insulation: ["Yes", "No"]
        },
        priceRange: {
            min: 200,
            max: 2500
        }
    },

    "Kitchen Organizers": {
        attributes: {
            material: ["Plastic", "Steel", "Bamboo", "Wood"],
            type: ["Drawer Organizer", "Shelf Organizer", "Counter Organizer"],
            size: ["Small", "Medium", "Large"],
            compartments: ["2", "4", "6", "8"]
        },
        priceRange: {
            min: 200,
            max: 3000
        }
    },

    "Bedsheets": {
        attributes: {
            material: ["Cotton", "Microfiber", "Cotton Blend"],
            size: ["Single", "Double", "Queen", "King"],
            threadCount: ["180", "200", "300", "400"],
            type: ["Flat", "Fitted"]
        },
        priceRange: {
            min: 500,
            max: 5000
        }
    },

    "Pillows": {
        attributes: {
            filling: ["Memory Foam", "Microfiber", "Cotton", "Latex"],
            size: ["Standard", "Queen", "King"],
            firmness: ["Soft", "Medium", "Firm"],
            coverMaterial: ["Cotton", "Polyester", "Bamboo"]
        },
        priceRange: {
            min: 300,
            max: 5000
        }
    },

    "Blankets": {
        attributes: {
            material: ["Fleece", "Cotton", "Wool", "Microfiber"],
            size: ["Single", "Double", "Queen", "King"],
            thickness: ["Light", "Medium", "Heavy"],
            season: ["Summer", "Winter", "All Season"]
        },
        priceRange: {
            min: 500,
            max: 8000
        }
    },

    "Curtains": {
        attributes: {
            material: ["Cotton", "Polyester", "Linen Blend"],
            size: ["4ft", "5ft", "7ft", "9ft"],
            type: ["Blackout", "Sheer", "Regular"],
            pattern: ["Plain", "Printed", "Textured"]
        },
        priceRange: {
            min: 400,
            max: 6000
        }
    },

    // ============================================================
    // BEAUTY & PERSONAL CARE
    // ============================================================

    "Face Wash": {
        attributes: {
            skinType: ["Normal", "Dry", "Oily", "Combination", "Sensitive"],
            volume: ["50ml", "100ml", "150ml", "200ml"],
            formulation: ["Gel", "Foam", "Cream"],
            purpose: ["Cleansing", "Oil Control", "Hydration"]
        },
        priceRange: {
            min: 150,
            max: 1500
        }
    },

    "Moisturizers": {
        attributes: {
            skinType: ["Normal", "Dry", "Oily", "Combination", "Sensitive"],
            volume: ["50ml", "100ml", "150ml", "200ml"],
            formulation: ["Cream", "Gel", "Lotion"],
            purpose: ["Hydration", "Oil Control", "Barrier Care"]
        },
        priceRange: {
            min: 200,
            max: 2500
        }
    },

    "Face Creams": {
        attributes: {
            skinType: ["Normal", "Dry", "Oily", "Combination"],
            volume: ["30ml", "50ml", "75ml", "100ml"],
            formulation: ["Cream", "Gel Cream"],
            purpose: ["Hydration", "Brightening", "Night Care"]
        },
        priceRange: {
            min: 200,
            max: 3000
        }
    },

    "Sunscreens": {
        attributes: {
            skinType: ["Normal", "Dry", "Oily", "Combination", "Sensitive"],
            volume: ["30ml", "50ml", "75ml", "100ml"],
            spf: ["SPF 30", "SPF 40", "SPF 50"],
            formulation: ["Cream", "Gel", "Lotion"]
        },
        priceRange: {
            min: 250,
            max: 2500
        }
    },

    "Face Serums": {
        attributes: {
            skinType: ["Normal", "Dry", "Oily", "Combination"],
            volume: ["15ml", "30ml", "50ml"],
            formulation: ["Water Based", "Oil Based"],
            purpose: ["Hydration", "Brightening", "Oil Control", "Anti-Aging"]
        },
        priceRange: {
            min: 300,
            max: 4000
        }
    },

    "Shampoos": {
        attributes: {
            hairType: ["Normal", "Dry", "Oily", "Curly", "Damaged"],
            volume: ["200ml", "300ml", "400ml", "650ml"],
            formulation: ["Liquid", "Cream"],
            purpose: ["Cleansing", "Moisturizing", "Anti-Dandruff"]
        },
        priceRange: {
            min: 150,
            max: 1800
        }
    },

    "Conditioners": {
        attributes: {
            hairType: ["Normal", "Dry", "Oily", "Curly", "Damaged"],
            volume: ["180ml", "250ml", "400ml", "600ml"],
            formulation: ["Cream", "Lotion"],
            purpose: ["Moisturizing", "Smoothing", "Repair"]
        },
        priceRange: {
            min: 150,
            max: 1800
        }
    },

    "Hair Oils": {
        attributes: {
            hairType: ["Normal", "Dry", "Oily", "Damaged"],
            volume: ["100ml", "200ml", "300ml", "500ml"],
            formulation: ["Oil", "Oil Blend"],
            purpose: ["Nourishing", "Strengthening", "Scalp Care"]
        },
        priceRange: {
            min: 100,
            max: 1500
        }
    },

    "Hair Dryers": {
        attributes: {
            power: ["1000W", "1200W", "1600W", "2000W"],
            speedSettings: ["2", "3"],
            heatSettings: ["2", "3"],
            type: ["Compact", "Professional", "Travel"]
        },
        priceRange: {
            min: 700,
            max: 8000
        }
    },

    "Hair Straighteners": {
        attributes: {
            plateMaterial: ["Ceramic", "Titanium", "Tourmaline"],
            temperature: ["180C", "200C", "230C"],
            heatTime: ["30 seconds", "45 seconds", "60 seconds"],
            display: ["Digital", "Indicator"]
        },
        priceRange: {
            min: 1000,
            max: 10000
        }
    },

    "Hair Trimmers": {
        attributes: {
            type: ["Corded", "Cordless", "Rechargeable"],
            battery: ["60 minutes", "90 minutes", "120 minutes"],
            blades: ["Stainless Steel", "Titanium"],
            settings: ["5", "10", "15"]
        },
        priceRange: {
            min: 700,
            max: 7000
        }
    },

    "Electric Shavers": {
        attributes: {
            type: ["Foil", "Rotary"],
            battery: ["45 minutes", "60 minutes", "90 minutes"],
            blades: ["2 Blade", "3 Blade", "4 Blade"],
            waterproof: ["Yes", "No"]
        },
        priceRange: {
            min: 1200,
            max: 15000
        }
    },

    "Body Wash": {
        attributes: {
            skinType: ["Normal", "Dry", "Oily", "Sensitive"],
            volume: ["200ml", "300ml", "400ml", "500ml"],
            formulation: ["Gel", "Cream", "Foam"],
            purpose: ["Cleansing", "Moisturizing", "Refreshing"]
        },
        priceRange: {
            min: 150,
            max: 1200
        }
    },

    "Hand Wash": {
        attributes: {
            formulation: ["Liquid", "Foam"],
            volume: ["200ml", "300ml", "500ml", "750ml"],
            purpose: ["Regular", "Moisturizing", "Antibacterial"],
            dispenser: ["Pump", "Refill"]
        },
        priceRange: {
            min: 100,
            max: 800
        }
    },

    "Perfumes": {
        attributes: {
            type: ["Eau de Parfum", "Eau de Toilette", "Perfume"],
            volume: ["30ml", "50ml", "75ml", "100ml"],
            fragrance: ["Fresh", "Woody", "Floral", "Citrus", "Oriental"],
            longevity: ["4 Hours", "6 Hours", "8 Hours", "12 Hours"]
        },
        priceRange: {
            min: 500,
            max: 15000
        }
    },

    "Deodorants": {
        attributes: {
            type: ["Spray", "Roll-On", "Stick"],
            volume: ["50ml", "100ml", "150ml", "200ml"],
            fragrance: ["Fresh", "Citrus", "Woody", "Floral"],
            protection: ["12 Hours", "24 Hours", "48 Hours"]
        },
        priceRange: {
            min: 100,
            max: 1000
        }
    },

    "Lip Balms": {
        attributes: {
            formulation: ["Stick", "Balm", "Gel"],
            volume: ["4g", "5g", "10g", "15g"],
            purpose: ["Moisturizing", "Repair", "Sun Protection"],
            spf: ["None", "SPF 15", "SPF 30"]
        },
        priceRange: {
            min: 80,
            max: 700
        }
    },

    "Makeup Kits": {
        attributes: {
            type: ["Basic", "Professional", "Travel"],
            pieces: ["5 Piece", "8 Piece", "12 Piece", "20 Piece"],
            finish: ["Matte", "Natural", "Glossy"],
            use: ["Daily", "Party", "Professional"]
        },
        priceRange: {
            min: 500,
            max: 8000
        }
    },

    "Nail Care Kits": {
        attributes: {
            pieces: ["5 Piece", "7 Piece", "10 Piece", "12 Piece"],
            material: ["Stainless Steel", "Steel"],
            case: ["Plastic Case", "Fabric Case", "Metal Case"],
            use: ["Basic", "Professional", "Travel"]
        },
        priceRange: {
            min: 200,
            max: 2500
        }
    },

    "Skincare Kits": {
        attributes: {
            skinType: ["Normal", "Dry", "Oily", "Combination", "Sensitive"],
            pieces: ["3 Piece", "4 Piece", "5 Piece", "7 Piece"],
            purpose: ["Hydration", "Brightening", "Oil Control", "Daily Care"],
            routine: ["Basic", "Complete"]
        },
        priceRange: {
            min: 500,
            max: 6000
        }
    },

        // ============================================================
    // SPORTS & FITNESS
    // ============================================================

    "Running Shoes": {
        attributes: {
            size: ["6", "7", "8", "9", "10", "11"],
            material: ["Mesh", "Synthetic", "Knit"],
            sole: ["Rubber", "EVA", "Foam"],
            type: ["Road Running", "Trail Running", "Training"]
        },
        priceRange: {
            min: 1000,
            max: 12000
        }
    },

    "Sports Shoes": {
        attributes: {
            size: ["6", "7", "8", "9", "10", "11"],
            material: ["Mesh", "Synthetic", "Leather"],
            sole: ["Rubber", "EVA", "TPR"],
            use: ["Training", "Court", "Outdoor"]
        },
        priceRange: {
            min: 1000,
            max: 10000
        }
    },

    "Footballs": {
        attributes: {
            size: ["Size 3", "Size 4", "Size 5"],
            material: ["PVC", "PU", "Synthetic Leather"],
            construction: ["Machine Stitched", "Hand Stitched", "Thermally Bonded"],
            use: ["Training", "Match", "Recreational"]
        },
        priceRange: {
            min: 300,
            max: 5000
        }
    },

    "Basketballs": {
        attributes: {
            size: ["Size 5", "Size 6", "Size 7"],
            material: ["Rubber", "Composite Leather", "Synthetic Leather"],
            construction: ["Molded", "Stitched"],
            use: ["Training", "Match", "Indoor", "Outdoor"]
        },
        priceRange: {
            min: 500,
            max: 6000
        }
    },

    "Cricket Bats": {
        attributes: {
            material: ["English Willow", "Kashmir Willow"],
            size: ["Size 4", "Size 5", "Size 6", "Harrow", "Full Size"],
            weight: ["1.1kg", "1.2kg", "1.3kg", "1.4kg"],
            type: ["Training", "Match", "Professional"]
        },
        priceRange: {
            min: 1000,
            max: 30000
        }
    },

    "Cricket Balls": {
        attributes: {
            material: ["Leather", "Synthetic", "Rubber"],
            color: ["Red", "White", "Pink"],
            weight: ["155g", "156g", "160g"],
            use: ["Training", "Match", "Practice"]
        },
        priceRange: {
            min: 150,
            max: 3000
        }
    },

    "Badminton Rackets": {
        attributes: {
            material: ["Aluminium", "Graphite", "Carbon Fiber"],
            weight: ["75g", "80g", "85g", "90g"],
            balance: ["Head Heavy", "Even Balance", "Head Light"],
            flexibility: ["Flexible", "Medium", "Stiff"]
        },
        priceRange: {
            min: 500,
            max: 15000
        }
    },

    "Tennis Rackets": {
        attributes: {
            material: ["Aluminium", "Graphite", "Carbon Fiber"],
            weight: ["260g", "280g", "300g", "320g"],
            headSize: ["95 sq in", "100 sq in", "105 sq in"],
            balance: ["Head Heavy", "Even Balance", "Head Light"]
        },
        priceRange: {
            min: 1000,
            max: 25000
        }
    },

    "Table Tennis Bats": {
        attributes: {
            material: ["Wood", "Composite Wood", "Carbon Fiber"],
            speed: ["Low", "Medium", "High"],
            control: ["High", "Medium", "Low"],
            use: ["Beginner", "Intermediate", "Professional"]
        },
        priceRange: {
            min: 300,
            max: 8000
        }
    },

    "Yoga Mats": {
        attributes: {
            material: ["PVC", "TPE", "Natural Rubber", "Jute"],
            thickness: ["4mm", "6mm", "8mm", "10mm"],
            length: ["6ft", "6.5ft", "7ft"],
            type: ["Standard", "Non-Slip", "Travel"]
        },
        priceRange: {
            min: 300,
            max: 5000
        }
    },

    "Dumbbells": {
        attributes: {
            material: ["Cast Iron", "Rubber Coated", "Vinyl"],
            weight: ["1kg", "2kg", "5kg", "10kg", "15kg", "20kg"],
            type: ["Fixed", "Adjustable"],
            shape: ["Hexagonal", "Round"]
        },
        priceRange: {
            min: 300,
            max: 10000
        }
    },

    "Kettlebells": {
        attributes: {
            material: ["Cast Iron", "Steel", "Vinyl Coated"],
            weight: ["4kg", "6kg", "8kg", "12kg", "16kg", "20kg"],
            type: ["Fixed", "Competition"],
            handle: ["Standard", "Wide"]
        },
        priceRange: {
            min: 500,
            max: 10000
        }
    },

    "Resistance Bands": {
        attributes: {
            material: ["Latex", "Natural Rubber", "Fabric"],
            resistance: ["Light", "Medium", "Heavy", "Extra Heavy"],
            length: ["1m", "1.2m", "1.5m", "2m"],
            type: ["Loop", "Tube", "Flat"]
        },
        priceRange: {
            min: 200,
            max: 3000
        }
    },

    "Exercise Benches": {
        attributes: {
            material: ["Steel", "Heavy Duty Steel"],
            type: ["Flat", "Adjustable", "Foldable"],
            weightCapacity: ["100kg", "150kg", "200kg", "250kg"],
            adjustment: ["None", "3 Position", "5 Position", "7 Position"]
        },
        priceRange: {
            min: 3000,
            max: 25000
        }
    },

    "Skipping Ropes": {
        attributes: {
            material: ["PVC", "Nylon", "Leather"],
            length: ["2.5m", "2.8m", "3m"],
            handle: ["Plastic", "Foam", "Metal"],
            type: ["Basic", "Speed Rope", "Weighted"]
        },
        priceRange: {
            min: 100,
            max: 2500
        }
    },

    "Gym Gloves": {
        attributes: {
            material: ["Leather", "Synthetic Leather", "Neoprene"],
            size: ["S", "M", "L", "XL"],
            padding: ["Basic", "Medium", "Heavy"],
            type: ["Training", "Weightlifting", "Cycling"]
        },
        priceRange: {
            min: 200,
            max: 2500
        }
    },

    "Sports Bags": {
        attributes: {
            material: ["Polyester", "Nylon", "Canvas"],
            capacity: ["20L", "30L", "40L", "50L"],
            type: ["Duffel", "Backpack", "Kit Bag"],
            compartments: ["2", "3", "4", "5"]
        },
        priceRange: {
            min: 500,
            max: 5000
        }
    },

    "Sports Bottles": {
        attributes: {
            material: ["Plastic", "Stainless Steel", "Tritan"],
            capacity: ["500ml", "750ml", "1L", "1.5L"],
            type: ["Squeeze", "Insulated", "Regular"],
            leakProof: ["Yes", "No"]
        },
        priceRange: {
            min: 200,
            max: 3000
        }
    },

    "Fitness Trackers": {
        attributes: {
            display: ["OLED", "AMOLED", "LCD"],
            battery: ["5 days", "7 days", "10 days", "14 days"],
            connectivity: ["Bluetooth", "Bluetooth + GPS"],
            waterResistance: ["IP67", "IP68", "5ATM"]
        },
        priceRange: {
            min: 1500,
            max: 20000
        }
    },

    "Cycling Helmets": {
        attributes: {
            material: ["ABS", "Polycarbonate", "Composite"],
            size: ["S", "M", "L", "XL"],
            ventilation: ["Basic", "Medium", "High"],
            type: ["Road", "Mountain", "Urban"]
        },
        priceRange: {
            min: 800,
            max: 8000
        }
    },

    // ============================================================
    // BOOKS & STATIONERY
    // ============================================================

    "Fiction Books": {
        attributes: {
            format: ["Paperback", "Hardcover"],
            pages: ["200", "300", "400", "500"],
            language: ["English", "Hindi"],
            edition: ["Standard", "Special Edition"]
        },
        priceRange: {
            min: 150,
            max: 1500
        }
    },

    "Non-Fiction Books": {
        attributes: {
            format: ["Paperback", "Hardcover"],
            pages: ["200", "300", "400", "500"],
            language: ["English", "Hindi"],
            edition: ["Standard", "Special Edition"]
        },
        priceRange: {
            min: 200,
            max: 2000
        }
    },

    "Academic Books": {
        attributes: {
            format: ["Paperback", "Hardcover"],
            pages: ["300", "500", "700", "900"],
            level: ["School", "Undergraduate", "Postgraduate"],
            subject: ["Science", "Mathematics", "Commerce", "Humanities"]
        },
        priceRange: {
            min: 300,
            max: 3000
        }
    },

    "Programming Books": {
        attributes: {
            format: ["Paperback", "Hardcover", "Ebook"],
            pages: ["300", "500", "700", "900"],
            level: ["Beginner", "Intermediate", "Advanced"],
            topic: ["Web Development", "Mobile Development", "Databases", "Programming Languages"]
        },
        priceRange: {
            min: 300,
            max: 4000
        }
    },

    "Business Books": {
        attributes: {
            format: ["Paperback", "Hardcover"],
            pages: ["200", "300", "400", "500"],
            level: ["Introductory", "Intermediate", "Advanced"],
            topic: ["Management", "Finance", "Marketing", "Entrepreneurship"]
        },
        priceRange: {
            min: 250,
            max: 2500
        }
    },

    "Children's Books": {
        attributes: {
            format: ["Paperback", "Hardcover"],
            pages: ["24", "32", "48", "64"],
            ageGroup: ["3-5 Years", "6-8 Years", "9-12 Years"],
            type: ["Story", "Educational", "Activity"]
        },
        priceRange: {
            min: 100,
            max: 1200
        }
    },

    "Notebooks": {
        attributes: {
            size: ["A4", "A5", "A6"],
            pages: ["100", "150", "200", "300"],
            ruling: ["Ruled", "Plain", "Grid"],
            binding: ["Spiral", "Perfect Bound", "Hard Bound"]
        },
        priceRange: {
            min: 80,
            max: 800
        }
    },

    "Journals": {
        attributes: {
            size: ["A5", "A6"],
            pages: ["100", "150", "200"],
            ruling: ["Ruled", "Plain", "Dotted"],
            binding: ["Spiral", "Hard Bound"]
        },
        priceRange: {
            min: 150,
            max: 1200
        }
    },

    "Diaries": {
        attributes: {
            size: ["A5", "A6"],
            pages: ["200", "300", "400"],
            layout: ["Daily", "Weekly", "Monthly"],
            binding: ["Spiral", "Hard Bound"]
        },
        priceRange: {
            min: 150,
            max: 1500
        }
    },

    "Sketchbooks": {
        attributes: {
            size: ["A4", "A5", "A6"],
            pages: ["40", "60", "80", "100"],
            paperWeight: ["120 GSM", "160 GSM", "200 GSM", "250 GSM"],
            binding: ["Spiral", "Hard Bound", "Soft Bound"]
        },
        priceRange: {
            min: 150,
            max: 1200
        }
    },

    "Drawing Books": {
        attributes: {
            size: ["A4", "A3", "A5"],
            pages: ["20", "40", "60", "80"],
            paperWeight: ["100 GSM", "120 GSM", "160 GSM"],
            ruling: ["Plain", "Drawing Grid"]
        },
        priceRange: {
            min: 80,
            max: 700
        }
    },

    "Ball Pens": {
        attributes: {
            inkColor: ["Blue", "Black", "Red", "Green"],
            tipSize: ["0.5mm", "0.7mm", "1.0mm"],
            packSize: ["1", "5", "10", "20"],
            type: ["Ballpoint", "Retractable"]
        },
        priceRange: {
            min: 10,
            max: 500
        }
    },

    "Gel Pens": {
        attributes: {
            inkColor: ["Blue", "Black", "Red", "Green"],
            tipSize: ["0.5mm", "0.7mm", "1.0mm"],
            packSize: ["1", "5", "10", "20"],
            type: ["Gel", "Retractable"]
        },
        priceRange: {
            min: 20,
            max: 600
        }
    },

    "Pencils": {
        attributes: {
            hardness: ["HB", "2B", "4B", "6B"],
            material: ["Wood", "Recycled Wood"],
            packSize: ["5", "10", "20", "50"],
            type: ["Writing", "Drawing"]
        },
        priceRange: {
            min: 20,
            max: 500
        }
    },

    "Markers": {
        attributes: {
            type: ["Permanent", "Whiteboard", "Art Marker"],
            tipSize: ["Fine", "Medium", "Broad"],
            packSize: ["4", "6", "12", "24"],
            inkType: ["Water Based", "Alcohol Based"]
        },
        priceRange: {
            min: 50,
            max: 1000
        }
    },

    "Highlighters": {
        attributes: {
            color: ["Yellow", "Green", "Pink", "Blue", "Orange"],
            tipSize: ["Fine", "Chisel"],
            packSize: ["2", "4", "6", "10"],
            type: ["Liquid", "Gel"]
        },
        priceRange: {
            min: 40,
            max: 500
        }
    },

    "Pencil Cases": {
        attributes: {
            material: ["Canvas", "Polyester", "Plastic", "Leather"],
            size: ["Small", "Medium", "Large"],
            compartments: ["1", "2", "3"],
            type: ["Pouch", "Box", "Organizer"]
        },
        priceRange: {
            min: 80,
            max: 800
        }
    },

    "School Backpacks": {
        attributes: {
            material: ["Polyester", "Nylon", "Canvas"],
            capacity: ["15L", "20L", "25L", "30L"],
            compartments: ["2", "3", "4", "5"],
            type: ["Regular", "Laptop Compatible", "Trolley"]
        },
        priceRange: {
            min: 500,
            max: 4000
        }
    },

    "File Folders": {
        attributes: {
            material: ["Plastic", "Cardboard", "Polypropylene"],
            size: ["A4", "A5", "Legal"],
            capacity: ["20 Sheets", "50 Sheets", "100 Sheets"],
            type: ["Clip", "Ring", "Document Folder"]
        },
        priceRange: {
            min: 30,
            max: 500
        }
    },

    "Art Supplies": {
        attributes: {
            type: ["Drawing Set", "Painting Set", "Coloring Set"],
            pieces: ["12 Piece", "24 Piece", "36 Piece", "48 Piece"],
            medium: ["Pencil", "Watercolor", "Acrylic", "Pastel"],
            level: ["Beginner", "Intermediate", "Professional"]
        },
        priceRange: {
            min: 200,
            max: 3000
        }
    },

        // ============================================================
    // TOYS & GAMES
    // ============================================================

    "Building Blocks": {
        attributes: {
            pieces: ["50", "100", "200", "500"],
            material: ["ABS Plastic", "Plastic"],
            ageGroup: ["3+ Years", "5+ Years", "8+ Years"],
            type: ["Basic Blocks", "Construction Set", "Creative Set"]
        },
        priceRange: {
            min: 300,
            max: 5000
        }
    },

    "Toy Cars": {
        attributes: {
            material: ["Plastic", "Die Cast Metal"],
            scale: ["1:32", "1:24", "1:18"],
            type: ["Basic", "Racing", "Pull Back"],
            ageGroup: ["3+ Years", "5+ Years", "8+ Years"]
        },
        priceRange: {
            min: 100,
            max: 2500
        }
    },

    "Toy Trucks": {
        attributes: {
            material: ["Plastic", "Die Cast Metal"],
            type: ["Construction", "Transport", "Dump Truck"],
            size: ["Small", "Medium", "Large"],
            ageGroup: ["3+ Years", "5+ Years", "8+ Years"]
        },
        priceRange: {
            min: 150,
            max: 3000
        }
    },

    "Dolls": {
        attributes: {
            material: ["Plastic", "Vinyl", "Fabric"],
            height: ["20cm", "30cm", "40cm"],
            type: ["Fashion Doll", "Baby Doll", "Educational Doll"],
            ageGroup: ["3+ Years", "5+ Years", "8+ Years"]
        },
        priceRange: {
            min: 200,
            max: 5000
        }
    },

    "Action Figures": {
        attributes: {
            material: ["Plastic", "PVC"],
            height: ["10cm", "15cm", "20cm", "30cm"],
            articulation: ["Basic", "Medium", "Highly Articulated"],
            ageGroup: ["5+ Years", "8+ Years", "12+ Years"]
        },
        priceRange: {
            min: 200,
            max: 5000
        }
    },

    "Board Games": {
        attributes: {
            players: ["2", "2-4", "2-6", "2-8"],
            duration: ["15 Minutes", "30 Minutes", "60 Minutes", "90 Minutes"],
            difficulty: ["Easy", "Medium", "Advanced"],
            ageGroup: ["6+ Years", "8+ Years", "12+ Years"]
        },
        priceRange: {
            min: 300,
            max: 5000
        }
    },

    "Card Games": {
        attributes: {
            players: ["2", "2-4", "2-6", "2-8"],
            cards: ["40", "52", "100", "150"],
            type: ["Strategy", "Party", "Educational"],
            ageGroup: ["6+ Years", "8+ Years", "12+ Years"]
        },
        priceRange: {
            min: 100,
            max: 2000
        }
    },

    "Puzzles": {
        attributes: {
            pieces: ["50", "100", "300", "500", "1000"],
            material: ["Cardboard", "Wood", "Foam"],
            difficulty: ["Easy", "Medium", "Hard"],
            ageGroup: ["3+ Years", "6+ Years", "8+ Years", "12+ Years"]
        },
        priceRange: {
            min: 150,
            max: 3000
        }
    },

    "Remote Control Cars": {
        attributes: {
            scale: ["1:24", "1:18", "1:12", "1:10"],
            speed: ["10 km/h", "20 km/h", "30 km/h", "40 km/h"],
            battery: ["30 Minutes", "45 Minutes", "60 Minutes"],
            drive: ["2WD", "4WD"]
        },
        priceRange: {
            min: 800,
            max: 10000
        }
    },

    "Toy Robots": {
        attributes: {
            material: ["ABS Plastic", "Plastic"],
            control: ["Remote Control", "App Control", "Voice Control"],
            battery: ["30 Minutes", "60 Minutes", "90 Minutes"],
            ageGroup: ["5+ Years", "8+ Years", "12+ Years"]
        },
        priceRange: {
            min: 500,
            max: 8000
        }
    },

    "Educational Toys": {
        attributes: {
            type: ["STEM", "Learning", "Building", "Mathematics"],
            material: ["Plastic", "Wood", "Cardboard"],
            ageGroup: ["3+ Years", "5+ Years", "8+ Years", "12+ Years"],
            level: ["Beginner", "Intermediate", "Advanced"]
        },
        priceRange: {
            min: 200,
            max: 5000
        }
    },

    "Musical Toys": {
        attributes: {
            type: ["Keyboard", "Drum", "Xylophone", "Toy Guitar"],
            material: ["Plastic", "Wood"],
            ageGroup: ["3+ Years", "5+ Years", "8+ Years"],
            power: ["Battery", "Manual"]
        },
        priceRange: {
            min: 200,
            max: 4000
        }
    },

    "Stuffed Toys": {
        attributes: {
            material: ["Plush", "Cotton", "Polyester"],
            size: ["Small", "Medium", "Large", "Extra Large"],
            filling: ["Polyester Fiber", "Cotton"],
            ageGroup: ["0+ Years", "3+ Years", "5+ Years"]
        },
        priceRange: {
            min: 200,
            max: 5000
        }
    },

    "Toy Kitchens": {
        attributes: {
            material: ["Plastic", "Wood"],
            size: ["Compact", "Medium", "Large"],
            pieces: ["10", "20", "30", "40"],
            ageGroup: ["3+ Years", "5+ Years"]
        },
        priceRange: {
            min: 800,
            max: 7000
        }
    },

    "Toy Blasters": {
        attributes: {
            material: ["ABS Plastic", "Foam"],
            type: ["Foam Launcher", "Spring Launcher"],
            range: ["5m", "10m", "15m"],
            ageGroup: ["8+ Years", "12+ Years"]
        },
        priceRange: {
            min: 300,
            max: 3000
        }
    },

    "Science Kits": {
        attributes: {
            type: ["Chemistry", "Physics", "Astronomy", "Biology"],
            experiments: ["10", "20", "30", "50"],
            level: ["Beginner", "Intermediate", "Advanced"],
            ageGroup: ["8+ Years", "10+ Years", "12+ Years"]
        },
        priceRange: {
            min: 400,
            max: 5000
        }
    },

    "Craft Kits": {
        attributes: {
            type: ["Painting", "Paper Craft", "Clay", "DIY"],
            pieces: ["20", "40", "60", "100"],
            level: ["Beginner", "Intermediate", "Advanced"],
            ageGroup: ["5+ Years", "8+ Years", "12+ Years"]
        },
        priceRange: {
            min: 200,
            max: 3000
        }
    },

    "Outdoor Toys": {
        attributes: {
            type: ["Garden", "Beach", "Active Play"],
            material: ["Plastic", "Rubber", "Wood"],
            ageGroup: ["3+ Years", "5+ Years", "8+ Years"],
            size: ["Small", "Medium", "Large"]
        },
        priceRange: {
            min: 200,
            max: 5000
        }
    },

    "Strategy Games": {
        attributes: {
            players: ["2", "2-4", "2-6"],
            duration: ["30 Minutes", "60 Minutes", "90 Minutes", "120 Minutes"],
            difficulty: ["Medium", "Advanced"],
            ageGroup: ["8+ Years", "12+ Years", "16+ Years"]
        },
        priceRange: {
            min: 400,
            max: 6000
        }
    },

    "Electronic Games": {
        attributes: {
            type: ["Handheld", "Educational", "Arcade"],
            display: ["LCD", "LED"],
            battery: ["4 Hours", "6 Hours", "8 Hours"],
            ageGroup: ["6+ Years", "8+ Years", "12+ Years"]
        },
        priceRange: {
            min: 500,
            max: 8000
        }
    },

    // ============================================================
    // GROCERY
    // ============================================================

    "Rice": {
        attributes: {
            variety: ["Basmati", "Sona Masuri", "Brown Rice", "Long Grain"],
            weight: ["1kg", "2kg", "5kg", "10kg"],
            packaging: ["Bag", "Pouch"],
            type: ["Regular", "Premium", "Organic"]
        },
        priceRange: {
            min: 60,
            max: 1500
        }
    },

    "Wheat Flour": {
        attributes: {
            type: ["Whole Wheat", "Multigrain", "Organic"],
            weight: ["1kg", "2kg", "5kg", "10kg"],
            packaging: ["Bag", "Pouch"],
            grade: ["Standard", "Premium"]
        },
        priceRange: {
            min: 50,
            max: 800
        }
    },

    "Pulses": {
        attributes: {
            type: ["Toor Dal", "Moong Dal", "Masoor Dal", "Chana Dal", "Urad Dal"],
            weight: ["500g", "1kg", "2kg", "5kg"],
            packaging: ["Bag", "Pouch"],
            quality: ["Regular", "Premium", "Organic"]
        },
        priceRange: {
            min: 60,
            max: 700
        }
    },

    "Cooking Oil": {
        attributes: {
            type: ["Sunflower", "Mustard", "Groundnut", "Soybean", "Rice Bran"],
            volume: ["500ml", "1L", "2L", "5L"],
            packaging: ["Bottle", "Pouch"],
            grade: ["Regular", "Refined", "Cold Pressed"]
        },
        priceRange: {
            min: 80,
            max: 1000
        }
    },

    "Spices": {
        attributes: {
            type: ["Turmeric", "Chilli", "Cumin", "Coriander", "Garam Masala"],
            weight: ["50g", "100g", "200g", "500g"],
            packaging: ["Pouch", "Jar"],
            form: ["Powder", "Whole"]
        },
        priceRange: {
            min: 30,
            max: 500
        }
    },

    "Salt": {
        attributes: {
            type: ["Iodized", "Rock Salt", "Sea Salt", "Low Sodium"],
            weight: ["500g", "1kg", "2kg"],
            packaging: ["Pouch", "Box", "Jar"],
            grain: ["Fine", "Medium", "Coarse"]
        },
        priceRange: {
            min: 20,
            max: 300
        }
    },

    "Sugar": {
        attributes: {
            type: ["White Sugar", "Brown Sugar", "Organic Sugar"],
            weight: ["500g", "1kg", "2kg", "5kg"],
            packaging: ["Bag", "Pouch"],
            grade: ["Standard", "Premium"]
        },
        priceRange: {
            min: 30,
            max: 400
        }
    },

    "Tea": {
        attributes: {
            type: ["Black Tea", "Green Tea", "Masala Tea", "Herbal Tea"],
            weight: ["100g", "250g", "500g", "1kg"],
            packaging: ["Box", "Pouch", "Tea Bags"],
            strength: ["Mild", "Medium", "Strong"]
        },
        priceRange: {
            min: 50,
            max: 1000
        }
    },

    "Coffee": {
        attributes: {
            type: ["Instant", "Ground", "Roasted Beans"],
            weight: ["50g", "100g", "200g", "500g"],
            packaging: ["Jar", "Pouch", "Can"],
            roast: ["Light", "Medium", "Dark"]
        },
        priceRange: {
            min: 100,
            max: 1500
        }
    },

    "Breakfast Cereals": {
        attributes: {
            type: ["Corn Flakes", "Muesli", "Oats", "Granola"],
            weight: ["250g", "500g", "750g", "1kg"],
            packaging: ["Box", "Pouch"],
            flavor: ["Original", "Honey", "Chocolate", "Fruit"]
        },
        priceRange: {
            min: 100,
            max: 700
        }
    },

    "Biscuits": {
        attributes: {
            type: ["Cream", "Digestive", "Glucose", "Cookies"],
            weight: ["100g", "200g", "400g", "800g"],
            packaging: ["Pack", "Box"],
            flavor: ["Vanilla", "Chocolate", "Butter", "Plain"]
        },
        priceRange: {
            min: 20,
            max: 400
        }
    },

    "Snacks": {
        attributes: {
            type: ["Chips", "Namkeen", "Popcorn", "Nuts"],
            weight: ["50g", "100g", "200g", "500g"],
            packaging: ["Pouch", "Box"],
            flavor: ["Salted", "Spicy", "Cheese", "Masala"]
        },
        priceRange: {
            min: 20,
            max: 600
        }
    },

    "Noodles": {
        attributes: {
            type: ["Instant Noodles", "Hakka Noodles", "Rice Noodles"],
            weight: ["70g", "150g", "300g", "500g"],
            packaging: ["Pack", "Pouch"],
            flavor: ["Masala", "Vegetable", "Chicken", "Plain"]
        },
        priceRange: {
            min: 20,
            max: 300
        }
    },

    "Pasta": {
        attributes: {
            type: ["Penne", "Fusilli", "Spaghetti", "Macaroni"],
            weight: ["250g", "500g", "1kg"],
            packaging: ["Pack", "Pouch"],
            variety: ["Regular", "Whole Wheat", "Gluten Free"]
        },
        priceRange: {
            min: 40,
            max: 500
        }
    },

    "Sauces": {
        attributes: {
            type: ["Tomato Sauce", "Chilli Sauce", "Soy Sauce", "Pasta Sauce"],
            volume: ["200ml", "500ml", "700ml", "1L"],
            packaging: ["Bottle", "Jar"],
            flavor: ["Classic", "Spicy", "Sweet", "Tangy"]
        },
        priceRange: {
            min: 50,
            max: 500
        }
    },

    "Pickles": {
        attributes: {
            type: ["Mango", "Lime", "Mixed Vegetable", "Chilli"],
            weight: ["200g", "400g", "500g", "1kg"],
            packaging: ["Jar", "Pouch"],
            style: ["Traditional", "Spicy", "Low Oil"]
        },
        priceRange: {
            min: 60,
            max: 600
        }
    },

    "Dry Fruits": {
        attributes: {
            type: ["Almonds", "Cashews", "Raisins", "Walnuts", "Mixed"],
            weight: ["100g", "250g", "500g", "1kg"],
            packaging: ["Pouch", "Box", "Jar"],
            quality: ["Regular", "Premium", "Organic"]
        },
        priceRange: {
            min: 100,
            max: 2000
        }
    },

    "Packaged Juices": {
        attributes: {
            type: ["Mango", "Orange", "Apple", "Mixed Fruit"],
            volume: ["200ml", "500ml", "1L", "2L"],
            packaging: ["Tetra Pack", "Bottle"],
            style: ["Regular", "No Added Sugar", "Fruit Blend"]
        },
        priceRange: {
            min: 30,
            max: 300
        }
    },

    "Chocolates": {
        attributes: {
            type: ["Milk Chocolate", "Dark Chocolate", "White Chocolate", "Filled Chocolate"],
            weight: ["40g", "80g", "150g", "300g"],
            cocoa: ["Low", "Medium", "High"],
            flavor: ["Plain", "Nut", "Caramel", "Fruit"]
        },
        priceRange: {
            min: 30,
            max: 1500
        }
    },

    "Baking Ingredients": {
        attributes: {
            type: ["Baking Powder", "Baking Soda", "Cocoa Powder", "Vanilla", "Yeast"],
            weight: ["50g", "100g", "200g", "500g"],
            packaging: ["Pouch", "Jar", "Box"],
            quality: ["Regular", "Premium", "Organic"]
        },
        priceRange: {
            min: 30,
            max: 500
        }
    },

        // ============================================================
    // AUTOMOTIVE
    // ============================================================

    "Car Batteries": {
        attributes: {
            type: ["Lead Acid", "AGM", "EFB"],
            voltage: ["12V"],
            capacity: ["35Ah", "45Ah", "60Ah", "75Ah"],
            warranty: ["1 Year", "2 Years", "3 Years"]
        },
        priceRange: {
            min: 3000,
            max: 15000
        }
    },

    "Car Chargers": {
        attributes: {
            power: ["18W", "30W", "45W", "65W"],
            ports: ["1", "2", "3"],
            connection: ["USB-A", "USB-C", "USB-A + USB-C"],
            type: ["Standard", "Fast Charging"]
        },
        priceRange: {
            min: 300,
            max: 3000
        }
    },

    "Engine Oils": {
        attributes: {
            viscosity: ["5W-30", "5W-40", "10W-30", "10W-40"],
            volume: ["1L", "3L", "4L", "5L"],
            type: ["Synthetic", "Semi Synthetic", "Mineral"],
            application: ["Petrol", "Diesel", "Petrol + Diesel"]
        },
        priceRange: {
            min: 400,
            max: 5000
        }
    },

    "Air Filters": {
        attributes: {
            material: ["Paper", "Synthetic Fiber", "Cotton"],
            type: ["Panel", "Cone", "Performance"],
            compatibility: ["Compact Car", "Sedan", "SUV", "Hatchback"],
            filtration: ["Standard", "High Performance"]
        },
        priceRange: {
            min: 300,
            max: 3000
        }
    },

    "Oil Filters": {
        attributes: {
            material: ["Synthetic Fiber", "Cellulose", "Composite"],
            type: ["Spin-On", "Cartridge"],
            compatibility: ["Petrol", "Diesel", "Universal"],
            filtration: ["Standard", "High Efficiency"]
        },
        priceRange: {
            min: 200,
            max: 2000
        }
    },

    "Car Floor Mats": {
        attributes: {
            material: ["Rubber", "PVC", "Carpet", "Leatherette"],
            type: ["Universal", "Custom Fit"],
            pieces: ["4 Piece", "5 Piece", "7 Piece"],
            waterproof: ["Yes", "No"]
        },
        priceRange: {
            min: 500,
            max: 5000
        }
    },

    "Seat Covers": {
        attributes: {
            material: ["Fabric", "Leatherette", "PU Leather"],
            type: ["Universal", "Custom Fit"],
            pieces: ["5 Piece", "7 Piece", "9 Piece"],
            installation: ["DIY", "Professional"]
        },
        priceRange: {
            min: 1500,
            max: 12000
        }
    },

    "Car Covers": {
        attributes: {
            material: ["Polyester", "Nylon", "Waterproof Fabric"],
            type: ["Indoor", "Outdoor", "All Weather"],
            size: ["Small", "Medium", "Large", "XL"],
            waterproof: ["Yes", "No"]
        },
        priceRange: {
            min: 500,
            max: 5000
        }
    },

    "Windshield Wipers": {
        attributes: {
            size: ["14 inch", "16 inch", "18 inch", "20 inch", "22 inch"],
            type: ["Conventional", "Beam", "Hybrid"],
            material: ["Rubber", "Silicone"],
            pieces: ["1", "2"]
        },
        priceRange: {
            min: 300,
            max: 2500
        }
    },

    "Car Cleaning Kits": {
        attributes: {
            pieces: ["5 Piece", "8 Piece", "12 Piece", "20 Piece"],
            type: ["Basic", "Complete", "Premium"],
            contents: ["Interior", "Exterior", "Interior + Exterior"],
            case: ["Bag", "Box", "No Case"]
        },
        priceRange: {
            min: 300,
            max: 4000
        }
    },

    "Tyre Inflators": {
        attributes: {
            power: ["12V", "24V", "Battery Powered"],
            pressure: ["100 PSI", "120 PSI", "150 PSI"],
            display: ["Analog", "Digital"],
            type: ["Portable", "Heavy Duty"]
        },
        priceRange: {
            min: 1000,
            max: 8000
        }
    },

    "Tyre Repair Kits": {
        attributes: {
            pieces: ["5 Piece", "10 Piece", "15 Piece", "20 Piece"],
            type: ["Puncture Repair", "Tubeless Repair"],
            tools: ["Basic", "Standard", "Professional"],
            case: ["Bag", "Box", "Plastic Case"]
        },
        priceRange: {
            min: 200,
            max: 2500
        }
    },

    "Car Vacuum Cleaners": {
        attributes: {
            power: ["60W", "100W", "120W", "150W"],
            type: ["Corded", "Cordless"],
            battery: ["20 Minutes", "30 Minutes", "45 Minutes"],
            filter: ["Standard", "HEPA"]
        },
        priceRange: {
            min: 800,
            max: 6000
        }
    },

    "Dashboard Cameras": {
        attributes: {
            resolution: ["1080p", "1440p", "2K", "4K"],
            storage: ["32GB", "64GB", "128GB"],
            display: ["No Display", "2 inch", "3 inch"],
            nightVision: ["Yes", "No"]
        },
        priceRange: {
            min: 2000,
            max: 25000
        }
    },

    "Parking Sensors": {
        attributes: {
            sensors: ["2", "4", "6", "8"],
            display: ["LED Display", "LCD Display", "No Display"],
            detectionRange: ["1m", "1.5m", "2m"],
            installation: ["Rear", "Front", "Front + Rear"]
        },
        priceRange: {
            min: 1000,
            max: 6000
        }
    },

    "LED Headlights": {
        attributes: {
            power: ["30W", "50W", "60W", "100W"],
            colorTemperature: ["3000K", "5000K", "6000K", "6500K"],
            voltage: ["12V", "24V"],
            type: ["Standard", "High Performance"]
        },
        priceRange: {
            min: 1000,
            max: 10000
        }
    },

    "Motorcycle Helmets": {
        attributes: {
            type: ["Full Face", "Open Face", "Modular"],
            size: ["S", "M", "L", "XL", "XXL"],
            material: ["ABS", "Polycarbonate", "Fiberglass"],
            certification: ["Standard", "Certified"]
        },
        priceRange: {
            min: 800,
            max: 15000
        }
    },

    "Motorcycle Covers": {
        attributes: {
            material: ["Polyester", "Nylon", "Waterproof Fabric"],
            size: ["Standard", "Large", "XL"],
            waterproof: ["Yes", "No"],
            type: ["Indoor", "Outdoor", "All Weather"]
        },
        priceRange: {
            min: 300,
            max: 2500
        }
    },

    "Motorcycle Accessories": {
        attributes: {
            type: ["Phone Holder", "Handlebar Grip", "Mirror", "Footrest"],
            material: ["Aluminium", "Steel", "ABS Plastic"],
            compatibility: ["Universal", "Model Specific"],
            installation: ["DIY", "Professional"]
        },
        priceRange: {
            min: 200,
            max: 5000
        }
    },

    "Car Accessories": {
        attributes: {
            type: ["Phone Holder", "Sun Shade", "Air Freshener", "Organizer"],
            material: ["Plastic", "Fabric", "Metal", "Leatherette"],
            compatibility: ["Universal", "Model Specific"],
            installation: ["DIY", "Professional", "Not Required"]
        },
        priceRange: {
            min: 150,
            max: 5000
        }
    },

    // ============================================================
    // ACCESSORIES
    // ============================================================

    "Backpacks": {
        attributes: {
            material: ["Polyester", "Nylon", "Canvas", "Leather"],
            capacity: ["15L", "20L", "25L", "30L"],
            compartments: ["2", "3", "4", "5"],
            type: ["Casual", "Travel", "Laptop"]
        },
        priceRange: {
            min: 500,
            max: 8000
        }
    },

    "Wallets": {
        attributes: {
            material: ["Leather", "PU Leather", "Fabric"],
            type: ["Bi-Fold", "Tri-Fold", "Card Wallet"],
            compartments: ["4", "6", "8", "10"],
            closure: ["Fold", "Zip", "Snap"]
        },
        priceRange: {
            min: 200,
            max: 5000
        }
    },

    "Belts": {
        attributes: {
            material: ["Leather", "PU Leather", "Canvas"],
            size: ["28", "30", "32", "34", "36", "38"],
            buckle: ["Metal", "Automatic", "Classic"],
            type: ["Formal", "Casual"]
        },
        priceRange: {
            min: 200,
            max: 3000
        }
    },

    "Sunglasses": {
        attributes: {
            frame: ["Plastic", "Metal", "Acetate"],
            lens: ["Polarized", "UV Protected", "Photochromic"],
            shape: ["Round", "Square", "Aviator", "Wayfarer"],
            size: ["Small", "Medium", "Large"]
        },
        priceRange: {
            min: 300,
            max: 10000
        }
    },

    "Traditional Watches": {
        attributes: {
            movement: ["Quartz", "Automatic", "Mechanical"],
            strap: ["Leather", "Metal", "Fabric"],
            display: ["Analog"],
            waterResistance: ["30m", "50m", "100m"]
        },
        priceRange: {
            min: 500,
            max: 50000
        }
    },

    "Caps": {
        attributes: {
            material: ["Cotton", "Polyester", "Canvas"],
            size: ["Free Size", "S", "M", "L"],
            type: ["Baseball", "Sports", "Casual"],
            closure: ["Adjustable", "Snapback", "Fitted"]
        },
        priceRange: {
            min: 150,
            max: 2000
        }
    },

    "Hats": {
        attributes: {
            material: ["Cotton", "Wool", "Straw", "Polyester"],
            size: ["S", "M", "L", "XL"],
            type: ["Sun Hat", "Bucket Hat", "Fedora", "Winter Hat"],
            style: ["Casual", "Formal", "Outdoor"]
        },
        priceRange: {
            min: 200,
            max: 3000
        }
    },

    "Handbags": {
        attributes: {
            material: ["Leather", "PU Leather", "Canvas", "Fabric"],
            size: ["Small", "Medium", "Large"],
            compartments: ["2", "3", "4", "5"],
            type: ["Shoulder Bag", "Tote", "Crossbody"]
        },
        priceRange: {
            min: 500,
            max: 15000
        }
    },

    "Travel Bags": {
        attributes: {
            material: ["Polyester", "Nylon", "Canvas"],
            capacity: ["30L", "40L", "50L", "60L"],
            type: ["Duffel", "Travel Backpack", "Weekender"],
            compartments: ["3", "4", "5"]
        },
        priceRange: {
            min: 700,
            max: 8000
        }
    },

    "Luggage": {
        attributes: {
            material: ["ABS", "Polycarbonate", "Aluminium"],
            size: ["Cabin", "Medium", "Large"],
            capacity: ["35L", "60L", "90L", "120L"],
            wheels: ["2", "4", "8"]
        },
        priceRange: {
            min: 1500,
            max: 25000
        }
    },

    "Keychains": {
        attributes: {
            material: ["Metal", "Plastic", "Leather", "Wood"],
            type: ["Basic", "Decorative", "Multi Tool"],
            size: ["Small", "Medium", "Large"],
            attachment: ["Ring", "Clip", "Carabiner"]
        },
        priceRange: {
            min: 30,
            max: 1000
        }
    },

    "Umbrellas": {
        attributes: {
            type: ["Folding", "Straight", "Automatic"],
            material: ["Polyester", "Nylon", "Pongee"],
            size: ["Small", "Medium", "Large"],
            opening: ["Manual", "Automatic"]
        },
        priceRange: {
            min: 200,
            max: 2500
        }
    },

    "Phone Cases": {
        attributes: {
            material: ["Silicone", "TPU", "Polycarbonate", "Leather"],
            type: ["Back Cover", "Wallet Case", "Rugged"],
            protection: ["Basic", "Medium", "Heavy"],
            finish: ["Matte", "Glossy", "Textured"]
        },
        priceRange: {
            min: 150,
            max: 3000
        }
    },

    "Laptop Sleeves": {
        attributes: {
            material: ["Neoprene", "Polyester", "Canvas", "Leather"],
            size: ["11 inch", "13 inch", "14 inch", "15.6 inch", "17 inch"],
            padding: ["Basic", "Medium", "Heavy"],
            closure: ["Zip", "Magnetic", "Velcro"]
        },
        priceRange: {
            min: 300,
            max: 4000
        }
    },

    "Card Holders": {
        attributes: {
            material: ["Leather", "PU Leather", "Metal", "Plastic"],
            capacity: ["4 Cards", "6 Cards", "8 Cards", "12 Cards"],
            type: ["Slim", "Bi-Fold", "Magnetic"],
            closure: ["Open", "Snap", "Magnetic"]
        },
        priceRange: {
            min: 150,
            max: 3000
        }
    },

    "Travel Organizers": {
        attributes: {
            material: ["Polyester", "Nylon", "Leather"],
            type: ["Cable Organizer", "Document Organizer", "Toiletry Organizer"],
            compartments: ["3", "5", "8", "10"],
            size: ["Small", "Medium", "Large"]
        },
        priceRange: {
            min: 300,
            max: 3000
        }
    },

    "Passport Covers": {
        attributes: {
            material: ["Leather", "PU Leather", "Fabric"],
            capacity: ["1 Passport", "2 Passports", "4 Passports"],
            compartments: ["3", "5", "8"],
            closure: ["Open", "Snap", "Zip"]
        },
        priceRange: {
            min: 200,
            max: 3000
        }
    },

    "Jewelry Boxes": {
        attributes: {
            material: ["Wood", "Velvet", "Leatherette", "Plastic"],
            size: ["Small", "Medium", "Large"],
            compartments: ["4", "8", "12", "20"],
            type: ["Travel", "Desktop", "Multi-Level"]
        },
        priceRange: {
            min: 300,
            max: 5000
        }
    },

    "Hair Accessories": {
        attributes: {
            type: ["Hair Clips", "Hair Bands", "Scrunchies", "Hair Pins"],
            material: ["Plastic", "Metal", "Fabric", "Acrylic"],
            packSize: ["2", "5", "10", "20"],
            style: ["Basic", "Decorative", "Fashion"]
        },
        priceRange: {
            min: 50,
            max: 1500
        }
    },

    "Fashion Accessories": {
        attributes: {
            type: ["Brooch", "Scarf", "Bracelet", "Fashion Pin"],
            material: ["Metal", "Fabric", "Leather", "Synthetic"],
            style: ["Casual", "Formal", "Traditional", "Modern"],
            packSize: ["1", "2", "3", "5"]
        },
        priceRange: {
            min: 100,
            max: 5000
        }
    }
};

module.exports = {
    PRODUCT_RULES
};