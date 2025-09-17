export function SocialProof() {
  return (
    <section className="self-stretch h-[150px] flex flex-col justify-center items-center gap-4 overflow-hidden">
      <div className="text-center text-gray-300 text-sm font-medium leading-tight">Marcas atendidas com excelência</div>
      <div className="self-stretch flex flex-wrap justify-center items-center gap-8 md:gap-12">
        {/* Porsche */}
        <div className="flex items-center justify-center">
          <div className="w-12 h-12 flex items-center justify-center">
            <img
              src="/marcas de carros/porsche.png"
              alt="Porsche - Marca atendida pela Shibata Premium Detail"
              className="w-12 h-12 object-contain filter brightness-0 invert"
            />
          </div>
        </div>
        
        {/* BMW */}
        <div className="flex items-center justify-center">
          <div className="w-12 h-12 flex items-center justify-center">
            <img
              src="/marcas de carros/bmw.png"
              alt="BMW - Marca atendida pela Shibata Premium Detail"
              className="w-12 h-12 object-contain filter brightness-0 invert"
            />
          </div>
        </div>
        
        {/* Mercedes-Benz */}
        <div className="flex items-center justify-center">
          <div className="w-12 h-12 flex items-center justify-center">
            <img
              src="/marcas de carros/mercedes.png"
              alt="Mercedes-Benz - Marca atendida pela Shibata Premium Detail"
              className="w-12 h-12 object-contain filter brightness-0 invert"
            />
          </div>
        </div>
        
        {/* Audi */}
        <div className="flex items-center justify-center">
          <div className="w-12 h-12 flex items-center justify-center">
            <img
              src="/marcas de carros/audi.png"
              alt="Audi - Marca atendida pela Shibata Premium Detail"
              className="w-12 h-12 object-contain filter brightness-0 invert"
            />
          </div>
        </div>
        
        {/* Volvo */}
        <div className="flex items-center justify-center">
          <div className="w-12 h-12 flex items-center justify-center">
            <img
              src="/marcas de carros/volvo.png"
              alt="Volvo - Marca atendida pela Shibata Premium Detail"
              className="w-12 h-12 object-contain filter brightness-0 invert"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
