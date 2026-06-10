import { formatDistanceToNowStrict } from "date-fns";
import { CheckCheck, Loader2, TriangleAlert } from "lucide-react";
import { type ReactNode, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import {
  postApiNotificationsReadAll,
  useGetApiNotifications,
  type GetApiNotifications200,
} from "@/api/generated";
import { toast } from "sonner";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";

interface NotificationsSheetProps {
  children: ReactNode;
}

interface NotificationCardProps {
  notification: GetApiNotifications200["data"][0];
}

function NotificationCard({ notification }: NotificationCardProps) {
  return (
    <Card className=" hover:bg-muted/5 cursor-pointer">
      <CardContent>
        <div className="flex flex-col gap-1">
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              {notification.readAt === null && (
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              )}
              <span className="text-sm font-medium">{notification.title}</span>
            </div>

            <div>
              <span className="text-xs text-muted-foreground/45">
                {formatDistanceToNowStrict(notification.createdAt, {
                  addSuffix: true,
                })}
              </span>
            </div>
          </div>

          <span className="text-xs text-muted-foreground mt-2">
            {notification.content}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}

function NotificationsSheet({ children }: NotificationsSheetProps) {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const { data, error: apiError, isLoading } = useGetApiNotifications();

  const notifications = data?.data ?? [];

  const unreadNotifications = notifications.filter(
    (n) => n.readAt === null,
  ).length;

  async function handleMarkAllAsRead() {
    const { error } = await postApiNotificationsReadAll();

    if (error) {
      toast.error("Failed to mark all notifications as read. Try again later.");
    }
  }

  return (
    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
      <SheetTrigger asChild>{children}</SheetTrigger>

      <SheetContent side="right" className="overflow-auto">
        <SheetHeader>
          <SheetTitle>Notifications</SheetTitle>
          <SheetDescription>
            You have{" "}
            <span className="text-primary font-medium">
              {unreadNotifications}
            </span>{" "}
            unread notification(s)
          </SheetDescription>
        </SheetHeader>

        {apiError && (
          <Alert className="bg-rose-600/10 border-rose-500/20">
            <TriangleAlert />
            <AlertTitle>Request failed!</AlertTitle>
            <AlertDescription>
              <p>
                {apiError.response?.data.message ?? "Internal server error"}
              </p>
            </AlertDescription>
          </Alert>
        )}

        {isLoading ? (
          <Loader2 className="size-4 text-muted-foreground animate-spin" />
        ) : (
          <div className="flex flex-col px-4 gap-4">
            <div className="ml-auto">
              <Button
                onClick={handleMarkAllAsRead}
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-primary"
              >
                <CheckCheck className="size-4" />

                <span>Mark all as read</span>
              </Button>
            </div>

            {notifications.map((notification) => (
              <NotificationCard
                key={notification.id}
                notification={notification}
              />
            ))}
          </div>
        )}

        <SheetFooter>
          <Link to="#">
            <span className="text-xs text-primary font-medium hover:text-primary/85">
              View all notifications
            </span>
          </Link>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export { NotificationsSheet };
