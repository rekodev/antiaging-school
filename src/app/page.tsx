import Footer from '@/components/Footer';
import Header from '@/components/Header';
import CourseCard from '@/components/CourseCard';
import ReviewSwiper from '@/components/ReviewSwiper';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <Header />
      <section id='section1' className='bg-primary-dark pt-6 md:pt-0'>
        <div className='grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-11 lg:pt-28'>
          <div className='mr-auto place-self-center lg:col-span-7'>
            <h1 className='max-w-2xl mb-4 text-4xl text-dark font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl'>
              Kas yra <br />
              Antiaging School?
            </h1>
            <p className='max-w-2xl mt-6 mb-6 font-light text-dark lg:mt-8 lg:mb-8 md:text-lg lg:text-xl'>
              Ar <b className='font-bold'>ŽINOJOTE</b>, jog jūsų veidas
              prasideda nuo pėdų? O tai kad norint atsikratyti kabančio
              pagurklio reikia pradėti nuo dubens dugno ir randų korekcijos? Tai
              tik maža dalis to ko mokome anti-aging mokykloje.
            </p>
            <p className='max-w-2xl mb-6 font-light text-dark lg:mb-8 md:text-lg lg:text-xl'>
              Išmoksite pašalinti blokus kūne ir sumažinti asimetrija atliekant
              kaukolės kaulų korekciją. Antiaging mokykla tai makymai/ kursai
              kurie gimsta ir nuolat tobulinami vadovaujantis mano ir klientų
              patirtimi. Mokymai paremti{' '}
              <b className='font-bold'>REZULTATAIS</b>.
            </p>
            <p className='max-w-2xl mb-6 font-light text-dark lg:mb-8 md:text-lg lg:text-xl'>
              <b className=' font-bold'>Antiaging School</b> - tai mokykla, kur
              išmoksite senėjimo procesų prilėtinimo be botokso ir injekcijų.
            </p>
          </div>
          <div className='hidden lg:mt-0 lg:col-span-4 lg:flex lg:justify-self-end rounded-lg overflow-hidden'>
            <Image
              src='/cream.png'
              alt='hero image'
              className='w-full'
              height={900}
              width={600}
            />
          </div>
        </div>
      </section>

      <section id='section2' className='bg-primary-light'>
        <div className='max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6'>
          {/* Row */}
          <div className='items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16'>
            <Image
              className='hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex'
              src='/jelena.jpg'
              alt='feature image 2'
              height={900}
              width={720}
            />
            <div className='text-dark'>
              <h2 className='mb-6 text-4xl font-extrabold tracking-tight text-dark'>
                Sveiki, mano vardas Jelena
              </h2>
              <p className='mb-8 font-light lg:text-xl'>
                Jei trumpai apie mane, tai esu tas žmogus, kuris moko žmones
                laikyti liežuvį už dantų ir ten kur jam priklauso - ant gomurio.
              </p>

              <p className='mb-8 font-light lg:text-xl'>
                Esu horizontalių raktikaulių ambasadorė! Nes būtent{' '}
                <b className='font-bold'>RAKTIKAULIAI</b> nusako kokios buklės
                yra jūsų laikysena.
              </p>

              <p className='mb-8 font-light lg:text-xl'>
                Esu tarptautinė asmeninė trenerė. Tarptautinės faceplastikos ir
                osteopatijos akademijos Dubajuje abiturientė.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id='section3' className='bg-primary-dark'>
        <div className='max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6'>
          <div className='max-w-screen-md mx-auto mb-8 text-center lg:mb-12'>
            <h2 className='mb-4 text-3xl font-extrabold tracking-tight text-dark'>
              Kursai
            </h2>
            <p className='mb-5 font-light text-dark sm:text-xl '>
              Čia, Antiaging mokykloje, mes siūlome įvairius kursus, skirtus
              jūsų grožiui ir sveikatai. Mūsų programose rasite viską, nuo
              patarimų, kaip pasiekti plokščią pilvą, iki metodų, kaip pabrėžti
              gražius raktikaulius.
            </p>
          </div>
          <div className='space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0'>
            {/* Pricing Card */}
            <CourseCard
              title='Plokščias pilvas'
              description='Šis kursas skirtas tiems, kurie negali atsikratyti pilvo!'
              price={180}
              url={''}
              imgSrc='/pilvas.jpg'
            />
            {/* Pricing Card */}
            <CourseCard
              title='Gražūs raktikauliai'
              description='Atpalaiduosite įsitempusius raumenis ir grąžinsite raktikaulius į vietas'
              price={180}
              url={''}
              imgSrc='/raktikauliai.jpg'
            />
            {/* Pricing Card */}
            <CourseCard
              title='Konsultacija'
              description='Konsultacijos užtikrins nuoseklumą ir tęstinumą. Trukmė 5 sav.'
              price={180}
              url={''}
              imgSrc='/konsultacija.jpg'
            />
          </div>
        </div>
      </section>

      <section id='section4' className='bg-primary-light'>
        <div className='max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-12 lg:px-6'>
          <h2 className='mb-4 text-3xl font-extrabold tracking-tight text-dark'>
            Atsiliepimai
          </h2>
          <ReviewSwiper />
        </div>
      </section>

      <section id='section5' className='bg-primary-dark'>
        <div className='max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6'>
          <div className='max-w-screen-sm mx-auto text-center'>
            <h2 className='mb-4 text-3xl font-extrabold leading-tight tracking-tight text-dark'>
              Prisijunkite prie mūsų!
            </h2>
            <p className='mb-6 font-light text-gray-500 md:text-lg'>
              Prisijunkite prie Antiaging School jau šiandien
            </p>
            <a
              href='https://antiaging-school.mn.co/'
              className='text-dark bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none'
            >
              Antiaging School bendruomenė
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
