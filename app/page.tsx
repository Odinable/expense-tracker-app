import Balance from "@/components/balance";
import Header from "@/components/header";
import Incexp from "@/components/incexp";
import TransactionList from "@/components/transactionList";
import Addtransaction from "@/components/addtransaction";

export default function Home() {
  return (
    <main>

    <div>
    <Header/>

          <div>
            <Balance />
            <Incexp/>
            <TransactionList/>
            <Addtransaction/>
          </div>
      
    </div>

     



    </main>
  )
}
