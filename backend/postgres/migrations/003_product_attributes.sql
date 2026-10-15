-- ============================================================
-- ShopBench
-- Migration: 003_product_attributes
--
-- Purpose:
-- Store product-type-specific attributes as JSONB.
-- ============================================================

ALTER TABLE products
ADD COLUMN IF NOT EXISTS attributes JSONB
NOT NULL
DEFAULT '{}'::jsonb;