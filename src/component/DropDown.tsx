
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Link } from "react-router-dom"

interface DropDownItem {
  label: string;
  to?: string;
  onClick?: () => void;
  className?: string;
}

const DropDown = ({
  trigger,
  label = "Menu",
  items = [] as DropDownItem[],
}: {
  trigger: React.ReactNode;
  label?: string;
  items?: DropDownItem[];
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>
      <DropdownMenuContent className="w-40">
        {label && <DropdownMenuLabel>{label}</DropdownMenuLabel>}
        <DropdownMenuSeparator />
        {items.map((item, index) =>
          item.to ? (
            <Link to={item.to} key={index}>
              <DropdownMenuItem className={item.className || ""}>
                {item.label}
              </DropdownMenuItem>
            </Link>
          ) : (
            <DropdownMenuItem
              key={index}
              onClick={item.onClick}
              className={item.className || ""}
            >
              {item.label}
            </DropdownMenuItem>
          )
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default DropDown
