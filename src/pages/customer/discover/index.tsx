import { PageTitle } from '@/components/page-title'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { LocateIcon, Search, X } from 'lucide-react'
import { CourtCard } from './court-card'
import { Pagination } from '@/components/pagination'

const courts = [
    {
        id: '1',
        name: 'Gallan Court',
        sport: 'Soccer',
        imageUrl: 'https://plus.unsplash.com/premium_photo-1664303119944-4cf5302bb701?q=80&w=840&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        location: 'Estrada do Campo Limpo, 6903',
        rating: 4.5,
        distance: '12'
    },
    {
        id: '2',
        name: 'Gallan Court',
        sport: 'Soccer',
        imageUrl: 'https://plus.unsplash.com/premium_photo-1684713510655-e6e31536168d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        location: 'Estrada do Campo Limpo, 6903',
        rating: 4.5,
        distance: '12'
    },
    {
        id: '3',
        name: 'Gallan Court',
        sport: 'Soccer',
        imageUrl: 'https://plus.unsplash.com/premium_photo-1663039984787-b11d7240f592?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        location: 'Estrada do Campo Limpo, 6903',
        rating: 4.5,
        distance: '12'
    },
    {
        id: '1',
        name: 'Gallan Court',
        sport: 'Soccer',
        imageUrl: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        location: 'Estrada do Campo Limpo, 6903',
        rating: 4.5,
        distance: '12'
    },
    {
        id: '2',
        name: 'Gallan Court',
        sport: 'Soccer',
        imageUrl: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        location: 'Estrada do Campo Limpo, 6903',
        rating: 4.5,
        distance: '12'
    },
    {
        id: '3',
        name: 'Gallan Court',
        sport: 'Soccer',
        imageUrl: 'https://images.unsplash.com/photo-1577471488278-16eec37ffcc2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        location: 'Estrada do Campo Limpo, 6903',
        rating: 4.5,
        distance: '12'
    },
]

export function Discover() {
    return (
        <>
            <PageTitle title="Discover" />
            <div className="flex flex-col p-6 w-fit gap-6">
                <h1 className='font-semibold text-2xl'>Discover Courts</h1>

                <form>
                    <div className='flex gap-2 items-center w-fit'>
                        <Label className='font-bold'>Filters</Label>

                        <Input placeholder='Court name' type='text'/>

                        <Input placeholder='Location' type='text'/>

                        <Select>
							<SelectTrigger className="h-8 w-45">
                                <SelectValue placeholder="Sport type" />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectLabel>Sport type</SelectLabel>
									<SelectItem value="all">All</SelectItem>
									<SelectItem value="pending">Soccer</SelectItem>
									<SelectItem value="canceled">Volley</SelectItem>
									<SelectItem value="processing">Basketball</SelectItem>
									<SelectItem value="delivering">Football</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>

                       <Button type="submit" variant="secondary">
                            <Search className="h-4 w-4" />
                        </Button>

                        <Button type="submit" variant="secondary">
                            <LocateIcon className="h-4 w-4" />
                        </Button>

                        <Button type="button" variant="ghost">
                            <X className="h-4 w-4 mr-2" />
                            <span className="text-sm">Clear filters</span>
                        </Button>
                    </div>
                </form>

                <div className='grid grid-cols-3 gap-6'>
                    {courts.map((court) => {
                        return (
                            <CourtCard key={court.id} {...court} />
                        )
                    })}
                </div>

                <footer>
                    <Pagination pageIndex={0} totalCount={courts.length} onPageChange={() => {}} perPage={6} />
                </footer>
            </div>
        </>
    )
}
