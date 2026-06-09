import React, { useEffect, useRef } from 'react';

const AdsterraAd = ({ adKey, width = 300, height = 250, label = "Sponsored Ad" }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    // If adKey is a placeholder or not provided, we do not inject the scripts
    if (!adKey || adKey.includes('YOUR_') || adKey === 'placeholder') return;

    if (!containerRef.current) return;

    // Avoid injecting multiple times
    const container = containerRef.current;
    if (container.children.length > 0) return;

    try {
      // Define options globally as required by Adsterra
      window.atOptions = {
        'key': adKey,
        'format': 'iframe',
        'height': height,
        'width': width,
        'params': {}
      };

      // Create configuration script element
      const configScript = document.createElement('script');
      configScript.type = 'text/javascript';
      configScript.innerHTML = `
        atOptions = {
          'key' : '${adKey}',
          'format' : 'iframe',
          'height' : ${height},
          'width' : ${width},
          'params' : {}
        };
      `;

      // Create invoke script element
      const loadScript = document.createElement('script');
      loadScript.type = 'text/javascript';
      loadScript.src = `//www.highperformanceformat.com/${adKey}/invoke.js`;

      container.appendChild(configScript);
      container.appendChild(loadScript);
    } catch (err) {
      console.error("Failed to load Adsterra script:", err);
    }

    return () => {
      // Cleanup on unmount
      if (container) {
        container.innerHTML = '';
      }
    };
  }, [adKey, width, height]);

  const isPlaceholder = !adKey || adKey.includes('YOUR_') || adKey === 'placeholder';

  if (isPlaceholder) {
    return (
      <div 
        className="adsterra-placeholder"
        style={{
          width: `${width}px`,
          height: `${height}px`,
          background: 'linear-gradient(135deg, rgba(24, 24, 27, 0.9) 0%, rgba(39, 39, 42, 0.8) 100%)',
          border: '1px dashed rgba(255, 255, 255, 0.15)',
          borderRadius: '12px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '16px',
          boxSizing: 'border-box',
          margin: '15px auto',
          color: '#e4e4e7',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          textAlign: 'center',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
          transition: 'all 0.3s ease',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Subtle glowing background effect */}
        <div style={{
          position: 'absolute',
          top: '-50%',
          left: '-50%',
          width: '200%',
          height: '200%',
          background: 'radial-gradient(circle, rgba(147, 51, 234, 0.1) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />

        <span style={{ 
          fontSize: '11px', 
          textTransform: 'uppercase', 
          letterSpacing: '1.5px', 
          color: '#a1a1aa',
          marginBottom: '8px',
          fontWeight: '600'
        }}>
          {label}
        </span>
        
        <div style={{
          fontSize: '14px',
          fontWeight: '700',
          color: '#3b82f6',
          marginBottom: '6px'
        }}>
          Adsterra Banner ({width}x{height})
        </div>

        <p style={{
          fontSize: '11px',
          color: '#71717a',
          margin: '0',
          lineHeight: '1.4',
          maxWidth: '220px'
        }}>
          Ready for integration. Replace the placeholder key with your actual Adsterra key.
        </p>
      </div>
    );
  }

  return (
    <div 
      className="adsterra-banner-container"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '15px auto',
        width: '100%'
      }}
    >
      <span style={{ 
        fontSize: '10px', 
        textTransform: 'uppercase', 
        letterSpacing: '1px', 
        color: '#8e8e93',
        marginBottom: '4px',
        textAlign: 'center',
        width: '100%'
      }}>
        {label}
      </span>
      <div 
        ref={containerRef} 
        style={{ 
          width: `${width}px`, 
          height: `${height}px`,
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }} 
      />
    </div>
  );
};

export default AdsterraAd;
