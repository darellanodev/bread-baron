import { Customer } from '../../components/Customer'
import { useGameStore } from '../../../../store/gameStore'

export function MarketCustomers() {
  const { customers } = useGameStore()

  return (
    <div className="mb-6">
      <p className="text-xs font-bold text-textSecondary uppercase tracking-widest mb-3">
        Customers in Queue ({customers.length})
      </p>
      <div className="flex flex-col gap-3">
        {customers.map((customer, index) => (
          <Customer
            key={customer.id}
            name={customer.name}
            orders={customer.orders}
            totalOrders={customer.totalOrders}
            isActive={index === 0}
          />
        ))}
      </div>
    </div>
  )
}
