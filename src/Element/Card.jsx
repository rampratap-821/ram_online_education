import React from 'react';

const Card = () => {
  return (
    <div className="min-h-screen  flex items-center justify-center p-6">
      <div className="grid md:grid-cols-2 gap-6 max-w-7xl w-full">
        
        {/* Card 1 - Light Pinkish Red */}
        <div className="bg-[#FEECEC] rounded-xl p-8 flex flex-col md:flex-row items-center justify-between overflow-hidden relative min-h-[320px]">
          <div className="z-10 md:w-1/2">
            <h2 className="text-xl font-bold text-[#333] leading-tight mb-6">
              Build professional-looking pages without coding with <span className="text-[#E76F6F]">Thim Elementor Kit</span>
            </h2>
            <button className="bg-[#FFB606] hover:bg-[#e5a405] text-white font-bold py-3 px-8 rounded-md transition duration-300 uppercase text-sm tracking-wider">
              Explore Now
            </button>
          </div>
          <div className="md:w-1/2 flex justify-end mt-6 md:mt-0">
            <img
              src="https://eduma.thimpress.com/wp-content/uploads/2025/07/docs-thim-elementor-kit.png"
              alt="elementor kit"
              className="w-full max-w-[280px] object-contain"
            />
          </div>
        </div>

        {/* Card 2 - Light Green */}
        <div className="bg-[#E2F5E9] rounded-xl p-8 flex flex-col md:flex-row items-center justify-between overflow-hidden relative min-h-[320px]">
          <div className="z-10 md:w-1/2">
            <h2 className="text-xl font-bold text-[#333] leading-tight mb-6">
              Step-by-step guide to building pages — no coding needed
            </h2>
            <button className="bg-[#FFB606] hover:bg-[#e5a405] text-white font-bold py-3 px-8 rounded-md transition duration-300 uppercase text-sm tracking-wider">
              View Documentation
            </button>
          </div>
          <div className="md:w-1/2 flex justify-end mt-6 md:mt-0">
            <img
              src="https://eduma.thimpress.com/wp-content/uploads/2025/07/docs-elements.png"
              alt="documentation"
              className="w-full max-w-[280px] object-contain"
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Card;