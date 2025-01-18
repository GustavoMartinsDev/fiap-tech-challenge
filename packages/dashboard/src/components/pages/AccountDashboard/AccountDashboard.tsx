"use client";
import FHeader from "@/components/molecules/FHeader/FHeader";
import FMenuList from "@/components/molecules/FMenuList/FMenuList";
import FMenuDropdown from "@/components/organisms/FMenuDropdown/FMenuDropdown";
import FTransactionFormCard from "@/components/organisms/FTransactionFormCard/FTransactionFormCard";
import FTransactionListCard from "@/components/organisms/FTransactionListCard/FTransactionListCard";
import { MENU_ITEMS_DASHBOARD } from "@/constants";
import { Account } from "@/services/Account/Account.model";
import {
  Transaction,
  TransactionData,
  TransactionInput,
} from "@/services/Transaction/Transaction.model";
import { formatCurrency, getFormattedDateNow } from "@/utils/formatters";
import { AccountCircle } from "@mui/icons-material";
import { Box, Container, Grid2, Typography } from "@mui/material";
import { FAccountSummaryCard, FCard } from "components";
import Image from "next/image";
import Link from "next/link";

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
  const formattedBalance = formatCurrency(account.balance, account.currency);
  const formattedDate = getFormattedDateNow();

  return (
    <main
      style={{
        minWidth: "100%",
        minHeight: "100%",
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
          <Box display="flex" alignItems="center" gap={2}>
            <Typography variant="body1">{account.fullName}</Typography>
            <Link href={"/"} style={{ display: "flex" }}>
              <AccountCircle color="secondary" sx={{ fontSize: 40 }} />
            </Link>
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
              balance={formattedBalance}
              date={formattedDate}
            >
              {{
                bottomPixels: (
                  <>
                    <Image src="/assets/card-pixels-2.svg" alt="" fill />
                  </>
                ),
                topPixels: (
                  <>
                    <Image src="/assets/card-pixels-1.svg" alt="" fill />
                  </>
                ),
                illustration: (
                  <>
                    <Image src="/assets/card-illustration-1.svg" alt="" fill />
                  </>
                ),
              }}
            </FAccountSummaryCard>
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
