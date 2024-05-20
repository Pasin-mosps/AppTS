import getCurrentUser from './actions/getCurrentUser';
import getListing from './actions/getListing';
import ClientOnly from './components/ClientOnly'
import Container from './components/Container'
import ListingCard from './components/listing/ListingCard';
import EmptyState from './components/navbar/EmptyState';


export default async function Home() {
  const listings = await getListing()
  const currentUser = await getCurrentUser()

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState showReset/>
      </ClientOnly>
    )
  }
  return (
    <ClientOnly>
        <Container>
          <div className='pt-24 grid grids-cols-1 sm:grid-cols-2 md:grids-cols-3 
          lg:grids-cols-4 xl:grids-cols-5 2xl:grids-cols-6 gap-8'>
          </div>
          {listings.map((listing) => {
            return (
              <ListingCard
                currentUser={currentUser}
                key={listing.id} 
                data={listing}
              />
            )
          })}
        </Container>
    </ClientOnly>

  );
}
