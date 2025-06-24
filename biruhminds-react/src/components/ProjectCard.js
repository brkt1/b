import React from 'react';

const ProjectCard = ({
  image,
  alt,
  partners,
  title,
  location,
  description,
  readMore,
  expanded,
  onToggle,
  readMoreKey,
  extraContent,
}) => (
  <div className="project-section bg-white rounded-xl shadow-lg gradient-border mb-20">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div className="relative rounded-l-xl overflow-hidden flex items-center justify-center min-h-[400px] bg-gray-100">
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover rounded-xl border-2 border-dashed"
          style={{ minHeight: '400px', maxHeight: '400px' }}
          onError={e => { e.target.onerror = null; e.target.src = '/image/Biruhminds_logo.png'; }}
        />
      </div>
      <div className="p-8">
        {partners && <div className="text-sm text-primary font-medium mb-2">{partners}</div>}
        <h3 className="text-2xl font-bold text-dark mb-4">{title}</h3>
        {location && <p className="text-gray-600 mb-2"><strong>Location:</strong> {location}</p>}
        <p className="text-gray-600 mb-6">{description}</p>
        {expanded && extraContent}
        {readMore && (
          <button
            className={`read-more-btn inline-flex items-center text-primary font-medium hover:text-secondary mt-4 ${expanded ? 'expanded' : ''}`}
            onClick={() => onToggle(readMoreKey)}
          >
            {expanded ? 'Read Less' : 'Read More'}
          </button>
        )}
      </div>
    </div>
  </div>
);

export default ProjectCard;
