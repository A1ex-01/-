export interface IDashBorder {
  categoryGoodsCount: any[]
  categoryGoodsSale: any[]
  categoryGoodsFavor: any[]
  addressGoodsSale: any[]
}
export interface ICategory {
  id: number
  name: string
  goodsCount: number
}
export interface IAddress {
  address: string
  count: number
}
