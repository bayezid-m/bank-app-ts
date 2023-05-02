import Customer from "./customer";

class Branch {
    private name: string;
    private customers: Customer[];
  
    constructor(name: string) {
      this.name = name;
      this.customers = [];
    }
  
    public getName(): string {
      return this.name;
    }
  
    public getCustomers(): Customer[] {
      return this.customers;
    }
  
    public addCustomer(customer: Customer): boolean {
      if (this.customers.some((c) => c.getId() === customer.getId())) {
        return false;
      }
      this.customers.push(customer);
      return true;
    }
  
    public addCustomerTransaction(
      customerId: string,
      amount: number
    ): boolean {
      const customer = this.findCustomer(customerId);
      if (customer === null) {
        return false;
      }
      customer.addTransaction(amount);
      return true;
    }
  
    public findCustomer(customerId: string): Customer | null {
      const matchedCustomers = this.customers.filter(
        (customer) => customer.getId() === customerId
      );
      return matchedCustomers.length > 0 ? matchedCustomers[0] : null;
    }
  }
  

export default Branch