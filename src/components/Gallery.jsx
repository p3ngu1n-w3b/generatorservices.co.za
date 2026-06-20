import { useState } from 'react';
import GalleryModal from './GalleryModal';

const imageModules = import.meta.glob('../assets/gallery/*.{jpeg,jpg}', { eager: true });
const videoModules = import.meta.glob('../assets/gallery/*.mp4', { eager: true });

const getAllMediaItems = () => {
  const mediaItems = [];
  Object.values(imageModules).forEach((module) => {
    mediaItems.push({ src: module.default, type: 'image' });
  });
  Object.values(videoModules).forEach((module) => {
    mediaItems.push({ src: module.default, type: 'video' });
  });
  return mediaItems;
};

const bentoLayout = [
  'sm:col-span-2 sm:row-span-2',
  '',
  '',
  'sm:row-span-2',
  '',
  '',
];

function Gallery() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const allMediaItems = getAllMediaItems();
  const previewItems = allMediaItems.filter((i) => i.type === 'image').slice(0, 6);

  const openAt = (item) => {
    const fullIndex = allMediaItems.findIndex((m) => m.src === item.src);
    setSelectedIndex(fullIndex >= 0 ? fullIndex : 0);
    setIsModalOpen(true);
  };

  return (
    <>
      <section id="gallery" className="scroll-mt-24 bg-ink-800 py-24 md:py-32">
        <div className="container-wide">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <span className="reveal eyebrow">Real work</span>
              <h2 className="reveal display-title mt-5 text-4xl font-bold text-white md:text-6xl" data-reveal-delay="80">
                Out in the <span className="text-gradient-volt">field</span>
              </h2>
            </div>
            <p className="reveal max-w-sm text-white/60" data-reveal-delay="120">
              Genuine jobs from across the Garden Route, from rural repairs to
              commercial deliveries and installs.
            </p>
          </div>

          <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-4 sm:auto-rows-[200px] sm:grid-cols-3 lg:grid-cols-4">
            {previewItems.map((item, index) => (
              <button
                key={index}
                onClick={() => openAt(item)}
                className={`reveal group relative overflow-hidden rounded-2xl border border-white/10 ${bentoLayout[index] || ''}`}
                data-reveal="scale"
                data-reveal-delay={index * 70}
              >
                <img
                  src={item.src}
                  alt={`Generator work ${index + 1}`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-ink/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="absolute bottom-4 left-4 flex items-center gap-2 text-sm font-semibold text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <svg className="h-5 w-5 text-volt" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
                  </svg>
                  View
                </span>
              </button>
            ))}
          </div>

          <div className="reveal mt-10 text-center">
            <button
              onClick={() => {
                setSelectedIndex(0);
                setIsModalOpen(true);
              }}
              className="btn-ghost"
            >
              View all {allMediaItems.length} items
            </button>
          </div>
        </div>
      </section>

      <GalleryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        mediaItems={allMediaItems}
        initialIndex={selectedIndex}
      />
    </>
  );
}

export default Gallery;
