'use client'

import React from 'react'

const ScreenVideo: React.FC = () => {
  // Embed-ссылка Rutube
  const rutubeEmbedUrl = 'https://rutube.ru/play/embed/39ee2dbb19f1b431044d70ecaa8837ff'

  return (
    <section className="relative mx-auto w-full overflow-hidden py-24">
      {/* Заголовок */}
      <h2 className="mb-8 text-center text-3xl font-bold md:text-5xl">Видео о нас</h2>
      <div className="container relative h-[700px]">
        <iframe
          src={rutubeEmbedUrl}
          width="100%"
          height="100%"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
          className="absolute left-0 top-0 h-full w-full px-4 pt-12"
        ></iframe>
      </div>
    </section>
  )
}

export default ScreenVideo
