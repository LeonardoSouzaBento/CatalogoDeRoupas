import { ZapFixedButton } from '@/components/ui/index';
import { Hero, Logo, Plans, Process, Questions } from './sections';
import { SectionDescription, SectionHeader, SectionTitle } from './ui';

const wrapperCss = `xl:mb-7 xl:w-auto xl:h-178 xl:m-auto pt-4 xl:flex 
xl:gap-6 xl:px-[calc((100%-80rem)/2)] xl:items-start xl:justify-center 
[&_section]:xl:w-[calc(100%-0.875rem)] [&_section]:xl:h-136.5`;

const LandingPageCore = () => {
  return (
    <div>
      <Logo />
      <main className="bg-linear-to-t from-body-background via-white to-white z-0">
        <section
          className={`h-auto w-full pt-[4.5em] p-8 pb-0 rounded-none 
          md:px-8 lg:px-10 bg-linear-to-br from-female to-male`}>
          <Hero />
        </section>
        <div className={wrapperCss}>
          <section>
            <SectionHeader className='border-none'>
              <SectionTitle>Porque ter um catálogo?</SectionTitle>
              <SectionDescription>Ajudamos você a vender mais</SectionDescription>
            </SectionHeader>
            <Questions />
          </section>
          <section>
            <SectionHeader>
              <SectionTitle>Como Funciona?</SectionTitle>
              <SectionDescription>É simples</SectionDescription>
            </SectionHeader>
            <Process />
          </section>
        </div>
        <section className="pb-10">
          <SectionHeader>
            <SectionTitle>Quanto Custa?</SectionTitle>
            <SectionDescription>Temos preços acessíveis</SectionDescription>
          </SectionHeader>
          <Plans />
        </section>
      </main>
      <ZapFixedButton myNumber={true} />
    </div>
  );
};

export default LandingPageCore;
