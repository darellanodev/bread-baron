import { Customer } from '../../components/Customer'

export function MarketCustomers() {
  return (
    <div className="mb-6">
      <p className="text-xs font-bold text-textSecondary uppercase tracking-widest mb-3">
        Customers in Queue (12)
      </p>
      <div className="flex flex-col gap-3">
        <Customer name="The Mayor" wants="5x Rustic Bread" />
        <Customer name="Construction Worker" wants="2x Croissants" />
        <Customer name="Village Baker" wants="10x Dough Bags" />
      </div>
    </div>
  )
}
