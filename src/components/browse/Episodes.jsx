import { IMG_PATH } from '../../constants/apiConstants'
import { useTvEpisodesQuery } from '../../reduxStore/apiSlice'
import { Card,Container,EpisodeNumber,Image,Name,Rating,Date,Overview ,Box} from '../../styles/browseStyle/episodesStyle'
import Skeleton,{SkeletonTheme} from 'react-loading-skeleton'
import { Headings } from '../../styles/globalStyles'



const Episodes = ({ id, seasonNumber }) => {
    const { data, isLoading } = useTvEpisodesQuery({ id, seasonNumber })

    return <>
        {!isLoading && data ? <>
            {data.episodes.length > 0 ? <Box>
                {data.episodes.filter((e) => { return e.still_path ? e : '' }).map((e, i) => {
                    return <Card key={i}>
                        <Container gap='1rem' alignCenter>
                            <EpisodeNumber>{e.episode_number}</EpisodeNumber>
                            <Image src={`${IMG_PATH}/${e.still_path}`} />
                            <div>
                                <Name>{e.name}</Name>
                                <div>
                                    <Rating>{`Rating ${Number(e.vote_average).toFixed(2)}`}</Rating>
                                    <Date>{e.air_date}</Date>
                                </div>
                                <Overview>{e.overview}</Overview>
                            </div>
                        </Container>
                    </Card>
                })}
            </Box>:<div style={{textAlign:'center',padding:'1rem 0'}}>
                    <Headings color='white' size='1.3rem' weight='500'>Sorry, We have no data for this Season</Headings>
                </div>}
        </> : <div style={{margin:'1rem 3rem'}}>
                <SkeletonTheme baseColor="#222" highlightColor="#333">
                    <Skeleton count={4} height={100} inline={true} style={{ marginBottom: '1rem' }} />
                </SkeletonTheme>
        </div> }
    </>
}

export default Episodes