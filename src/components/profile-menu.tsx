import Cookies from "js-cookie";
import { ChevronDown, LogOut, Settings, User as UserIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import type { GetApiProfile200 } from "@/api/generated";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function getInitialsFromName(name: string): string {
  return name
    .trim()
    .split(" ")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase())
    .slice(0, 2)
    .join("");
}

export function getInitialsFromEmail(email: string): string {
  return email
    .split("@")[0]
    .replace(/[._-]+/g, " ")
    .trim()
    .split(" ")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase())
    .slice(0, 2)
    .join("");
}

interface ProfileMenuProps {
  user: GetApiProfile200["user"];
  organizationLayout?: boolean;
}

export function ProfileMenu({
  user,
  organizationLayout = false,
}: ProfileMenuProps) {
  const navigate = useNavigate();

  const initials = user.name
    ? getInitialsFromName(user.name)
    : getInitialsFromEmail(user.email);

  function handleSignOut() {
    Cookies.remove("access-token");

    navigate("/auth/sign-in");
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 rounded-md outline-none transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring">
        <Avatar className="size-8">
          {user.avatarUrl && <AvatarImage src={user.avatarUrl} alt="" />}
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>

        <div className="hidden md:flex flex-col items-start">
          <span className="text-xs font-medium">{user.name}</span>
          <span className="text-xs  text-muted-foreground">{user.email}</span>
        </div>

        <ChevronDown className="size-4 text-muted-foreground ml-2" />
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-52">
        <div className="md:hidden">
          <div className="px-2 py-1.5">
            <p className="truncate text-sm font-medium">{user.name}</p>
            <p className="truncate text-xs text-muted-foreground">
              {user.email}
            </p>
          </div>

          <DropdownMenuSeparator />
        </div>

        {organizationLayout && (
          <>
            <DropdownMenuItem asChild>
              <a href="/">
                <UserIcon className="mr-2 size-4" />
                Customer Area
              </a>
            </DropdownMenuItem>

            <DropdownMenuItem asChild>
              <a href="settings">
                <Settings className="mr-2 size-4" />
                Profile Settings
              </a>
            </DropdownMenuItem>

            <DropdownMenuSeparator />
          </>
        )}

        <DropdownMenuItem onClick={handleSignOut}>
          <LogOut className="mr-2 size-4" />
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
