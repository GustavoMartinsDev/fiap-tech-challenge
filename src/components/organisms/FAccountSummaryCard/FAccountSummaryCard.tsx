"use client";
import FAccountSummary, {
  FAccountSummaryProps,
} from "@/components/molecules/FAccountSummary/FAccountSummary";
import FCard from "@/components/organisms/FCard/FCard";
import { Grid2, Typography } from "@mui/material";

interface FAccountSummaryCardProps extends FAccountSummaryProps {
  firstName: string;
}

export default function FAccountSummaryCard(props: FAccountSummaryCardProps) {
  const now = new Date();

  const todayFormatted = now.toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <FCard variant="dark">
      <Typography variant="h1" fontWeight={600}>
        Olá, {props.firstName} :)
      </Typography>
      <Grid2 container height={402} width={690} paddingTop={3}>
        <Grid2 size={8} paddingTop={1}>
          <Typography variant="caption" textTransform="capitalize">
            {todayFormatted}
          </Typography>
        </Grid2>
        <Grid2 size="grow">
          <FAccountSummary value={props.value} currency={props.currency} />
        </Grid2>
      </Grid2>
    </FCard>
  );
}
