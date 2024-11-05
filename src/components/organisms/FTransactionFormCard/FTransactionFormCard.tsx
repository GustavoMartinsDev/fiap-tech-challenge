import FTransactionForm from "@/components/molecules/FTransactionForm/FTransactionForm";
import FCard from "@/components/organisms/FCard/FCard";
import { addTransaction } from "@/services/Transaction/Transaction.controller";
import { TransactionInput } from "@/services/Transaction/Transaction.model";
import { Box } from "@mui/material";
import Image from "next/image";
import styles from "./FTransactionFormCard.styles";

export default async function FTransactionFormCard() {
  async function createNewTransaction(transaction: TransactionInput) {
    "use server";
    await addTransaction(transaction);
  }

  return (
    <FCard
      title="Nova transação"
      variant="light"
      options={{
        sx: {
          height: "600px",
          position: "relative",
        },
      }}
    >
      <Box
        sx={{
          ...styles.commonImage,
          ...styles.bottomPixelsImage,
        }}
      >
        <Image src="/assets/card-pixels-3.svg" alt="" layout="fill" />
      </Box>
      <Box
        sx={{
          ...styles.commonImage,
          ...styles.topPixelsImage,
        }}
      >
        <Image src="/assets/card-pixels-4.svg" alt="" layout="fill" />
      </Box>
      <Box
        sx={{
          ...styles.commonImage,
          bottom: 0,
          right: 0,
          width: "327px",
          height: "231px",
        }}
      >
        <Image src="/assets/card-illustration-2.svg" alt="" layout="fill" />
      </Box>

      <FTransactionForm addTransaction={createNewTransaction} />
    </FCard>
  );
}
