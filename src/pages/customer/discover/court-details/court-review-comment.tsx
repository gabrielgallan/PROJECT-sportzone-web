import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { formatDistanceToNow } from 'date-fns'
import type { CourtReview } from '@/types/court'
import { Star } from 'lucide-react'

interface CourtReviewCommentProps {
	review: CourtReview
}

export function RatingStars({ rating }: { rating: number }) {
	return (
		<div className="flex items-center gap-1">
			{Array.from({ length: 5 }).map((_, index) => {
				const filled = index < rating

				return (
					<Star
						key={index}
						className={filled ? 'size-4 fill-primary text-primary' : 'size-4 text-muted-foreground'}
					/>
				)
			})}
		</div>
	)
}

export function CourtReviewComment({ review }: CourtReviewCommentProps) {
	return (
		<Card>
			<CardHeader className="flex justify-between">
				<div className="flex items-center gap-2">
					<img src={review.userAvatarUrl} alt="" className="w-10 h-10 rounded-xl" />

					<div className="flex flex-col gap-1">
						<CardTitle>{review.userName}</CardTitle>
						<RatingStars rating={3} />
					</div>
				</div>

				<span className="mb-auto text-sm text-muted-foreground">
					{formatDistanceToNow(review.createdAt, { addSuffix: true })}
				</span>
			</CardHeader>
			<CardContent>
				<p>{review.comment}</p>
			</CardContent>
		</Card>
	)
}
