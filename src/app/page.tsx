
export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center w-screen h-screen bg-background'>
      <h1 className='text-4xl font-bold mb-12 text-foreground'>Samuel Ibarra</h1>
      
      <section className='max-w-4xl'>
        <h2 className='text-2xl font-semibold mb-8 text-center text-primary'>Color palette test</h2>
        
        <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
          {/* Colores principales */}
          <li>
            <span className='h-16 w-full rounded-t-lg bg-primary flex items-center justify-center text-white font-medium'>Primary</span>
            <span className='h-8 w-full bg-primary-light flex items-center justify-center text-xs'>Light</span>
            <span className='h-8 w-full rounded-b-lg bg-primary-dark flex items-center justify-center text-white text-xs'>Dark</span>
          </li>
          
          <li>
            <span className='h-16 w-full rounded-t-lg bg-secondary flex items-center justify-center text-foreground font-medium'>Secondary</span>
            <span className='h-8 w-full bg-secondary-light flex items-center justify-center text-xs'>Light</span>
            <span className='h-8 w-full rounded-b-lg bg-secondary-dark flex items-center justify-center text-white text-xs'>Dark</span>
          </li>
          
          <li>
            <span className='h-16 w-full rounded-t-lg bg-accent flex items-center justify-center text-white font-medium'>Accent</span>
            <span className='h-8 w-full bg-accent-light flex items-center justify-center text-xs'>Light</span>
            <span className='h-8 w-full rounded-b-lg bg-accent-dark flex items-center justify-center text-white text-xs'>Dark</span>
          </li>
          
          <li>
            <span className='h-16 w-full rounded-t-lg bg-success flex items-center justify-center text-white font-medium'>Success</span>
            <span className='h-8 w-full bg-success/50 flex items-center justify-center text-xs'>50% Opacity</span>
            <span className='h-8 w-full rounded-b-lg bg-success/20 flex items-center justify-center text-xs'>20% Opacity</span>
          </li>
          
          {/* Segunda fila */}
          <li>
            <span className='h-16 w-full rounded-t-lg bg-warning flex items-center justify-center text-foreground font-medium'>Warning</span>
            <span className='h-8 w-full bg-warning/50 flex items-center justify-center text-xs'>50% Opacity</span>
            <span className='h-8 w-full rounded-b-lg bg-warning/20 flex items-center justify-center text-xs'>20% Opacity</span>
          </li>
          
          <li>
            <span className='h-16 w-full rounded-t-lg bg-danger flex items-center justify-center text-white font-medium'>Danger</span>
            <span className='h-8 w-full bg-danger/50 flex items-center justify-center text-xs'>50% Opacity</span>
            <span className='h-8 w-full rounded-b-lg bg-danger/20 flex items-center justify-center text-xs'>20% Opacity</span>
          </li>
          
          <li>
            <span className='h-16 w-full rounded-t-lg bg-info flex items-center justify-center text-white font-medium'>Info</span>
            <span className='h-8 w-full bg-info/50 flex items-center justify-center text-xs'>50% Opacity</span>
            <span className='h-8 w-full rounded-b-lg bg-info/20 flex items-center justify-center text-xs'>20% Opacity</span>
          </li>
          
          <li>
            <span className='h-16 w-full rounded-t-lg bg-neutral flex items-center justify-center text-white font-medium'>Neutral</span>
            <span className='h-8 w-full bg-neutral/50 flex items-center justify-center text-white text-xs'>50% Opacity</span>
            <span className='h-8 w-full rounded-b-lg bg-neutral/20 flex items-center justify-center text-xs'>20% Opacity</span>
          </li>
        </ul>
        
        <p className='mt-10 text-center text-sm text-neutral'>
           paleta de colores personalizada pruebaa probando probando 123
        </p>
      </section>
    </main>
  );
}