import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 focus-visible:ring-offset-ink disabled:pointer-events-none disabled:opacity-40 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        ember:
          "bg-ember text-ink hover:bg-ember-hot rounded-none uppercase tracking-[0.14em] text-[11px]",
        ghost:
          "bg-transparent text-paper border border-paper/20 hover:border-ember hover:text-ember rounded-none uppercase tracking-[0.14em] text-[11px]",
        paper:
          "bg-paper text-ink hover:bg-white rounded-none uppercase tracking-[0.14em] text-[11px]",
        ink: "bg-ink text-paper hover:bg-graphite rounded-none uppercase tracking-[0.14em] text-[11px]",
      },
      size: {
        default: "h-12 px-7",
        sm: "h-10 px-5",
        lg: "h-14 px-9",
      },
    },
    defaultVariants: {
      variant: "ember",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
