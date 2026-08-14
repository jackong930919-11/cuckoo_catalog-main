import React from 'react';
import { Play, Youtube } from 'lucide-react';

export const HomeVideoShowcase: React.FC = () => {
  const videos = [
    {
      position: 'Left',
      id: 'mdxDPncZlps',
      url: 'https://youtu.be/mdxDPncZlps',
      title: 'CUCKOO Brand & Innovation Showcase',
    },
    {
      position: 'Middle',
      id: 'Lb2wIbfDSvM',
      url: 'https://youtu.be/Lb2wIbfDSvM',
      title: 'CUCKOO Beyond Standards Experience',
    },
    {
      position: 'Right',
      id: 'Uzo0z39veaM',
      url: 'https://youtu.be/Uzo0z39veaM',
      title: 'CUCKOO Healthy Home Solutions',
    },
  ];

  return (
    <section className="w-full bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 my-8 border-y border-slate-800">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Section Header */}
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
            Discover CUCKOO Healthy Home Innovations
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
            Watch our latest featured videos to explore CUCKOO’s healthy appliance technologies and brand stories.
          </p>
        </div>

        {/* 3 Videos Grid: Left, Middle, Right */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-xl flex flex-col hover:border-slate-700 transition-all group"
            >
              {/* Video Title Header */}
              <div className="p-3 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <div className="p-1.5 rounded-lg bg-rose-950 border border-rose-800/60 text-rose-400 shrink-0">
                    <Play className="w-3.5 h-3.5 fill-rose-400" />
                  </div>
                  <span className="text-xs font-black text-slate-200 truncate">
                    {video.title}
                  </span>
                </div>
              </div>

              {/* YouTube iFrame Container */}
              <div className="relative w-full aspect-video bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              {/* Footer / Direct Link */}
              <div className="p-3 bg-slate-900/40 border-t border-slate-800/80 flex items-center justify-between mt-auto">
                <span className="text-[11px] text-slate-400 font-medium">CUCKOO Official</span>
                <a
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-bold text-rose-400 hover:text-rose-300 flex items-center gap-1 transition-colors"
                >
                  <span>Watch on YouTube</span>
                  <Youtube className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
