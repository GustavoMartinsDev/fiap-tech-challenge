import FTransactionList, {
  FTransactionListProps,
} from "@/components/molecules/FTransactionList/FTransactionList";
import { Container, Stack, Typography } from "@mui/material";
import { FCard } from "components";

export default function FTransactionListCard({
  transactionItems,
  editTransaction,
  deleteTransaction,
}: FTransactionListProps) {
  return (
    <FCard>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        paddingBottom={1}
      >
        <Typography variant="h1" fontWeight={600}>
          Extrato
        </Typography>
      </Stack>
      <Container
        sx={{
          height: "600px",
          overflowY: "visible",
          overflowX: "hidden",
        }}
      >
        <FTransactionList
          transactionItems={transactionItems}
          editTransaction={editTransaction}
          deleteTransaction={deleteTransaction}
        />
      </Container>
    </FCard>
  );
}
