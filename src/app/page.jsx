import Header from '@/components/AnimeList/Header';
import AnimeList from '../components/AnimeList';
import getAnimeResponse, { getNestedAnimeResponse, reproduce } from '../libs/api-libs';

export default async function Page() {
  const topAnime = await getAnimeResponse('top/anime', 'limit=8');
  let recomendedAnime = await getNestedAnimeResponse('recommendations/anime', 'entry');
  recomendedAnime = reproduce(recomendedAnime, 4);

  return (
    <>
      {/* anime populer */}
      <section>
        <Header title="Paling Populer" linkTitle="Lihat Semua" linkHref={'/populer'} />
        <AnimeList api={topAnime} />
      </section>

      {/* anime recomended */}
      <section className='pt-3 mb-7'>
        <Header title="Rekomendasi" />
        <AnimeList api={recomendedAnime} />
      </section>
    </>
  );
}
