import Branch from "./branch";
import Customer from "./customer";

class Bank {
    private name: string;
    private branches: Branch[];
  
    constructor(name: string) {
      this.name = name;
      this.branches = [];
    }
  
    public addBranch(branch: Branch): boolean {
      if (this.branches.includes(branch)) {
        return false;
      }
      this.branches.push(branch);
      return true;
    }
  
    public addCustomer(branch: Branch, customer: Customer): boolean {
      if (!this.branches.includes(branch)) {
        return false;
      }
      return branch.addCustomer(customer);
    }
  
    public addCustomerTransaction(
      branch: Branch,
      customerId: string,
      amount: number
    ): boolean {
      if (!this.branches.includes(branch)) {
        return false;
      }
      return branch.addCustomerTransaction(customerId, amount);
    }
  
    public findBranchByName(name: string): Branch[] | null {
      const matchedBranches = this.branches.filter(
        (branch) => branch.getName() === name
      );
      return matchedBranches.length > 0 ? matchedBranches : null;
    }
  
    public checkBranch(branch: Branch): boolean {
      return this.branches.includes(branch);
    }
  
    public listCustomers(branch: Branch, showTransactions: boolean): boolean {
      if (!this.branches.includes(branch)) {
        return false;
      }
  
      const customers = branch.getCustomers();
      console.log(`Customer details for branch ${branch.getName()}`);
      for (const customer of customers) {
        console.log(`Customer: ${customer.getName()}, id: ${customer.getId()}]`);
        if (showTransactions) {
          console.log("Transactions:");
          const transactions = customer.getTransactions();
          for (const transaction of transactions) {
            console.log(
              `${transaction.date.toLocaleDateString()}: ${
                transaction.amount
              }`
            );
          }
        }
        else{
            return false
        }
      }
      return true;
    }
  }  

export default Bank