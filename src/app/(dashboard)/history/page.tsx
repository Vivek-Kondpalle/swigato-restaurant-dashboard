import fetchOrders from '@/service/orders';
import OrderListing from '@/ui/layout/OrderListing';
import OrderCard from '@/ui/orders/OrderCard';
import OrderStage from '@/ui/orders/OrderStage';

export default function HistoryPage() {
    const orders = fetchOrders();

    return (
        <OrderListing>
            {orders.map(order => (
                <OrderCard key={order.id} order={order} />
            ))}
        </OrderListing>
    );
}


