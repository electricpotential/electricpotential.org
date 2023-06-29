import clsx from "clsx"
import { FC, PropsWithChildren } from "react"

export const Button: FC<
  PropsWithChildren<{ className?: string; onClick?: () => void }>
> = ({ className, children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "flex items-center justify-center rounded-lg p-4 bg-blue-500",
        className
      )}
    >
      {children}
    </button>
  )
}

// In vanilla javascript, this would be written as below.
// You will notice if you uncomment this, and comment the top Button, it still works
// but our code editor will complain about the types not being defined

// export const Button = ({ className, children }) => {
//   return (
//     <button
//       className={clsx(
//         "flex items-center justify-center rounded-lg p-4 bg-blue-500",
//         className
//       )}
//     >
//       {children}
//     </button>
//   )
// }
