import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { DeleteTwoTone, EditTwoTone } from "@mui/icons-material";
import FIconButton from "./FIconButton";

const meta = {
  title: "Atoms/IconButton",
  component: FIconButton,
  parameters: {
    layout: "centered",
  },
  args: { onClick: fn() },
} satisfies Meta<typeof FIconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Plain: Story = {
  args: {
    variant: "plain",
    children: <DeleteTwoTone />,
    options: { color: "primary" },
  },
};

export const Fancy: Story = {
  args: {
    variant: "fancy",
    children: <EditTwoTone />,
    options: { color: "primary" },
  },
};
