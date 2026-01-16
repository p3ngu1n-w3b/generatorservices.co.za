import { useState } from 'react';
import GalleryModal from './GalleryModal';

// Import all gallery images and videos using Vite's glob import
const imageModules = import.meta.glob('../assets/gallery/*.{jpeg,jpg}', { eager: true });
const videoModules = import.meta.glob('../assets/gallery/*.mp4', { eager: true });

// Convert modules to array of media items
const getAllMediaItems = () => {
  const mediaItems = [];

  // Add images
  Object.values(imageModules).forEach((module) => {
    mediaItems.push({
      src: module.default,
      type: 'image',
    });
  });

  // Add videos
  Object.values(videoModules).forEach((module) => {
    mediaItems.push({
      src: module.default,
      type: 'video',
    });
  });

  return mediaItems;
};

function Gallery() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const allMediaItems = getAllMediaItems();
  
  // Get first 4 items for preview (prioritize images)
  const previewItems = allMediaItems
    .filter(item => item.type === 'image')
    .slice(0, 4);

  // If we don't have 4 images, fill with videos
  if (previewItems.length < 4) {
    const videos = allMediaItems
      .filter(item => item.type === 'video')
      .slice(0, 4 - previewItems.length);
    previewItems.push(...videos);
  }

  const handleImageClick = (index) => {
    // Find the index of this item in the full media array
    const clickedItem = previewItems[index];
    const fullIndex = allMediaItems.findIndex(
      item => item.src === clickedItem.src
    );
    setSelectedIndex(fullIndex >= 0 ? fullIndex : 0);
    setIsModalOpen(true);
  };

  const handleViewAllClick = () => {
    setSelectedIndex(0);
    setIsModalOpen(true);
  };

  return (
    <>
      <section id="gallery" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Gallery
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Take a look at our work, services, and the quality generators we offer.
            </p>
          </div>

          {/* Preview grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {previewItems.map((item, index) => (
              <div
                key={index}
                className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
                onClick={() => handleImageClick(index)}
              >
                {item.type === 'video' ? (
                  <video
                    src={item.src}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <img
                    src={item.src}
                    alt={`Gallery preview ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                )}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {/* View all button */}
          <div className="text-center">
            <button
              onClick={handleViewAllClick}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold shadow-lg"
            >
              View All ({allMediaItems.length} items)
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Modal */}
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
