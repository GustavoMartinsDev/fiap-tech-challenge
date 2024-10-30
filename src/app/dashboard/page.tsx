import { Grid2, Typography } from "@mui/material";
import styles from "./page.module.css";
import FButton from "@/components/atoms/FButton/FButton";
import { getAccountInfo } from "@/services/Account/Account.controller";
import { Account } from "@/services/Account/Account.model";

export default async function Dashboard() {
  const account: Account = await getAccountInfo();

  return (
    <Grid2 container className={styles.page} spacing={2}>
        { account.name }
        { account.balance }
        { account.currency }
        <main>
          <Typography variant="h1" color="primary">Foo</Typography>
          <Typography variant="subtitle1" color="secondary">Foo</Typography>
          <FButton options={{ variant: 'contained', color: 'primary'}} innerText="Oi primario"/>
          <FButton options={{ variant: 'contained', color: 'secondary'}} innerText="Oi secondario"/>
        </main>
        <aside>
          <Typography variant="body1" color="primary">Foo</Typography>
          <Typography variant="caption" color="primary">Bar</Typography>
        </aside>
      </Grid2>
  );
}
