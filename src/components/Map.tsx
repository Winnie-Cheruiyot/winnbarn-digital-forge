import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface MapProps {
  mapboxToken: string;
}

const Map = ({ mapboxToken }: MapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    // Initialize map
    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      zoom: 12,
      center: [34.0908, 3.1190], // Lodwar, Turkana County coordinates
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
      }),
      'top-right'
    );

    // Add marker for Winnbarn Innovative Solutions location
    const marker = new mapboxgl.Marker({
      color: '#3b82f6'
    })
      .setLngLat([34.0908, 3.1190])
      .setPopup(
        new mapboxgl.Popup({ offset: 25 })
          .setHTML(`
            <div style="padding: 8px;">
              <h3 style="margin: 0 0 4px 0; font-weight: bold;">Winnbarn Innovative Solutions</h3>
              <p style="margin: 0; font-size: 14px; color: #666;">Lodwar, Turkana County, Kenya</p>
              <p style="margin: 4px 0 0 0; font-size: 12px;">Technology & Digital Solutions</p>
            </div>
          `)
      )
      .addTo(map.current);

    // Show popup by default
    marker.getPopup().addTo(map.current);

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, [mapboxToken]);

  return (
    <div className="relative w-full h-96">
      <div ref={mapContainer} className="absolute inset-0 rounded-lg shadow-lg" />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-background/10 rounded-lg" />
    </div>
  );
};

export default Map;