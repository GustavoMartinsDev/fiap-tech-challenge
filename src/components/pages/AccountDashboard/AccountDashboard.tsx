import FAccountSummaryCard from "@/components/organisms/FAccountSummaryCard/FAccountSummaryCard";
import FCard from "@/components/organisms/FCard/FCard";
import FHeader from "@/components/organisms/FHeader/FHeader";
import FMenuDropdown from "@/components/organisms/FMenuDropdown/FMenuDropdown";
import FMenuList from "@/components/organisms/FMenuList/FMenuList";
import FTransactionFormCard from "@/components/organisms/FTransactionFormCard/FTransactionFormCard";
import FTransactionListCard from "@/components/organisms/FTransactionListCard/FTransactionListCard";
import { MENU_ITEMS_DASHBOARD } from "@/constants";
import { Account } from "@/services/Account/Account.model";
import {
  Transaction,
  TransactionData,
  TransactionInput,
} from "@/services/Transaction/Transaction.model";
import { AccountCircle } from "@mui/icons-material";
import { Box, Container, Grid2, Typography } from "@mui/material";

interface AccountDashboardProps {
  account: Account;
  transactionList: Transaction[];
  handleAddTransaction?: (transaction: TransactionInput) => void;
  handleEditTransaction?: (transaction: TransactionData) => void;
  handleDeleteTransaction?: (transactionId: string) => void;
}
export default function AccountDashboard({
  account,
  transactionList,
  handleAddTransaction,
  handleEditTransaction,
  handleDeleteTransaction,
}: AccountDashboardProps) {
  return (
    <main
      style={{
        minWidth: "100vw",
        minHeight: "100vh",
        backgroundColor: "var(--mui-palette-tertiary-light)",
      }}
    >
      <FHeader
        leftContent={
          <Box>
            <FMenuDropdown
              menuItems={MENU_ITEMS_DASHBOARD}
              options={{ sx: { display: { xs: "flex", lg: "none" } } }}
            />
          </Box>
        }
        rightContent={
          <Box display="flex" alignItems="center" gap={8}>
            <Typography variant="body1">{account.fullName}</Typography>
            <AccountCircle color="secondary" sx={{ fontSize: 40 }} />
          </Box>
        }
      />
      <Container maxWidth="xl">
        <Grid2 container spacing={3} paddingTop={3} paddingBottom={3}>
          <Grid2 size={{ xs: 0, lg: 2 }}>
            <FCard
              options={{
                sx: {
                  display: { xs: "none", lg: "block" },
                },
              }}
            >
              <FMenuList menuItems={MENU_ITEMS_DASHBOARD} />
            </FCard>
          </Grid2>

          <Grid2
            size={{ xs: 12, lg: 6 }}
            display="flex"
            flexDirection="column"
            gap={3}
          >
            <FAccountSummaryCard
              firstName={account.firstName}
              currency={account.currency}
              value={account.balance}
            />
            <FTransactionFormCard addTransaction={handleAddTransaction} />
          </Grid2>

          <Grid2 size={{ xs: 12, lg: 4 }}>
            <FTransactionListCard
              transactionItems={transactionList}
              editTransaction={handleEditTransaction}
              deleteTransaction={handleDeleteTransaction}
            />
          </Grid2>
        </Grid2>
      </Container>
    </main>
  );
}
