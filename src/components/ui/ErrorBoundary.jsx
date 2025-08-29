import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error for debugging
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    // Call onError callback if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      // Use custom fallback if provided, otherwise use default
      if (this.props.fallback) {
        return this.props.fallback;
      }
      
      // Default fallback UI for IconCloud specifically
      return (
        <div 
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '400px',
            paddingTop: 40,
          }}
        >
          <div className="text-zinc-500 dark:text-zinc-400 text-center">
            <div className="mb-2">⚠️</div>
            <div className="text-sm">Skills visualization temporarily unavailable</div>
            {process.env.NODE_ENV === 'development' && (
              <details className="mt-2 text-xs">
                <summary className="cursor-pointer">Error details</summary>
                <pre className="mt-1 text-left">{this.state.error?.message}</pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;