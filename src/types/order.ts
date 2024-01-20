interface OrderProduct {
  id: number;
  count: number;
}

interface OrderData {
  products: OrderProduct[];
}

export interface OrderResponse {
  id: number;
  userId: number;
  status: string;
  createdAt: string;
  data: OrderData;
}
