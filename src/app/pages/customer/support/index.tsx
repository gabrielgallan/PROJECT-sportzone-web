import { PageTitle } from "@/components/page-title";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

export function SupportPage() {
    return (
        <>
            <PageTitle title="Support" />
            <main className="grid w-full mx-auto max-w-300 px-6 py-4">
                <header className="flex justify-between items-start">
					<div className="space-y-1">
						<h1 className="text-2xl font-semibold tracking-tight">Contact Us</h1>

						<span className="text-base text-muted-foreground">
							How can we help you ?
						</span>
					</div>

					<div>
						<Button variant="ghost" asChild className="text-sm">
							<Link to="/bookings">
								<ChevronLeft className="size-4" />
								Back
							</Link>
						</Button>
					</div>
				</header>

				<div className="grid">
					<form className="max-w-100">
						<Label htmlFor="email">Your Email</Label>
						<Input />
					</form>
				</div>
            </main>
        </>
    )
}