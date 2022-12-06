<template>
  <div>

  </div>
</template>
<script setup lang="ts">
export interface Product {
  /**
   * product id
   *
   * @default null
   */
  id: string | number
  /**
   * product title
   *
   * @default null
   */
  title: string
  /**
   * product subtitle
   *
   * @default null
   */
  subtitle?: string | void
  /**
   * product excerpt
   *
   * @default null
   */
  excerpt?: string | null
  /**
   * product description
   *
   * @default null
   */
  description?: string | null
  /**
   * product default final price
   *
   * @default 0
   */
  price?: Price | number | void
  /**
   * product final price by attributes and limitations
   *
   * @default null
   */
  prices?: Array<Price> | void
  /**
   * product discount amount
   *
   * @default 0
   */
  discount?: number | void
  /**
   * product is available for sale
   *
   * @default true
   */
  available?: boolean | void
  /**
   * product category
   *
   * @default true
   */
  category?: Array<Category> | Category | object | string | void
  /**
   * product category
   *
   * @default true
   */
  thumbnail?: Image | string | void
  /**
   * product category
   *
   * @default true
   */
  images?: Array<Image> | Array<string> | void
  /**
   * product rate
   *
   * @default 0
   */
  rate?: number | void
  /**
   * product rate count
   *
   * @default 0
   */
  rateCount?: number | void
  /**
   * product tags
   *
   * @default null
   */
  tags?: Array<String> | void
  /**
   * product selectable attributes
   *
   * @default null
   */
  attributes?: Array<Attribute> | void
  /**
   * product features
   *
   * @default null
   */
  features?: Array<Feature> | void
  /**
   * product jsonLD object
   *
   * @default null
   */
  jsonLD?: Object | void
  /**
   * maximum allowed number of product per order
   *
   * @default null
   */
  maxAllowed?: number | void
  /**
   * meta description for seo
   *
   * @default null
   */
  metaDescription?: string | void
  /**
   * list of meta tags
   *
   * @default null
   */
  metaTags?: Array<Meta> | void
}

export interface Shipping {
  /**
   * list of available methods
   *
   * @default null
   */
  methods?: Array<Meta> | void
  /**
   * cart
   *
   * @default null
   */
  cart?: Array<Product> | void
}

const props = defineProps<Shipping>()
</script>