import Transaction from './interface';

class Customer {
    private name: string;
    private id: string;
    private transactions: Transaction[];
  
    constructor(name: string) {
      this.name = name;
      this.id = this.generateId();
      this.transactions = [];
    }
  
    public getName(): string {
      return this.name;
    }
  
    public getId(): string {
      return this.id;
    }
  
    public getTransactions(): Transaction[] {
      return this.transactions;
    }
  
    public getBalance(): number {
      let balance = 0;
      for (const transaction of this.transactions) {
        balance += transaction.amount;
      }
      return balance;
    }
  
    public addTransaction(amount: number): boolean {
        const balance =this.getBalance() + amount
        if(balance >= 0) {
            const transaction = {amount, date: new Date()}
            this.transactions.push(transaction)
            return true
        }else return false
    }
  
    private generateId(): string {
      const chars = "abcdef0123456789";
      let id = "";
      for (let i = 0; i < 8; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        id += chars[randomIndex];
      }
      return id;
    }
  }
  

export default Customer