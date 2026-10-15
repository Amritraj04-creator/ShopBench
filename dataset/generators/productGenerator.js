
const { faker } = require("@faker-js/faker");

const {
    CATEGORIES,
    getBrandCodesForCategory,
    getSupplierCodesForCategory
} = require("./catalog");

const { BRANDS } = require("./brands");
const { SUPPLIERS } = require("./suppliers");
const { PRODUCT_RULES } = require("./productRules");

// ------------------------------------------------------------
// Deterministic seeds
// ------------------------------------------------------------

const DATASET_SEEDS = {
    small: 20260915,
    medium: 20260915,
    large: 20260915
};

// ------------------------------------------------------------
// Initialize Faker
// ------------------------------------------------------------

function initializeFaker(datasetName) {
    const seed = DATASET_SEEDS[datasetName];

    if (seed === undefined) {
        throw new Error(`Unknown dataset: ${datasetName}`);
    }

    faker.seed(seed);
}

// ------------------------------------------------------------
// Helpers
// ------------------------------------------------------------

function pickRandom(array) {
    if (!Array.isArray(array) || array.length === 0) {
        throw new Error("Cannot pick from an empty array.");
    }

    return faker.helpers.arrayElement(array);
}

function generatePrice(priceRange) {
    if (
        !priceRange ||
        !Number.isFinite(Number(priceRange.min)) ||
        !Number.isFinite(Number(priceRange.max)) ||
        Number(priceRange.min) <= 0 ||
        Number(priceRange.max) < Number(priceRange.min)
    ) {
        throw new Error("Invalid product price range.");
    }

    return Number(
        faker.number
            .float({
                min: Number(priceRange.min),
                max: Number(priceRange.max),
                fractionDigits: 2
            })
            .toFixed(2)
    );
}

// ------------------------------------------------------------
// Generate product-specific attributes
// ------------------------------------------------------------

function generateAttributes(productType) {
    const rule = PRODUCT_RULES[productType];

    if (!rule || !rule.attributes) {
        throw new Error(
            `No attribute rules found for ${productType}`
        );
    }

    // Your productRules.js stores attributes as an object:
    // { processor: [...], ram: [...], storage: [...] }
    // Select one value from each attribute's available values.

    const attributes = {};

    for (const [attributeName, possibleValues] of
        Object.entries(rule.attributes)) {
        attributes[attributeName] = pickRandom(possibleValues);
    }

    return attributes;
}

// ------------------------------------------------------------
// Find category for a product type
// ------------------------------------------------------------

function findCategoryForProductType(productType) {
    return CATEGORIES.find(category =>
        category.productTypes.includes(productType)
    );
}

// ------------------------------------------------------------
// Find brand and supplier
// ------------------------------------------------------------

function findBrandByCode(brandCode) {
    return BRANDS.find(brand => brand.code === brandCode);
}

function findSupplierByCode(supplierCode) {
    return SUPPLIERS.find(
        supplier => supplier.code === supplierCode
    );
}

// ------------------------------------------------------------
// Generate product name
// ------------------------------------------------------------

function generateProductName(productType, brand) {
    const modelNumber = faker.string.alphanumeric({
        length: 6,
        casing: "upper"
    });

    return `${brand.name} ${productType} ${modelNumber}`;
}

// ------------------------------------------------------------
// Generate product description
// ------------------------------------------------------------

function generateProductDescription(
    productType,
    brand,
    attributes
) {
    const attributeText = Object.entries(attributes)
        .map(([key, value]) => `${key}: ${value}`)
        .join(", ");

    return (
        `${brand.name} ${productType} designed for everyday use. ` +
        `Specifications: ${attributeText}.`
    );
}

// ------------------------------------------------------------
// Generate image path
// ------------------------------------------------------------

function generateImagePath(category, productType) {
    const categoryFolder = category.name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");

    const productFolder = productType
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");

    const imageNumber = faker.number.int({
        min: 1,
        max: 10
    });

    return (
        `products/${categoryFolder}/${productFolder}/` +
        `${productFolder}-${String(imageNumber).padStart(2, "0")}.jpg`
    );
}

// ------------------------------------------------------------
// Generate one product
// ------------------------------------------------------------

function generateProduct(productNumber, productType, datasetName) {
    const category = findCategoryForProductType(productType);

    if (!category) {
        throw new Error(`Category not found for ${productType}`);
    }

    const categoryIndex = CATEGORIES.indexOf(category);

    const brandCodes = getBrandCodesForCategory(
        categoryIndex,
        datasetName
    );

    const supplierCodes = getSupplierCodesForCategory(
        categoryIndex,
        datasetName
    );

    const brand = findBrandByCode(pickRandom(brandCodes));
    const supplier = findSupplierByCode(pickRandom(supplierCodes));

    if (!brand) {
        throw new Error("Could not find the selected brand.");
    }

    if (!supplier) {
        throw new Error("Could not find the selected supplier.");
    }

    const rule = PRODUCT_RULES[productType];

    if (!rule) {
        throw new Error(`No product rule found for ${productType}`);
    }

    const attributes = generateAttributes(productType);
    const price = generatePrice(rule.priceRange);

    const stockQuantity = faker.number.int({
        min: 0,
        max: 500
    });

    const code = `P${String(productNumber).padStart(6, "0")}`;

    return {
        code,
        category_code: category.code,
        category_name: category.name,
        product_type: productType,
        brand_code: brand.code,
        brand_name: brand.name,
        supplier_code: supplier.code,
        supplier_name: supplier.name,
        name: generateProductName(productType, brand),
        description: generateProductDescription(
            productType,
            brand,
            attributes
        ),
        price,
        stock_quantity: stockQuantity,
        image_path: generateImagePath(category, productType),
        attributes
    };
}

module.exports = {
    DATASET_SEEDS,
    initializeFaker,
    pickRandom,
    generatePrice,
    generateAttributes,
    findCategoryForProductType,
    findBrandByCode,
    findSupplierByCode,
    generateProductName,
    generateProductDescription,
    generateImagePath,
    generateProduct
};
