export namespace Types {
    //
}

export namespace Models {
    /**
     * @abstract
     * @class AccountType
     * @description Klasa posiada polimorficzne metody, z których korzysta klasa Account
     */
    export abstract class AccountType {
        public abstract withdraw(account: Account, amount: number): void;
        public abstract accountType(): string;
    }
    /**
     * @class Account
     * @param {string} _owner - Właściciel konta
     * @param {number} _balance - Stan konta
     * @param {AccountType} _accountType - Typ konta
     */
    export class Account {
        private _owner: string;
        private _balance: number;
        private _accountType: AccountType;

        constructor(owner: string, accountType: AccountType) {
            this._owner = owner;
            this._accountType = accountType;
            this._balance = 0;
        }

        /**
         * @param {number} amount - Kwota
         * @memberof Account
         * @description Wywołanie metody withdraw odpowiedniego typu konta
         */
        public withdraw(amount: number): void {
            this._accountType.withdraw(this, amount);
        }

        public deposit(amount: number): void {
            this._balance += amount;
        }

        public switchAccountType(account: AccountType) {
            this._accountType = account;
        }

        get balance() { return this._balance }

        set balance(amount: number) { this._balance = amount }

        public getAccountState() {
            return `${this._accountType.accountType()} ${this._owner} Saldo: ${this.balance}`;
        }
    }
    /**
     * @class StandardAccountType
     * @extends {AccountType}
     * @param {number} _limit - Limit pojedynczej transakcji
     * @param {number} _fee - Prowizja od transakcji
     * @method withdraw - Implementcja abstrakcyjnej metody pobrania pieniędzy z konta
     * Klasy dziedziczące po AccountType będą posiadały odpowiednie implementacje metod
     */
    export class StandardAccountType extends AccountType {
        private _limit: number = 5000;
        private _fee: number = 0.03;
        
        /**
         * @param {Account} account - Referancja do stanu
         * @param {number} amount - Kwota
         * @memberof StandardAccountType
         * @method withdraw - Implementcja abstrakcyjnej metody pobrania pieniędzy z konta.
         * Klasy dziedziczące po AccountType będą posiadały odpowiednie implementacje metod.
         */
        public withdraw(account: Account, amount: number): void {
            if((account.balance >= this._limit) && (amount <= amount + (amount * this._fee))) {
                account.balance -= amount + (amount * this._fee);
            }
        }

        public accountType() { return 'Konto Standard' }
    }

    export class VIPAccountType extends AccountType {
        private _limit: number = 30000;
        
        public withdraw(account: Account, amount: number): void {
            if(account.balance >= this._limit) {
                account.balance -= amount;
            }
        }

        public accountType() { return 'Konto VIP' }
    }
}