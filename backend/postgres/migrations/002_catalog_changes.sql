-- ============================================================
-- ShopBench
-- Migration: 002_catalog_changes
--
-- Purpose:
-- Simplify the catalog relationship model and add media paths.
-- ============================================================


-- ============================================================
-- 1. REMOVE OLD CATEGORY-BRAND RELATIONSHIP
-- ============================================================

DROP TABLE IF EXISTS category_brands CASCADE;


-- ============================================================
-- 2. ADD MEDIA PATHS
-- ============================================================

ALTER TABLE categories
ADD COLUMN IF NOT EXISTS image_path VARCHAR(255);


ALTER TABLE brands
ADD COLUMN IF NOT EXISTS logo_path VARCHAR(255);


ALTER TABLE suppliers
ADD COLUMN IF NOT EXISTS logo_path VARCHAR(255);


ALTER TABLE products
ADD COLUMN IF NOT EXISTS image_path VARCHAR(255);


-- ============================================================
-- 3. ADD DIRECT PRODUCT -> CATEGORY RELATIONSHIP
-- ============================================================

ALTER TABLE products
ADD CONSTRAINT fk_products_category
FOREIGN KEY (category_id)
REFERENCES categories(id);


-- ============================================================
-- 4. ADD DIRECT PRODUCT -> BRAND RELATIONSHIP
-- ============================================================

ALTER TABLE products
ADD CONSTRAINT fk_products_brand
FOREIGN KEY (brand_id)
REFERENCES brands(id);


-- ============================================================
-- MIGRATION COMPLETE
-- ============================================================