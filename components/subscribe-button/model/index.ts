export type StickyButtonState = "visible" | "hidden";

export const stickyButtonStyles: Record<
  StickyButtonState,
  React.CSSProperties
> = {
  visible: {
    opacity: "1",
    pointerEvents: "auto",
    transform: "translate(-50%, 0) scaleY(1)",
  },
  hidden: {
    opacity: "0",
    transform: "translate(-50%, 200%) scaleY(0)",
    pointerEvents: "none",
  },
};
