import type { VariantProps } from "class-variance-authority"
import { cva } from "class-variance-authority"

const iconVariants = cva("i-carbon-alarm text-yellow", {
  variants: {
    size: {
      sm: "text-2xl",
      lg: "text-5xl",
    },
  },
  defaultVariants: {
    size: "sm",
  },
})

const titleVariants = cva("font-bold", {
  variants: {
    size: {
      sm: "text-lg",
      lg: "text-3xl",
    },
  },
  defaultVariants: {
    size: "sm",
  },
})

const descriptionVariants = cva("opacity-[45%]", {
  variants: {
    size: {
      sm: "text-sm",
      lg: "text-base",
    },
  },
  defaultVariants: {
    size: "sm",
  },
})

export interface HeaderProps
  extends VariantProps<typeof iconVariants>,
    VariantProps<typeof titleVariants>,
    VariantProps<typeof descriptionVariants> {
  className?: string
}

export default function Header({ className, size }: HeaderProps) {
  return (
    <div className={`flex flex-col items-center my-4 gap-4 ${className ?? ""}`}>
      <div className="flex items-center gap-2">
        <span className={iconVariants({ size })}></span>
        <h1 className={titleVariants({ size })}>这是标题</h1>
      </div>
      <p className={descriptionVariants({ size })}>这是一句描述</p>
    </div>
  )
}
