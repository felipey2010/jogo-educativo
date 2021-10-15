import React from "react";
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      count: 0,
      loadNextError: false,
      threeDots: "",
    };
    this.showThreeDots = this.showThreeDots.bind(this);
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    const info = {
      warning: error,
      info: errorInfo,
    };
    console.log(info);
  }

  showThreeDots() {
    if (this.state.count < 3) {
      this.setState(({ threeDots }) => ({
        threeDots: threeDots + ".",
      }));
      setTimeout(() => {
        this.setState(({ count }) => ({
          count: count + 1,
        }));
        this.showThreeDots();
      }, 2000);
    } else {
      // this.state.loadNextError = true;
      this.setState(() => ({
        loadNextError: true,
      }));
      return;
    }
  }

  componentDidMount() {
    this.showThreeDots();
  }

  render() {
    if (this.state.hasError) {
      if (this.state.loadNextError) {
        return (
          <div className="error-loading">
            Sem internet. Por favor, verifique a sua conexão de internet
          </div>
        );
      }
      return (
        <div className="error-loading">
          Algo deu errado. Por favor, aguarde um pouco{this.state.threeDots}
        </div>
      );
    }

    return this.props.children;
  }
}
export default ErrorBoundary;
