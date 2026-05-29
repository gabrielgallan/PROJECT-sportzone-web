import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { formatDistanceToNow } from 'date-fns'
import type { CourtReview } from '@/types/court'
import { RatingStars } from './rating-stars'

interface CourtReviewCommentProps {
	review: CourtReview
}

export function CourtReviewComment({ review }: CourtReviewCommentProps) {
	return (
		<Card>
			<CardHeader className="flex justify-between">
				<div className="flex items-center gap-2">
					<img src={review.userAvatarUrl} alt="" className="w-10 h-10 rounded-xl" />

					<div className="flex flex-col gap-1">
						<CardTitle>{review.userName}</CardTitle>
						<RatingStars value={3} readOnly />
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
