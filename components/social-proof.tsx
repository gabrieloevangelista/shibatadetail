export function SocialProof() {
  return (
    <section className="self-stretch h-[150px] flex flex-col justify-center items-center gap-4 overflow-hidden">
      <div className="text-center text-gray-300 text-sm font-medium leading-tight">Marcas atendidas com excelência</div>
      <div className="self-stretch flex flex-nowrap justify-center items-center gap-3 sm:gap-6 md:gap-12 px-4">
        {/* Porsche */}
        <div className="flex items-center justify-center">
          <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center">
            <img
              src="/marcas de carros/porsche.png"
              alt="Porsche - Marca atendida pela Shibata Premium Detail"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain filter brightness-0 invert"
            />
          </div>
        </div>
        
        {/* BMW */}
        <div className="flex items-center justify-center">
          <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center">
            <img
              src="/marcas de carros/bmw.png"
              alt="BMW - Marca atendida pela Shibata Premium Detail"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain filter brightness-0 invert"
            />
          </div>
        </div>
        
        {/* Mercedes-Benz */}
        <div className="flex items-center justify-center">
          <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center">
            <img
              src="/marcas de carros/mercedes.png"
              alt="Mercedes-Benz - Marca atendida pela Shibata Premium Detail"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain filter brightness-0 invert"
            />
          </div>
        </div>
        
        {/* Audi */}
        <div className="flex items-center justify-center">
          <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center">
            <img
              src="/marcas de carros/audi.png"
              alt="Audi - Marca atendida pela Shibata Premium Detail"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain filter brightness-0 invert"
            />
          </div>
        </div>
        
        {/* Volvo */}
        <div className="flex items-center justify-center">
          <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center">
            <img
              src="/marcas de carros/volvo.png"
              alt="Volvo - Marca atendida pela Shibata Premium Detail"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain filter brightness-0 invert"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
